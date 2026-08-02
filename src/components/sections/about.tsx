"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Parallax } from "@/components/parallax";
import {
  ArrowUpRight,
  Award,
  Code2,
  Coffee,
  MapPin,
  Sparkles,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { PROFILE } from "@/lib/constants";

function TabStory() {
  return (
    <div className="space-y-4 text-base leading-relaxed text-foreground/80">
      <p>
        I&apos;m a Computer Science undergraduate from Chennai with a genuine passion
        for building cross-platform mobile apps and intelligent systems. Flutter
        is my home turf — clean UIs, real-time data, and apps that actually
        reach users on any device.
      </p>
      <p>
        I interned as an{" "}
        <span className="font-semibold text-accent">App Development Intern at Dextra Consulting</span>,
        where I developed and deployed Flutter apps integrated with Firebase,
        collaborated on UI/UX design, and shipped real-time authentication and
        API-driven features.
      </p>
      <p>
        On the side I build AI/ML systems, IoT products, and hackathon projects —
        from YOLOv8 fatigue detection to wearable navigation aids. Anything that
        lets me go from idea to live, in users&apos; hands.
      </p>
    </div>
  );
}

const STACK_GROUPS = [
  { label: "Languages", items: ["Python", "Dart", "SQL", "Java", "C"] },
  { label: "App Dev", items: ["Flutter", "Firebase", "FlutterFlow"] },
  { label: "Backend", items: ["Flask", "REST APIs", "Postman"] },
  { label: "AI / IoT", items: ["YOLOv8", "OpenCV", "Arduino IDE", "TensorFlow"] },
  { label: "Tooling", items: ["Git", "GitHub", "Figma", "Docker", "AWS", "GCP"] },
];

function TabStack() {
  return (
    <div className="space-y-4">
      {STACK_GROUPS.map((g) => (
        <div key={g.label} className="grid grid-cols-[100px_1fr] items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent pt-1">
            {g.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map((i) => (
              <span key={i} className="rounded-md border border-border bg-background-soft px-2.5 py-1 font-display text-xs font-medium text-foreground/85 transition hover:border-accent/40 hover:bg-accent-soft hover:text-accent">
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

type LiveItem = { icon: LucideIcon; label: string; value: string };

const LIVE: LiveItem[] = [
  { icon: Code2, label: "Building", value: "Flutter apps · IoT projects · AI integrations" },
  { icon: Sparkles, label: "Learning", value: "Machine learning · Advanced Flutter · Cloud" },
  { icon: Coffee, label: "Reading", value: "Flutter in Action · AI for Everyone" },
  { icon: Award, label: "Leading", value: "Secretary · IEEE Professional Communication Society" },
];

function TabCurrently() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          Live · synced just now
        </p>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {LIVE.map((l) => {
          const Icon = l.icon;
          return (
            <div key={l.label} className="flex items-start gap-3 rounded-xl border border-border bg-background-soft p-3.5">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow-md shadow-accent/25">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-foreground/55">{l.label}</p>
                <p className="mt-0.5 font-display text-sm font-semibold leading-snug text-foreground">{l.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const WINS = [
  { title: "Secretary · IEEE Professional Communication Society", note: "Coordinated and led technical and professional development events, engaging 100+ students", year: "2024" },
  { title: "IEEE EPICS Finalist · Top 5%", note: "Top 5% innovation team at Sri Sairam Engineering College", year: "2024" },
  { title: "Winner · Mind Installers 30-Hour Hackathon", note: "Selected among 150+ participants nationwide", year: "2024" },
  { title: "Winner · Webathon", note: "St. Joseph's College of Engineering, Chennai", year: "2024" },
];

function TabWins() {
  return (
    <ul className="space-y-2.5">
      {WINS.map((w, i) => (
        <li key={w.title} className="group flex items-start gap-4 rounded-xl border border-border bg-background-soft p-4 transition hover:border-accent/40 hover:bg-accent-soft/50">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-white shadow-md shadow-accent/25 font-mono text-xs font-bold">
            0{i + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-sm font-semibold leading-tight text-foreground">{w.title}</p>
            <p className="mt-0.5 text-xs text-foreground/60">{w.note}</p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">{w.year}</span>
        </li>
      ))}
    </ul>
  );
}

const TABS = [
  { id: "story", label: "Story", icon: Sparkles },
  { id: "stack", label: "Stack", icon: Code2 },
  { id: "currently", label: "Currently", icon: Coffee },
  { id: "wins", label: "Wins", icon: Trophy },
] as const;

type TabId = (typeof TABS)[number]["id"];

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function About() {
  const [tab, setTab] = useState<TabId>("story");

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:80px_80px] text-accent/30"
      />
      <Parallax speed={60} className="pointer-events-none absolute left-1/2 top-20 -z-10 -translate-x-1/2">
        <div aria-hidden className="h-96 w-[60rem] rounded-full bg-accent/10 blur-3xl" />
      </Parallax>

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-12 bg-accent" />
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">About</p>
        </div>

        <h2 className="mb-10 font-display font-bold leading-[1.05] tracking-tight sm:mb-14" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
          The short version of{" "}
          <span className="text-gradient-blue">who I am.</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2/3 w-4/5 rounded-full bg-accent/20 blur-3xl -z-10" />

            <div className="relative w-72 sm:w-80 lg:w-full max-w-[320px]">
              <div aria-hidden className="absolute -inset-3 rounded-3xl border border-accent/20 -z-10" />
              <div aria-hidden className="absolute -inset-6 rounded-3xl border border-accent/10 -z-10" />

              {/* Illustrated card */}
              <div className="w-full aspect-[3/4] rounded-3xl bg-gradient-to-br from-background-soft via-background to-accent-soft border border-accent/20 flex flex-col items-center justify-center gap-6 shadow-2xl">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-accent shadow-2xl shadow-accent/40">
                  <span className="font-display text-6xl font-bold text-white">K</span>
                </div>
                <div className="text-center px-6">
                  <p className="font-display text-xl font-bold text-foreground">Jai Krithika R</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Flutter · AI · IoT</p>
                  <p className="mt-3 text-xs text-foreground/60 leading-relaxed">
                    Building cross-platform apps and intelligent systems that make a difference.
                  </p>
                </div>
              </div>

              {/* Floating badge — top right, clamped to card bounds */}
              <div className="absolute -top-3 right-3 flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1.5 backdrop-blur shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70 whitespace-nowrap">Available</span>
              </div>

              {/* Floating badge — lower left, clamped */}
              <div className="absolute bottom-16 left-3 flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2 backdrop-blur shadow-lg">
                <MapPin className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 whitespace-nowrap">Chennai, India</span>
              </div>

              {/* Floating badge — lower right, clamped */}
              <div className="absolute bottom-4 right-3 flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2 backdrop-blur shadow-lg">
                <Award className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/70 whitespace-nowrap">B.E. CSE · 2027</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-2xl shadow-accent/10">
              <div className="flex items-center justify-between border-b border-border bg-background-soft px-5 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                  ~/krithika.profile
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">v 2025</span>
              </div>

              <div className="border-b border-border bg-gradient-to-br from-background-soft via-background to-background-soft px-6 py-5 sm:px-8">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Jai Krithika R
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/60">
                  Developer&nbsp;·&nbsp;<span className="text-accent">Innovator</span>&nbsp;·&nbsp;Leader
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-accent" /> Chennai, IN
                  </span>
                  <span className="hidden h-3 w-px bg-border sm:block" />
                  <span>B.E. CSE · 2027</span>
                  <span className="hidden h-3 w-px bg-border sm:block" />
                  <span className="flex items-center gap-1.5">
                    <Award className="h-3 w-3 text-accent" /> IEEE PCS Sec.
                  </span>
                </div>
              </div>

              <div className="border-b border-border bg-background px-3 sm:px-4">
                <div className="flex items-center gap-1">
                  {TABS.map((t) => {
                    const Icon = t.icon;
                    const active = tab === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTab(t.id)}
                        className={`relative inline-flex items-center gap-2 rounded-t-lg px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition sm:px-4 ${
                          active ? "text-accent" : "text-foreground/55 hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {t.label}
                        {active && (
                          <motion.span
                            layoutId="about-tab-underline"
                            className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="min-h-[320px] px-6 py-7 sm:px-8 sm:py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                  >
                    {tab === "story" && <TabStory />}
                    {tab === "stack" && <TabStack />}
                    {tab === "currently" && <TabCurrently />}
                    {tab === "wins" && <TabWins />}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-background-soft px-6 py-4 sm:px-8">
                <div className="flex items-center gap-2">
                  {[
                    { href: PROFILE.socials.github, Icon: Github, label: "GitHub" },
                    { href: PROFILE.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  ].map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground/65 transition hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-background px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 transition hover:border-accent hover:text-accent"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-white shadow-md shadow-accent/25 transition hover:bg-accent-hover"
                >
                  Download Résumé
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
