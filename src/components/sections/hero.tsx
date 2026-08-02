"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HERO_BADGES, PROFILE } from "@/lib/constants";

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

function RotatingTagline() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((p) => (p + 1) % PROFILE.taglines.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-8 overflow-hidden font-mono text-sm uppercase tracking-[0.2em] text-accent sm:text-base">
      {PROFILE.taglines.map((t, idx) => (
        <motion.span
          key={t}
          initial={false}
          animate={{
            y: idx === i ? 0 : idx < i ? -32 : 32,
            opacity: idx === i ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center"
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const gridY    = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowY    = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden pb-16 pt-24 sm:pt-28"
    >
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_85%_25%,rgba(29,78,216,0.22),transparent_60%),radial-gradient(ellipse_55%_45%_at_15%_85%,rgba(29,78,216,0.14),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,transparent_85%,var(--background)_100%)]"
      />
      <motion.div
        aria-hidden
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 -z-10 text-accent/40 opacity-[0.07] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16"
      >
        {/* ── LEFT ── */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3.5 py-1.5 text-xs font-medium text-accent-text"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for Software Engineering Opportunities
          </motion.span>

          <div className="flex flex-col gap-0.5">
            {["JAI", "KRITHIKA", "R"].map((line, idx) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                className={`font-display font-bold leading-[0.93] tracking-tight ${
                  idx === 1 ? "text-gradient-blue" : ""
                }`}
                style={{ fontSize: "clamp(2.75rem, 9vw, 5.25rem)" }}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <RotatingTagline />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-lg text-base leading-relaxed text-foreground/70 sm:text-[1.0625rem]"
          >
            {PROFILE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-accent-hover hover:shadow-accent/40 sm:px-6 sm:py-3"
            >
              View Projects <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent/40 bg-background px-5 py-2.5 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent-soft sm:px-6 sm:py-3"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-1 text-sm font-medium text-foreground/70 transition hover:text-accent sm:inline-flex"
            >
              Let&apos;s Connect →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center gap-2.5 pt-1"
          >
            {[
              { href: PROFILE.socials.github, Icon: Github, label: "GitHub" },
              { href: PROFILE.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${PROFILE.email}`, Icon: Mail, label: "Email" },
              { href: `tel:${PROFILE.phone}`, Icon: Phone, label: "Phone" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/60 transition hover:border-accent hover:bg-accent hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — fully contained profile card ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative hidden lg:flex lg:items-center lg:justify-center"
        >
          {/* ambient glow */}
          <div aria-hidden className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-accent/8 blur-3xl" />

          <div className="relative w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-accent/20 bg-background-soft shadow-2xl shadow-accent/10">
            {/* top accent line */}
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            {/* avatar + name */}
            <div className="flex flex-col items-center gap-4 px-8 pb-6 pt-10">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent shadow-xl shadow-accent/40"
              >
                <span className="font-display text-4xl font-bold text-white">K</span>
              </motion.div>
              <div className="text-center">
                <p className="font-display text-xl font-bold tracking-tight text-foreground">Jai Krithika R</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Flutter · AI · IoT</p>
              </div>
              {/* available pill */}
              <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/65">Open to Opportunities</span>
              </div>
            </div>

            {/* stats strip */}
            <div className="grid grid-cols-3 divide-x divide-border border-y border-border bg-background">
              {[
                { value: "8.26", label: "CGPA" },
                { value: "2+", label: "Wins" },
                { value: "3+", label: "Projects" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-0.5 py-4">
                  <p className="font-display text-xl font-bold tracking-tight text-accent">{s.value}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/45">{s.label}</p>
                </div>
              ))}
            </div>

            {/* achievement badges */}
            <div className="flex flex-col gap-2 p-4">
              {HERO_BADGES.map((b, idx) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65 + idx * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-xl border border-accent/15 bg-background px-4 py-2.5 transition hover:border-accent/30 hover:bg-accent-soft/40"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-[10px] font-bold text-accent">
                    0{idx + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[13px] font-semibold leading-tight text-foreground">{b.label}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-accent">{b.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* footer */}
            <div className="border-t border-accent/15 bg-accent/5 px-6 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/50">
                Chennai, India · B.E. CSE · 2027
              </p>
            </div>

            {/* bottom accent line */}
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent"
      >
        <span className="h-px w-8 bg-accent" /> Scroll
      </motion.div>
    </section>
  );
}
