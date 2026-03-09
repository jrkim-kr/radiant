# Shaders

A collection of standalone canvas-based generative animations with a SvelteKit gallery frontend.

## Stack

- **Gallery**: SvelteKit 2 + Svelte 5, TypeScript, Vite
- **Shaders**: Standalone HTML files in `static/`, no build step. Each is self-contained with inline JS.
- **Rendering**: Mix of Canvas 2D and WebGL. No external dependencies.

## Structure

```
src/routes/+page.svelte   — Gallery grid with iframe previews
static/XX-name.html       — Standalone shader pages (01-09)
static/standalone/         — Duplicate copies (legacy, can be removed)
```

## Commands

- `npm run dev` — Dev server
- `npm run build` — Production build

## Conventions

- Each shader is a single HTML file: `<style>` + `<canvas>` + `<script>` IIFE
- Canvas ID is always `canvas`
- Label format: `XX — Name` in a fixed `.label` div
- Dark background (#0a0a0a), warm amber accent palette (rgba(200, 149, 108, ...))
- Respect `prefers-reduced-motion` where applicable
- Use `IntersectionObserver` or `visibilitychange` to pause when offscreen
- Gallery entry in `+page.svelte` must match the static file numbering

## Adding a new shader

1. Create `static/XX-name.html` following the existing format
2. Add an entry to the `shaders` array in `src/routes/+page.svelte`
