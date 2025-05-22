import { NextRequest } from "next/server";
import { withAPIHandler } from "@/lib/with-api-handler";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
}

async function handler(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  // Here you would typically fetch from your database
  // For now using mock data
  const posts: BlogPost[] = [
    {
      slug: "first-post",
      title: "First Blog Post",
      excerpt: "This is the first blog post.",
      publishedAt: new Date().toISOString(),
    },
    {
      slug: "second-post",
      title: "Second Blog Post",
      excerpt: "This is the second blog post.",
      publishedAt: new Date().toISOString(),
    },
  ];

  // Calculate pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedPosts = posts.slice(start, end);
  const totalPages = Math.ceil(posts.length / limit);

  return new Response(
    JSON.stringify({
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts: posts.length,
        hasMore: page < totalPages,
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    }
  );
}

export const GET = withAPIHandler(handler, { cors: true });
