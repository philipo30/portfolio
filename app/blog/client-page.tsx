"use client";

import Link from "next/link";
import { formatDate } from "app/lib/utils";
import { Search } from "app/components/search";
import { useState } from "react";
import { PageTransition } from "app/components/PageTransition";

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
  };
}

interface ClientBlogPostsProps {
  initialPosts: BlogPost[];
}

export default function ClientBlogPosts({ initialPosts }: ClientBlogPostsProps) {
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  const handleSearch = (query: string) => {
    const filtered = initialPosts.filter((post) =>
      post.metadata.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <PageTransition>
      <section>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">Blog Posts</h1>
        <Search onSearch={handleSearch} />
        <div>
          {filteredPosts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                  <p className="text-black dark:text-white tracking-tight">
                    {post.metadata.title}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                </div>
              </Link>
            ))}
          {filteredPosts.length === 0 && (
            <p className="text-neutral-600 dark:text-neutral-400">
              No posts found matching your search.
            </p>
          )}
        </div>
      </section>
    </PageTransition>
  );
} 