# Radiant

Open source shaders and visual effects for the web.

Each shader is a self-contained HTML file (`<style> + <canvas> + <script>`) with zero runtime dependencies. Use them directly in any modern browser.

## Getting the shaders

Download the latest shader pack from the [Radiant gallery](https://radiant-shaders.com), or grab individual files from the `static/` directory in this repo.

## Using a shader

### Open directly

Each shader is a complete HTML page — just open it in a browser.

### Embed with an iframe

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

## Contributing

See [CONTRIBUTORS.md](CONTRIBUTORS.md) for local development setup, conventions, and how to add new shaders.

## License

MIT. See `LICENSE`.
