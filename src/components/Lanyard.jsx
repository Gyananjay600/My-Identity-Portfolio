'use client';

import { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { HiCheckBadge, HiSparkles } from "react-icons/hi2";
import { FaJava, FaReact, FaDocker } from "react-icons/fa6";
import { SiSpringboot, SiExpress, SiMysql } from "react-icons/si";
import "./Lanyard.css";

// Floating skills badges around the lanyard card
const floatingSkills = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    glow: "rgba(97, 218, 251, 0.35)",
    className: "absolute -left-4 sm:-left-10 top-12 sm:top-14 z-20",
    floatAnim: { y: [-6, 6, -6], rotate: [-3, 3, -3], duration: 4.2 },
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#ffffff",
    lightColor: "#111111",
    glow: "rgba(180, 180, 180, 0.3)",
    className: "absolute -right-4 sm:-right-10 top-14 sm:top-16 z-20",
    floatAnim: { y: [6, -6, 6], rotate: [3, -3, 3], duration: 4.8 },
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#F89820",
    glow: "rgba(248, 152, 32, 0.35)",
    className: "absolute -left-6 sm:-left-12 top-48 sm:top-52 z-20",
    floatAnim: { y: [-5, 7, -5], rotate: [-2, 4, -2], duration: 5.1 },
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    glow: "rgba(109, 179, 63, 0.35)",
    className: "absolute -right-6 sm:-right-12 top-46 sm:top-50 z-20",
    floatAnim: { y: [5, -7, 5], rotate: [2, -4, 2], duration: 4.5 },
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    glow: "rgba(0, 117, 143, 0.35)",
    className: "absolute -left-2 sm:-left-8 bottom-6 sm:bottom-8 z-20",
    floatAnim: { y: [-4, 6, -4], rotate: [-3, 2, -3], duration: 4.6 },
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    glow: "rgba(36, 150, 237, 0.35)",
    className: "absolute -right-2 sm:-right-8 bottom-6 sm:bottom-8 z-20",
    floatAnim: { y: [6, -5, 6], rotate: [3, -2, 3], duration: 5.3 },
  },
];

export default function Lanyard({
  name = "Gyananjay Sahoo",
  role = "Java Full Stack Developer",
  location = "Bhubaneswar, Odisha",
  image = "/assets/images/gyananjay.png",
  className = ""
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Motion values for interactive physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for natural swinging & return
  const springConfig = { damping: 15, stiffness: 120, mass: 1.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // 3D rotations derived from position
  const rotateX = useTransform(smoothY, [-100, 100], [22, -22]);
  const rotateY = useTransform(smoothX, [-100, 100], [-25, 25]);
  const rotateZ = useTransform(smoothX, [-100, 100], [-8, 8]);

  // Strap rotation linked to card offset
  const strapRotate = useTransform(smoothX, [-100, 100], [-18, 18]);

  // Subtle ambient breathing/swaying when idle
  useEffect(() => {
    if (isDragging) return;

    let frameId;
    let t = 0;
    const animateIdle = () => {
      t += 0.025;
      if (!isDragging) {
        x.set(Math.sin(t) * 10);
        y.set(Math.cos(t * 1.5) * 5);
      }
      frameId = requestAnimationFrame(animateIdle);
    };

    frameId = requestAnimationFrame(animateIdle);
    return () => cancelAnimationFrame(frameId);
  }, [isDragging, x, y]);

  // Pointer tracking when hovering without dragging
  const handlePointerMove = (e) => {
    if (isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.35;
    const offsetY = (e.clientY - centerY) * 0.25;
    x.set(Math.max(-80, Math.min(80, offsetX)));
    y.set(Math.max(-60, Math.min(60, offsetY)));
  };

  const handlePointerLeave = () => {
    if (!isDragging) {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`lanyard-container ${className}`}
      aria-label="Interactive 3D ID Badge"
    >
      {/* Floating Skill Badges with authentic brand colors and hover glow */}
      {floatingSkills.map((skill) => (
        <motion.div
          key={skill.name}
          className={skill.className}
          animate={{
            y: skill.floatAnim.y,
            rotate: skill.floatAnim.rotate,
          }}
          transition={{
            duration: skill.floatAnim.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            y: -6,
            transition: { duration: 0.2 },
          }}
        >
          <div
            className="group flex items-center gap-2 rounded-full border hairline bg-cream-soft/90 px-3 py-1.5 shadow-card backdrop-blur-md transition-all duration-300 hover:border-brass hover:shadow-premium dark:bg-[#111726]/90 cursor-default"
            style={{
              boxShadow: `0 4px 14px ${skill.glow}`,
            }}
          >
            <skill.icon
              size={15}
              style={{ color: skill.color }}
              className="transition-transform duration-300 group-hover:scale-125 dark:inline hidden"
            />
            <skill.icon
              size={15}
              style={{ color: skill.lightColor || skill.color }}
              className="transition-transform duration-300 group-hover:scale-125 dark:hidden inline"
            />
            <span className="font-mono text-[0.72rem] font-semibold text-ink transition-colors group-hover:text-brass">
              {skill.name}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Physics-responsive Strap */}
      <motion.div
        style={{ rotate: strapRotate }}
        className="lanyard-strap"
      >
        <div className="lanyard-strap-clip">
          <div className="lanyard-strap-ring" />
        </div>
      </motion.div>

      {/* 3D Draggable Card */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 80 }}
        dragElastic={0.4}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => {
          setIsDragging(false);
          x.set(0);
          y.set(0);
        }}
        style={{
          x: smoothX,
          y: smoothY,
          rotateX,
          rotateY,
          rotateZ,
        }}
        whileTap={{ scale: 0.98 }}
        className="lanyard-card-wrapper"
      >
        <div className="lanyard-card">
          {/* Holographic light sheen reflection */}
          <div className="lanyard-holo-sheen" />

          {/* Badge punch slot */}
          <div className="lanyard-slot" />

          {/* Card Top Brand & Security Tag */}
          <div className="flex items-center justify-between mb-2.5 px-1">
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brass text-cream-soft font-mono text-[0.65rem] font-bold">
                GS
              </span>
              <span className="font-mono text-[0.68rem] tracking-wider text-ink font-semibold uppercase">
                Dev Pass 2026
              </span>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[0.62rem] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Verified
            </span>
          </div>

          {/* Photo Frame with Gyananjay's Portrait */}
          <div className="lanyard-photo-box">
            <img
              src={image}
              alt={name}
              className="lanyard-photo"
              draggable="false"
            />
            {/* Corner Tech Badges */}
            <div className="absolute top-2 left-2 flex items-center gap-1 rounded-md bg-black/50 backdrop-blur-sm px-1.5 py-0.5 text-white font-mono text-[0.62rem]">
              <FaJava size={11} className="text-[#F89820]" />
              <span>Java 21</span>
            </div>
            <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-black/50 backdrop-blur-sm px-1.5 py-0.5 text-white font-mono text-[0.62rem]">
              <SiSpringboot size={10} className="text-[#6DB33F]" />
              <span>Spring</span>
            </div>
          </div>

          {/* Cardholder Information */}
          <div className="mt-3 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1">
                <h3 className="font-display text-base font-bold text-ink leading-tight">
                  {name}
                </h3>
                <HiCheckBadge size={15} className="text-brass shrink-0" />
              </div>
              <p className="font-mono text-[0.7rem] text-brass font-medium mt-0.5">
                {role}
              </p>
              <p className="text-[0.68rem] text-ink-soft mt-0.5">
                📍 {location}
              </p>
            </div>

            {/* Bottom Barcode & Security Strip */}
            <div className="pt-2 border-t hairline flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex gap-0.5 h-3.5 items-center opacity-70">
                  <span className="w-1 h-full bg-ink" />
                  <span className="w-0.5 h-full bg-ink" />
                  <span className="w-1.5 h-full bg-ink" />
                  <span className="w-0.5 h-full bg-ink" />
                  <span className="w-2 h-full bg-ink" />
                  <span className="w-1 h-full bg-ink" />
                  <span className="w-0.5 h-full bg-ink" />
                  <span className="w-1.5 h-full bg-ink" />
                </div>
                <p className="font-mono text-[0.56rem] text-ink-faint tracking-widest uppercase">
                  GS-FULLSTACK-DEV
                </p>
              </div>

              <div className="text-right">
                <span className="inline-flex items-center gap-1 font-mono text-[0.58rem] text-brass font-semibold">
                  <HiSparkles size={10} /> Grab &amp; Drag
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

