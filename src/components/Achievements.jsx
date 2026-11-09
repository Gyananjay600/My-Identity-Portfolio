'use client';

import { motion } from "framer-motion";
import { Award, Trophy, Users, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import DepthCarousel from "./DepthCarousel.jsx";

// Achievements cards with specific badge colors and metadata
const achievements = [
  {
    icon: Trophy,
    title: "Smart India Hackathon",
    category: "National Competition",
    text: "Participated with a team, building a working prototype under a strict deadline with real-time API integrations.",
    glow: "rgba(248, 152, 32, 0.25)",
    tag: "National Finalist",
  },
  {
    icon: Users,
    title: "Workshops & Leadership",
    category: "Technical Team Lead",
    text: "Led small project teams during intensive coursework and conducted collaborative peer workshops on full-stack web architectures.",
    glow: "rgba(97, 218, 251, 0.25)",
    tag: "Team Lead",
  },
  {
    icon: Award,
    title: "College Recognition",
    category: "Academic Excellence",
    text: "Recognised for notable Java and Full Stack system project work within the Computer Science department at GIET.",
    glow: "rgba(109, 179, 63, 0.25)",
    tag: "Departmental Honors",
  },
];

// Stat counters to add visual richness
const achievementStats = [
  { label: "Accredited Certifications", value: "05+", icon: ShieldCheck },
  { label: "National Hackathons", value: "SIH", icon: Trophy },
  { label: "Verified Credentials", value: "100%", icon: CheckCircle2 },
  { label: "CSE Department Honors", value: "GIET", icon: Award },
];

// Certifications presented in 3D Depth Carousel
const certifications = [
  {
    title: "MERN Stack Development",
    issuer: "Qlith Innovation Pvt. Ltd.",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/QIS0140.pdf",
    tag: "Full Stack MERN",
  },
  {
    title: "Data Analytics with Python",
    issuer: "Central Tool Room & Training Centre, Bhubaneswar",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/dataAnalytics.png",
    tag: "Python & Analytics",
  },
  {
    title: "Core Java Certified",
    issuer: "Central Tool Room & Training Centre, Bhubaneswar",
    verifyLabel: "View Certificate",
    href: "/assets/certificate/core_java.png",
    tag: "Core Java Architecture",
  },
  {
    title: "Java Development",
    issuer: "TechnoHacks Solutions Pvt. Ltd.",
    verifyLabel: "View Certificate",
    href: "/assets/images/projects/java_development.pdf",
    tag: "Enterprise Java",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Thairanex",
    verifyLabel: "View Certificate",
    href: "/assets/images/projects/full_stack_development.pdf",
    tag: "Web Systems",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(185,133,46,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="05 · Recognition"
          title="Achievements & certifications."
          description="Recognitions from competitive hackathons, college leadership, and accredited institutional certifications."
        />

        {/* Stats Metrics Banner */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {achievementStats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border hairline bg-cream-soft/80 p-4 backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-brass/50 dark:bg-[#111726]/80 text-center"
            >
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-deep text-cream-soft shadow-xs mb-2">
                <stat.icon size={16} className="text-brass" />
              </div>
              <div className="font-display text-xl sm:text-2xl font-bold text-ink">
                {stat.value}
              </div>
              <div className="font-mono text-[0.66rem] uppercase tracking-wider text-ink-faint mt-0.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestone Cards with Modern Glow Pedestal */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl border hairline bg-cream-soft/90 p-6 sm:p-7 shadow-card transition-all duration-300 hover:border-brass hover:shadow-premium dark:bg-[#111726]/90 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundColor: item.glow }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-deep text-cream-soft shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={20} className="text-brass" strokeWidth={1.8} />
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border hairline bg-cream/70 px-2.5 py-0.5 font-mono text-[0.66rem] text-ink-soft dark:bg-deep/60">
                    <Sparkles size={11} className="text-brass" />
                    {item.tag}
                  </span>
                </div>

                <span className="section-label !text-[0.66rem]">{item.category}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-ink group-hover:text-brass transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t hairline flex items-center gap-1.5 font-mono text-[0.68rem] text-ink-faint">
                <CheckCircle2 size={13} className="text-brass" />
                <span>Verified Department Record</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Depth Carousel for Certifications */}
        <div className="mt-16">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b hairline pb-4">
            <div>
              <span className="section-label !text-[0.68rem]">Accredited Credentials</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                3D Certificate Deck
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
              <ShieldCheck size={14} className="text-brass" /> Click side cards or arrows to browse
            </span>
          </div>

          <DepthCarousel items={certifications} />
        </div>
      </div>
    </section>
  );
}
