---
title: Building this portfolio
description: How this site went from a single HTML file to an Astro site on Cloudflare, and the designs I threw away on the way.
date: 2026-11-15
tags: [astro, cloudflare, design]
---

This site started as one HTML file. No framework, no build step, just a page with my projects on it. That worked until I wanted to write posts like this one. Copying a new HTML file for every post was not going to last, so I moved everything to [Astro](https://astro.build).

## Why Astro

I wanted three things:

- Posts written in Markdown, one file each.
- A static site, so there's no server to keep alive.
- No JavaScript shipped unless a page actually needs it.

Astro does all three. A post is a Markdown file in `src/content/blog/`, and the file name becomes the URL. Drafts like this one show up when I run the site locally but stay off the live site until I remove `draft: true`.

## Hosting, attempt one: GitHub Pages

The plan was GitHub Pages. Two things got in the way.

First, my old GitHub account, the one that owned `unishkhadka.github.io`, is locked behind two-factor authentication I can no longer pass. GitHub won't release a username from an account that still exists, so that name is gone for now. Luckily that old site already redirected to my own domain, `unishkhadka.com.np`, and the domain belongs to me, not to GitHub.

Second, my current account had a billing lock, so GitHub Actions wouldn't run any builds. The deploy job failed before it even started, with a message I hadn't seen before:

> The job was not started because your account is locked due to a billing issue.

## Hosting, attempt two: Cloudflare

My domain's DNS was already on Cloudflare, so I moved hosting there too. Cloudflare connects to the GitHub repo, runs `npm run build` on its own servers, and uploads the `dist/` folder. The whole deploy config is one small file:

```jsonc
{
  "name": "portfolio",
  "compatibility_date": "2026-11-01",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

Every push to `main` now rebuilds and deploys the site. The last step is pointing the `.com.np` domain at the new Cloudflare account, which means changing nameservers through the .np registry. That change is approved by hand, so for now I'm waiting.

## The designs I threw away

This part took longer than the code.

I tried a lot of directions: a mobile-game lobby where projects were collectible cards, a 16-bit RPG with my projects as party members, a neon arcade high-score table, a tactics board with my stack lined up in a 4-3-3. They were fun, and I liked all of them for about a day.

Then I asked a simple question: what does someone hiring a backend intern actually want from this page? They want to know what I built, whether it's real, and where the code is. They have about a minute. A game theme makes them work for that.

I also noticed something uncomfortable. A lot of developer portfolios now look the same: a huge headline with one word in fancy italics, a scrolling strip of skills, and numbered project cards. Mine looked like that too. So I removed those parts one at a time and kept what was specific to me.

## What I kept

- **The trace at the top.** As a backend developer I spend time reading request traces, the timelines that show where a slow request spent its time. The top of the home page is drawn as one: `GET /unish-khadka`, with a bar for each section. Click a bar and it jumps there.
- **Projects as compact rows.** Each project is one line with its key numbers. Open one to see the details and how its pieces fit together. Nobody has to scroll through four long write-ups to find the one they care about.
- **Principles with evidence.** Each habit names the project where it shows up. "Refuse the stale write" points to Dendrite returning HTTP 409, not just a nice sentence.
- **One accent colour.** A deep green, the colour of a healthy request.

## What's next

Screenshots for each project, and more posts. The next one will be about why ClimateCrop AI scores crops with plain rules instead of asking a model, and what happens when the model's advice disagrees with the facts.

The code for this site is on [GitHub](https://github.com/Zeusangis/portfolio) if you want to see how it's put together.
