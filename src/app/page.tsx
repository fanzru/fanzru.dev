"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiKubernetes,
  SiDocker,
  SiWeb3Dotjs,
  SiSolana,
  SiEthereum,
  SiNodedotjs,
  SiPostgresql,
  SiRust,
  SiSolidity,
} from "react-icons/si";
import {
  FaCode,
  FaLayerGroup,
  FaHandSparkles,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { CgCode } from "react-icons/cg";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BsHandIndex } from "react-icons/bs";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
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
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const techStack = [
    { icon: <SiTypescript className="text-[#3178c6]" />, name: "TypeScript" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-[#38bdf8]" />, name: "Tailwind" },
    { icon: <SiNodedotjs className="text-[#68a063]" />, name: "Node.js" },
    { icon: <SiGo className="text-[#00ADD8]" />, name: "Go" },
    { icon: <SiRust className="text-[#000000]" />, name: "Rust" },
    { icon: <SiSolidity className="text-[#363636]" />, name: "Solidity" },
    { icon: <SiDocker className="text-[#2496ED]" />, name: "Docker" },
    { icon: <SiKubernetes className="text-[#326CE5]" />, name: "Kubernetes" },
    { icon: <SiSolana className="text-[#9945FF]" />, name: "Solana" },
    { icon: <SiPostgresql className="text-[#31648C]" />, name: "PostgreSQL" },
  ];

  const skills = [
    "Web3 Development",
    "Blockchain",
    "Smart Contracts",
    "dApp Architecture",
    "Frontend Development",
    "Backend Development",
    "System Design",
    "API Development",
  ];

  const web3Points = [
    {
      icon: <CgCode className="w-6 h-6 text-[#9333EA]" />,
      title: "Functional & Beautiful",
      description:
        "Delivering elegant interfaces powered by robust and scalable logic.",
    },
    {
      icon: <HiOutlineChartSquareBar className="w-6 h-6 text-[#9333EA]" />,
      title: "Detail Obsessed",
      description:
        "From smart contract structure to UI padding — everything matters.",
    },
    {
      icon: <BsHandIndex className="w-6 h-6 text-[#9333EA]" />,
      title: "Clean & Efficient Code",
      description:
        "Prioritizing maintainable, gas-optimized, and high-performance codebases.",
    },
  ];

  // Copy email function
  const copyEmail = () => {
    navigator.clipboard.writeText("fanzru.work@gmail.com");
    setCopied(true);
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
              {/* Hero Section */}
              <div className="min-h-[80vh] flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.p
                      className="text-xl sm:text-2xl mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      hi!{" "}
                      <span className="inline-block ml-1 transform rotate-12">
                        👋
                      </span>
                    </motion.p>
                    <motion.h1
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      I'm <span className="text-[#9333EA]">Ananda Affan</span>,
                    </motion.h1>
                    <motion.p
                      className="text-base sm:text-lg md:text-xl text-gray-300 mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      a <span className="font-medium">fullstack developer</span>{" "}
                      bridging <span className="text-[#9333EA]">Web2</span> &{" "}
                      <span className="text-[#9333EA]">Web3</span> with
                      <br className="hidden sm:block" />
                      intuitive, clean and modern design approach.
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.button
                        onClick={scrollToContact}
                        className="px-6 py-2.5 sm:py-3 bg-[#9333EA] text-white rounded-lg hover:bg-[#7e22ce] transition-colors text-sm sm:text-base"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get in Touch
                      </motion.button>
                      <motion.a
                        href="/story"
                        className="px-6 py-2.5 sm:py-3 border border-gray-600 text-white rounded-lg hover:border-[#9333EA] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        My Story
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* 3D Web3 Animated Element */}
                  <motion.div
                    className="relative w-full h-full min-h-[300px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
                        {/* Web3 animated background effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-[#9333EA]/20 blur-3xl"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />

                        {/* Floating tech icons */}
                        <motion.div
                          className="absolute top-1/4 left-1/4 text-3xl text-[#61dafb]"
                          animate={{
                            y: [0, -15, 0],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          <SiReact />
                        </motion.div>

                        <motion.div
                          className="absolute top-1/3 right-1/4 text-3xl text-[#9945FF]"
                          animate={{
                            y: [0, 15, 0],
                            rotate: [0, -10, 0],
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5,
                          }}
                        >
                          <SiSolana />
                        </motion.div>

                        <motion.div
                          className="absolute bottom-1/3 right-1/3 text-3xl text-[#627EEA]"
                          animate={{
                            y: [0, -10, 0],
                            x: [0, 10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1,
                          }}
                        >
                          <SiEthereum />
                        </motion.div>

                        <motion.div
                          className="absolute bottom-1/4 left-1/3 text-3xl text-white"
                          animate={{
                            y: [0, 10, 0],
                            x: [0, -10, 0],
                          }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1.5,
                          }}
                        >
                          <SiWeb3Dotjs />
                        </motion.div>

                        {/* Central code block */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-xl bg-[#0B1120]/80 border border-[#9333EA]/30 shadow-lg shadow-[#9333EA]/20 backdrop-blur-sm"
                          animate={{
                            rotateY: [0, 360],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <pre className="text-xs text-[#61dafb] font-mono">
                            <code>{"<Web3 />"}</code>
                          </pre>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Tech Stack Section */}
                <motion.div
                  className="mb-20 sm:mb-24"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.p className="text-sm sm:text-base text-gray-400 mb-4">
                    current favorite tech stack/tools:
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-3 sm:gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        variants={item}
                        className="flex items-center gap-1.5 sm:gap-2 bg-gray-900/50 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md border border-gray-800 text-xs sm:text-sm"
                        whileHover={{
                          y: -3,
                          borderColor: "#9333EA",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <span className="text-lg sm:text-xl">{tech.icon}</span>
                        <span className="text-gray-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Web3 Points Section */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-24"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {web3Points.map((point, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex flex-col items-center text-center p-4 sm:p-6 border-collapse"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="p-2.5 sm:p-3 rounded-full bg-[#241b2d] mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      {point.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 max-w-md">
                      {point.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Motivational Quote Section */}
              <motion.div
                className="py-20 sm:py-28 text-center relative mb-20 sm:mb-28"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20 text-7xl sm:text-9xl font-bold text-gray-700">
                  "
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20 text-7xl sm:text-9xl font-bold text-gray-700">
                  "
                </div>
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  It's not just how it{" "}
                  <span className="text-[#9333EA]">looks</span>,
                  <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
                    <span className="h-0.5 w-12 sm:w-16 bg-gray-700"></span>
                    it's how it <span className="text-white">works</span>
                    <span className="h-0.5 w-12 sm:w-16 bg-gray-700"></span>
                  </div>
                  — <span className="text-[#9333EA]">inside</span> and{" "}
                  <span className="text-white">out</span>.
                </motion.h2>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                className="mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-800"></div>
                  </div>
                  <div className="relative flex justify-start">
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="pr-3 bg-[#0B1120] text-sm text-[#9333EA]"
                    >
                      EXPERTISE
                    </motion.span>
                  </div>
                </motion.div>

                <motion.h2
                  className="text-3xl font-bold text-white mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Skills & Technologies
                </motion.h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors"
                    >
                      <p className="text-white font-medium">{skill}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                ref={contactRef}
                className="mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-800"></div>
                  </div>
                  <div className="relative flex justify-start">
                    <motion.span
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="pr-3 bg-[#0B1120] text-sm text-[#9333EA]"
                    >
                      LET'S COLLABORATE
                    </motion.span>
                  </div>
                </motion.div>

                <div className="flex flex-col items-center text-center">
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Ready to Build Something{" "}
                    <span className="text-[#9333EA]">Amazing</span> Together?
                  </motion.h2>

                  <motion.p
                    className="mt-6 text-lg text-gray-400 max-w-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    I'm open to collaboration on Web3 projects, fullstack
                    development, or anything innovative in the tech space. Let's
                    connect and create something exceptional.
                  </motion.p>

                  <motion.div
                    className="mt-10 p-6 bg-gray-900/30 rounded-xl border border-gray-800 max-w-md w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      boxShadow: "0 0 25px rgba(147, 51, 234, 0.2)",
                      borderColor: "rgba(147, 51, 234, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-center justify-center space-x-3 text-[#9333EA] mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="font-medium">Get in touch</span>
                    </div>

                    <motion.a
                      href="mailto:fanzru.work@gmail.com"
                      className={`block text-white text-xl font-bold text-center transition-colors hover:text-[#9333EA] relative ${
                        copied ? "text-[#9333EA]" : ""
                      }`}
                    >
                      fanzru.work@gmail.com
                      <AnimatePresence>
                        {copied && (
                          <motion.div
                            className="absolute -top-8 left-0 right-0 text-center text-white bg-[#9333EA] px-3 py-1 rounded-md text-sm font-normal"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            Copied to clipboard!
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.a>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <motion.button
                        onClick={copyEmail}
                        className={`flex-1 py-3 bg-gradient-to-r ${
                          copied
                            ? "from-[#9333EA] to-[#7928CA] text-white"
                            : "from-[#9333EA]/10 to-[#7928CA]/10 text-white"
                        } text-center rounded-lg border ${
                          copied
                            ? "border-[#9333EA]"
                            : "border-[#9333EA]/20 hover:border-[#9333EA]/50"
                        } transition-all duration-300 relative overflow-hidden`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {copied ? "Copied!" : "Copy Email"}
                        {copied && (
                          <motion.span
                            className="absolute inset-0 bg-[#9333EA]/20"
                            initial={{ scale: 0, borderRadius: "100%" }}
                            animate={{
                              scale: 2,
                              borderRadius: "0%",
                              opacity: 0,
                            }}
                            transition={{ duration: 1 }}
                          />
                        )}
                      </motion.button>

                      <motion.a
                        href={`mailto:fanzru.work@gmail.com?subject=${encodeURIComponent(
                          "Collaboration Opportunity"
                        )}`}
                        className="flex-1 py-3 bg-gradient-to-r from-[#9333EA] to-[#7928CA] text-white text-center rounded-lg hover:from-[#7928CA] hover:to-[#9333EA] transition-all duration-300"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Email
                      </motion.a>
                    </div>

                    <div className="mt-4 text-xs text-gray-500 text-center">
                      Looking forward to collaborating on innovative Web3
                      projects!
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}
