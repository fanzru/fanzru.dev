"use client";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import ThreeScene from "./components/ThreeScene";
import SkillCard from "./components/SkillCard";
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const skills = [
    "Web Development",
    "Distributed Systems",
    "Cloud Architecture",
    "DevOps",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "System Design",
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3500);
  }, []);

  return (
    <>
      <LoadingScreen />

      {isLoaded && (
        <>
          <Navigation />
          <PageContainer>
            {/* Hero Section */}
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-start">
                <span className="pr-3 bg-[#0B1120] text-sm text-[#9333EA]">
                  WELCOME TO MY SPACE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
              <div className="relative z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Building the Future with
                  <span className="block text-[#9333EA]">Web Technology</span>
                </h1>

                <p className="mt-6 text-lg lg:text-xl text-gray-400 max-w-2xl">
                  Software Engineer passionate about web development,
                  distributed systems, and creating innovative solutions for
                  modern applications.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/projects"
                    className="px-6 py-3 bg-[#9333EA] text-white text-center rounded-lg hover:bg-[#7928CA] transition-colors"
                  >
                    View Projects
                  </a>
                  <a
                    href="/blog"
                    className="px-6 py-3 border border-[#9333EA] text-white text-center rounded-lg hover:bg-[#9333EA]/10 transition-colors"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                <ThreeScene />
              </div>
            </div>

            {/* Featured Cards */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                    <FaCode className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Frontend Development
                  </h3>
                </div>
                <p className="text-gray-400">
                  Building modern and responsive web applications using React,
                  Next.js, and TypeScript with beautiful UI/UX design.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                    <FaServer className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Backend Development
                  </h3>
                </div>
                <p className="text-gray-400">
                  Developing scalable backend services with Go, Node.js, and
                  Python, focusing on performance and reliability.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                    <FaDatabase className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Database Design
                  </h3>
                </div>
                <p className="text-gray-400">
                  Expertise in both SQL and NoSQL databases, including
                  PostgreSQL, MongoDB, and Redis for optimal data management.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                    <FaCloud className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Cloud Infrastructure
                  </h3>
                </div>
                <p className="text-gray-400">
                  Implementing cloud solutions using AWS, Docker, and Kubernetes
                  for robust and scalable deployments.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-white mb-8">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </PageContainer>
          <Footer />
        </>
      )}
    </>
  );
}
