import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import PageContainer from "../components/PageContainer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  readingTime: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), "content/blog");

  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  if (!fileNames.length) return [];

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
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
    });

  // Sort posts by date
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default async function Blog() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <>
        <Navigation />
        <PageContainer>
          <PageTitle
            subtitle="BLOG"
            title="Latest Posts"
            description="Thoughts, tutorials, and insights about web development and technology."
          />
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <p className="text-gray-400 ">No blog posts found.</p>
          </div>
        </PageContainer>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <PageContainer>
        <PageTitle
          subtitle="BLOG"
          title="Latest Posts"
          description="Thoughts, tutorials, and insights about web development and technology."
        />

        {/* Featured Post */}
        {posts[0] && (
          <div className="mt-12">
            <Link href={`/blog/${posts[0].slug}`} className="block">
              <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden group hover:border-[#9333EA] transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-sm ">
                    <span className="text-[#9333EA] ">{posts[0].category}</span>
                    <span className="text-gray-500 ">•</span>
                    <span className="text-gray-400 ">{posts[0].date}</span>
                    <span className="text-gray-500 ">•</span>
                    <span className="text-gray-400 ">
                      {posts[0].readingTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-white group-hover:text-[#9333EA] transition-colors ">
                    {posts[0].title}
                  </h2>

                  <p className="mt-4 text-gray-400 ">{posts[0].excerpt}</p>

                  <div className="mt-6">
                    <span className="inline-flex items-center text-[#9333EA] group-hover:text-white transition-colors ">
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Post Grid */}
        {posts.length > 1 && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-[#9333EA] transition-all duration-300 group h-full">
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm ">
                      <span className="text-[#9333EA] ">{post.category}</span>
                      <span className="text-gray-500 ">•</span>
                      <span className="text-gray-400 ">{post.date}</span>
                      <span className="text-gray-500 ">•</span>
                      <span className="text-gray-400 ">{post.readingTime}</span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-[#9333EA] transition-colors ">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-gray-400 ">{post.excerpt}</p>

                    <div className="mt-6">
                      <span className="inline-flex items-center text-[#9333EA] group-hover:text-white transition-colors ">
                        Read more
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </PageContainer>
      <Footer />
    </>
  );
}
