import { generateRssFeed } from 'app/lib/rss';
import { NextResponse } from 'next/server';

export async function GET() {
  const { rss } = generateRssFeed();

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
} 