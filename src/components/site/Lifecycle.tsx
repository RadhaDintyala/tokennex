import { useState } from "react";
import { motion } from "motion/react";

const STEPS = [
  { n: "01", title: "Ingest", body: "Collect raw information from apps, documents, and interactions." },
  {
    n: "02",
    title: "Understand",
    body: "Identify semantic meaning, relationships, intent, and contextual dependencies.",
  },
  { n: "03", title: "Rank", body: "Score every fragment by relevance to the current request." },
  { n: "04", title: "Retrieve", body: "Pull only the context that actually changes the answer." },
  { n: "05", title: "Compress", body: "Reduce verbosity while preserving semantic fidelity." },
  { n: "06", title: "Optimize", body: "Shape the final context window for maximum intelligence per token." },
  { n: "07", title: "Deliver", body: "Hand a clean, minimal, high-signal context to the model." },
  { n: "08", title: "Preserve", body: "Retain what matters as durable memory for the next request." },
];

const PIPELINE = [
  "Input",
  "Understand",
  "Rank",
  "Retrieve",
  "Compress",
  "Optimize",
  "LLM",
  "Memory",
];

export function Lifecycle() {
  const [active, setActive] = useState(1);
  const R = 40;

  return (
    <section id="lifecycle" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_75%_35%,color-mix(in_oklab,var(--pink)_14%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            The lifecycle of <span className="text-gradient">intelligent context.</span>
          </h2>
          <p className="mt-6 text-foreground/65">
            From raw information to optimized context, TokenNex continuously transforms what your AI
            knows into what it actually needs.
          </p>
        </div>

        {/* Circular lifecycle (desktop) */}
        <div className="relative mx-auto mt-20 hidden aspect-square w-full max-w-[640px] lg:block">
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
            <circle cx="200" cy="200" r="160" fill="none" stroke="white" strokeOpacity="0.1" />
            <motion.circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="var(--violet-soft)"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeDasharray="40 965"
              animate={{ strokeDashoffset: [0, -1005] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {STEPS.map((_, i) => {
              const a = ((i / STEPS.length) * 360 - 90) * (Math.PI / 180);
              return (
                <line
                  key={i}
                  x1={+(200 + Math.cos(a) * 70).toFixed(2)}
                  y1={+(200 + Math.sin(a) * 70).toFixed(2)}
                  x2={+(200 + Math.cos(a) * 150).toFixed(2)}
                  y2={+(200 + Math.sin(a) * 150).toFixed(2)}
                  stroke={i === active ? "var(--violet-soft)" : "white"}
                  strokeOpacity={i === active ? 0.8 : 0.08}
                />
              );
            })}
          </svg>

          {STEPS.map((s, i) => {
            const deg = (i / STEPS.length) * 360 - 90;
            const rad = (deg * Math.PI) / 180;
            return (
              <motion.button
                key={s.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                animate={{ scale: i === active ? 1.12 : 1 }}
                transition={{ duration: 0.35 }}
                className="absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl px-3 py-3 text-center glass"
                style={{
                  left: `${(50 + Math.cos(rad) * R).toFixed(2)}%`,
                  top: `${(50 + Math.sin(rad) * R).toFixed(2)}%`,
                  boxShadow: i === active ? "0 0 40px -8px var(--violet)" : "none",
                }}
              >
                <span className="block text-[10px] tracking-widest text-foreground/45">{s.n}</span>
                <span className="mt-1 block font-display text-sm font-semibold">{s.title}</span>
              </motion.button>
            );
          })}

          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-background/70 p-6 text-center backdrop-blur-xl"
            style={{ boxShadow: "0 0 90px -18px var(--violet)" }}
          >
            <div>
              <p className="font-display text-sm font-semibold">TokenNex</p>
              <p className="mt-2 text-[11px] leading-relaxed text-foreground/60">
                {STEPS[active]?.body}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vertical flow (mobile / tablet) */}
        <div className="mt-16 space-y-3 lg:hidden">
          {STEPS.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className="block w-full rounded-2xl p-5 text-left glass"
              style={{ boxShadow: i === active ? "0 0 40px -14px var(--violet)" : "none" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] tracking-widest text-foreground/45">{s.n}</span>
                <span className="font-display text-sm font-semibold">{s.title}</span>
              </div>
              {i === active && <p className="mt-2 text-sm text-foreground/60">{s.body}</p>}
            </button>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-foreground/55 sm:text-sm">
          {PIPELINE.map((p, i) => (
            <span key={p} className="flex items-center gap-3">
              <span className={i === 6 ? "text-gradient font-medium" : ""}>{p}</span>
              {i < PIPELINE.length - 1 && <span className="text-foreground/25">→</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
