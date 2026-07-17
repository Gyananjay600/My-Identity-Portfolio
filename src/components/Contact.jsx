import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend needed: this opens the visitor's own email client with
    // everything pre-filled, addressed straight to you. Works everywhere,
    // zero setup. See README "Contact form" section to switch to EmailJS
    // for a fully in-page send instead.
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    "Hi Gyananjay, I found your portfolio and would like to connect."
  )}`;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
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
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border hairline bg-cream-soft p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brass"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-deep text-cream-soft">
                <Mail size={18} />
              </span>
              <div>
                <p className="section-label">Email</p>
                <p className="font-display text-sm font-medium text-ink">{profile.email}</p>
              </div>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border hairline bg-cream-soft p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-brass"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle size={18} />
              </span>
              <div>
                <p className="section-label">WhatsApp</p>
                <p className="font-display text-sm font-medium text-ink">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border hairline bg-cream-soft p-5 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-deep text-cream-soft">
                <Phone size={18} />
              </span>
              <div>
                <p className="section-label">Phone</p>
                <p className="font-display text-sm font-medium text-ink">{profile.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border hairline bg-cream-soft p-5 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-deep text-cream-soft">
                <MapPin size={18} />
              </span>
              <div>
                <p className="section-label">Location</p>
                <p className="font-display text-sm font-medium text-ink">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border hairline bg-cream-soft text-ink-soft transition-colors hover:border-brass hover:text-brass"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border hairline bg-cream-soft text-ink-soft transition-colors hover:border-brass hover:text-brass"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
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
                placeholder="Full name"
                required
              />
              <Field
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What's this about?"
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
                placeholder="Tell me a bit about the role or project…"
                className="mt-2 w-full resize-none rounded-xl border hairline bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brass"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-deep px-6 py-3 font-mono text-sm text-cream-soft transition-transform hover:-translate-y-0.5 hover:bg-brass sm:w-auto"
            >
              <Send size={15} /> Send Message
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
        className="mt-2 w-full rounded-xl border hairline bg-cream px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brass"
      />
    </div>
  );
}
