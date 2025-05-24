"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import PageTitle from "../components/PageTitle";
import Image from "next/image";

export default function Profile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (emailCopied) {
      const timer = setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [emailCopied]);

  const copyEmail = () => {
    navigator.clipboard.writeText("fattahilaaf080701@gmail.com");
    setEmailCopied(true);
  };

  const skills = [
    {
      category: "Soft Skills",
      items: [
        "Scrum",
        "Agile",
        "Product Management",
        "Project Management",
        "Marketing",
        "Business",
        "English",
      ],
    },
    {
      category: "Languages & Frameworks",
      items: [
        "Go",
        "TypeScript",
        "React",
        "Next.js",
        "Laravel",
        "Flutter",
        "Node.js",
        "Express.js",
        "Ruby",
        "Rails",
        "Sinatra",
      ],
    },
    {
      category: "Backend & Database",
      items: ["PostgreSQL", "Redis", "MongoDB", "MySQL", "Kibana"],
    },
    {
      category: "DevOps & Tools",
      items: [
        "Docker",
        "Kubernetes",
        "GCP",
        "AWS",
        "CI/CD",
        "Nginx",
        "Ubuntu",
        "Cloudflare",
      ],
    },
  ];

  const experiences = [
    {
      title: "Software Engineer - Full Stack",
      company: "Tiket.com",
      period: "Oct 2022 - Present",
      description:
        "Engineered company-wide wishlist microservice handling 80,000+ RPM with minimal infrastructure (0.5 CPU core, 512MB RAM). Led development of critical features including Refund 4.0, Self Rebooking, and payment integrations.",
    },
    {
      title: "Founder - Product Engineering",
      company: "Astabyte.com",
      period: "Aug 2023 - Present",
      description:
        "Orchestrated cross-functional development teams while establishing comprehensive product roadmaps through detailed PRDs, BPMN diagrams, and project timelines that accelerated time-to-market by 30%.",
    },
    {
      title: "Senior Fullstack Engineer",
      company: "Waizly",
      period: "Juli 2024 - Jan 2025",
      description:
        "Revitalized critical Sales Management System through comprehensive refactoring with Laravel, Bootstrap, jQuery, and PostgreSQL that reduced system latency by 65%.",
    },
  ];

  const education = [
    {
      school: "Telkom University",
      degree: "Bachelor of Computer Science",
      period: "Sept 2019 - Mar 2023",
      description:
        "IPK: 3.91/4.00 Cumlaude (with Successfully Owing HaKI SummaRu)",
      achievements: [
        "Research & Writing",
        "Organization",
        "Internship",
        "Laboratory Assistant",
        "Research Assistant",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

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
                    PROFILE
                  </motion.span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Info */}
                <motion.div
                  className="lg:col-span-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 sticky top-4"
                    whileHover={{
                      boxShadow: "0 0 25px rgba(147, 51, 234, 0.1)",
                      borderColor: "rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    <motion.div
                      className="aspect-square w-full max-w-[300px] mx-auto bg-gray-800/50 rounded-lg mb-6 overflow-hidden relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Image
                        src="https://api.dicebear.com/7.x/pixel-art/svg?seed=fanzru&size=128&scale=100&radius=0"
                        alt="Fanzru Avatar"
                        width={300}
                        height={300}
                        className="object-contain p-8 transition-transform duration-300 group-hover:scale-110"
                        priority
                        unoptimized
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </motion.div>
                    <motion.h2
                      className="text-2xl font-bold text-white select-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Ananda Affan Fattahila
                    </motion.h2>
                    <motion.p
                      className="mt-2 text-gray-400 select-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Full Stack & AI Engineer
                    </motion.p>

                    <motion.div
                      className="mt-6 space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                      >
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
                        <span className="text-gray-400 select-text">
                          Indonesia
                        </span>
                      </motion.div>
                      <motion.div
                        className="flex items-center space-x-2 relative"
                        variants={itemVariants}
                      >
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
                        <motion.span
                          className={`text-gray-400 hover:text-[#9333EA] cursor-pointer select-text ${
                            emailCopied ? "text-[#9333EA]" : ""
                          }`}
                          onClick={copyEmail}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          fattahilaaf080701@gmail.com
                        </motion.span>
                        <AnimatePresence>
                          {emailCopied && (
                            <motion.span
                              className="absolute -right-16 -top-2 text-xs bg-[#9333EA] text-white px-2 py-1 rounded"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                            >
                              Copied!
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <motion.div
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                      >
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
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                        <motion.a
                          href="https://github.com/fanzru"
                          className="text-gray-400 hover:text-white select-text"
                          whileHover={{ x: 2, color: "#fff" }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          github.com/fanzru
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Main Content */}
                <motion.div
                  className="lg:col-span-2 space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {/* About Section */}
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(147, 51, 234, 0.1)",
                      borderColor: "rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    <motion.h3
                      className="text-xl font-semibold text-white mb-4 select-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      About Me
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 select-text"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Hi, I'm Affan as a Full Stack Engineer & AI Engineer with
                      4.5+ years experience at companies like XL Axiata, GoTo,
                      and Tokopedia. Passionate about AI, Blockchain (member of
                      Akademi Crypto), Software, Business and Product
                      Engineering. I have tried many things from Product
                      Manager, Business Analyst, UI/UX Design, Software Engineer
                      (Backend Frontend), AI Engineer, Data Science and Mobile
                      Engineer.
                    </motion.p>
                  </motion.div>

                  {/* Skills Section */}
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(147, 51, 234, 0.1)",
                      borderColor: "rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    <motion.h3
                      className="text-xl font-semibold text-white mb-6 select-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Skills
                    </motion.h3>
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                          key={skillGroup.category}
                          variants={itemVariants}
                          transition={{ delay: groupIndex * 0.1 }}
                        >
                          <h4 className="text-[#9333EA] font-medium mb-3 select-text">
                            {skillGroup.category}
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {skillGroup.items.map((skill, index) => (
                              <motion.div
                                key={skill}
                                className="bg-gray-800/50 px-3 py-2 rounded-lg text-sm text-gray-300 select-text"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.05 * index }}
                                whileHover={{
                                  backgroundColor: "rgba(147, 51, 234, 0.2)",
                                  color: "#fff",
                                  scale: 1.03,
                                  transition: { duration: 0.2 },
                                }}
                              >
                                {skill}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Experience Section */}
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(147, 51, 234, 0.1)",
                      borderColor: "rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    <motion.h3
                      className="text-xl font-semibold text-white mb-6 select-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Experience
                    </motion.h3>
                    <motion.div
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {experiences.map((exp, index) => (
                        <motion.div
                          key={index}
                          className="border-l-2 border-[#9333EA] pl-4"
                          variants={itemVariants}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{
                            x: 4,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <h4 className="text-white font-medium select-text">
                            {exp.title}
                          </h4>
                          <p className="text-sm text-[#9333EA] select-text">
                            {exp.company} • {exp.period}
                          </p>
                          <p className="mt-2 text-gray-400 select-text">
                            {exp.description}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Education Section */}
                  <motion.div
                    className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(147, 51, 234, 0.1)",
                      borderColor: "rgba(147, 51, 234, 0.3)",
                    }}
                  >
                    <motion.h3
                      className="text-xl font-semibold text-white mb-6 select-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      Education
                    </motion.h3>
                    <motion.div
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {education.map((edu, index) => (
                        <motion.div
                          key={index}
                          className="border-l-2 border-[#9333EA] pl-4"
                          variants={itemVariants}
                          whileHover={{
                            x: 4,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <h4 className="text-white font-medium select-text">
                            {edu.school}
                          </h4>
                          <p className="text-sm text-[#9333EA] select-text">
                            {edu.degree} • {edu.period}
                          </p>
                          <p className="mt-2 text-gray-400 select-text">
                            {edu.description}
                          </p>
                          <motion.ul
                            className="mt-2 list-disc list-inside text-gray-400"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                className="text-sm select-text"
                                variants={itemVariants}
                                transition={{ delay: i * 0.1 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
