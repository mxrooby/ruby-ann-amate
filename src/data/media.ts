import type { GalleryImage } from '../types';

const galleryFiles = [
  'gallery-photo-01.jpeg',
  'gallery-photo-02.jpeg',
  'gallery-photo-03.jpg',
  'gallery-photo-04.jpg',
  'gallery-photo-05.jpg',
  'gallery-photo-06.jpeg',
  'gallery-photo-07.jpeg',
  'gallery-photo-08.jpg',
  'gallery-photo-09.jpg',
];

const randomFiles = [
  'arsemble-hardbound.jpg',
  'arsemble-selfie.jpg',
  'awoo-emote.jpg',
  'distort-ruby.jpg',
  'emiamily-lucky-photo.jpg',
  'first-and-ruby.jpeg',
  'jjduling.jpg',
  'new-ruby.jpg',
  'picc-grad.jpeg',
  'rakso-completion.jpg',
  'ruby-as-a-graduate.jpeg',
  'ruby-cow.jpeg',
  'ruby-doja.jpeg',
  'ruby-filter.jpg',
  'ruby-temp.jpg',
  'tip-and-ruby.jpeg',
  'tomato.jpg',
];

export const galleryImages: GalleryImage[] = galleryFiles.map((filename, i) => ({
  id: `gallery-${i}`,
  filename,
  path: `/assets/gallery/${encodeURIComponent(filename)}`,
}));

export const randomImages: GalleryImage[] = randomFiles.map((filename, i) => ({
  id: `random-${i}`,
  filename,
  path: `/assets/random/${encodeURIComponent(filename)}`,
}));
