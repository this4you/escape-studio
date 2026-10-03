// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://this4you.github.io/escape-studio/
// When a custom domain is connected, set `site` to it and drop `base`.
export default defineConfig({
  site: 'https://this4you.github.io',
  base: '/escape-studio',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
});
