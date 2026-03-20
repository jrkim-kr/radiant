# Contributing to Radiant

Thanks for your interest in contributing to Radiant! This guide covers everything you need to create and submit a new shader.

## Quick Start

```bash
git clone https://github.com/nicebill/radiant.git
cd radiant
npm install
npm run dev
```

The dev server runs at `http://localhost:5174`.

## Project Structure

```
static/*.html                   — Standalone shader files (no build step)
src/lib/shaders.ts              — Shader catalog (ALL entries)
src/lib/color-schemes.ts        — 6 color scheme definitions
src/lib/inspiration-intros.ts   — Poetic intros for inspiration pages
src/lib/inspiration-palettes.ts — Color palettes for inspiration pages
scripts/generate-previews.mjs   — Preview sprite sheet generator
static/previews/*.webp          — Generated preview sprites
```

## Creating a New Shader

Every shader is a **single, self-contained HTML file** in `static/`. No build step, no external dependencies. Follow all steps below — a shader isn't complete until each one is done.

### Step 1: Create the HTML File

Create `static/your-shader-name.html` with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Shader Name</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: #0a0a0a; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(200, 149, 108, 0.5);
    z-index: 10;
    pointer-events: none;
    user-select: none;
  }
</style>
</head>
<body>
<div class="label">Your Shader Name</div>
<canvas id="canvas"></canvas>
<script>
(function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d'); // or use WebGL
  var dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2
  var W, H;
  var running = true;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  window.addEventListener('resize', resize);
  resize();

  // ── Mouse/touch interaction ──
  var mouse = { x: -9999, y: -9999, active: false };

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });
  window.addEventListener('mouseleave', function() {
    mouse.active = false;
  });
  canvas.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var t = e.touches[0];
    mouse.x = t.clientX;
    mouse.y = t.clientY;
    mouse.active = true;
  }, { passive: false });
  canvas.addEventListener('touchend', function() {
    mouse.active = false;
  });

  // ── Tunable parameters ──
  var PARAM_A = 1.0;
  var PARAM_B = 0.5;

  // ── Animation loop ──
  function draw() {
    if (!running) { requestAnimationFrame(draw); return; }

    // Your rendering code here
    // Use mouse.x, mouse.y, mouse.active for interaction

    requestAnimationFrame(draw);
  }

  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H);
  requestAnimationFrame(draw);

  // ── Visibility pause ──
  document.addEventListener('visibilitychange', function() {
    running = !document.hidden;
  });

  // ── Parameter API ──
  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'PARAM_A': PARAM_A = e.data.value; break;
        case 'PARAM_B': PARAM_B = e.data.value; break;
      }
    }
  });
})();
</script>
</body>
</html>
```

Key requirements:
- **Background**: Always `#0a0a0a`
- **Label**: Fixed `.label` div with the shader name, using the exact CSS above
- **DPR**: Use `Math.min(window.devicePixelRatio || 1, 2)` — cap at 2 for performance
- **IIFE**: Wrap all JS in an immediately-invoked function expression
- **No dependencies**: Everything is self-contained. Inline any noise functions or utilities you need

### Step 2: Mouse/Touch Interaction

Every shader must respond meaningfully to user input. The interaction should visibly affect the visual — not just cosmetically.

- `mousemove` / `touchmove` for cursor tracking
- `mouseleave` / `touchend` to reset state
- Use `{ passive: false }` on touch listeners and call `e.preventDefault()`

Common patterns: repel/attract particles, distort geometry, shift focal points, apply forces.

### Step 3: Tunable Parameters

Expose **2 or more** parameters controllable via `postMessage`. The gallery uses this API to let users adjust shaders in real time through sliders on the detail page.

```js
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'param') {
    switch (e.data.name) {
      case 'SPEED': SPEED = e.data.value; break;
      case 'SCALE': SCALE = e.data.value; break;
    }
  }
});
```

Choose parameters that meaningfully change the visual character (speed, density, complexity, intensity) — not internal implementation details.

### Step 4: Color Scheme Compatibility

The gallery applies color schemes via CSS `filter` on the iframe containing your shader:

| Scheme | Filter |
|--------|--------|
| **Amber** (default) | `none` — native colors |
| **Mono** | `grayscale(1)` |
| **Blue** | `hue-rotate(175deg)` |
| **Rose** | `hue-rotate(300deg) saturate(1.1)` |
| **Emerald** | `hue-rotate(90deg) saturate(1.2)` |
| **Arctic** | `hue-rotate(180deg) saturate(0.5) brightness(1.1)` |

Since schemes use `hue-rotate`, **design your native colors in warm/amber tones** (golds, corals, ambers — around `rgba(200, 149, 108, ...)`). This ensures all six schemes produce distinct, appealing results.

If your shader looks best in a non-amber scheme, you can set `defaultScheme` in the catalog entry.

### Step 5: Visibility Pause

Pause the animation when the tab is hidden to save CPU:

```js
document.addEventListener('visibilitychange', function() {
  running = !document.hidden;
});
```

### Step 6: Register in the Catalog

Add an entry to the `shaders` array in `src/lib/shaders.ts`:

```ts
{
  id: 'your-shader-name',          // URL-safe kebab-case, matches filename
  file: 'your-shader-name.html',   // filename in static/
  title: 'Your Shader Name',       // display name
  desc: 'One-line description.',   // concise, evocative
  tags: ['fill', 'noise'],         // see tag list below
  technique: 'canvas-2d',          // 'canvas-2d' or 'webgl'
  params: [
    { name: 'PARAM_A', label: 'Speed', min: 0.1, max: 2.0, step: 0.1, default: 1.0 },
    { name: 'PARAM_B', label: 'Density', min: 0.3, max: 2.0, step: 0.1, default: 1.0 }
  ]
}
```

**Available tags**: `fill`, `object`, `particles`, `physics`, `noise`, `organic`, `geometric`

- `fill` — covers the full canvas
- `object` — renders a distinct focal element
- `particles` — uses a particle system
- `physics` — simulates physical forces
- `noise` — driven by noise functions
- `organic` — fluid, natural forms
- `geometric` — hard edges, mathematical shapes

**Optional fields**:
- `inspiration: 'Celebrity Name'` — if inspired by a public figure
- `defaultScheme: 'blue'` — override the default color scheme
- `credit: 'Inspired by ...'` / `creditUrl: '...'` — attribution for techniques
- `heroConfig` — custom layout params for the homepage hero

### Step 7: Add Inspiration Metadata (If Applicable)

If your shader is inspired by a celebrity **not already in the project**, add entries to:

**`src/lib/inspiration-intros.ts`** — A 3-4 sentence poetic description of their artistic identity:
```ts
'your-celebrity-slug': 'Poetic description of their artistic identity, aesthetic sensibility, and associated color palette.',
```

**`src/lib/inspiration-palettes.ts`** — Colors for the inspiration gallery page:
```ts
'your-celebrity-slug': {
  primary: '#hexcolor',           // card border tint
  colors: ['#hex1', '#hex2']      // 2-4 hex colors for ambient glow
},
```

### Step 8: Generate Preview Sprites

Run the preview generator (make sure the dev server is **not** running on the same port):

```bash
node scripts/generate-previews.mjs --only=your-shader-name
```

This creates `static/previews/your-shader-name.webp` — a vertical sprite sheet with 6 frames (one per color scheme) used for gallery card thumbnails.

### Step 9: Verify

Before submitting:

- [ ] Opens correctly at `http://localhost:5174/shader/your-shader-name`
- [ ] All parameter sliders work on the detail page
- [ ] Mouse interaction is visible and meaningful
- [ ] Touch interaction works on mobile
- [ ] Runs at **60fps** on a normal laptop (check DevTools Performance tab)
- [ ] Color scheme switching produces good results across all 6 schemes
- [ ] Preview sprite shows correctly in the gallery grid
- [ ] `visibilitychange` pauses the animation when the tab is hidden
- [ ] No console errors or warnings

## Quality Standards

### Performance

**60fps is non-negotiable.** If a technique can't hit 60fps on a normal laptop, use a different technique.

- Cap DPR at 2 — high-DPI screens don't need 3x rendering
- Minimize allocations in the animation loop
- Use `requestAnimationFrame`, never `setInterval`
- For WebGL: keep shader complexity reasonable, minimize draw calls
- For Canvas 2D: batch operations, avoid excessive path recreation

### Visual Quality

- Shaders should be **beautiful, mesmerizing, and reusable** — designed to drop into any website as a background, hero section, or design asset
- One stunning shader beats five mediocre ones
- Every shader should have a clear visual identity

### Reusability

Shaders are designed to be embedded anywhere. They should:
- Work at any aspect ratio
- Handle window resize gracefully
- Look good without interaction (interaction enhances, doesn't define)
- Have no hard-coded dimensions

## Rendering Techniques

**Canvas 2D** (`technique: 'canvas-2d'`): Good for particle systems, 2D geometry, and effects that benefit from immediate-mode drawing. Easier to work with for most contributors.

**WebGL** (`technique: 'webgl'`): Better for fragment shader effects (noise, fluid, raymarching), GPU-accelerated rendering, and effects that need per-pixel computation. Higher performance ceiling but more complex.

Choose the technique that best serves your visual. If you're unsure, Canvas 2D is a safe default.

## Submitting Your Shader

1. Fork the repo and create a branch: `git checkout -b shader/your-shader-name`
2. Follow all steps above
3. Open a PR with:
   - A brief description of the visual concept
   - A screenshot or screen recording
   - Performance notes (technique used, any known limitations)

We'll review for visual quality, performance, code quality, and interaction design.

## Code Style

- Use `var` in shader HTML files (they're standalone, not transpiled)
- Wrap everything in an IIFE
- Keep code readable — comment non-obvious math or algorithms
- Inline any external utilities (noise functions, easing, etc.)
- No external CDN links or dependencies

## License

Radiant is MIT licensed. By contributing, you agree that your contributions will be licensed under the same terms.
