---
title: How to write a post
description: A template for new posts. It's a draft, so it only shows in `npm run dev` and never on the live site.
date: 2026-11-15
tags: [meta]
draft: true
---

Copy this file, rename it (the file name becomes the URL), and replace the front matter above.

## Front matter

- `title`: the post's headline.
- `description`: one or two sentences shown on the blog list and in search results.
- `date`: publish date, as `YYYY-MM-DD`.
- `tags`: optional list, for example `[go, databases]`.
- `draft`: set to `true` while writing. Remove it, or set `false`, to publish.

## Markdown that's styled

Regular paragraphs, **bold**, *italics* and [links](https://astro.build).

> Block quotes render in the serif italic.

Inline `code` and fenced blocks:

```go
func main() {
    fmt.Println("hello")
}
```

Images go in `public/` and are referenced as `/my-image.png`.
