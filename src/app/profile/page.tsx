"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Profile() {
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    // Using Multiavatar for reliable and cool avatar
    const hash = Math.random().toString(36).substring(7);
    setAvatarUrl(`https://api.multiavatar.com/${hash}.svg`);
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Go", "PostgreSQL", "Redis"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Linux"] },
  ];

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
            <span className="pr-3 bg-[#0B1120] text-sm text-[#9333EA]">
              PROFILE
            </span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <div className="aspect-square w-full max-w-[300px] mx-auto bg-gray-800/50 rounded-lg mb-6 overflow-hidden relative group">
                {avatarUrl && (
                  <Image
                    src={avatarUrl}
                    alt="Fanzru Cool Avatar"
                    width={300}
                    height={300}
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                    priority
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h2 className="text-2xl font-bold text-white">Fanzru</h2>
              <p className="mt-2 text-gray-400">Software Engineer</p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-[#9333EA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span className="text-gray-400">Indonesia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-[#9333EA]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">fanzru.work@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">
                About Me
              </h3>
              <p className="text-gray-400">
                A passionate software engineer with expertise in modern web
                development, distributed systems, and scalable applications. I
                love building innovative solutions that combine performance,
                reliability, and excellent user experience.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="text-[#9333EA] font-medium mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {skillGroup.items.map((skill) => (
                        <div
                          key={skill}
                          className="bg-gray-800/50 px-3 py-2 rounded-lg text-sm text-gray-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-[#9333EA] pl-4">
                  <h4 className="text-white font-medium">
                    Senior Software Engineer
                  </h4>
                  <p className="text-sm text-[#9333EA]">
                    Company Name • 2022 - Present
                  </p>
                  <p className="mt-2 text-gray-400">
                    Led development of scalable web applications and distributed
                    systems. Implemented modern development practices and
                    mentored junior developers.
                  </p>
                </div>
                <div className="border-l-2 border-[#9333EA] pl-4">
                  <h4 className="text-white font-medium">Software Engineer</h4>
                  <p className="text-sm text-[#9333EA]">
                    Previous Company • 2020 - 2022
                  </p>
                  <p className="mt-2 text-gray-400">
                    Developed and maintained microservices architecture.
                    Improved application performance and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
      <Footer />
    </>
  );
}
