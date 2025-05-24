import { getAllPosts } from "@/lib/mdx";
import type { Post } from "@/lib/mdx";
import { Suspense } from "react";
import BlogContent from "./BlogContent";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BlogContent initialPosts={posts} />
    </Suspense>
  );
}
