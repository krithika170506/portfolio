"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm shadow-border/50"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white shadow-md shadow-accent/30 transition group-hover:scale-105 group-hover:shadow-accent/50">
              K
            </span>
            <span className="text-foreground">{PROFILE.shortName}.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 text-sm font-medium text-foreground/65 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-3.5 py-2 transition-colors hover:text-accent"
              >
                {l.label}
                <span className="pointer-events-none absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              className="hidden rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-accent/25 transition hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 sm:inline-flex"
            >
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground/65 transition hover:border-accent/50 hover:text-accent md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-x-4 top-16 z-50 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-foreground/10 md:hidden"
            >
              <nav className="flex flex-col p-3">
                {NAV_LINKS.map((l, idx) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-foreground/70 transition hover:bg-accent-soft hover:text-accent"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <div className="my-2 h-px bg-border" />
                <a
                  href="/resume.pdf"
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-xl bg-accent px-4 py-3 text-base font-semibold text-white transition hover:bg-accent-hover"
                >
                  Download Resume
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
