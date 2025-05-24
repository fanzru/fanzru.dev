"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import type { Post } from "@/lib/mdx";

interface BlogContentProps {
  initialPosts: Post[];
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoaded(true);
    // Add a short delay to show loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  if (isLoading) {
    return (
      <>
        <Navigation />
        <PageContainer>
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-start">
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="pr-3 bg-[#0B1120] text-sm text-[#9333EA] select-text"
              >
                BLOG
              </motion.span>
            </div>
          </div>

          <motion.div
            className="mt-8 flex flex-col items-center justify-center min-h-[40vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="flex items-center justify-center space-x-3 mb-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-4 h-4 bg-[#9333EA] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      "0 0 0px rgba(147, 51, 234, 0.3)",
                      "0 0 10px rgba(147, 51, 234, 0.8)",
                      "0 0 0px rgba(147, 51, 234, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-4 h-4 bg-[#9333EA] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      "0 0 0px rgba(147, 51, 234, 0.3)",
                      "0 0 10px rgba(147, 51, 234, 0.8)",
                      "0 0 0px rgba(147, 51, 234, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                />
                <motion.div
                  className="w-4 h-4 bg-[#9333EA] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                    boxShadow: [
                      "0 0 0px rgba(147, 51, 234, 0.3)",
                      "0 0 10px rgba(147, 51, 234, 0.8)",
                      "0 0 0px rgba(147, 51, 234, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 0.3,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                />
              </motion.div>

              <motion.p
                className="text-xl text-gray-400 mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Loading posts
              </motion.p>
            </div>
          </motion.div>
        </PageContainer>
        <Footer />
      </>
    );
  }

  if (posts.length === 0) {
    return (
      <>
        <Navigation />
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <PageContainer>
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-800"></div>
                  </div>
                  <div className="relative flex justify-start">
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="pr-3 bg-[#0B1120] text-sm text-[#9333EA] select-text"
                    >
                      BLOG
                    </motion.span>
                  </div>
                </div>

                <motion.h1
                  className="mt-8 text-4xl font-bold text-white select-text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Latest Posts
                </motion.h1>
                <motion.p
                  className="mt-4 text-xl text-gray-400 select-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Thoughts, tutorials, and insights about web development and
                  technology.
                </motion.p>

                <motion.div
                  className="flex flex-col items-center justify-center min-h-[40vh]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <motion.div
                    className="mb-8 p-6 rounded-full bg-[#9333EA]/5 border border-[#9333EA]/10"
                    initial={{ scale: 0.8 }}
                    animate={{
                      scale: 1,
                      boxShadow: [
                        "0 0 0px rgba(147, 51, 234, 0)",
                        "0 0 20px rgba(147, 51, 234, 0.3)",
                        "0 0 0px rgba(147, 51, 234, 0)",
                      ],
                    }}
                    transition={{
                      scale: { delay: 0.6, type: "spring", stiffness: 100 },
                      boxShadow: {
                        repeat: Infinity,
                        duration: 3,
                      },
                    }}
                  >
                    <svg
                      className="w-16 h-16 text-[#9333EA]/50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  <motion.p
                    className="text-gray-400 text-lg select-text"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    No blog posts found.
                  </motion.p>
                  <motion.button
                    className="mt-4 px-6 py-3 bg-[#9333EA]/10 text-[#9333EA] rounded-md border border-[#9333EA]/20 hover:bg-[#9333EA]/20 transition-all"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 10px 20px -10px rgba(147, 51, 234, 0.5)",
                      borderColor: "rgba(147, 51, 234, 0.5)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Create your first post
                  </motion.button>
                </motion.div>
              </PageContainer>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PageContainer>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-start">
                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="pr-3 bg-[#0B1120] text-sm text-[#9333EA] select-text"
                  >
                    BLOG
                  </motion.span>
                </div>
              </div>

              <motion.h1
                className="mt-8 text-4xl font-bold text-white select-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Latest Posts
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-gray-400 select-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Thoughts, tutorials, and insights about web development and
                technology.
              </motion.p>

              {/* Featured Post */}
              {posts[0] && (
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  <Link href={`/blog/${posts[0].slug}`} className="block">
                    <motion.div
                      className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden group relative"
                      whileHover={{
                        y: -8,
                        borderColor: "#9333EA",
                        boxShadow: "0 15px 30px -10px rgba(147, 51, 234, 0.4)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#9333EA]/0 via-[#9333EA]/0 to-[#9333EA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        animate={{ opacity: 0 }}
                        whileHover={{
                          opacity: 1,
                          background:
                            "linear-gradient(90deg, rgba(147, 51, 234, 0) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(147, 51, 234, 0) 100%)",
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="p-8">
                        <motion.div
                          className="flex items-center space-x-2 text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <motion.span
                            className="text-[#9333EA] select-text relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                          >
                            <motion.span className="relative z-10">
                              {posts[0].category}
                            </motion.span>
                            <motion.span
                              className="absolute bottom-0 left-0 h-[2px] bg-[#9333EA] w-0 group-hover:w-full"
                              transition={{ duration: 0.3 }}
                            />
                          </motion.span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 select-text">
                            {posts[0].date}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 select-text">
                            {posts[0].readingTime}
                          </span>
                        </motion.div>

                        <motion.h2
                          className="mt-4 text-2xl font-bold text-white group-hover:text-[#9333EA] transition-colors select-text"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          {posts[0].title}
                        </motion.h2>

                        <motion.p
                          className="mt-4 text-gray-400 select-text"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          {posts[0].excerpt}
                        </motion.p>

                        <motion.div
                          className="mt-6"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.9 }}
                        >
                          <motion.span
                            className="inline-flex items-center text-[#9333EA] group-hover:text-white transition-colors"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            Read more
                            <motion.svg
                              className="ml-2 w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              initial={{ x: 0 }}
                              animate={{ x: 0 }}
                              whileHover={{
                                x: 3,
                                transition: {
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                  duration: 0.6,
                                },
                              }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </motion.svg>
                          </motion.span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )}

              {/* Blog Post Grid */}
              {posts.length > 1 && (
                <motion.div
                  className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {posts.slice(1).map((post, index) => (
                    <motion.div key={post.slug} variants={item}>
                      <Link href={`/blog/${post.slug}`} className="block">
                        <motion.div
                          className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden group h-full relative"
                          whileHover={{
                            y: -5,
                            borderColor: "#9333EA",
                            boxShadow:
                              "0 10px 30px -15px rgba(147, 51, 234, 0.5)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#9333EA]/0 via-[#9333EA]/0 to-[#9333EA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            animate={{ opacity: 0 }}
                            whileHover={{
                              opacity: 1,
                              background:
                                "linear-gradient(90deg, rgba(147, 51, 234, 0) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(147, 51, 234, 0) 100%)",
                            }}
                            transition={{ duration: 0.5 }}
                          />
                          <motion.div
                            className="absolute -inset-0.5 bg-gradient-to-r from-[#9333EA]/0 to-[#9333EA]/0 opacity-0 rounded-lg blur group-hover:opacity-20"
                            whileHover={{ opacity: 1 }}
                          />
                          <div className="p-6 relative z-10">
                            <div className="flex items-center space-x-2 text-sm">
                              <motion.span
                                className="text-[#9333EA] select-text relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                              >
                                <motion.span className="relative z-10">
                                  {post.category}
                                </motion.span>
                                <motion.span
                                  className="absolute bottom-0 left-0 h-[2px] bg-[#9333EA] w-0 group-hover:w-full"
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 select-text">
                                {post.date}
                              </span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 select-text">
                                {post.readingTime}
                              </span>
                            </div>

                            <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-[#9333EA] transition-colors select-text">
                              {post.title}
                            </h3>

                            <p className="mt-3 text-gray-400 select-text">
                              {post.excerpt}
                            </p>

                            <div className="mt-6">
                              <motion.span
                                className="inline-flex items-center text-[#9333EA] group-hover:text-white transition-colors"
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                Read more
                                <motion.svg
                                  className="ml-2 w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  whileHover={{
                                    x: 3,
                                    transition: {
                                      repeat: Infinity,
                                      repeatType: "reverse",
                                      duration: 0.6,
                                    },
                                  }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </motion.svg>
                              </motion.span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
