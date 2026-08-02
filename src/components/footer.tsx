import { PROFILE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-accent/15 bg-background-soft px-5 py-10 text-sm text-foreground/65 sm:px-6 sm:py-12">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-sm font-bold text-white shadow-md shadow-accent/30">
            K
          </span>
          <div>
            <p className="font-display font-semibold text-foreground">
              {PROFILE.name}
            </p>
            <p className="text-xs text-foreground/50">
              © {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
        </div>
        <p className="font-mono text-[11px] text-foreground/55">
          Built with{" "}
          <span className="text-accent">Next.js</span> ·{" "}
          <span className="text-accent">TypeScript</span> ·{" "}
          <span className="text-accent">Tailwind</span> ·{" "}
          <span className="text-accent">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
