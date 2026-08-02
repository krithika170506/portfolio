"use client";

import { animate, useInView } from "framer-motion";
import {
  Award,
  Briefcase,
  Code2,
  Rocket,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useCounter(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => c.stop();
  }, [inView, target]);
  return { ref, text: val.toFixed(decimals) };
}

function IEEETile() {
  return (
    <div className="group relative col-span-1 row-span-1 flex flex-col gap-8 overflow-hidden rounded-3xl border border-accent/30 bg-[#050a1a] p-7 text-white sm:col-span-2 sm:row-span-2 sm:p-9">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]"
      />
      <div aria-hidden className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
      <div aria-hidden className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
          <Award className="h-3 w-3" /> Spotlight
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          2024
        </span>
      </div>

      <div className="relative flex flex-1 flex-col justify-end">
        <p className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
          Top 5%
        </p>
        <p className="mt-4 font-display text-lg font-semibold text-white/95 sm:text-xl">
          IEEE EPICS Finalist
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60">
          Recognized as one of the Top 5% innovation teams at Sri Sairam Engineering College through the IEEE EPICS programme.
        </p>

        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            <span>Secretary · IEEE Professional Communication Society</span>
            <span className="text-accent">Active</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-accent via-blue-400 to-cyan-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CgpaTile() {
  const { ref, text } = useCounter(8.26, 2);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [dash, setDash] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, (8.26 / 10) * 283, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDash(v),
    });
    return () => c.stop();
  }, [inView]);

  return (
    <div className="group relative grid grid-rows-[auto_1fr_auto] gap-3 overflow-hidden rounded-3xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          Academics
        </span>
        <TrendingUp className="h-4 w-4 text-accent" />
      </div>

      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90 sm:h-28 sm:w-28">
          <circle cx="50" cy="50" r="45" fill="none" stroke="var(--border)" strokeWidth="8" />
          <circle
            cx="50" cy="50" r="45" fill="none"
            stroke="url(#cgpa-grad)" strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${dash} 283`}
          />
          <defs>
            <linearGradient id="cgpa-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
          <span className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            <span ref={ref}>{text}</span>
          </span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/50">
            / 10
          </span>
        </div>
      </div>

      <div className="text-center">
        <p className="font-display text-sm font-semibold">CGPA</p>
        <p className="mt-0.5 text-[11px] text-foreground/55">
          B.E. CSE · Sri Sairam
        </p>
      </div>
    </div>
  );
}

function HackathonsTile() {
  const { ref, text } = useCounter(2);
  return (
    <div className="group relative grid grid-rows-[auto_1fr_auto] gap-3 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent-soft via-background to-background p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/15">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          Competition
        </span>
        <Trophy className="h-4 w-4 text-accent" />
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-display text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl">
          <span ref={ref}>{text}</span>
          <span className="text-accent">+</span>
        </p>
        <p className="mt-2 font-display text-sm font-semibold">
          Hackathon Wins
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {["Mind Installers", "Webathon"].map((t) => (
          <span
            key={t}
            className="rounded-md border border-accent/20 bg-background px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/65"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const PROJECT_BARS = [
  { label: "Flutter",    value: 90 },
  { label: "AI / ML",   value: 80 },
  { label: "IoT / HW",  value: 82 },
  { label: "Python",     value: 78 },
];

function ProjectsTile() {
  const { ref, text } = useCounter(3);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="group relative col-span-1 grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 overflow-hidden rounded-3xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 sm:col-span-2">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
            Build Volume
          </span>
          <Rocket className="h-3.5 w-3.5 text-accent" />
        </div>
        <p className="mt-3 font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
          <span ref={ref}>{text}</span>
          <span className="text-accent">+</span>
        </p>
        <p className="mt-2 font-display text-sm font-semibold">
          Key Projects
        </p>
      </div>

      <div className="flex flex-col justify-center space-y-2.5">
        {PROJECT_BARS.map((b, i) => (
          <div key={b.label} className="grid grid-cols-[80px_1fr_32px] items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60">
              {b.label}
            </span>
            <div className="relative h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-blue-400 transition-[width] duration-1000 ease-out"
                style={{
                  width: inView ? `${b.value}%` : "0%",
                  transitionDelay: `${i * 100}ms`,
                }}
              />
            </div>
            <span className="text-right font-mono text-[10px] tabular-nums text-foreground/50">
              {b.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InternshipsTile() {
  const { ref, text } = useCounter(1);
  return (
    <div className="group relative grid grid-rows-[auto_1fr_auto] gap-3 overflow-hidden rounded-3xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
          Industry
        </span>
        <Briefcase className="h-4 w-4 text-accent" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="font-display text-5xl font-bold leading-none tracking-tight sm:text-6xl">
          <span ref={ref}>{text}</span>
        </p>
        <p className="mt-2 font-display text-sm font-semibold">Internship</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {["D"].map((c, i) => (
            <span
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-background font-mono text-[10px] font-bold ${
                i === 0 ? "bg-accent text-white" : "bg-accent-soft text-accent-text"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
        <span className="text-[11px] leading-tight text-foreground/55">
          Dextra Consulting
        </span>
      </div>
    </div>
  );
}

function TerminalTile() {
  const lines = [
    { p: "$", c: "krithika --highlights" },
    { p: ">", c: "Secretary · IEEE Professional Communication Society" },
    { p: ">", c: "IEEE EPICS Finalist · Top 5% Innovation Team" },
    { p: ">", c: "Winner · Mind Installers 30-Hour Hackathon" },
    { p: ">", c: "App Dev Intern · Dextra Consulting · Flutter & Firebase" },
  ];
  return (
    <div className="group relative col-span-1 overflow-hidden rounded-3xl border border-accent/30 bg-[#050a1a] p-6 text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20 sm:col-span-2 lg:col-span-3">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              ~/recognition.log
            </span>
          </div>
          <Code2 className="h-3.5 w-3.5 text-white/40" />
        </div>
        <div className="mt-4 space-y-1.5 font-mono text-xs sm:text-sm">
          {lines.map((l, i) => (
            <div key={i} className="flex gap-2.5">
              <span className={l.p === "$" ? "text-accent" : "text-cyan-300/80"}>
                {l.p}
              </span>
              <span className={l.p === "$" ? "text-white/85" : "text-white/70"}>
                {l.c}
              </span>
            </div>
          ))}
          <div className="flex gap-2.5 pt-1">
            <span className="text-accent">$</span>
            <span className="inline-block h-4 w-1.5 animate-pulse bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

const TICKER = [
  "IEEE EPICS Finalist · Top 5%",
  "Secretary · IEEE Professional Communication Society",
  "Flutter Developer · Firebase Expert",
  "Winner · Mind Installers 30-Hour Hackathon",
  "App Dev Intern · Dextra Consulting",
  "YOLOv8 · OpenCV · Fatigue Detection",
  "CGPA 8.26 · B.E. CSE",
  "Nexlink · SureStep · AriGo AirGuard Pro",
];

function Ticker() {
  return (
    <div className="relative mt-12 w-screen overflow-hidden border-y border-accent/20 bg-background py-4 left-1/2 -translate-x-1/2">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-10 whitespace-nowrap">
        {[...TICKER, ...TICKER].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/65"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export function Stats() {
  return (
    <section
      id="stats"
      className="relative border-y-2 border-accent/15 bg-background-soft py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              By the numbers
            </p>
          </div>
          <h2 className="font-display font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
            Two years.{" "}
            <span className="text-gradient-blue">A track record.</span>
          </h2>
          <p className="max-w-xl text-base text-foreground/65 sm:text-[1.0625rem]">
            Projects shipped, hackathons won, apps deployed. Here&apos;s the scoreboard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[220px] lg:grid-cols-4">
          <IEEETile />
          <CgpaTile />
          <HackathonsTile />
          <ProjectsTile />
          <InternshipsTile />
          <TerminalTile />
        </div>

        <Ticker />
      </div>
    </section>
  );
}
