import { getBlogPosts } from "app/lib/posts";
import ClientBlogPosts from "./client-page";
import { RssSubscribe } from "app/components/RssSubscribe";

export const metadata = {
  title: "Blog",
  description: "Blog Posts",
};

export default async function BlogPage() {
  const posts = getBlogPosts();
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-medium tracking-tight mb-4">Blog Posts</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Subscribe to get new posts in your feed:
        </p>
        <RssSubscribe />
      </div>
      <ClientBlogPosts initialPosts={posts} />
    </>
  );
}
