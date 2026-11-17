// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages with custom domain https://escape.in.ua (set in repo Settings → Pages).
export default defineConfig({
  site: 'https://escape.in.ua',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
});
