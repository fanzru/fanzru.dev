"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";

export default function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: "Modern E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, payment processing, and an intuitive admin dashboard.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "https://github.com/fanzru/ecommerce",
      image: "",
    },
    {
      title: "Cloud Infrastructure Manager",
      description:
        "A web application for managing cloud infrastructure across multiple providers, with automated deployment and monitoring capabilities.",
      tags: ["React", "Go", "Docker", "Kubernetes"],
      link: "https://github.com/fanzru/cloud-manager",
      image: "",
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "A real-time analytics platform that processes and visualizes data streams, built with modern web technologies and scalable architecture.",
      tags: ["React", "Node.js", "WebSocket", "Redis"],
      link: "https://github.com/fanzru/analytics",
      image: "",
    },
    {
      title: "Content Management System",
      description:
        "A headless CMS built for performance and flexibility, featuring a GraphQL API and customizable content types.",
      tags: ["GraphQL", "Node.js", "MongoDB", "React"],
      link: "https://github.com/fanzru/cms",
      image: "",
    },
  ];

  const getDefaultImageUrl = (projectTitle: string): string => {
    // Generate a random colorful SVG based on project title
    const hash = projectTitle
      .split("")
      .reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;

    // Create more distinct colors for each project
    const color1 = `${(hash * 1234) % 0xffffff}`.padStart(6, "0");
    const color2 = "9333EA"; // Brand color

    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='800' y1='0' y2='400' gradientTransform='rotate(${hue},400,200)'%3E%3Cstop offset='0' stop-color='%23${color1}'/%3E%3Cstop offset='1' stop-color='%23${color2}'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.15'%3E%3Cpath fill='%23FFF' d='M61.7 401c17.4-12.1 30.8-28.3 40.3-47.2 10.5-21 15.9-44.5 18.3-68.9 3-29.5 1-59.4-8.9-87.1-9.9-27.7-25.9-52.4-47.8-70.9-19.3-16.4-41.7-28-65.8-34.9v310h63.9z'/%3E%3C/g%3E%3C/svg%3E`;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 },
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
                    PROJECTS
                  </motion.span>
                </div>
              </div>

              <motion.h1
                className="mt-8 text-4xl font-bold text-white select-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Featured Projects
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-gray-400 select-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                A collection of my work in web development and distributed
                systems.
              </motion.p>

              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden group"
                    whileHover={{
                      y: -8,
                      borderColor: "#9333EA",
                      boxShadow: "0 10px 30px -15px rgba(147, 51, 234, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="aspect-video w-full bg-gray-800 relative overflow-hidden">
                      <Image
                        src={getDefaultImageUrl(project.title)}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        unoptimized={true}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                      <motion.div
                        className="absolute inset-0 bg-[#9333EA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 0.2 }}
                      />
                    </div>
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-semibold text-white group-hover:text-[#9333EA] transition-colors select-text"
                        whileHover={{ x: 2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p className="mt-3 text-gray-400 select-text">
                        {project.description}
                      </motion.p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tagIndex}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9333EA]/10 text-[#9333EA] select-text"
                            whileHover={{
                              backgroundColor: "rgba(147, 51, 234, 0.2)",
                              scale: 1.05,
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#9333EA] hover:text-white transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          View Project
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
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
