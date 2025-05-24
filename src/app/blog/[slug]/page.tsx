import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getMDXContent } from "@/lib/mdx";
import MDXContent from "@/app/components/MDXContent";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getMDXContent(`blog/${slug}.mdx`);

  if (!post) {
    return {};
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getMDXContent(`blog/${slug}.mdx`);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <article className="mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold tracking-tight">
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.excerpt && (
            <p className="text-lg leading-relaxed text-neutral-400 mb-4 max-w-3xl">
              {post.frontmatter.excerpt}
            </p>
          )}
          <div className="flex items-center gap-3 text-sm text-neutral-400 border-b border-neutral-800 pb-4">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.frontmatter.category && (
              <>
                <span>•</span>
                <span>{post.frontmatter.category}</span>
              </>
            )}
          </div>
        </header>
        <MDXContent content={post.content} />
      </article>
    </div>
  );
}
