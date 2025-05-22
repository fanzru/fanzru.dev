import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  readingTime: string;
}

export async function getAllPosts(): Promise<Post[]> {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);
      const readingTimeResult = readingTime(content);

      return {
        slug,
        content,
        readingTime: readingTimeResult.text,
        ...(data as {
          title: string;
          date: string;
          category: string;
          excerpt: string;
        }),
      };
    })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);
    const readingTimeResult = readingTime(content);

    return {
      slug,
      content, // Just pass the raw content, MDXRemote will handle the serialization
      readingTime: readingTimeResult.text,
      ...(data as {
        title: string;
        date: string;
        category: string;
        excerpt: string;
      }),
    };
  } catch (error) {
    console.error("Error processing MDX:", error);
    return null;
  }
}

interface Frontmatter {
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

interface MDXContent {
  frontmatter: Frontmatter;
  content: string;
}

export async function getMDXContent(
  filePath: string
): Promise<MDXContent | null> {
  const fullPath = path.join(process.cwd(), "content", filePath);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const { frontmatter, content: compiledContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true },
    });

    return {
      frontmatter: {
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
      },
      content: content,
    };
  } catch (error) {
    console.error(`Error reading MDX file: ${filePath}`, error);
    return null;
  }
}
