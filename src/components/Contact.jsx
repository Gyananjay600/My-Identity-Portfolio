'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { HiEnvelope, HiPaperAirplane, HiMapPin, HiPhone } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="08 · Contact"
          title="Let's build something."
          description="Reach out directly — every channel below goes straight to me, no middleman."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* direct channels */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="btn-silver-line group flex items-center gap-4 rounded-2xl bg-cream-soft p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:shadow-premium"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ea4335] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                <HiEnvelope size={19} />
              </span>
              <div>
                <p className="section-label">Email</p>
                <p className="font-display text-sm font-medium text-ink transition-colors group-hover:text-brass">{profile.email}</p>
              </div>
            </a>

            {/* Direct LinkedIn channel replaces phone number */}
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-silver-line group flex items-center gap-4 rounded-2xl bg-cream-soft p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brass hover:shadow-premium"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0a66c2] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                <FaLinkedinIn size={19} />
              </span>
              <div>
                <p className="section-label">LinkedIn</p>
                <p className="font-display text-sm font-medium text-ink transition-colors group-hover:text-brass">Connect on LinkedIn</p>
              </div>
            </a>

            {/* Minimalist Premium Location Card with BIG Display Letters */}
            <div className="rounded-3xl border hairline bg-cream-soft/95 dark:bg-[#111726]/95 p-6 sm:p-7 shadow-card relative overflow-hidden transition-all duration-300 hover:border-brass">
              {/* Top Meta Header */}
              <div className="flex items-center justify-between border-b hairline pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    Open to Work • Worldwide
                  </span>
                </div>

                <span className="rounded-full border hairline bg-cream/80 dark:bg-deep/80 px-2.5 py-0.5 font-mono text-[0.68rem] font-bold text-brass">
                  BBI • IST (UTC+5:30)
                </span>
              </div>

              {/* Big Bold Location Display */}
              <div>
                <span className="section-label !text-[0.66rem]">Current Base</span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight mt-1">
                  BHUBANESWAR
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-brass font-semibold uppercase">
                  <span>ODISHA, INDIA</span>
                  <span className="text-ink-faint">•</span>
                  <span className="text-ink-soft tracking-wider">20.2961° N, 85.8245° E</span>
                </div>
              </div>
            </div>

            {/* Social logos with proper brand colors & style move effect */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="btn-silver-line group flex h-11 w-11 items-center justify-center rounded-xl bg-cream-soft text-[#24292e] dark:text-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-md"
              >
                <FaGithub size={19} className="transition-transform duration-300 group-hover:scale-115" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="btn-silver-line group flex h-11 w-11 items-center justify-center rounded-xl bg-cream-soft text-[#0a66c2] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-md"
              >
                <FaLinkedinIn size={18} className="transition-transform duration-300 group-hover:scale-115" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                title="Send Email"
                className="btn-silver-line group flex h-11 w-11 items-center justify-center rounded-xl bg-cream-soft text-[#ea4335] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-md"
              >
                <HiEnvelope size={19} className="transition-transform duration-300 group-hover:scale-115" />
              </a>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border hairline bg-cream-soft p-6 shadow-premium sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name "
                required
              />
              <Field
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="yourname@gmail.com"
                required
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Java / Spring Boot opportunity"
            />
            <div>
              <label htmlFor="message" className="section-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role, project, or what you're building..."
                className="mt-2 w-full rounded-xl border hairline bg-cream px-4 py-3 text-base sm:text-sm text-ink placeholder:text-ink-faint focus:border-brass transition-colors duration-200"
              />
            </div>
            <button
              type="submit"
              className="btn-silver-line inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep px-6 py-3 font-mono text-sm text-cream-soft shadow-premium hover:bg-brass sm:w-auto"
            >
              <HiPaperAirplane size={15} className="rotate-45" /> Send Message
            </button>
            <p className="text-xs text-ink-faint">
              Opens your email app with this message pre-filled and addressed to {profile.email}.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", required }) {
  return (
    <div>
      <label htmlFor={name} className="section-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border hairline bg-cream px-4 py-3 text-base sm:text-sm text-ink placeholder:text-ink-faint focus:border-brass transition-colors duration-200"
      />
    </div>
  );
}
