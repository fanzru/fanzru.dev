"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen({ show }: { show: boolean }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Animation effect - sync with parent component's timeout
  useEffect(() => {
    if (!show) {
      setProgress(0);
      setIsComplete(false);
      return;
    }

    // Reset states
    setProgress(0);
    setIsComplete(false);

    // Use requestAnimationFrame for smoother animation
    let startTime: number;
    let animationId: number;

    const animateWave = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      // Duration matched with ClientLayoutShell timeout (4300ms)
      const elapsed = timestamp - startTime;
      const duration = 4300;
      const progress = Math.min(elapsed / duration, 1);

      setProgress(progress);

      if (progress < 1) {
        animationId = requestAnimationFrame(animateWave);
      } else {
        setIsComplete(true);
      }
    };

    animationId = requestAnimationFrame(animateWave);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [show]);

  const displayText = "hi there!, i'm fanzru";

  // Calculate optimal parameters based on text length
  const textLength = displayText.length;
  // Shorter delay for longer text
  const charDelayFactor = Math.max(0.04, 0.1 - textLength * 0.002);
  // Faster wave speed for longer text
  const waveSpeedFactor = Math.min(2.0, 1.3 + textLength * 0.02);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B1120]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-[40px] sm:text-[60px] font-bold tracking-tight text-center relative">
              <div className="overflow-hidden">
                {/* Static outline text */}
                <div
                  className="relative"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px white",
                    fontFamily: "sans-serif",
                  }}
                >
                  {displayText}
                </div>

                {/* Each character with wave animation */}
                <div className="absolute top-0 left-0 flex whitespace-pre">
                  {displayText.split("").map((char, index) => {
                    // Calculate wave offset for each character
                    const charOffset = index * charDelayFactor;
                    // Adjusted wave speed based on text length
                    const wavePosition = Math.max(
                      0,
                      progress * waveSpeedFactor - charOffset
                    );
                    const fillPercent = Math.min(1, wavePosition) * 100;

                    // Dynamic wave angle
                    const waveAngle = 8 + Math.sin(index * 0.3) * 4;

                    return (
                      <div
                        key={index}
                        className="relative inline-block overflow-hidden"
                      >
                        {/* Character with clip-path for wave effect */}
                        <div
                          style={{
                            color: "white",
                            fontFamily: "sans-serif",
                            clipPath: `polygon(0 ${100 - fillPercent}%, 100% ${
                              100 - fillPercent - waveAngle
                            }%, 100% 100%, 0 100%)`,
                            transition: "clip-path 0.1s ease-out",
                          }}
                        >
                          {char}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Loading indicator with smoother transition */}
            <motion.div
              className="mt-4 text-white/60"
              animate={{ opacity: isComplete ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              loading... {Math.round(progress * 100)}%
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
