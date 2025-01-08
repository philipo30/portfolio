import { getBlogPosts } from "app/lib/posts";
import ClientBlogPosts from "./client-page";

export const metadata = {
  title: "Blog",
  description: "Blog Posts",
};

export default async function BlogPage() {
  const posts = getBlogPosts();
  return <ClientBlogPosts initialPosts={posts} />;
}
