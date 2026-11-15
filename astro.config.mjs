// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages as a user site (repo named <username>.github.io), so it lives at the root.
// If the repo gets a different name, also set `base: '/<repo-name>'`.
export default defineConfig({
  site: 'https://zeusangis.github.io',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
