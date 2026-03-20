# Changelog

## 1.1.0 — 2026-03-19

### New Shaders

- **Feedback Loop** (Daft Punk) — Recursive video feedback tunnel with holographic color cycling, geometric seed shapes, and infinite fractal depth using ping-pong FBOs (WebGL)
- **Dither Gradient** (Daft Punk) — Smooth gradients decomposed into shifting ordered dithering patterns (Bayer, halftone, crosshatch) with chromatic separation and bit-depth waves (WebGL)
- **Analog Drift** (Daft Punk) — Morphing Lissajous figures with phosphor persistence trails, harmonic overtones, and oscilloscope grid (Canvas 2D)
- **Synth Ribbon** (Chappell Roan) — Flowing metallic ribbons twisting through 3D space with chrome reflections in hot pink and cyan (Canvas 2D)
- **Hologram Glitch** (Daft Punk) — Abstract holographic texture with chromatic aberration, scanlines, and controlled glitch bursts (WebGL)
- **Shattered Plains** (Brandon Sanderson) — Storm-carved chasms branching through ancient sandstone plateaus with depth-revealed strata (WebGL)
- **Painted Strata** (Laufey) — Flowing layered bands with washi paper textures, slow tectonic folding, and fibrous grain (WebGL)

### Shader Rewrites & Polish

- **Moonlit Ripple** — Complete rewrite with 3D perspective camera, ray-plane water intersection, multi-directional waves with analytical normals, Fresnel-based reflection, textured moon with craters, and adjustable wave intensity (calm lake to stormy ocean)
- **Eclipse Glow** — Removed floating rectangular artifacts, added asymmetric corona streamers, softened diamond ring bloom, fixed horizontal lens streak, improved FPS from ~35 to ~54

### Interactivity

- **Mouse & touch interactivity for all shaders.** Every shader now responds to cursor movement, clicks, or drags with interactions designed for each visual:
  - Particle systems — attract, repel, or stir particles
  - Physics simulations — pluck, push, or add force sources
  - Drawing (Ink Calligraphy) — paint brush strokes with speed-based width
  - Fluid dynamics — drag to smear
  - 3D/4D rotation — drag to orbit the camera
  - Light sources — cursor becomes an additional light
  - Splash/spawn — click to create bursts
- **Auto-detected interaction hints** on shader detail pages

### Gallery & UI

- **Gallery live mode toggle** — opt-in button in gallery headers to preview all visible shaders at once
- **Per-shader default color schemes** — shaders can specify a preferred color scheme (e.g. Moonlit Ripple defaults to Blue)
- **Removed auto-activation budget system** — shaders only activate on hover by default, fixing browser crashes from too many concurrent iframes

### Performance

- Major performance optimizations for Stardust Veil, Silk Cascade, and many other shaders
- Gallery preload system simplified — HTML pre-fetched on scroll, iframes created only on hover

### Infrastructure

- Preview sprite generation script (`node scripts/generate-previews.mjs`)
- Comprehensive new-shader checklist in CLAUDE.md
- Inspiration metadata system (intros + palettes) for celebrity-inspired shader pages

## 1.0.0 — 2026-03-18

### Added

- Initial release with 50+ production-ready shaders and effects
- Gallery with filtering by tag, technique, and inspiration
- Interactive homepage with color scheme selector
- MIT licensed, zero dependencies
