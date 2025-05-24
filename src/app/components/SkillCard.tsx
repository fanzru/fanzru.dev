"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiKubernetes,
  SiDocker,
  SiApachekafka,
  SiRedis,
  SiAmazonwebservices,
  SiGooglecloud,
  SiTerraform,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiAnsible,
  SiVuedotjs,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiOpenjdk,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiMicrodotblog,
  SiCloudflare,
  SiApachenetbeanside,
  SiOpenapiinitiative,
} from "react-icons/si";

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

// Mapping string ke icon component
const logoIcons: Record<string, React.ReactNode> = {
  react: <SiReact size={28} />,
  nextjs: <SiNextdotjs size={28} />,
  typescript: <SiTypescript size={28} />,
  javascript: <SiJavascript size={28} />,
  kubernetes: <SiKubernetes size={28} />,
  docker: <SiDocker size={28} />,
  kafka: <SiApachekafka size={28} />,
  redis: <SiRedis size={28} />,
  aws: <SiAmazonwebservices size={28} />,
  gcp: <SiGooglecloud size={28} />,
  terraform: <SiTerraform size={28} />,
  github: <SiGithub size={28} />,
  gitlab: <SiGitlab size={28} />,
  jenkins: <SiJenkins size={28} />,
  ansible: <SiAnsible size={28} />,
  vue: <SiVuedotjs size={28} />,
  tailwind: <SiTailwindcss size={28} />,
  sass: <SiSass size={28} />,
  nodejs: <SiNodedotjs size={28} />,
  python: <SiPython size={28} />,
  go: <SiGo size={28} />,
  java: <SiOpenjdk size={28} />,
  postgresql: <SiPostgresql size={28} />,
  mongodb: <SiMongodb size={28} />,
  mysql: <SiMysql size={28} />,
  architecture: <SiApachenetbeanside size={28} />,
  microservices: <SiMicrodotblog size={28} />,
  api: <SiOpenapiinitiative size={28} />,
  cloud: <SiCloudflare size={28} />,
};

// Predefined positions for 4 items (most we have in any category)
const positions = [
  { top: "20%", left: "20%", rotate: "0deg" },
  { top: "20%", left: "70%", rotate: "90deg" },
  { top: "70%", left: "20%", rotate: "270deg" },
  { top: "70%", left: "70%", rotate: "180deg" },
];

export default function SkillCard({ skill }: { skill: string }) {
  const items = useMemo(() => {
    return logos[skill as keyof typeof logos] || [];
  }, [skill]);

  return (
    <motion.div
      className="p-4 bg-gray-900/30 rounded-lg border border-gray-800 relative overflow-hidden group h-24"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10">
        <p className="text-white font-medium">{skill}</p>
      </div>

      {/* Background Logos */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
        {items.map((logo, index) => (
          <div
            key={`${skill}-${logo}-${index}`}
            className="absolute text-[#9333EA] text-xs font-mono flex items-center justify-center"
            style={positions[index % positions.length]}
          >
            {logoIcons[logo] || <span>{logo}</span>}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
