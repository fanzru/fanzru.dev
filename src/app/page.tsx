"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import ThreeScene from "./components/ThreeScene";
import SkillCard from "./components/SkillCard";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaEthereum,
} from "react-icons/fa";
import { SiSolana, SiWeb3Dotjs, SiSmartthings } from "react-icons/si";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const skills = [
    "Web3 Development",
    "Blockchain",
    "Smart Contracts",
    "dApp Architecture",
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "System Design",
  ];

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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
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
                    transition={{ delay: 0.4, type: "spring" }}
                    className="pr-3 bg-[#0B1120] text-sm text-[#9333EA]"
                  >
                    INNOVATING WITH WEB3
                  </motion.span>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8">
                <motion.div
                  className="relative z-10"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    Building the Future with
                    <motion.span
                      className="block text-[#9333EA]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Web3 Technology
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    className="mt-6 text-lg lg:text-xl text-gray-400 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    Fullstack Engineer specialized in Web3 development, Solana
                    ecosystem, and creating decentralized applications with
                    elegant, performant code.
                  </motion.p>

                  <motion.div
                    className="mt-8 flex flex-col sm:flex-row gap-4"
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.a
                      variants={item}
                      href="/projects"
                      className="px-6 py-3 bg-gradient-to-r from-[#9333EA] to-[#7928CA] text-white text-center rounded-lg hover:from-[#7928CA] hover:to-[#9333EA] transition-all duration-300 transform hover:scale-105"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Projects
                    </motion.a>
                    <motion.a
                      variants={item}
                      href="/blog"
                      className="px-6 py-3 border border-[#9333EA] text-white text-center rounded-lg hover:bg-[#9333EA]/10 transition-all duration-300 transform hover:scale-105"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read Blog
                    </motion.a>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden bg-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
                  style={{ isolation: "isolate" }}
                >
                  <ThreeScene />
                </motion.div>
              </div>

              {/* Web3 Stats Section */}
              <motion.div
                className="mt-20 py-8 px-6 bg-gray-900/30 rounded-xl border border-gray-800"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <h3 className="text-xl font-medium text-white mb-6 flex items-center">
                  <SiSolana className="mr-2 text-[#9333EA]" /> Web3 Journey
                  Starting
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">Learn</div>
                    <p className="text-gray-400">Exploring Web3 fundamentals</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">Build</div>
                    <p className="text-gray-400">Creating my first dApps</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">Grow</div>
                    <p className="text-gray-400">Joining the Web3 community</p>
                  </div>
                </div>
              </motion.div>

              {/* Featured Cards */}
              <motion.div
                className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {/* Card 1 */}
                <motion.div
                  variants={item}
                  className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                      <SiWeb3Dotjs className="w-5 h-5 text-[#9333EA]" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Web3 Development
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Building decentralized applications on Solana and Ethereum
                    with smart contracts and blockchain integration.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  variants={item}
                  className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                      <FaServer className="w-5 h-5 text-[#9333EA]" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Fullstack Engineering
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Developing complete solutions from front to back, with
                    React, Next.js, Node.js, and Python for performant
                    applications.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  variants={item}
                  className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                      <SiSolana className="w-5 h-5 text-[#9333EA]" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Solana Ecosystem
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Specialized in Solana blockchain development, building
                    high-performance dApps and NFT projects with Rust and
                    JavaScript.
                  </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  variants={item}
                  className="group p-6 bg-[#0B1120] rounded-lg border border-gray-800 hover:border-[#9333EA] transition-colors"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#9333EA]/10 rounded-lg">
                      <SiSmartthings className="w-5 h-5 text-[#9333EA]" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      Smart Contract Development
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Writing secure and optimized smart contracts for
                    decentralized applications and token systems.
                  </p>
                </motion.div>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                className="mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-3xl font-bold text-white mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Skills & Technologies
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div
                className="mt-32 mb-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
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
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      viewport={{ once: true }}
                      className="pr-3 bg-[#0B1120] text-sm text-[#9333EA]"
                    >
                      LET'S COLLABORATE
                    </motion.span>
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center text-center">
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
                        )}&body=${encodeURIComponent(
                          "Hi Fanzru,\n\nI came across your portfolio and I'm interested in collaborating on a project. Here are some details about what I have in mind:\n\n- Project Type: [Web3/Fullstack/Other]\n- Timeline: [Your timeline]\n- Budget: [Your budget, if applicable]\n\nLooking forward to discussing this opportunity further.\n\nBest regards,\n[Your Name]"
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
