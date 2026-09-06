import { stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import sharp from 'sharp';
import { withoutBase } from './paths';

const cache = new Map<string, Promise<{ width: number; height: number }>>();
export async function imageDimensions(src: string) {
  if (/^(?:[a-z]+:)?\/\//i.test(src)) return undefined;
  const publicRoot = resolve(process.cwd(), 'public');
  const path = decodeURIComponent(withoutBase(src).split(/[?#]/)[0]);
  const filename = resolve(publicRoot, '.' + path);
  if (!filename.startsWith(publicRoot + sep)) throw new Error('Image must be inside public: ' + src);
  const file = await stat(filename);
  const key = `${filename}:${file.size}:${file.mtimeMs}`;
  if (!cache.has(key)) {
    cache.set(key, sharp(filename).metadata().then(metadata => {
      const dimensions = metadata.autoOrient ?? metadata;
      if (!dimensions.width || !dimensions.height) throw new Error('Image dimensions missing: ' + src);
      return { width: dimensions.width, height: dimensions.height };
    }));
  }
  return cache.get(key)!;
}
