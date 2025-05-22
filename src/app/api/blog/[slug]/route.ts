import { NextRequest } from "next/server";
import { withAPIHandler } from "@/lib/with-api-handler";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  publishedAt: string;
}

async function getHandler(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  // Here you would typically fetch from your database
  // For now using mock data
  const post: BlogPost = {
    slug: params.slug,
    title: "Sample Blog Post",
    content: "This is a sample blog post content.",
    publishedAt: new Date().toISOString(),
  };

  return new Response(JSON.stringify(post), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}

async function headHandler(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  return new Response(null, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    },
  });
}

export const GET = withAPIHandler(getHandler, { cors: true });
export const HEAD = withAPIHandler(headHandler, { cors: true });
