import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { TEAM } from "./Team";

export function Connect() {
  return (
    <section id="connect" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,color-mix(in_oklab,var(--violet)_26%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-4xl leading-[1.1] font-semibold sm:text-5xl"
        >
          Let's build the future of <span className="text-gradient">intelligent context.</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-lg text-foreground/65">
          Connect with the TokenNex team and follow our journey.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {TEAM.map((m) => (
            <motion.a
              key={m.name}
              href={m.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 text-left glass"
            >
              <p className="font-display text-sm font-semibold">{m.name}</p>
              <p className="mt-1 text-xs text-foreground/55">{m.role}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs text-violet-soft">
                LinkedIn <ArrowUpRight size={13} />
              </span>
            </motion.a>
          ))}
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-foreground/75 glass transition-colors hover:text-foreground"
        >
          <Github size={15} /> Follow the build
        </a>
      </div>
    </section>
  );
}
