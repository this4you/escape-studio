import type { ImageMetadata } from 'astro';

// Photos are looked up by name per design theme: src/assets/photos/<theme>/<name>.{png,jpg,jpeg,webp}.
// Dropping a file with the same name into another theme's folder is enough to use it there.
export const themes = ['neon', 'graphite'] as const;
export type Theme = (typeof themes)[number];

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*/*.{png,jpg,jpeg,webp}', {
  eager: true,
});

export function findPhoto(theme: Theme, name: string): ImageMetadata | undefined {
  const key = Object.keys(files).find((path) => {
    const [dir, file] = path.split('/').slice(-2);
    return dir === theme && file.replace(/\.\w+$/, '') === name;
  });
  return key ? files[key].default : undefined;
}
