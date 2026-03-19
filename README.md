# Radiant

Open source shaders and visual effects for the web.

Radiant combines:
- a SvelteKit gallery app (browsing, filtering, and previews), and
- standalone shader files in `static/` that run directly in any modern browser.

Each shader is self-contained in one HTML file (`<style> + <canvas> + <script>`) with no runtime dependencies.

## What is in this repo

- `src/` - SvelteKit frontend for the Radiant gallery and shader detail pages
- `static/*.html` - standalone shader/effect files (Canvas 2D + WebGL)
- `src/lib/shaders.ts` - shader catalog metadata (title, tags, params, technique)
- `scripts/build-zip.mjs` - generates `static/radiant-shaders.zip` for distribution

## Local development

```sh
npm install
npm run dev
```

Then open the local Vite URL (usually `http://localhost:5173`).

Useful commands:

```sh
npm run check       # type + Svelte checks
npm run build       # production build
npm run preview     # preview production build
npm run build:zip   # rebuild shader zip package
```

## Using a shader in your own site

You can use any file from `static/` directly.

### Option 1: open the HTML file directly

Each shader is a complete page and can run as-is.

### Option 2: embed with an iframe

```html
<iframe
  src="/event-horizon.html"
  title="Event Horizon"
  style="width: 100%; height: 100vh; border: 0;"
></iframe>
```

## Runtime parameter control

Shaders accept live parameter updates through `postMessage`:

```js
const frame = document.querySelector('iframe');
frame.contentWindow.postMessage(
  { type: 'param', name: 'ROTATION_SPEED', value: 0.6 },
  '*'
);
```

Parameter names and ranges are listed in `src/lib/shaders.ts` under each shader's `params`.

## Adding a new shader

1. Create a new standalone file in `static/` (for example `static/my-shader.html`)
2. Follow existing shader conventions:
   - `canvas` element with id `canvas`
   - optional `.label` overlay
   - dark base background and warm amber-forward default palette
   - support for resize and `prefers-reduced-motion` when appropriate
3. Add an entry in `src/lib/shaders.ts` with metadata and parameter definitions
4. Verify it appears correctly in the gallery

## Building the distributable zip

`npm run build:zip` creates:
- `static/radiant-shaders.zip`

The zip includes:
- all shader HTML files referenced in `src/lib/shaders.ts`
- a generated README
- `LICENSE`

## License

MIT. See `LICENSE`.
