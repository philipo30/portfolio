import BlogPosts from "./page";
import { getBlogPosts } from "app/lib/posts";

export default function BlogPage() {
  const posts = getBlogPosts();
  return <BlogPosts posts={posts} />;
} 