import { readFileSync, createWriteStream, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import archiver from 'archiver';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const staticDir = join(root, 'static');
const outPath = join(staticDir, 'radiant-shaders.zip');

// Parse shaders.ts to extract file and title values
const shadersTs = readFileSync(join(root, 'src/lib/shaders.ts'), 'utf-8');
const shaderEntries = [];
const re = /\{\s*id:\s*'([^']+)'[\s\S]*?file:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'/g;
let m;
while ((m = re.exec(shadersTs))) {
	shaderEntries.push({ id: m[1], file: m[2], title: m[3] });
}

if (shaderEntries.length === 0) {
	console.error('No shaders found in shaders.ts');
	process.exit(1);
}

// Check which files exist
const missing = shaderEntries.filter((s) => !existsSync(join(staticDir, s.file)));
if (missing.length > 0) {
	console.warn(`Warning: ${missing.length} shader files not found:`);
	missing.forEach((s) => console.warn(`  - ${s.file}`));
}

const found = shaderEntries.filter((s) => existsSync(join(staticDir, s.file)));
console.log(`Bundling ${found.length} shaders into radiant-shaders.zip`);

// Generate README
const shaderList = found.map((s, i) => `${String(i + 1).padStart(2, '0')}. ${s.title} — ${s.file}`).join('\n');
const readme = `# Radiant — Premium Generative Canvas Animations

A collection of ${found.length} standalone, self-contained canvas-based generative animations.

## Usage

Each HTML file is a fully self-contained animation — no build step, no dependencies.
Simply open any file in a modern browser, or embed it in your project via an iframe:

\`\`\`html
<iframe src="flow-field.html" width="800" height="600"></iframe>
\`\`\`

You can also copy the code into your own HTML pages and customize it directly.

## Included Shaders

${shaderList}

## License

These shaders are free and open source under the MIT License. See LICENSE for full terms.
Use them however you like — personal projects, commercial products, client work.

If you find them useful, consider supporting the project at https://radiantshaders.com
`;

// Build zip
const output = createWriteStream(outPath);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
	console.log(`Created ${outPath} (${(archive.pointer() / 1024).toFixed(0)} KB)`);
});

archive.on('error', (err) => {
	throw err;
});

archive.pipe(output);

// Add shader files (flat)
for (const s of found) {
	archive.file(join(staticDir, s.file), { name: s.file });
}

// Add README
archive.append(readme, { name: 'README.md' });

// Add LICENSE
const licensePath = join(root, 'LICENSE');
if (existsSync(licensePath)) {
	archive.file(licensePath, { name: 'LICENSE' });
}

await archive.finalize();
