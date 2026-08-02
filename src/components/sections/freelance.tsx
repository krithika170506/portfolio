"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/constants";
import { Parallax } from "@/components/parallax";

const SERVICES = [
  {
    no: "01",
    title: "Flutter Mobile Apps",
    description: "Cross-platform iOS & Android apps with Firebase, real-time data, and clean UI.",
    tags: ["Flutter", "Firebase", "Dart", "REST APIs"],
  },
  {
    no: "02",
    title: "AI / ML Integration",
    description: "Embed computer vision, object detection, and ML models into your product.",
    tags: ["YOLOv8", "OpenCV", "TensorFlow", "Python"],
  },
  {
    no: "03",
    title: "IoT & Embedded Systems",
    description: "Sensor networks, Arduino-based hardware, and data dashboards — end to end.",
    tags: ["Arduino", "IoT", "Sensors", "Dashboard"],
  },
  {
    no: "04",
    title: "Backend & API Development",
    description: "Flask APIs, database design, and cloud deployments on AWS or GCP.",
    tags: ["Flask", "REST APIs", "AWS", "GCP"],
  },
];

const WORKS = [
  {
    no: "01",
    client: "Dextra Consulting",
    type: "Flutter App Development",
    description: "Developed and deployed Flutter apps integrated with Firebase, built real-time authentication flows, and shipped API-driven mobile features for clients during internship.",
    tags: ["Flutter", "Firebase", "FlutterFlow", "Dart"],
    github: null,
    live: null,
  },
  {
    no: "02",
    client: "Nexlink — Communication App",
    type: "Mobile App · Hackathon",
    description: "Built Nexlink, a Flutter-based communication platform enabling seamless peer-to-peer connectivity. Winner at the Mind Installers 30-Hour Hackathon.",
    tags: ["Flutter", "Firebase", "Real-time", "Mobile"],
    github: "https://github.com/krithika170506",
    live: null,
  },
  {
    no: "03",
    client: "SureStep — IoT Navigation Aid",
    type: "IoT · Wearable Device",
    description: "Designed SureStep, a wearable navigation assistant for visually impaired users using ultrasonic sensors and vibration feedback — finalist at IEEE EPICS.",
    tags: ["IoT", "Arduino", "Sensors", "Embedded"],
    github: "https://github.com/krithika170506",
    live: null,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Scope",
    detail: "We align on goals, timeline, and deliverables before a single line is written.",
  },
  {
    step: "02",
    title: "Build",
    detail: "Weekly updates, clean commits, no surprises. You see progress as it happens.",
  },
  {
    step: "03",
    title: "Ship",
    detail: "Deployed, documented, and handed off. Two weeks of post-launch support included.",
  },
];

export function Freelance() {
  return (
    <section
      id="freelance"
      className="relative overflow-hidden bg-[#f5f3ef] text-[#0f0f0f]"
    >
      {/* subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle,#a0a0a0_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* glows */}
      <Parallax speed={60} className="pointer-events-none absolute -top-40 -right-40">
        <div aria-hidden className="h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl" />
      </Parallax>
      <Parallax speed={-40} className="pointer-events-none absolute bottom-0 -left-40">
        <div aria-hidden className="h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-3xl" />
      </Parallax>

      {/* ── HERO STRIP ─────────────────────────────────────────────── */}
      <div className="relative border-b border-black/8 px-6 pb-16 pt-24 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* eyebrow */}
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
              Reel 04 · Freelance
            </p>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            {/* headline */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="font-display font-bold uppercase leading-[0.88] tracking-[-0.04em] text-[#0f0f0f]"
                style={{ fontSize: "clamp(3.2rem, 8vw, 7.5rem)" }}
              >
                Open for
                <br />
                <span className="bg-gradient-to-r from-accent via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  freelance.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mt-6 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg"
              >
                I take on projects alongside my studies and internship.
                Flutter apps, AI integrations, IoT systems — built end-to-end
                and delivered production-ready.
              </motion.p>
            </div>

            {/* availability card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-64 overflow-hidden rounded-3xl border border-black/8 bg-white p-7 shadow-2xl shadow-black/[0.07]"
            >
              {/* inner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-400/20 blur-2xl"
              />

              {/* status row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-600">
                    Available
                  </span>
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-600">
                  Open
                </span>
              </div>

              {/* divider */}
              <div className="my-5 h-px w-full bg-black/6" />

              {/* main text */}
              <p className="font-display text-xl font-bold leading-snug tracking-tight text-gray-900">
                Taking new projects now
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Ready to take on your next build — from idea to shipped product.
              </p>

              {/* divider */}
              <div className="my-5 h-px w-full bg-black/6" />

              {/* reply time */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-gray-400">
                  Typical reply
                </span>
                <span className="font-display text-sm font-bold text-accent">
                  &lt; 24 h
                </span>
              </div>
            </motion.div>
          </div>

          {/* stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-14 flex flex-wrap gap-10 border-t border-black/8 pt-10"
          >
            {[
              { value: "3+", label: "Projects shipped" },
              { value: "2+", label: "Clients served" },
              { value: "100%", label: "On-time delivery" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <p className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl">
                  {s.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── SERVICES LIST ───────────────────────────────────────────── */}
      <div className="relative border-b border-black/8 px-6 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="py-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-gray-400">
              What I build
            </p>
          </div>

          {SERVICES.map((svc, idx) => (
            <motion.div
              key={svc.no}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group grid cursor-default grid-cols-[3rem_1fr] items-start gap-6 border-t border-black/6 py-8 transition-colors hover:border-accent/40 sm:grid-cols-[3rem_1fr_1fr] lg:grid-cols-[3rem_1.2fr_1fr_auto]"
            >
              {/* number */}
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gray-400 transition group-hover:text-accent">
                {svc.no}
              </span>

              {/* title */}
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-gray-900 transition group-hover:text-accent sm:text-2xl">
                {svc.title}
              </h3>

              {/* description */}
              <p className="hidden text-sm leading-relaxed text-gray-500 sm:block">
                {svc.description}
              </p>

              {/* tags */}
              <div className="col-span-2 flex flex-wrap gap-1.5 sm:col-span-1 lg:col-auto lg:justify-end">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-2.5 py-0.5 font-display text-[11px] font-medium text-gray-500 transition group-hover:border-accent/30 group-hover:text-accent/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          {/* last border */}
          <div className="border-t border-black/6" />
        </div>
      </div>

      {/* ── FREELANCE WORKS ─────────────────────────────────────────── */}
      <div className="relative border-b border-black/8 px-6 pb-16 pt-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.32em] text-gray-400">
            Shipped for clients
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKS.map((w, idx) => (
              <motion.div
                key={w.no}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col gap-4 rounded-2xl border border-black/8 bg-white p-6 shadow-sm transition hover:border-accent/30 hover:shadow-md"
              >
                {/* header */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-gray-400">{w.type}</p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight text-gray-900">{w.client}</h3>
                  </div>
                  <span className="flex-shrink-0 rounded-full border border-black/8 bg-gray-50 px-2.5 py-0.5 font-mono text-[10px] text-gray-400">
                    {w.no}
                  </span>
                </div>

                {/* description */}
                <p className="flex-1 text-sm leading-relaxed text-gray-500">{w.description}</p>

                {/* tags */}
                <div className="flex flex-wrap gap-1.5">
                  {w.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/8 px-2.5 py-0.5 font-display text-[11px] font-medium text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* links */}
                <div className="flex items-center gap-3 border-t border-black/6 pt-4">
                  {w.github && (
                    <a
                      href={w.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400 transition hover:text-gray-800"
                    >
                      GitHub
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {w.live && (
                    <a
                      href={w.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent transition hover:text-accent-hover"
                    >
                      Live Site
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESS + CTA ───────────────────────────────────────────── */}
      <div className="relative px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* process steps */}
            <div>
              <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.32em] text-gray-400">
                How it works
              </p>
              <div className="space-y-0">
                {PROCESS.map((p, idx) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="grid grid-cols-[3rem_1fr] gap-6 border-t border-black/6 py-7 last:border-b last:border-black/6"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                      {p.step}
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-gray-900">
                        {p.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                        {p.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-col gap-4 lg:w-64"
            >
              <p className="font-display text-2xl font-bold leading-snug text-gray-900">
                Have a project in mind?
              </p>
              <p className="text-sm leading-relaxed text-gray-500">
                Drop me a message and we&apos;ll figure out if we&apos;re a good fit.
              </p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-display text-sm font-bold text-white shadow-xl shadow-accent/25 transition hover:bg-accent-hover hover:shadow-accent/40"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/12 px-7 py-4 font-display text-sm font-semibold text-gray-600 transition hover:border-black/25 hover:text-gray-900"
              >
                See contact details
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
