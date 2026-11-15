// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to Cloudflare Pages on unishkhadka.com.np. Cloudflare builds it on every push to main.
export default defineConfig({
  site: 'https://unishkhadka.com.np',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
