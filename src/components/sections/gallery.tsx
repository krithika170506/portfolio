"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Parallax } from "@/components/parallax";

type Category = "All" | "Internship" | "Hackathons" | "Events" | "Wins";

type Photo = {
  src: string;
  caption: string;
  tag: string;
  category: Exclude<Category, "All">;
  span?: "wide" | "tall" | "normal";
};

const PHOTOS: Photo[] = [
  // ── Hackathons ───────────────────────────────────────────────────
  {
    src: "/gallery/hackathon-mind-installers.jpeg",
    caption: "Mind Installers 30-Hour Hackathon · 2024",
    tag: "Hackathon",
    category: "Hackathons",
    span: "wide",
  },
  {
    src: "/gallery/hackathon-webathon-win.jpeg",
    caption: "Webathon Winner · 2024",
    tag: "Hackathon",
    category: "Hackathons",
    span: "normal",
  },
  {
    src: "/gallery/hackathon-team-coding.jpeg",
    caption: "Coding Through the Night · Hackathon",
    tag: "Hackathon",
    category: "Hackathons",
    span: "normal",
  },

  // ── Wins ────────────────────────────────────────────────────────
  {
    src: "/gallery/win-ieee-epics.jpeg",
    caption: "IEEE EPICS Finalist · Top 5% Innovation Team",
    tag: "Win",
    category: "Wins",
    span: "wide",
  },
  {
    src: "/gallery/win-nexlink-award.jpeg",
    caption: "Nexlink — Mind Installers Hackathon Win",
    tag: "Win",
    category: "Wins",
    span: "normal",
  },
  {
    src: "/gallery/win-certificate.jpeg",
    caption: "Award Ceremony · 2024",
    tag: "Win",
    category: "Wins",
    span: "normal",
  },

  // ── Internship ───────────────────────────────────────────────────
  {
    src: "/gallery/internship-dextra.jpeg",
    caption: "App Dev Intern · Dextra Consulting",
    tag: "Internship",
    category: "Internship",
    span: "wide",
  },
  {
    src: "/gallery/internship-flutter-build.jpeg",
    caption: "Building Flutter Features · Dextra",
    tag: "Internship",
    category: "Internship",
    span: "normal",
  },

  // ── Events ───────────────────────────────────────────────────────
  {
    src: "/gallery/event-ieee-pcs-meeting.jpeg",
    caption: "IEEE PCS Secretary · Committee Meeting",
    tag: "Event",
    category: "Events",
    span: "wide",
  },
  {
    src: "/gallery/event-surestep-demo.jpeg",
    caption: "SureStep Demo · IEEE EPICS Presentation",
    tag: "Event",
    category: "Events",
    span: "normal",
  },
  {
    src: "/gallery/event-college-symposium.jpeg",
    caption: "Technical Symposium · Sri Sairam Engineering College",
    tag: "Event",
    category: "Events",
    span: "wide",
  },
];

const CATEGORIES: Category[] = ["All", "Internship", "Hackathons", "Wins", "Events"];

const TAG_COLORS: Record<string, string> = {
  Internship: "border-blue-300/40 bg-blue-500/10 text-blue-400",
  Hackathon: "border-accent/40 bg-accent/10 text-accent",
  Win: "border-yellow-400/40 bg-yellow-400/10 text-yellow-400",
  Event: "border-purple-300/40 bg-purple-500/10 text-purple-400",
};

function LightboxModal({
  photo,
  onClose,
}: {
  photo: Photo;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 transition hover:text-white"
        >
          <X className="h-3.5 w-3.5" /> Close
        </button>

        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={photo.src}
            alt={photo.caption}
            width={900}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] ${TAG_COLORS[photo.tag] ?? "border-white/20 bg-white/10 text-white/70"}`}
            >
              {photo.tag}
            </span>
            <p className="mt-1.5 font-display text-sm font-semibold text-white">
              {photo.caption}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PhotoCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  const spanClass =
    photo.span === "wide"
      ? "col-span-2"
      : photo.span === "tall"
        ? "row-span-2"
        : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-background-soft cursor-pointer ${spanClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.caption}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
        />

        {/* zoom icon */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur text-white"
        >
          <ZoomIn className="h-3.5 w-3.5" />
        </motion.div>

        {/* caption */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-0 inset-x-0 px-4 py-3"
        >
          <span
            className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] ${TAG_COLORS[photo.tag] ?? "border-white/20 bg-white/10 text-white/70"}`}
          >
            {photo.tag}
          </span>
          <p className="mt-1 font-display text-xs font-semibold leading-tight text-white">
            {photo.caption}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const filtered =
    active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden border-t border-border bg-background py-28"
      >
        {/* bg glow */}
        <Parallax speed={40} className="pointer-events-none absolute -top-24 left-1/3 -z-10">
          <div aria-hidden className="h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        </Parallax>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] text-accent [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:28px_28px]"
        />

        <div className="mx-auto max-w-6xl px-6">
          {/* eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
              Reel 06 · In the Field
            </p>
          </div>

          {/* headline */}
          <h2
            className="mt-6 font-display font-bold uppercase leading-[0.9] tracking-[-0.03em]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Behind the{" "}
            <span className="text-gradient-blue">screen.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg">
            Internships, hackathons, demos, and the rooms where it all happened.
            The work that doesn&apos;t fit in a repo.
          </p>

          {/* category filter */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition ${
                  active === cat
                    ? "border-accent bg-accent text-white shadow-md shadow-accent/25"
                    : "border-border bg-background text-foreground/60 hover:border-accent/40 hover:text-accent"
                }`}
              >
                {cat}
                {active === cat && (
                  <motion.span
                    layoutId="gallery-filter-pill"
                    className="absolute inset-0 rounded-full bg-accent -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/35">
              {filtered.length} photos
            </span>
          </div>

          {/* grid */}
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((photo) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={
                    photo.span === "wide"
                      ? "sm:col-span-2"
                      : photo.span === "tall"
                        ? "lg:row-span-2"
                        : ""
                  }
                >
                  <PhotoCard
                    photo={photo}
                    onClick={() => setLightbox(photo)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* bottom label */}
          <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/30">
            Photographed across Chennai · 2023–2025
          </p>
        </div>
      </section>

      {/* lightbox */}
      <AnimatePresence>
        {lightbox && (
          <LightboxModal photo={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
