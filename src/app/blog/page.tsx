import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import PageContainer from "../components/PageContainer";
import { getAllPosts } from "@/lib/mdx";

export default async function Blog() {
  const posts = await getAllPosts();

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
            <div className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden group hover:border-[#9333EA] transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-[#9333EA]">{posts[0].category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{posts[0].date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{posts[0].readingTime}</span>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-white group-hover:text-[#9333EA] transition-colors">
                  <a href={`/blog/${posts[0].slug}`}>{posts[0].title}</a>
                </h2>

                <p className="mt-4 text-gray-400">{posts[0].excerpt}</p>

                <div className="mt-6">
                  <a
                    href={`/blog/${posts[0].slug}`}
                    className="inline-flex items-center text-[#9333EA] hover:text-white transition-colors"
                  >
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(1).map((post) => (
            <div
              key={post.slug}
              className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-[#9333EA] transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-[#9333EA]">{post.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{post.date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{post.readingTime}</span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-[#9333EA] transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>

                <p className="mt-3 text-gray-400">{post.excerpt}</p>

                <div className="mt-6">
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#9333EA] hover:text-white transition-colors"
                  >
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
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
