// One-off: rasterise the OG SVG to a 1200x630 PNG fallback for social
// scrapers that do not render SVG. We embed the self-hosted Cascadia Mono
// SemiBold woff2 (subset to the wordmark glyphs) as a base64 @font-face so the
// wordmark renders in the real brand face instead of a generic sans. The rest
// of the text uses the renderer's default sans, matching the system stack used
// on the live site.
//
// Run: node scripts/render-og.mjs
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pub = path.join(root, 'public');

const svgRaw = await readFile(path.join(pub, 'og-image.svg'), 'utf8');
const fontB64 = (
  await readFile(path.join(pub, 'fonts', 'cascadia-mono-semibold-helsys.woff2'))
).toString('base64');

// Inject an @font-face with the embedded font right after the opening <svg>.
// The family name matches the one used in og-image.svg.
const fontStyle = `
  <style>
    @font-face {
      font-family: 'Cascadia Mono Helsys';
      font-style: normal;
      font-weight: 600;
      src: url(data:font/woff2;base64,${fontB64}) format('woff2');
    }
  </style>`;
const svgForRender = svgRaw.replace(/(<svg[^>]*>)/, `$1${fontStyle}`);

await sharp(Buffer.from(svgForRender))
  .png({ compressionLevel: 9 })
  .toFile(path.join(pub, 'og-image.png'));

console.log('Wrote public/og-image.png');
