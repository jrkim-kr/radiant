# Changelog

## 1.1.0 — 2026-03-19

### New Shaders

- **Synth Ribbon** (Chappell Roan) — Flowing metallic ribbons twisting through 3D space with chrome reflections in hot pink and cyan (Canvas 2D)
- **Hologram Glitch** (Daft Punk) — Abstract holographic texture with chromatic aberration, scanlines, and controlled glitch bursts (WebGL)
- **Erosion Channels** — Fractal dendritic channel networks carving through warm sandstone terrain (WebGL)
- **Golden Sediment** — Layered sedimentary strata with tectonic folding and crystalline sparkles (WebGL)

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
