'use client';

import { FaJava, FaReact, FaDocker, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa6";
import { SiSpringboot, SiSpring, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiPostman, SiVite } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";
import "./LogoLoop.css";

const TECH_LOGOS = [
  { name: "Java 21", icon: FaJava, color: "hover:text-[#f89820]" },
  { name: "Spring Boot", icon: SiSpringboot, color: "hover:text-[#6db33f]" },
  { name: "React", icon: FaReact, color: "hover:text-[#61dafb]" },
  { name: "MySQL", icon: SiMysql, color: "hover:text-[#00758f]" },
  { name: "Spring AI", icon: HiSparkles, color: "hover:text-brass" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#336791]" },
  { name: "Docker", icon: FaDocker, color: "hover:text-[#2496ed]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#38bdf8]" },
  { name: "MongoDB", icon: SiMongodb, color: "hover:text-[#47a248]" },
  { name: "Node.js", icon: FaNodeJs, color: "hover:text-[#539e43]" },
  { name: "Postman", icon: SiPostman, color: "hover:text-[#ff6c37]" },
  { name: "Vite", icon: SiVite, color: "hover:text-[#646cff]" },
  { name: "Git", icon: FaGitAlt, color: "hover:text-[#f05032]" },
];

export default function LogoLoop({ className = "" }) {
  // Duplicate for seamless infinite loop
  const displayLogos = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <div className={`logo-loop-container ${className}`} aria-label="Technology Stack Ribbon">
      <div className="logo-loop-track">
        {displayLogos.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${idx}`}
              className={`flex items-center gap-2.5 rounded-2xl border hairline bg-cream-soft/80 backdrop-blur-sm px-4 py-2.5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-brass hover:shadow-card text-ink-soft cursor-pointer ${tech.color}`}
            >
              <Icon size={19} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-mono text-xs font-medium tracking-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

