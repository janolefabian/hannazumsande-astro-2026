import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

const publicDir = new URL('../public/', import.meta.url);
const source = await readFile(new URL('favicon.svg', publicDir));
const png = size => sharp(source, { density: 192 }).resize(size, size).png().toBuffer();
await writeFile(new URL('favicon-96.png', publicDir), await png(96));
await writeFile(new URL('apple-touch-icon.png', publicDir), await png(180));
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6 + 16 * frames.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(frame.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(new URL('favicon.ico', publicDir), Buffer.concat([header, ...frames]));
console.log('Generated favicon.ico, favicon-96.png and apple-touch-icon.png from the HZ vector mark.');
