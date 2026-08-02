"use client";

import { motion } from "framer-motion";
import { Parallax } from "@/components/parallax";

const CLOUD = [
  // Languages — indigo
  { name: "Python",       x: "6%",  y: "12%", size: "text-3xl lg:text-4xl", weight: "font-bold",     color: "border-indigo-300 bg-indigo-50 text-indigo-700",  dur: 7.7,  mx:  28, my: 20, delay: 0    },
  { name: "Dart",         x: "4%",  y: "50%", size: "text-2xl lg:text-3xl", weight: "font-semibold", color: "border-indigo-200 bg-indigo-50 text-indigo-600",  dur: 9.6,  mx: -24, my: 16, delay: 2.0  },
  { name: "Java",         x: "18%", y: "78%", size: "text-xl lg:text-2xl",  weight: "font-semibold", color: "border-indigo-200 bg-indigo-50 text-indigo-600",  dur: 8.3,  mx:  20, my:-14, delay: 1.0  },
  { name: "SQL",          x: "55%", y: "82%", size: "text-xl lg:text-2xl",  weight: "font-semibold", color: "border-indigo-200 bg-indigo-50 text-indigo-500",  dur: 9.0,  mx: -20, my: 16, delay: 3.5  },
  { name: "C",            x: "40%", y: "92%", size: "text-lg lg:text-xl",   weight: "font-medium",   color: "border-indigo-100 bg-indigo-50 text-indigo-500",  dur: 8.0,  mx:  16, my:-12, delay: 1.5  },

  // App Dev — blue (matches site accent)
  { name: "Flutter",      x: "36%", y: "8%",  size: "text-3xl lg:text-4xl", weight: "font-bold",     color: "border-blue-300 bg-blue-50 text-blue-700",        dur: 10.2, mx: -28, my: 20, delay: 0.7  },
  { name: "Firebase",     x: "62%", y: "30%", size: "text-2xl lg:text-3xl", weight: "font-semibold", color: "border-blue-200 bg-blue-50 text-blue-700",        dur: 8.3,  mx:  24, my:-16, delay: 3.0  },
  { name: "Flask",        x: "24%", y: "62%", size: "text-xl lg:text-2xl",  weight: "font-semibold", color: "border-blue-200 bg-blue-50 text-blue-600",        dur: 9.0,  mx: -20, my: 14, delay: 0.5  },

  // AI & CV — sky
  { name: "YOLOv8",       x: "72%", y: "8%",  size: "text-3xl lg:text-4xl", weight: "font-bold",     color: "border-sky-300 bg-sky-50 text-sky-700",           dur: 9.0,  mx: -26, my: 20, delay: 1.2  },
  { name: "OpenCV",       x: "46%", y: "44%", size: "text-2xl lg:text-3xl", weight: "font-semibold", color: "border-sky-200 bg-sky-50 text-sky-700",           dur: 10.9, mx:  22, my:-16, delay: 4.0  },
  { name: "TensorFlow",   x: "14%", y: "30%", size: "text-xl lg:text-2xl",  weight: "font-semibold", color: "border-sky-200 bg-sky-50 text-sky-600",           dur: 7.7,  mx:  20, my: 14, delay: 1.8  },
  { name: "Arduino",      x: "84%", y: "44%", size: "text-lg lg:text-xl",   weight: "font-medium",   color: "border-sky-100 bg-sky-50 text-sky-500",           dur: 8.3,  mx: -16, my:-12, delay: 0.3  },

  // Tools & Cloud — teal
  { name: "Git",          x: "30%", y: "22%", size: "text-2xl lg:text-3xl", weight: "font-bold",     color: "border-teal-300 bg-teal-50 text-teal-700",        dur: 9.6,  mx: -24, my: 18, delay: 2.7  },
  { name: "Docker",       x: "60%", y: "66%", size: "text-xl lg:text-2xl",  weight: "font-semibold", color: "border-teal-200 bg-teal-50 text-teal-600",        dur: 7.7,  mx:  20, my:-14, delay: 1.3  },
  { name: "AWS",          x: "86%", y: "22%", size: "text-xl lg:text-2xl",  weight: "font-semibold", color: "border-teal-200 bg-teal-50 text-teal-600",        dur: 9.0,  mx: -20, my: 12, delay: 3.7  },
  { name: "GCP",          x: "74%", y: "56%", size: "text-lg lg:text-xl",   weight: "font-medium",   color: "border-teal-100 bg-teal-50 text-teal-500",        dur: 10.2, mx:  16, my:-10, delay: 2.3  },

  // Design & Creative — purple
  { name: "Figma",        x: "6%",  y: "88%", size: "text-xl lg:text-2xl",  weight: "font-semibold", color: "border-purple-200 bg-purple-50 text-purple-700",  dur: 8.3,  mx:  20, my:-14, delay: 0.8  },
  { name: "Postman",      x: "70%", y: "88%", size: "text-lg lg:text-xl",   weight: "font-medium",   color: "border-purple-200 bg-purple-50 text-purple-600",  dur: 9.6,  mx: -18, my: 12, delay: 3.2  },
  { name: "GitHub",       x: "88%", y: "72%", size: "text-base lg:text-lg", weight: "font-medium",   color: "border-purple-100 bg-purple-50 text-purple-500",  dur: 7.1,  mx:  14, my: 10, delay: 0.1  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-border bg-background-soft"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 text-accent opacity-[0.04] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <Parallax speed={45} className="pointer-events-none absolute -top-32 left-1/4">
        <div aria-hidden className="h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
      </Parallax>
      <Parallax speed={-30} className="pointer-events-none absolute top-1/2 right-1/4">
        <div aria-hidden className="h-80 w-80 rounded-full bg-cyan-400/8 blur-3xl" />
      </Parallax>
      <Parallax speed={35} className="pointer-events-none absolute bottom-0 left-1/3">
        <div aria-hidden className="h-72 w-72 rounded-full bg-violet-400/8 blur-3xl" />
      </Parallax>

      <div className="relative mx-auto max-w-6xl px-5 pt-16 sm:px-6 sm:pt-24 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-accent" />
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Reel 05 · Skills
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="font-display font-bold uppercase leading-[0.88] tracking-[-0.04em] text-foreground"
            style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
          >
            The{" "}
            <span className="text-gradient-blue">stack.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xs text-sm leading-relaxed text-foreground/45"
          >
            Two years of shipping — internship, hackathons, academic projects.
            Every skill earned through a real deadline.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-5"
        >
          {[
            { label: "Languages",    dot: "bg-indigo-500" },
            { label: "App Dev",      dot: "bg-blue-500" },
            { label: "AI & Vision",  dot: "bg-sky-500" },
            { label: "Tools & Cloud",dot: "bg-teal-500" },
            { label: "Design",       dot: "bg-purple-500" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${l.dot}`} />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/40">
                {l.label}
              </span>
            </div>
          ))}
          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/30">
            Size = proficiency
          </span>
        </motion.div>
      </div>

      <div className="relative mx-auto hidden h-[520px] max-w-6xl px-6 lg:block lg:px-12">
        {CLOUD.map((chip) => (
          <motion.div
            key={chip.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: chip.delay * 0.4 }}
            style={{ position: "absolute", left: chip.x, top: chip.y }}
          >
            <motion.span
              animate={{
                x: [0, chip.mx, chip.mx * 0.3, -chip.mx * 0.6, 0],
                y: [0, -chip.my * 0.5, chip.my, chip.my * 0.2, 0],
              }}
              transition={{
                duration: chip.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: chip.delay,
              }}
              whileHover={{ scale: 1.12, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              style={{ display: "inline-block" }}
              className={`cursor-default select-none rounded-full border px-4 py-2 shadow-sm ${chip.size} ${chip.weight} ${chip.color}`}
            >
              {chip.name}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:hidden">
        <div className="flex flex-wrap gap-2.5">
          {[...CLOUD].sort((a, b) => b.size.localeCompare(a.size)).map((chip) => (
            <span
              key={chip.name}
              className={`rounded-full border px-4 py-2 text-sm font-semibold sm:text-base ${chip.color}`}
            >
              {chip.name}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl border-t border-border px-5 py-8 sm:px-6 lg:px-12">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/35">
          Also in the toolkit
        </p>
        <div className="flex flex-wrap gap-2">
          {["Arduino IDE", "REST APIs", "FlutterFlow", "IoT Sensors", "BLE Modules", "Machine Learning", "Digital Transformation", "App Deployment"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background-soft px-4 py-1.5 font-display text-xs font-medium text-foreground/55 transition hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
