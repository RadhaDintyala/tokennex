import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

export const TEAM = [
  {
    name: "V. Hima Sri Chandra",
    role: "Chief Product Officer",
    blurb: "Shapes how TokenNex turns semantic depth into a product people can build on.",
    linkedin: "https://www.linkedin.com/",
    gradient: "linear-gradient(135deg, var(--violet), var(--pink))",
    initials: "HC",
  },
  {
    name: "D. Radha Kalyani",
    role: "Chief Technical Officer",
    blurb: "Builds the retrieval, compression, and optimization core of the context engine.",
    linkedin: "https://www.linkedin.com/",
    gradient: "linear-gradient(135deg, var(--cyan), var(--violet))",
    initials: "RK",
  },
  {
    name: "B. Vyshnavi",
    role: "Chief Marketing Officer",
    blurb: "Tells the story of context — clearly, precisely, and without the noise.",
    linkedin: "https://www.linkedin.com/",
    gradient: "linear-gradient(135deg, var(--amber), var(--pink))",
    initials: "BV",
  },
];

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_25%_50%,color-mix(in_oklab,var(--violet)_16%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="max-w-xl text-4xl font-semibold sm:text-5xl">
          Meet the team behind <span className="text-gradient">TokenNex.</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-7 glass"
            >
              <div
                className="grid h-16 w-16 place-items-center rounded-2xl font-display text-sm font-semibold text-background"
                style={{ backgroundImage: m.gradient }}
              >
                {m.initials}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-violet-soft">{m.role}</p>
              <p className="mt-4 text-sm text-foreground/60">{m.blurb}</p>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="mt-6 inline-grid h-9 w-9 place-items-center rounded-full border border-white/10 text-foreground/70 transition-colors hover:text-foreground"
              >
                <Linkedin size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
