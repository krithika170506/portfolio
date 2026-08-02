"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "@/lib/constants";
import { Parallax } from "@/components/parallax";

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

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "krithika170506@gmail.com",
    href: `mailto:${PROFILE.email}`,
    cta: "Send a message",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8122341110",
    href: `tel:${PROFILE.phone}`,
    cta: "Call or WhatsApp",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: null,
    cta: null,
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    Icon: Github,
    href: PROFILE.socials.github,
    sub: "@krithika170506",
  },
  {
    label: "LinkedIn",
    Icon: Linkedin,
    href: PROFILE.socials.linkedin,
    sub: "in/jai-krithika",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-[#050a1a] py-20 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <Parallax speed={70} className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2">
        <div aria-hidden className="h-[600px] w-[600px] rounded-full bg-accent/25 blur-3xl" />
      </Parallax>
      <Parallax speed={-50} className="pointer-events-none absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
        <div aria-hidden className="h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      </Parallax>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-accent" />
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Reel 06 · Contact
          </p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="font-display font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white"
          style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
        >
          Let&apos;s{" "}
          <span className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            talk
          </span>
          .
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:mt-6 sm:text-lg"
        >
          Whether you have a project idea, an internship opportunity, or just want
          to say hello — my inbox is open. I typically reply within 24 hours.
        </motion.p>

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <div className="flex flex-col gap-4 sm:gap-5">
            {CONTACT_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              const inner = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur transition sm:py-6 ${
                    item.href ? "hover:border-accent/50 hover:bg-white/[0.08] cursor-pointer" : ""
                  }`}
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-display text-sm font-semibold text-white sm:text-base">
                      {item.value}
                    </p>
                  </div>
                  {item.cta && (
                    <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {item.cta}
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  )}
                </motion.div>
              );

              return item.href ? (
                <a key={item.label} href={item.href}>
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {SOCIALS.map(({ label, Icon, href, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-accent/50 hover:bg-white/[0.08]"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition group-hover:border-accent/50 group-hover:bg-accent group-hover:shadow-md group-hover:shadow-accent/30">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-semibold text-white">
                    {label}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {sub}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-accent" />
              </a>
            ))}

            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-auto flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-5 font-display text-base font-bold text-white shadow-xl shadow-accent/30 transition hover:bg-accent-hover hover:shadow-accent/50"
            >
              Open my inbox
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
            Jai Krithika R · Chennai, India · 2025
          </p>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              Available for opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
