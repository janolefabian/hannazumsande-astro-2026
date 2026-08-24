import imageData from './images.json';
import { withBase } from '../utils/paths';

export const imageSettings = imageData;

export const gallery = imageData.gallery.map((image) => ({
  ...image,
  src: withBase(image.src),
}));

export const pressPhotos = imageData.pressPhotos.map((image) => ({
  ...image,
  src: withBase(image.src),
}));
