// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages on the custom domain in public/CNAME, so the site lives at the root
// whatever the repo is called.
export default defineConfig({
  site: 'https://unishkhadka.com.np',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
