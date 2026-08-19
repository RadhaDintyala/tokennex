import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { TEAM } from "./team-data";

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
      </div>
    </section>
  );
}
