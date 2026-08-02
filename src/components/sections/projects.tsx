"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Parallax } from "@/components/parallax";

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

type Theme = "dark" | "light" | "accent";

type Project = {
  id: string;
  no: string;
  year: string;
  type: string;
  status: string;
  name: string[];
  subtitle: string;
  period: string;
  story: string;
  metrics?: { value: string; label: string }[];
  highlights?: string[];
  stack: string[];
  links?: { demo?: string; github?: string };
  theme: Theme;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "nexlink",
    no: "01",
    year: "2024",
    type: "AI · Computer Vision · IoT",
    status: "Featured Project",
    name: ["Nexlink", "Fatigue Detection"],
    subtitle: "Smart Driver Fatigue & Distraction Detection System",
    period: "Solo Build",
    story:
      "Developed an intelligent real-time driver fatigue and distraction detection system using YOLOv8 and OpenCV for face and eye tracking. Implemented a three-stage detection pipeline to identify drowsiness, detect distractions, and analyze driver attentiveness accurately. Integrated automatic alert mechanisms including buzzer warnings, water spray, and mint diffuser activation to restore driver alertness, plus an automated control module for lane correction during inattention scenarios.",
    metrics: [
      { value: "3-Stage", label: "Detection Pipeline" },
      { value: "Real-Time", label: "Response System" },
    ],
    highlights: [
      "YOLOv8 Face & Eye Tracking",
      "3-Stage Detection Pipeline",
      "Buzzer & Water Spray Alerts",
      "Lane Correction Automation",
    ],
    stack: ["YOLOv8", "OpenCV", "Python", "Computer Vision", "IoT", "Hardware Integration"],
    theme: "dark",
    featured: true,
  },
  {
    id: "surestep",
    no: "02",
    year: "2024",
    type: "IoT · BLE · Computer Vision",
    status: "Impact Project",
    name: ["SureStep", "Navigation Aid"],
    subtitle: "Smart Navigation Assistance for the Visually Impaired",
    period: "Team Build",
    story:
      "Developed a wearable navigation system combining ultrasonic sensors, computer vision, and BLE modules to assist visually impaired individuals. Implemented real-time voice and haptic alerts to improve safe mobility in dynamic environments, enabling greater independence and safety for users navigating public spaces.",
    highlights: [
      "Ultrasonic Obstacle Detection",
      "BLE Module Integration",
      "Voice & Haptic Alerts",
      "Real-Time Navigation",
    ],
    stack: ["Arduino", "Ultrasonic Sensors", "BLE", "Computer Vision", "Python", "IoT"],
    theme: "light",
  },
  {
    id: "arigo",
    no: "03",
    year: "2024",
    type: "IoT · Go · Cloud · Full-Stack",
    status: "Top Performance",
    name: ["AriGo", "AirGuard Pro"],
    subtitle: "Real-Time Air Quality Monitoring System",
    period: "Team Lead",
    story:
      "Developed a compact air quality monitoring system with cloud syncing, pollutant detection, and automated hardware responses for critical air-quality levels. Optimized Go-based backend services, boosting data ingestion speed by 32% and reducing API latency by 45%. Implemented real-time notifications and automated mitigation strategies, improving awareness and proactive response to hazardous conditions.",
    metrics: [
      { value: "32%", label: "Faster Ingestion" },
      { value: "45%", label: "Less API Latency" },
    ],
    highlights: [
      "Real-Time Air Quality Monitoring",
      "Cloud Sync & Dashboard",
      "Automated Hardware Response",
      "Real-Time Notifications",
    ],
    stack: ["Go", "IoT", "Cloud", "REST APIs", "Full-Stack", "Sensors"],
    theme: "accent",
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
    nameGradient: string;
    grid: string;
    primaryBtn: string;
    secondaryBtn: string;
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
    nameGradient: "bg-gradient-to-br from-white via-white to-accent bg-clip-text text-transparent",
    grid: "opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]",
    primaryBtn: "bg-white text-[#050a1a] hover:bg-accent hover:text-white shadow-lg shadow-accent/20",
    secondaryBtn: "border-white/20 text-white hover:border-white hover:bg-white/10",
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
    nameGradient: "bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text text-transparent",
    grid: "opacity-[0.05] text-accent [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]",
    primaryBtn: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25",
    secondaryBtn: "border-accent/30 text-accent hover:border-accent hover:bg-accent-soft",
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
    nameGradient: "text-gradient-blue",
    grid: "opacity-[0.06] text-accent [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px]",
    primaryBtn: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25",
    secondaryBtn: "border-accent/40 text-accent hover:border-accent hover:bg-background",
  },
};

function ProjectScene({ p, total }: { p: Project; total: number }) {
  const t = THEMES[p.theme];

  return (
    <section className={`relative overflow-hidden ${t.bg} ${t.fg}`}>
      <div aria-hidden className={`pointer-events-none absolute inset-0 ${t.grid}`} />

      {p.theme === "dark" && (
        <>
          <Parallax speed={55} className="pointer-events-none absolute -top-32 -right-24">
            <div aria-hidden className="h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          </Parallax>
          <Parallax speed={-40} className="pointer-events-none absolute -bottom-40 -left-24">
            <div aria-hidden className="h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          </Parallax>
        </>
      )}
      {p.theme === "accent" && (
        <Parallax speed={50} className="pointer-events-none absolute -top-32 right-1/4">
          <div aria-hidden className="h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        </Parallax>
      )}

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className={`mb-12 flex flex-wrap items-center gap-4 border-b ${t.border} pb-5`}>
          <span className={`font-display text-[10px] font-semibold uppercase tracking-[0.32em] ${t.fgMuted}`}>
            Project · {p.no} / {String(total).padStart(2, "0")}
          </span>
          <span className={`h-px flex-1 ${p.theme === "dark" ? "bg-white/15" : "bg-foreground/15"}`} />
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.22em] ${t.chip}`}>
            {p.type}
          </span>
          {p.featured && (
            <span className="inline-flex items-center gap-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {p.status}
            </span>
          )}
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col"
          >
            <p className={`font-display text-[10px] font-semibold uppercase tracking-[0.32em] ${t.accentText}`}>
              {p.status}
            </p>
            <div className="mt-4">
              {p.name.map((line, idx) => (
                <p
                  key={line}
                  className={`font-display font-bold uppercase leading-[0.85] tracking-[-0.04em] ${
                    idx === 0 ? t.nameGradient : t.fg
                  }`}
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
                >
                  {line}
                </p>
              ))}
            </div>
            <p className={`mt-4 font-display text-xs font-medium uppercase tracking-[0.25em] sm:text-sm ${t.fgMuted}`}>
              {p.period} · {p.year}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className={`min-w-0 lg:border-l lg:pl-8 ${t.border}`}
          >
            <p className={`font-display text-base font-medium sm:text-lg ${t.accentText}`}>
              {p.subtitle}
            </p>

            <p className={`mt-6 max-w-2xl text-sm leading-[1.75] sm:text-base ${t.fgMuted}`}>
              {p.story}
            </p>

            {p.metrics && p.metrics.length > 0 && (
              <div className="mt-7 inline-flex w-fit flex-wrap items-stretch overflow-hidden rounded-2xl">
                {p.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`flex flex-col border ${t.metricBox} px-5 py-3 sm:px-6 sm:py-4 ${
                      i === 0 ? "rounded-l-2xl" : "border-l-0"
                    } ${i === p.metrics!.length - 1 ? "rounded-r-2xl" : ""}`}
                  >
                    <p className={`font-display text-2xl font-bold leading-none tracking-tight sm:text-3xl ${t.accentText}`}>
                      {m.value}
                    </p>
                    <p className={`mt-2 font-display text-[10px] font-medium uppercase tracking-[0.22em] ${t.fgMuted}`}>
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {p.highlights && p.highlights.length > 0 && (
              <div className="mt-7">
                <span className={`font-display text-[10px] font-medium uppercase tracking-[0.28em] ${t.accentText}`}>
                  Highlights
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className={`rounded-full border ${t.chipBorder} px-3.5 py-1.5 text-sm font-medium ${t.fgMuted}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className={`font-display text-[10px] font-medium uppercase tracking-[0.28em] ${t.accentText}`}>
                Stack
              </span>
              <span className={`h-px w-6 ${p.theme === "dark" ? "bg-white/30" : "bg-foreground/25"}`} />
              {p.stack.map((s) => (
                <span
                  key={s}
                  className={`rounded-md border ${t.chipBorder} px-2.5 py-1 font-display text-xs font-medium ${t.fgMuted}`}
                >
                  {s}
                </span>
              ))}
            </div>

            {p.links && (p.links.demo || p.links.github) && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {p.links.demo && (
                  <a
                    href={p.links.demo}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold transition ${t.primaryBtn}`}
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {p.links.github && (
                  <a
                    href={p.links.github}
                    className={`inline-flex items-center gap-2 rounded-full border-2 bg-transparent px-5 py-2.5 font-display text-sm font-semibold transition ${t.secondaryBtn}`}
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>

        <div className={`mt-16 flex items-center justify-between border-t ${t.border} pt-5`}>
          <p className={`font-display text-[10px] font-medium uppercase tracking-[0.3em] ${t.fgMuted}`}>
            Project · {p.no} of {String(total).padStart(2, "0")}
          </p>
          <div className="flex items-center gap-1">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                className={`h-px transition-all ${
                  i + 1 <= parseInt(p.no, 10)
                    ? "bg-accent w-8"
                    : p.theme === "dark"
                      ? "bg-white/20 w-4"
                      : "bg-foreground/15 w-4"
                }`}
              />
            ))}
          </div>
          <p className={`flex items-center gap-1.5 font-display text-[10px] font-medium uppercase tracking-[0.3em] ${t.accentText}`}>
            Next project
            <ArrowDownRight className="h-3 w-3" />
          </p>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative">
      <div className="relative overflow-hidden border-y border-border bg-background-soft py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 text-accent opacity-[0.05] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]"
        />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
              Reel 03 · Featured Work
            </p>
          </div>
          <h2
            className="mt-5 font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] sm:mt-6"
            style={{ fontSize: "clamp(2.25rem, 9vw, 8rem)" }}
          >
            Things I&apos;ve <span className="text-gradient-blue">built</span>.
          </h2>
          <div className="mt-6 grid items-end gap-5 sm:mt-8 sm:grid-cols-[1fr_auto]">
            <p className="max-w-xl text-base leading-relaxed text-foreground/65 sm:text-[1.0625rem]">
              Three projects — driver fatigue detection with YOLOv8, wearable
              navigation for the visually impaired, and a real-time air quality
              monitoring system. Each one built end-to-end with real impact.
            </p>
            <div className="flex flex-col items-start gap-1 sm:items-end">
              <p className="font-display text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/50">
                Featured Projects
              </p>
              <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                3 projects · AI & IoT
              </p>
            </div>
          </div>
        </div>
      </div>

      {PROJECTS.map((p) => (
        <ProjectScene key={p.id} p={p} total={PROJECTS.length} />
      ))}

      <div className="relative overflow-hidden border-y border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-accent">
            End Reel
          </p>
          <h3
            className="mt-4 font-display font-bold uppercase leading-[0.95] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            More on the <span className="text-gradient-blue">workbench</span>.
          </h3>
          <p className="mx-auto mt-3 max-w-md text-base text-foreground/65">
            More experiments and projects live on GitHub.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/krithika170506"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent-hover hover:shadow-accent/40"
            >
              <Github className="h-4 w-4" />
              Browse on GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent/30 bg-background px-6 py-3 font-display text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent-soft"
            >
              Get in Touch
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-8 font-display text-[10px] font-medium uppercase tracking-[0.32em] text-foreground/40">
            Built by Jai Krithika R · Flutter, AI & IoT · 2024
          </p>
        </div>
      </div>
    </section>
  );
}
