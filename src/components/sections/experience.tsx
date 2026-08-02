"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { Parallax } from "@/components/parallax";

type Theme = "dark" | "light" | "accent";

type Scene = {
  id: string;
  no: string;
  year: string;
  kind: "Work" | "Education";
  status: string;
  org: string;
  role: string;
  period: string;
  location?: string;
  story: string;
  metrics?: { value: string; label: string }[];
  stack?: string[];
  theme: Theme;
};

const SCENES: Scene[] = [
  {
    id: "dextra",
    no: "01",
    year: "2025",
    kind: "Work",
    status: "Recent Work",
    org: "Dextra Consulting",
    role: "App Development Intern",
    period: "June 2025 — July 2025",
    location: "Remote · Chennai",
    story:
      "Developed and deployed Flutter mobile applications integrated with Firebase, improving feature delivery speed by 20%. Collaborated with a 4-member team on UI/UX design, ensuring full adherence to client specifications. Integrated real-time authentication, database, and API-driven features to enhance reliability and user engagement.",
    metrics: [
      { value: "20%", label: "Faster Delivery" },
      { value: "4", label: "Team Members" },
    ],
    stack: ["Flutter", "Firebase", "Dart", "REST APIs", "UI/UX"],
    theme: "dark",
  },
  {
    id: "sairam",
    no: "02",
    year: "2023",
    kind: "Education",
    status: "Ongoing",
    org: "Sri Sairam Engineering College",
    role: "Bachelor of Engineering · Computer Science",
    period: "2023 — 2027 (Expected)",
    location: "Chennai, India",
    story:
      "Studying Computer Science with depth in app development, AI/ML, and IoT systems. Active in IEEE — serving as Secretary of the Professional Communication Society and IEEE EPICS Finalist (Top 5%). Winning hackathons alongside a clean academic record.",
    metrics: [
      { value: "8.26", label: "CGPA / 10" },
      { value: "Top 5%", label: "IEEE EPICS" },
    ],
    stack: ["DSA", "DBMS", "Operating Systems", "Networks", "OOP"],
    theme: "accent",
  },
  {
    id: "vivekananda",
    no: "03",
    year: "2023",
    kind: "Education",
    status: "Foundation",
    org: "Smt. Ramkuwar Devi Fomra Vivekananda Vidyalaya",
    role: "Higher Secondary Certificate · Class XII",
    period: "2022 — 2023",
    location: "Chennai, India",
    story:
      "Completed Class XII with an exceptional score, building a strong foundation in mathematics and computer science that carried directly into engineering and sparked a passion for building technology.",
    metrics: [{ value: "90.6%", label: "HSC Score" }],
    stack: ["Mathematics", "Physics", "Computer Science"],
    theme: "light",
  },
];

const THEMES: Record<
  Theme,
  {
    bg: string;
    fg: string;
    fgMuted: string;
    border: string;
    chip: string;
    accentText: string;
    chipBorder: string;
    metricBox: string;
    yearGradient: string;
    grid: string;
  }
> = {
  dark: {
    bg: "bg-[#050a1a]",
    fg: "text-white",
    fgMuted: "text-white/65",
    border: "border-white/12",
    chip: "bg-white/10 text-white",
    accentText: "text-accent",
    chipBorder: "border-white/15",
    metricBox: "border-white/15 bg-white/[0.04]",
    yearGradient: "bg-gradient-to-br from-white via-white to-accent bg-clip-text text-transparent",
    grid: "opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]",
  },
  light: {
    bg: "bg-background",
    fg: "text-foreground",
    fgMuted: "text-foreground/70",
    border: "border-border",
    chip: "bg-foreground text-background",
    accentText: "text-accent",
    chipBorder: "border-border",
    metricBox: "border-accent/25 bg-accent-soft/40",
    yearGradient: "bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text text-transparent",
    grid: "opacity-[0.05] text-accent [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]",
  },
  accent: {
    bg: "bg-gradient-to-br from-accent-soft via-background to-accent-soft/40",
    fg: "text-foreground",
    fgMuted: "text-foreground/70",
    border: "border-accent/25",
    chip: "bg-accent text-white",
    accentText: "text-accent",
    chipBorder: "border-accent/30",
    metricBox: "border-accent/30 bg-background",
    yearGradient: "text-gradient-blue",
    grid: "opacity-[0.06] text-accent [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]",
  },
};

function SceneBlock({ scene, total }: { scene: Scene; total: number }) {
  const t = THEMES[scene.theme];
  const isFirst = scene.no === "01";

  return (
    <section className={`relative overflow-hidden ${t.bg} ${t.fg}`}>
      <div aria-hidden className={`pointer-events-none absolute inset-0 ${t.grid}`} />

      {scene.theme === "dark" && (
        <>
          <Parallax speed={55} className="pointer-events-none absolute -top-32 -right-24">
            <div aria-hidden className="h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          </Parallax>
          <Parallax speed={-40} className="pointer-events-none absolute -bottom-40 -left-24">
            <div aria-hidden className="h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          </Parallax>
        </>
      )}
      {scene.theme === "accent" && (
        <Parallax speed={50} className="pointer-events-none absolute -top-32 right-1/4">
          <div aria-hidden className="h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        </Parallax>
      )}

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className={`mb-12 flex items-center gap-4 border-b ${t.border} pb-5`}>
          <span className={`font-display text-[10px] font-semibold uppercase tracking-[0.32em] ${t.fgMuted}`}>
            Scene · {scene.no} / 0{total}
          </span>
          <span className={`h-px flex-1 ${scene.theme === "dark" ? "bg-white/15" : "bg-foreground/15"}`} />
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.22em] ${t.chip}`}>
            {scene.kind}
          </span>
          {isFirst && (
            <span className="inline-flex items-center gap-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Recent
            </span>
          )}
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className={`font-display text-[10px] font-semibold uppercase tracking-[0.32em] ${t.accentText}`}>
              {scene.status}
            </p>
            <p
              className={`mt-4 font-display font-bold leading-[0.85] tracking-[-0.04em] ${t.yearGradient}`}
              style={{ fontSize: "clamp(5rem, 12vw, 10rem)" }}
            >
              {scene.year}
            </p>
            <p className={`mt-3 font-display text-xs font-medium uppercase tracking-[0.25em] sm:text-sm ${t.fgMuted}`}>
              {scene.period}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="min-w-0"
          >
            <h3
              className={`font-display font-bold uppercase leading-[0.95] tracking-[-0.01em] ${t.fg}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {scene.org}
            </h3>
            <p className={`mt-3 font-display text-base font-medium sm:text-lg ${t.accentText}`}>
              {scene.role}
            </p>

            {scene.location && (
              <p className={`mt-2 inline-flex items-center gap-1.5 font-display text-xs font-medium uppercase tracking-[0.22em] ${t.fgMuted}`}>
                <MapPin className="h-3 w-3" />
                {scene.location}
              </p>
            )}

            <p className={`mt-6 max-w-2xl text-sm leading-[1.7] sm:text-base ${t.fgMuted}`}>
              {scene.story}
            </p>

            {scene.metrics && scene.metrics.length > 0 && (
              <div className="mt-7 inline-flex w-fit flex-wrap items-stretch overflow-hidden rounded-2xl">
                {scene.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`flex flex-col border ${t.metricBox} px-5 py-3 sm:px-6 sm:py-4 ${
                      i === 0 ? "rounded-l-2xl" : "border-l-0"
                    } ${i === scene.metrics!.length - 1 ? "rounded-r-2xl" : ""}`}
                  >
                    <p className={`font-display text-3xl font-bold leading-none tracking-tight sm:text-4xl ${t.accentText}`}>
                      {m.value}
                    </p>
                    <p className={`mt-2 font-display text-[10px] font-medium uppercase tracking-[0.22em] ${t.fgMuted}`}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {scene.stack && scene.stack.length > 0 && (
              <div className="mt-7 flex flex-wrap items-center gap-2">
                <span className={`font-display text-[10px] font-medium uppercase tracking-[0.28em] ${t.accentText}`}>
                  Stack
                </span>
                <span className={`h-px w-6 ${scene.theme === "dark" ? "bg-white/30" : "bg-foreground/25"}`} />
                {scene.stack.map((s) => (
                  <span
                    key={s}
                    className={`rounded-md border ${t.chipBorder} px-2.5 py-1 font-display text-xs font-medium ${t.fgMuted}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        <div className={`mt-16 flex items-center justify-between border-t ${t.border} pt-5`}>
          <p className={`font-display text-[10px] font-medium uppercase tracking-[0.3em] ${t.fgMuted}`}>
            Scene · {scene.no} of 0{total}
          </p>
          <div className="flex items-center gap-1">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className={`h-px transition-all ${
                  i + 1 <= parseInt(scene.no, 10)
                    ? "bg-accent w-8"
                    : scene.theme === "dark"
                      ? "bg-white/20 w-4"
                      : "bg-foreground/15 w-4"
                }`}
              />
            ))}
          </div>
          <p className={`flex items-center gap-1.5 font-display text-[10px] font-medium uppercase tracking-[0.3em] ${t.accentText}`}>
            Next chapter
            <ArrowDownRight className="h-3 w-3" />
          </p>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="relative overflow-hidden border-b border-border bg-background-soft py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 text-accent opacity-[0.05] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
              Reel 02 · Experience &amp; Education
            </p>
          </div>
          <h2
            className="mt-5 font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] sm:mt-6"
            style={{ fontSize: "clamp(2.25rem, 9vw, 8rem)" }}
          >
            The{" "}
            <span className="text-gradient-blue">chapters</span> so far.
          </h2>
          <div className="mt-6 grid items-end gap-5 sm:mt-8 sm:grid-cols-[1fr_auto]">
            <p className="max-w-xl text-base leading-relaxed text-foreground/65 sm:text-[1.0625rem]">
              Three scenes — one internship and two institutions. Each one
              earned on purpose, building toward a career at the intersection
              of apps, AI, and impact.
            </p>
            <div className="flex flex-col items-start gap-1 sm:items-end">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/50">
                Running time
              </p>
              <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                2+ yrs · 3 scenes
              </p>
            </div>
          </div>
        </div>
      </div>

      {SCENES.map((s) => (
        <SceneBlock key={s.id} scene={s} total={SCENES.length} />
      ))}

      <div className="relative overflow-hidden border-t border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-accent">
            End Reel
          </p>
          <h3
            className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Want the full <span className="text-gradient-blue">cut</span>?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-base text-foreground/65">
            One PDF. Every role, every project, every credit.
          </p>
          <a
            href="/resume.pdf"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover hover:shadow-accent/40"
          >
            Download Full Résumé →
          </a>
          <p className="mt-8 font-display text-[10px] font-medium uppercase tracking-[0.32em] text-foreground/40">
            Directed &amp; written by Jai Krithika R. · Updated 2025
          </p>
        </div>
      </div>
    </section>
  );
}
