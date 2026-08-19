import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { OrbitVisual } from "./OrbitVisual";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden ambient">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,oklch(0.16_0.045_285)_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pt-36 pb-24 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:pt-44 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          <h1 className="font-display text-[2.6rem] leading-[1.06] font-semibold sm:text-6xl lg:text-[4rem]">
            The semantic context layer for production AI—
            <span className="text-gradient"> More intelligence per token.</span>
          </h1>
          <p className="mt-7 max-w-md text-base text-foreground/70">
            Understand, optimize, and preserve the context your AI needs before every request
            reaches the model.
          </p>
          <motion.a
            href="#challenge"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-background/80 px-6 py-3.5 text-sm font-medium glow-ring"
          >
            Try Now <ArrowRight size={15} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <OrbitVisual />
        </motion.div>
      </div>
    </section>
  );
}
