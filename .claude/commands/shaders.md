# Shader Reimagination for $ARGUMENTS

You are reimagining the shader(s) inspired by **$ARGUMENTS** in this project.

## Context

Read `src/lib/shaders.ts` to find the existing shader entry (or entries) for this celebrity. Read the corresponding HTML file(s) in `static/` to understand what currently exists.

Also read 3-4 of the strongest existing shaders for reference on quality bar. Here are the standout shaders that represent the quality we're aiming for — read at least 2-3 of these HTML files to calibrate:

- **flow-field**: Simple physics-based particle trails, but incredibly elegant and beautiful (Canvas 2D)
- **strange-attractor**: Great standalone 3D object, physics-based, elegant (Canvas 2D)
- **sequin-wave**: Beautiful inspired texture effect — sophisticated, creative (WebGL)
- **voltage-arc**: Creative, expressive electric plasma (WebGL)
- **rain-on-glass / rain-umbrella**: Ultra-realistic, sophisticated, multi-layered with procedural city background (Hybrid: Canvas 2D physics → WebGL refraction)
- **event-horizon**: Complicated, ultra-realistic black hole with gravitational lensing (WebGL)
- **crystal-lattice**: Ultra-realistic 3D procedural crystal growth (WebGL)
- **laser-precision**: Insanely cool special effects with spark particles (Canvas 2D + offscreen buffers)
- **torn-paper**: Ultra-realistic paper tearing with rich plasma background (WebGL)
- **gilded-fracture**: Multi-scale kintsugi cracks with molten gold, domain warping, dust particles (WebGL)

## Design Philosophy — CRITICAL

### Rule 1: Abstract over literal
Do NOT simulate literal real-world objects (bottles, fire, glass, rust, steel wool). They always look fake. Instead, capture the *mood/texture/feeling* abstractly.

### Rule 2: Visually stunning over intellectually clever
A concept that sounds interesting but produces underwhelming visuals is WORSE than a simple concept with jaw-dropping visuals. The test is not "is this a clever idea?" — it's "would someone stop scrolling to stare at this?" Don't mistake conceptual sophistication for visual impact.

**Successes (visually stunning):** Silk Cascade (flowing layered fabric), Stardust Veil (cosmic parallax depth), Gilded Fracture (multi-scale golden cracks), Flow Field (elegant particle trails), Signal Decay (waveform degradation), Kinetic Grid (spring physics mesh), Slow Burn (radiant heat gradient), Rain on Glass (ultra-realistic refraction).

**Failures — looked fake:** Bottle Smash, Steel Wool Spin, Broken Windshield, Tattoo Machine, Rust Bloom.

**Failures — intellectually clever but visually boring:** Interference Pattern (textbook wave demo), Monolith (intentionally minimal = boring as a design asset), Cipher (just glowing geometric rings), Stratified (sparse particles in bands), Waveform Collapse (overlapping sine waves — single trick), Moonstone (basic raymarched sphere), Harmonic Sphere (basic morphing sphere), Vocal Range (basic spiral lines), Chandelier Sparkle (basic sparkle points).

**The litmus test:** Before building, ask: "If I showed this to a designer, would they say 'I NEED this on my website' — or would they say 'that's neat I guess'?" If it's the latter, the concept isn't strong enough. Go back and find something with more visual punch.

## Quality Bar

The shaders you build must be **ambitious, rich, and visually stunning**. The bar is set by the best shaders in the collection, not by what's technically interesting.

What makes a great shader:
- **Genuine visual beauty** — makes you stop and stare, not just nod and move on
- **Multiple visual layers** composited together (not just one effect)
- **Rich multi-scale detail** (coarse + fine + micro detail)
- **Fills the entire canvas** with interesting detail (not a small object in the center)
- **Dynamic and alive** — clear animation with visual drama, not just slowly drifting
- **Would genuinely work as a website background, hero section, or design asset**
- **The "screenshot test"**: a single still frame should look beautiful enough to be a wallpaper

What gets rejected:
- Simple raymarched sphere with one effect
- Basic noise patterns or gradients
- Single-trick shaders without depth or layering
- "Tech demos" that look academic rather than artistic
- Static-looking results that barely animate
- Simulations of real objects that end up looking fake
- **ANY morbid, visceral, or body-related effects** — no skin, blood, wounds, tattoo needles, body parts. Immediate reject.

## Rendering Techniques — Choose the Right Tool

You are NOT limited to single-pass WebGL fragment shaders. Choose the best technique for each effect:

### Available Techniques (all proven in this project):

1. **Pure WebGL fragment shader** — Best for: full-canvas procedural textures, noise-based effects, SDF rendering. Most shaders use this. Efficient for per-pixel effects but cannot maintain state between frames.

2. **Canvas 2D particle systems** — Best for: elegant particle trails (flow-field), physics simulations (strange-attractor), anything with persistent trails via alpha-fade overlay. Simple, performant, beautiful results. Don't underestimate Canvas 2D — some of the best shaders use it.

3. **Canvas 2D + offscreen buffers** — Best for: persistent effects like burn marks, accumulated trails. laser-precision uses 2 offscreen canvases for persistent scorched trails and heat distortion.

4. **Hybrid Canvas 2D → WebGL** — Best for: simulation + post-processing. rain-on-glass does drop physics in Canvas 2D, uploads as texture to WebGL for refraction shader. Very powerful pattern.

5. **Multi-pass WebGL with ping-pong FBOs** — Best for: **stateful effects that need frame-to-frame persistence**: fluid simulation, reaction-diffusion, cellular automata, trail accumulation, feedback effects. Render to texture A, read from A next frame while writing to B, swap. This is how Shadertoy does its most impressive effects. We haven't used this yet but should — it unlocks a whole class of effects impossible in single-pass.

6. **WebGPU compute shaders** — Best for: massive particle counts (100K+), GPU-side physics. Now shipping in all major browsers (2026). Consider for effects that need huge particle counts. Note: less browser backward-compatibility than WebGL.

### Choosing the right technique:
- Need persistent trails or state? → Multi-pass WebGL or Canvas 2D with alpha overlay
- Need beautiful particles with physics? → Canvas 2D (proven elegant results)
- Need complex per-pixel procedural texture? → Single-pass WebGL fragment shader
- Need simulation + post-processing? → Hybrid Canvas 2D → WebGL
- Need massive particle counts? → WebGPU compute (or Canvas 2D with careful limits)
- **If single-pass fragment shader can't do the effect well, DON'T force it.** Use a different technique.

## Avoiding Technique Bias

There is a natural bias toward certain overused techniques. Be aware and actively diversify:

**OVERUSED — avoid unless truly novel application:**
- Voronoi / Voronoi edges (we already have gilded-fracture, sugar-glass, tectonic, etc.)
- Domain-warped FBM noise (we have fluid-amber, obsidian-flow, etc.)
- Simple metaballs (we have metamorphosis, neon-drip)
- Basic particle systems
- Raymarched spheres
- "Obsidian" / dark reflective surface concepts (strong AI bias toward these — actively avoid)

**UNDERUSED — actively seek these out:**
- Physics simulations (spring systems, fluid dynamics, electromagnetic)
- Procedural 3D scenes (not just a sphere — think environments, structures)
- Material simulations (fabric, liquid metal, glass, ice)
- Reaction-diffusion and cellular automata (great with ping-pong buffers!)
- Optical phenomena (caustics, refraction, diffraction, thin-film)
- Mechanical/kinetic systems (gears, pendulums, chains)
- Perspective/3D illusions on a 2D canvas
- Weather and atmospheric effects
- Canvas 2D particle systems with elegant physics (flow-field style)
- Feedback/accumulation effects (ping-pong buffers)

## Process

### Step 1: Celebrity Vibe Analysis

Think deeply about **$ARGUMENTS**:
- Their artistic identity, aesthetic, energy, cultural significance
- Visual motifs, textures, colors, moods associated with them
- What makes them *them* — not surface-level, but the essence

Write a short (3-5 sentence) vibe summary.

### Step 2: Generate 50 Shader Ideas

Brainstorm 50 shader concepts inspired by this celebrity. Each idea should:
- Be a technically interesting generative animation — **ambitious and sophisticated**, using modern and versatile techniques. Think multi-layered compositions, not single effects.
- **Capture an aesthetic/mood abstractly** — NOT simulate a literal real-world object
- Be feasible as a single self-contained HTML file (any rendering technique is valid)
- Have an evocative name (2-3 words)
- **Have high sharability potential** — designers and developers should want to embed these on their own websites
- **Actively avoid the overused techniques** listed above unless you have a truly novel take
- **Never include morbid/visceral/body-related concepts** — no skin, blood, wounds, body parts

Present the full unranked list of 50 with one-line descriptions. Do NOT rank them yet.

### Step 2b: Rank the Top 5

Launch a sub-agent (using the Agent tool) whose sole job is to critically evaluate and rank the 50 ideas from Step 2. The agent should:
- Consider technical feasibility, visual impact, sharability potential, distinctiveness from each other, and connection to the celebrity's vibe
- Eliminate ideas that are too similar to existing shaders already in `shaders.ts`
- **Ruthlessly eliminate ideas that try to simulate literal objects** — these always look fake
- **Ruthlessly eliminate ideas that use overused techniques** (Voronoi, basic FBM noise, metaballs, simple raymarched objects)
- **Favor ideas that would require multiple visual layers** and rich detail
- **Consider which rendering technique best suits each idea** — don't assume everything must be a single-pass fragment shader
- Pick the **top 5** that are most distinct from each other and would make the strongest set
- Return the ranked top 5 with a brief justification for each pick

Wait for the agent to complete and use its top 5 selection for the next step.

### Step 3: Build Top 5

Build the top 5 shader ideas (as selected by the ranking agent) as complete, working HTML files. For each:

1. Create the HTML file in `static/` following the existing naming convention
2. Follow the project conventions exactly:
   - Single HTML file: `<style>` + `<canvas id="canvas">` + `<script>` IIFE
   - Dark background (#0a0a0a)
   - Fixed `.label` div with shader name
   - `requestAnimationFrame` loop
   - Pause when not visible (`visibilitychange` or `IntersectionObserver`)
   - Support `postMessage` for params: `window.addEventListener('message', ...)`
   - Define 2 tunable params with sensible defaults
   - Canvas fills viewport, handles resize
3. **Mouse/touch interaction is REQUIRED.** Every shader must respond to `mousemove`/`touchmove` in a meaningful way — not cosmetic, the interaction should visibly affect the visual.
4. **Support color schemes.** The 6 gallery color schemes work via CSS `filter` (hue-rotate). Design native colors in warm/amber tones so all schemes look good. If a shader looks best in a non-amber scheme, set `defaultScheme` in its catalog entry.
5. **Choose the RIGHT rendering technique** for the effect. Don't default to single-pass fragment shaders. If the effect needs trails → use Canvas 2D with alpha overlay or ping-pong buffers. If it needs particles with physics → Canvas 2D might be perfect. If it needs procedural texture → WebGL fragment shader. Match technique to effect.
4. **The animation must be AMBITIOUS and MULTI-LAYERED.** At least 3-5 distinct visual layers composited together.
5. Each shader should look DISTINCT from the others.
6. **Design for sharability**: generative *art* that doubles as a *design asset*.
7. **Performance is critical**: 60fps on normal laptops. If a technique can't hit 60fps, use a different technique — don't just reduce quality.

### Step 4: Visual QA via Browser — YOU ARE THE FIRST LINE OF DEFENSE

You must iterate on each shader until YOU are satisfied it is production grade. Do not hand off mediocre work to the user. The user should only see shaders you'd be proud to ship.

For each shader, visually verify using the Chrome browser automation tools:

1. Open each shader's standalone HTML file in Chrome (navigate to the file URL or dev server URL)
2. Take a screenshot and critically evaluate against ALL of these criteria:
   - **Rendering correctly?** (not black screen, no WebGL errors, no visual glitches)
   - **Visually stunning?** (not just "working" — genuinely beautiful, would stop someone mid-scroll)
   - **Animation smooth and dynamic?** (clear motion, not static-looking or jittery; check console for errors)
   - **Rich and layered?** (multiple visual elements composited, not a single flat effect)
   - **Matches the concept?** (evokes the intended mood/aesthetic)
   - **Production grade?** Would a designer genuinely use this on a real website?
   - **No fake-looking literal objects?** If it looks like a bad simulation, it needs rethinking.
3. **Iterate until excellent.** Fix issues and re-check. Tweak colors, speeds, layer composition, detail levels. Each shader may need 3-5+ revision cycles. This is expected and normal.
4. If after sustained effort a shader fundamentally doesn't work as a concept (not just needs tweaking), scrap it and build a replacement from the remaining ideas.
5. **Check console for WebGL errors and performance warnings.** Fix any issues.

Do NOT skip this step. Do NOT pass shaders to the user that you haven't personally verified look great.

### Step 5: Register and Present

For each kept shader:

1. Add entry to `shaders` array in `src/lib/shaders.ts` with complete metadata: `id`, `file`, `title`, `desc`, `inspiration`, `tags`, `technique`, `params`, and optionally `defaultScheme`
2. **If inspired by a NEW celebrity** not yet in the project, add entries to:
   - `src/lib/inspiration-intros.ts` — keyed by slug (e.g. `'daft-punk'`), a 3-4 sentence poetic intro describing their artistic identity and color associations
   - `src/lib/inspiration-palettes.ts` — keyed by slug, with `primary` hex color and `colors` array (2-4 hex colors for ambient glow)
3. Generate preview sprite: `node scripts/generate-previews.mjs --only=shader-id` (creates `static/previews/shader-id.webp` for gallery cards)
4. Verify the shader runs at 60fps, has working mouse interaction, and all color schemes look acceptable

Then tell the user:
- List all 5 proposals with their names and descriptions
- Suggest they view each at the dev server URL to evaluate
- Ask which ones to keep and which to discard

## Important Notes

- Build all 5 shaders in parallel using agents when possible
- The quality bar is HIGH — portfolio-worthy generative art that designers want on their sites
- Think "sharable design asset" not "tech demo"
- If the existing shader for this celebrity is already good, say so
- **60fps or bust** — if a technique can't hit 60fps, use a different technique
- Warm amber accent palette (rgba(200, 149, 108, ...)) is the project default but celebrity shaders can use their own palette if it fits the vibe
- **Abstract over literal. Mood over depiction. Aesthetic over simulation.**
