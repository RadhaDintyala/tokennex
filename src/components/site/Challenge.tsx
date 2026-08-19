import { motion } from "motion/react";
import { Layers, EyeOff, Coins, Network } from "lucide-react";

const problems = [
  { icon: Layers, title: "Context Overload", body: "Too much information reaches the model." },
  {
    icon: EyeOff,
    title: "Lost Relevance",
    body: "Important information gets buried inside large contexts.",
  },
  { icon: Coins, title: "Token Waste", body: "Unnecessary context increases token consumption." },
  {
    icon: Network,
    title: "Fragmented Knowledge",
    body: "Useful information exists across different sources and interactions.",
  },
];

const noisyFlow = ["More Data", "More Context", "More Noise", "Higher Token Usage"];
const cleanFlow = ["TokenNex", "Semantic Understanding", "Relevant Context", "Better AI"];

function Flow({ steps, accent }: { steps: string[]; accent: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="rounded-full px-5 py-2.5 text-xs sm:text-sm glass"
            style={
              accent
                ? { boxShadow: "0 0 34px -10px var(--violet)", borderColor: "rgba(255,255,255,.2)" }
                : {}
            }
          >
            <span className={accent ? "text-foreground" : "text-foreground/60"}>{s}</span>
          </motion.div>
          {i < steps.length - 1 && (
            <span
              className="h-px w-6 sm:w-10"
              style={{
                background: accent
                  ? "linear-gradient(90deg, var(--violet-soft), transparent)"
                  : "linear-gradient(90deg, rgba(255,255,255,.25), transparent)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export function Challenge() {
  return (
    <section id="challenge" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(60%_60%_at_20%_0%,color-mix(in_oklab,var(--violet)_22%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-4xl leading-[1.1] font-semibold sm:text-5xl"
        >
          Intelligence is everywhere.
          <br />
          <span className="text-foreground/55">Great work still isn't.</span>
        </motion.h2>

        <p className="mt-6 max-w-xl text-foreground/65">
          Models keep getting better while the context around them keeps getting messier. TokenNex
          works on the layer in between — the meaning your system already has, but can't yet use.
        </p>

        <div className="mt-16 space-y-8 rounded-3xl px-4 py-10 glass sm:px-10">
          <Flow steps={noisyFlow} accent={false} />
          <div className="mx-auto h-10 w-px bg-gradient-to-b from-transparent via-violet-soft to-transparent" />
          <Flow steps={cleanFlow} accent />
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 glass"
            >
              <p.icon size={20} className="text-violet-soft" strokeWidth={1.5} />
              <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mt-20 max-w-2xl text-center font-display text-2xl font-medium sm:text-3xl"
        >
          TokenNex transforms <span className="text-foreground/50">raw context</span> into{" "}
          <span className="text-gradient">meaningful context.</span>
        </motion.p>
      </div>
    </section>
  );
}
