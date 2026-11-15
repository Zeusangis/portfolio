# unish.khadka

Portfolio and blog at [unishkhadka.com.np](https://unishkhadka.com.np), built with [Astro](https://astro.build) and deployed on Cloudflare Pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321, drafts included
npm run build    # static site in dist/, drafts left out
```

## Write a post

1. Add a Markdown file to `src/content/blog/`. The file name becomes the URL:
   `src/content/blog/why-i-learn-go.md` → `/blog/why-i-learn-go/`.
2. Start it with front matter:

   ```md
   ---
   title: Why I'm learning Go
   description: One or two sentences for the blog list and search results.
   date: 2026-11-20
   tags: [go]
   draft: true
   ---
   ```

3. Preview with `npm run dev`. When it's ready, remove `draft: true`, then commit and push. Cloudflare Pages rebuilds and deploys the site.

`src/content/blog/how-to-write-a-post.md` is a draft template showing the styled Markdown.

## Where things live

| Path | What |
| --- | --- |
| `src/pages/index.astro` | Home page: hero, projects, approach, toolkit, contact |
| `src/pages/blog/` | Blog list and post pages |
| `src/layouts/Base.astro` | Shared `<head>`, nav and footer |
| `src/styles/global.css` | All styles |
| `src/content.config.ts` | Blog post front matter schema |
| `.node-version` | Node version Cloudflare Pages builds with |
