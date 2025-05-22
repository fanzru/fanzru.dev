import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getMDXContent } from "@/lib/mdx";
import MDXContent from "@/app/components/MDXContent";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const post = await getMDXContent(`blog/${params.slug}.mdx`);

  if (!post) {
    return {};
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getMDXContent(`blog/${params.slug}.mdx`);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <article className="mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.excerpt && (
            <p className="mt-4 text-xl text-neutral-400">
              {post.frontmatter.excerpt}
            </p>
          )}
          <div className="mt-6 flex items-center gap-3 text-sm text-neutral-400">
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
