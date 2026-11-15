import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = (await getPosts()).filter((post) => !post.data.draft);
  const base = import.meta.env.BASE_URL;
  return rss({
    title: 'Unish Khadka · Blog',
    description: 'Notes on backend engineering, Go, databases and the projects behind this portfolio.',
    site: context.site ?? 'http://localhost:4321',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `${base}blog/${post.id}/`,
    })),
  });
}
