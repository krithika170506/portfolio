"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Parallax } from "@/components/parallax";
import { Award, BookOpen, GraduationCap, Medal, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

type Cert = {
  title: string;
  year: string;
  yearNum: number;
  note?: string;
  win?: boolean;
};

type Issuer = {
  id: string;
  org: string;
  abbrev: string;
  location?: string;
  kind: "Institution" | "Standards" | "Corporate" | "Govt." | "Society";
  items: Cert[];
};

const VAULT: Issuer[] = [
  {
    id: "ieee-pcs",
    org: "IEEE Professional Communication Society",
    abbrev: "IEEE PCS",
    location: "Sri Sairam Engineering College",
    kind: "Society",
    items: [
      {
        title: "Secretary · IEEE Professional Communication Society",
        year: "2024", yearNum: 2024,
        note: "Coordinated and led technical and professional development events, engaging 100+ students",
        win: true,
      },
    ],
  },
  {
    id: "ieee-epics",
    org: "IEEE EPICS Programme",
    abbrev: "IEEE EPICS",
    location: "Sri Sairam Engineering College",
    kind: "Society",
    items: [
      {
        title: "IEEE EPICS Finalist · Top 5% Innovation Team",
        year: "2024", yearNum: 2024,
        note: "Recognized among the top 5% innovation teams at Sri Sairam Engineering College",
        win: true,
      },
    ],
  },
  {
    id: "mind-installers",
    org: "Mind Installers Hackathon",
    abbrev: "Mind Installers",
    location: "National · 30-Hour Hackathon",
    kind: "Institution",
    items: [
      {
        title: "Winner · Mind Installers 30-Hour Hackathon",
        year: "2024", yearNum: 2024,
        note: "Selected among 150+ participants nationwide",
        win: true,
      },
    ],
  },
  {
    id: "webathon",
    org: "St. Joseph's College of Engineering",
    abbrev: "St. Joseph's",
    location: "Chennai",
    kind: "Institution",
    items: [
      {
        title: "Winner · Webathon",
        year: "2024", yearNum: 2024,
        note: "St. Joseph's College of Engineering, Chennai",
        win: true,
      },
    ],
  },
  {
    id: "udemy",
    org: "Udemy",
    abbrev: "Udemy",
    kind: "Corporate",
    items: [
      {
        title: "Flutter Development Bootcamp with Dart",
        year: "2024", yearNum: 2024,
        note: "Comprehensive Flutter & Dart development certification",
      },
    ],
  },
  {
    id: "coursera",
    org: "Coursera",
    abbrev: "Coursera",
    kind: "Corporate",
    items: [
      {
        title: "Introduction to AI and Machine Learning",
        year: "2024", yearNum: 2024,
        note: "Foundational AI/ML certification",
      },
    ],
  },
  {
    id: "aws",
    org: "Amazon Web Services",
    abbrev: "AWS",
    kind: "Corporate",
    items: [
      {
        title: "AWS Cloud Practitioner Essentials",
        year: "2024", yearNum: 2024,
        note: "AWS Training & Certification",
      },
    ],
  },
];

const TOTAL = VAULT.reduce((s, g) => s + g.items.length, 0);
const TOTAL_WINS = VAULT.reduce((s, g) => s + g.items.filter((i) => i.win).length, 0);
const TOTAL_INSTITUTIONS = VAULT.length;
const YEAR_RANGE = (() => {
  const years = VAULT.flatMap((g) => g.items.map((i) => i.yearNum));
  return `${Math.min(...years)}–${Math.max(...years)}`;
})();

type Tag = "award" | "hackathon" | "course" | "membership";

type FlatItem = {
  id: string;
  title: string;
  org: string;
  abbrev: string;
  year: string;
  note?: string;
  win: boolean;
  kind: Issuer["kind"];
  tag: Tag;
};

const ISSUER_TAG: Record<string, Tag> = {
  "ieee-pcs":        "membership",
  "ieee-epics":      "award",
  "mind-installers": "hackathon",
  "webathon":        "hackathon",
  "udemy":           "course",
  "coursera":        "course",
  "aws":             "course",
};

const ALL_ITEMS: FlatItem[] = VAULT.flatMap((issuer) =>
  issuer.items.map((cert, i) => ({
    id: `${issuer.id}-${i}`,
    title: cert.title,
    org: issuer.org,
    abbrev: issuer.abbrev,
    year: cert.year,
    note: cert.note,
    win: cert.win ?? false,
    kind: issuer.kind,
    tag: ISSUER_TAG[issuer.id],
  }))
);

type Tier = "gold" | "silver" | "bronze";

type Podium = {
  id: string;
  tier: Tier;
  place: string;
  org: string;
  category: string;
  title: string;
  detail: string;
  metric: { value: string; label: string };
};

const PODIUM: Podium[] = [
  {
    id: "ieee-pcs", tier: "gold", place: "01", org: "IEEE PCS",
    category: "Society Leadership",
    title: "Secretary · IEEE Professional Comm. Society",
    detail: "Led technical and professional development events, coordinating IEEE PCS activities and engaging 100+ students at Sri Sairam Engineering College.",
    metric: { value: "100+", label: "Students Engaged" },
  },
  {
    id: "mind-installers", tier: "silver", place: "02", org: "Mind Installers",
    category: "National Hackathon",
    title: "Winner · 30-Hour Hackathon",
    detail: "Won the Mind Installers 30-Hour Hackathon, selected among 150+ participants in a nationwide competition.",
    metric: { value: "150+", label: "Participants" },
  },
  {
    id: "ieee-epics", tier: "bronze", place: "03", org: "IEEE EPICS",
    category: "Innovation Award",
    title: "Finalist · Top 5% Innovation Team",
    detail: "Recognized as one of the top 5% innovation teams at Sri Sairam Engineering College through the prestigious IEEE EPICS programme.",
    metric: { value: "Top 5%", label: "Innovation" },
  },
];

type Mention = {
  id: string; org: string; title: string;
  year: string; metric: string; icon: typeof Award;
};

const MENTIONS: Mention[] = [
  { id: "webathon", org: "St. Joseph's College of Engineering", title: "Winner · Webathon", year: "2024", metric: "Chennai", icon: Medal },
  { id: "flutter", org: "Udemy", title: "Flutter Development Bootcamp with Dart", year: "2024", metric: "Certified", icon: BookOpen },
  { id: "ai-ml", org: "Coursera", title: "Introduction to AI and Machine Learning", year: "2024", metric: "Certified", icon: Sparkles },
  { id: "aws", org: "Amazon Web Services", title: "AWS Cloud Practitioner Essentials", year: "2024", metric: "AWS Training", icon: Award },
  { id: "sairam", org: "Sri Sairam Engineering College", title: "B.E. CSE · CGPA 8.26", year: "2023–Present", metric: "Ongoing", icon: GraduationCap },
];

const TIER_TOKENS: Record<Tier, {
  label: string; medal: string; accent: string;
  ringColor: string; height: string; gradient: string; glow: string;
}> = {
  gold: {
    label: "GOLD", medal: "🥇",
    accent: "from-amber-300 via-amber-200 to-amber-400",
    ringColor: "ring-amber-300/50 shadow-amber-300/30",
    height: "lg:translate-y-[-3rem] lg:min-h-[420px]",
    gradient: "from-amber-500/30 via-amber-400/10 to-transparent",
    glow: "bg-amber-300/30",
  },
  silver: {
    label: "SILVER", medal: "🥈",
    accent: "from-slate-200 via-white to-slate-300",
    ringColor: "ring-slate-200/50 shadow-slate-200/20",
    height: "lg:min-h-[380px]",
    gradient: "from-slate-400/20 via-slate-300/5 to-transparent",
    glow: "bg-slate-200/20",
  },
  bronze: {
    label: "BRONZE", medal: "🥉",
    accent: "from-orange-300 via-orange-200 to-orange-400",
    ringColor: "ring-orange-300/50 shadow-orange-300/20",
    height: "lg:translate-y-[2rem] lg:min-h-[340px]",
    gradient: "from-orange-500/25 via-orange-400/5 to-transparent",
    glow: "bg-orange-300/20",
  },
};

function PodiumCard({ entry, delay }: { entry: Podium; delay: number }) {
  const t = TIER_TOKENS[entry.tier];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.32, 0.72, 0, 1] }}
      className={`relative flex h-full min-h-[320px] flex-col ${t.height}`}
    >
      <div aria-hidden className={`pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full ${t.glow} blur-3xl`} />
      <div className="relative z-10 mx-auto mb-4 flex h-20 w-20 items-center justify-center">
        <div aria-hidden className={`absolute inset-0 rounded-full bg-gradient-to-br ${t.accent} opacity-60 blur-md`} />
        <div className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} text-4xl shadow-2xl ring-4 ${t.ringColor}`}>
          {t.medal}
        </div>
      </div>
      <div className={`relative flex flex-1 flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#0a1330]/85 p-6 backdrop-blur-md shadow-2xl ${entry.tier === "gold" ? "shadow-amber-300/15 ring-1 ring-amber-300/20" : "shadow-black/30"}`}>
        <div aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${t.gradient}`} />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${t.accent} px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.22em] text-[#0a1330] shadow`}>
            {t.label} · #{entry.place}
          </span>
          <span className="font-display text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
            {entry.org.split("·")[0].trim()}
          </span>
        </div>
        <div className="relative mt-auto flex flex-col pt-6">
          <p className="font-display text-[10px] font-medium uppercase tracking-[0.22em] text-accent">{entry.category}</p>
          <h3
            className="mt-2 font-display font-bold uppercase leading-[1] tracking-[-0.01em] text-white"
            style={{ fontSize: entry.tier === "gold" ? "clamp(1.5rem, 2.5vw, 2rem)" : "clamp(1.15rem, 2vw, 1.5rem)" }}
          >
            {entry.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-xs leading-snug text-white/65 sm:text-sm">{entry.detail}</p>
          <div className="mt-4 inline-flex w-fit items-baseline gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 backdrop-blur">
            <p className={`font-display font-bold leading-none tracking-tight text-white ${entry.tier === "gold" ? "text-2xl" : "text-lg"}`}>
              {entry.metric.value}
            </p>
            <p className="font-display text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">{entry.metric.label}</p>
          </div>
        </div>
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
      <div aria-hidden className={`mx-auto mt-2 h-2 w-3/4 rounded-full blur-md ${entry.tier === "gold" ? "bg-amber-300/40" : entry.tier === "silver" ? "bg-slate-200/30" : "bg-orange-300/30"}`} />
    </motion.div>
  );
}

function MentionRow({ m, idx }: { m: Mention; idx: number }) {
  const Icon = m.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: idx * 0.04 }}
      className="group grid h-full min-h-[76px] grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur transition hover:border-accent/40 hover:bg-white/[0.06]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent transition group-hover:bg-accent group-hover:text-white">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="truncate font-display text-sm font-semibold leading-tight text-white">{m.title}</p>
        <p className="mt-1 truncate font-display text-[10px] uppercase tracking-[0.2em] text-white/55">{m.org} · {m.year}</p>
      </div>
      <span className="hidden whitespace-nowrap rounded-full bg-white/10 px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:inline-block">
        {m.metric}
      </span>
    </motion.div>
  );
}

function ThePodium() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#04081a] p-6 text-white shadow-2xl shadow-black/30 sm:p-10 lg:p-12"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[800px] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-accent/30 via-accent/5 to-transparent blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[300px] w-[200px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_70%)]" />

      <div className="relative mb-10 text-center sm:mb-14">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-white/30" />
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.4em] text-amber-300">Recognition · Class of 2024</p>
          <span className="h-px w-10 bg-white/30" />
        </div>
        <h3 className="mt-5 font-display font-bold uppercase leading-[0.9] tracking-[0.02em] text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
          The <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">Podium</span>.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/55 sm:text-base">Top honors — leadership, hackathon wins, and innovation recognition.</p>
      </div>

      <div className="relative mx-auto grid max-w-5xl gap-6 lg:grid-cols-3 lg:items-end lg:gap-8">
        <div className="lg:order-1"><PodiumCard entry={PODIUM[1]} delay={0.2} /></div>
        <div className="lg:order-2"><PodiumCard entry={PODIUM[0]} delay={0} /></div>
        <div className="lg:order-3"><PodiumCard entry={PODIUM[2]} delay={0.35} /></div>
      </div>

      <div className="relative mt-16">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-white/30" />
          <p className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65">Honorable Mentions · The Cast</p>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <div className="grid items-stretch gap-2 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-3">
          {MENTIONS.map((m, idx) => <MentionRow key={m.id} m={m} idx={idx} />)}
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
    </motion.div>
  );
}

type FilterKey = "all" | Tag;

function ExhibitCard({ item, idx }: { item: FlatItem; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.4), ease: [0.32, 0.72, 0, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
        item.win
          ? "border-white/20 bg-[#04081a] shadow-xl shadow-black/30 hover:shadow-accent/20 hover:border-accent/40"
          : "border-white/[0.08] bg-[#0a1330]/70 hover:bg-[#0a1330]/90 hover:border-white/15"
      }`}
    >
      {item.win && (
        <>
          <div aria-hidden className="pointer-events-none absolute -top-10 left-1/2 h-28 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        </>
      )}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className={`font-mono text-[9px] font-semibold uppercase tracking-[0.25em] ${item.win ? "text-accent" : "text-white/30"}`}>
            {item.kind}
          </span>
          <span className="font-mono text-[10px] tabular-nums text-white/25">{item.year}</span>
        </div>

        <p className={`font-display font-bold leading-snug text-white transition-colors duration-200 group-hover:text-accent ${item.win ? "text-[15px] sm:text-base" : "text-sm sm:text-[14px]"}`}>
          {item.title}
        </p>

        {item.note && (
          <p className="mt-2 text-[11px] leading-relaxed text-white/40 line-clamp-2">
            {item.note}
          </p>
        )}

        <div className="flex-1" />

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/[0.07] pt-3">
          <span className="truncate font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
            {item.abbrev}
          </span>
          {item.win ? (
            <span className="flex-shrink-0 rounded-full border border-accent/40 bg-accent/15 px-2.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.22em] text-accent">
              Win
            </span>
          ) : (
            <span className="font-mono text-[9px] tabular-nums text-white/20">
              {String(idx + 1).padStart(2, "0")}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function TheCollection() {
  const [filter, setFilter] = useState<FilterKey>("award");

  const counts = useMemo<Record<FilterKey, number>>(() => ({
    all:        ALL_ITEMS.length,
    award:      ALL_ITEMS.filter((i) => i.win).length,
    hackathon:  ALL_ITEMS.filter((i) => i.tag === "hackathon").length,
    course:     ALL_ITEMS.filter((i) => i.tag === "course").length,
    membership: ALL_ITEMS.filter((i) => i.tag === "membership").length,
  }), []);

  const filtered = useMemo(() => {
    if (filter === "all")   return ALL_ITEMS;
    if (filter === "award") return ALL_ITEMS.filter((i) => i.win);
    return ALL_ITEMS.filter((i) => i.tag === filter);
  }, [filter]);

  const NAV_ITEMS: { key: FilterKey; label: string; icon: string }[] = [
    { key: "all",        label: "All Exhibits", icon: "◈" },
    { key: "award",      label: "Awards",       icon: "◆" },
    { key: "hackathon",  label: "Hackathons",   icon: "⬡" },
    { key: "course",     label: "Courses",      icon: "◉" },
    { key: "membership", label: "Memberships",  icon: "⬟" },
  ];

  return (
    <div className="mt-16">
      <div className="mb-6 flex items-center gap-5">
        <div className="h-[2px] w-8 bg-accent" />
        <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent">
          The Collection · {TOTAL} Exhibits · {TOTAL_INSTITUTIONS} Institutions
        </p>
        <div className="h-px flex-1 bg-accent/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-[#04081a] shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#02040e] px-5 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <div className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <p className="ml-2 font-mono text-[10px] text-white/25">
            vault://trophy-vault/<span className="text-accent">{filter}/</span>
          </p>
          <span className="ml-auto font-mono text-[9px] text-white/20">{counts[filter]} entries</span>
        </div>

        <div className="flex gap-1 overflow-x-auto border-b border-white/[0.07] bg-[#02040e]/80 px-3 py-2 lg:hidden">
          {NAV_ITEMS.map((nav) => (
            <button
              key={nav.key}
              onClick={() => setFilter(nav.key)}
              className={`flex-shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition ${
                filter === nav.key ? "bg-accent text-white" : "text-white/40 hover:text-white/65"
              }`}
            >
              {nav.label}
              <span className="ml-1 tabular-nums opacity-60">{counts[nav.key]}</span>
            </button>
          ))}
        </div>

        <div className="flex h-[480px] lg:h-[600px]">
          <div className="relative hidden w-52 flex-shrink-0 flex-col border-r border-white/[0.07] bg-[#02040e]/60 lg:flex">
            <div className="border-b border-white/[0.05] px-4 py-3">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">VAULT.INDEX</p>
            </div>
            <nav className="flex-1 overflow-y-auto py-2">
              {NAV_ITEMS.map((nav) => {
                const isActive = filter === nav.key;
                return (
                  <button
                    key={nav.key}
                    onClick={() => setFilter(nav.key)}
                    className="relative w-full px-3 py-2 text-left"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="absolute inset-0 rounded-lg border border-accent/20 bg-accent/15"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className={`relative flex items-center gap-2.5 font-mono text-[11px] transition-colors ${
                      isActive ? "text-accent" : "text-white/40 hover:text-white/65"
                    }`}>
                      <span className="w-3 text-[10px]">{nav.icon}</span>
                      <span className="flex-1 leading-tight">{nav.label}</span>
                      <span className={`font-mono text-[9px] tabular-nums ${isActive ? "text-accent/70" : "text-white/20"}`}>
                        {counts[nav.key]}
                      </span>
                    </span>
                  </button>
                );
              })}
            </nav>
            <div className="space-y-2 border-t border-white/[0.05] px-4 py-4">
              {[
                { label: "Total",  value: String(TOTAL),           accent: false },
                { label: "Wins",   value: String(TOTAL_WINS),      accent: true  },
                { label: "Span",   value: YEAR_RANGE,              accent: false },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">{stat.label}</span>
                  <span className={`font-mono text-[9px] tabular-nums ${stat.accent ? "text-accent" : "text-white/45"}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-2.5">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-white/30">
                {NAV_ITEMS.find((n) => n.key === filter)?.label ?? "All"} · {counts[filter]} records
              </p>
              <p className="font-mono text-[9px] text-white/20">{YEAR_RANGE}</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={filter}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {filtered.map((item, idx) => (
                    <ExhibitCard key={item.id} item={item} idx={idx} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.05] bg-[#02040e]/60 px-5 py-2">
              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/18">
                {counts[filter]} of {TOTAL} exhibits
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/18">
                All verifiable on request
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground/30">
        Showing {counts[filter]} of {TOTAL} exhibits · All verifiable on request
      </p>
    </div>
  );
}

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden border-t border-[#e8e4dc] bg-[#f5f3ef] py-16 sm:py-24"
    >
      <Parallax speed={50} className="pointer-events-none absolute left-1/2 top-32 -z-10 -translate-x-1/2">
        <div aria-hidden className="h-96 w-[60rem] rounded-full bg-accent/6 blur-3xl" />
      </Parallax>

      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="mb-12 border-y-2 border-foreground py-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-[10px] font-semibold uppercase tracking-[0.45em] text-foreground/50">
                Volume 01 · Chapter III
              </p>
              <h2
                className="mt-4 font-display font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                The Trophy{" "}
                <span className="italic text-accent">Vault</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/60 sm:text-base">
                {TOTAL} curated exhibits across {TOTAL_INSTITUTIONS} institutions —
                every achievement, certification, and recognition earned since {YEAR_RANGE}.
              </p>
            </div>

            <div className="flex gap-8 sm:flex-col sm:items-end sm:gap-4">
              {[
                { value: String(TOTAL), label: "Exhibits" },
                { value: String(TOTAL_WINS), label: "Awards Won" },
                { value: String(TOTAL_INSTITUTIONS), label: "Institutions" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col sm:items-end">
                  <p className="font-display text-3xl font-bold leading-none tracking-tight text-accent sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-foreground/45">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ThePodium />
        <TheCollection />

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t-2 border-foreground pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/45">
            All {TOTAL} exhibits · Verifiable on request
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/45">
            End of Chapter III
          </p>
        </div>
      </div>
    </section>
  );
}
