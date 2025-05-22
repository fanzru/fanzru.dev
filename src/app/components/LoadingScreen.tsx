"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B1120] min-h-screen w-full"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: [0, 1, 1, 0],
            transition: {
              opacity: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
              scale: {
                duration: 0.5,
              },
            },
          }}
          className="text-5xl md:text-7xl font-bold tracking-tight flex items-center gap-2"
        >
          <span className="text-white">fanzru</span>
          <motion.span
            animate={{
              color: ["#9333EA", "#A855F7", "#9333EA"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            .
          </motion.span>
          <span className="text-white">dev</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              color: ["#9333EA", "#A855F7", "#9333EA"],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.3 },
              x: { duration: 0.5, delay: 0.3 },
              color: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="font-light"
          >
            world
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
