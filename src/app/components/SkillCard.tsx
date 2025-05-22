"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const logos = {
  "Web Development": ["react", "nextjs", "typescript", "javascript"],
  "Distributed Systems": ["kubernetes", "docker", "kafka", "redis"],
  "Cloud Architecture": ["aws", "gcp", "azure", "terraform"],
  DevOps: ["github", "gitlab", "jenkins", "ansible"],
  "Frontend Development": ["react", "vue", "tailwind", "sass"],
  "Backend Development": ["nodejs", "python", "go", "java"],
  "Database Design": ["postgresql", "mongodb", "mysql", "redis"],
  "System Design": ["architecture", "microservices", "api", "cloud"],
};

export default function SkillCard({ skill }: { skill: string }) {
  return (
    <motion.div
      className="p-4 bg-gray-900/30 rounded-lg border border-gray-800 relative overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10">
        <p className="text-white font-medium">{skill}</p>
      </div>

      {/* Background Logos */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
        {logos[skill as keyof typeof logos]?.map((logo, index) => (
          <div
            key={logo}
            className="absolute text-[#9333EA] text-xs font-mono"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {logo}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
