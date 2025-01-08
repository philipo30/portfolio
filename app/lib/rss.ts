import { Feed } from 'feed';
import { getBlogPosts } from './posts';

export function generateRssFeed() {
  const baseUrl = 'https://philip30.vercel.app';
  const date = new Date();
  const author = {
    name: "Philip30",
    email: "contact@philip30.dev",
    link: baseUrl,
  };

  const feed = new Feed({
    title: "Philip30",
    description: "Philip a 20 year-old fullstack developer from Germany",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/og.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Philip30`,
    updated: date,
    generator: "Next.js using Feed for Node.js",
    feedLinks: {
      rss2: `${baseUrl}/rss.xml`,
      json: `${baseUrl}/feed.json`,
      atom: `${baseUrl}/atom.xml`,
    },
    author,
    styleSheet: '/rss.xsl',
  });

  const posts = getBlogPosts();

  posts.forEach((post) => {
    const url = `${baseUrl}/blog/${post.slug}`;
    const tags = post.metadata.tags
      ? post.metadata.tags.split(',').map(tag => tag.trim())
      : [];

    feed.addItem({
      title: post.metadata.title,
      id: url,
      link: url,
      description: post.metadata.summary,
      content: post.content,
      author: [author],
      contributor: [author],
      date: new Date(post.metadata.publishedAt),
      category: tags.map(tag => ({ name: tag })),
    });
  });

  return {
    rss: feed.rss2(),
    atom: feed.atom1(),
    json: feed.json1(),
  };
} 