# Contributing to Radiant

## What is in this repo

- `src/` — SvelteKit frontend for the Radiant gallery and shader detail pages
- `static/*.html` — standalone shader/effect files (Canvas 2D + WebGL)
- `src/lib/shaders.ts` — shader catalog metadata (title, tags, params, technique)
- `scripts/build-zip.mjs` — generates `static/radiant-shaders.zip` for distribution

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

`npm run build:zip` creates `static/radiant-shaders.zip`, which includes:

- all shader HTML files referenced in `src/lib/shaders.ts`
- a generated README
- `LICENSE`
