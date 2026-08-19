import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#challenge" },
  { label: "Our Team", href: "#team" },
  { label: "Solutions", href: "#lifecycle" },
  { label: "Contact Us", href: "#connect" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight">
          TokenNex
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#connect" className="text-sm text-foreground/80 hover:text-foreground">
            Log In
          </a>
          <a
            href="#connect"
            className="rounded-full bg-background/70 px-5 py-2.5 text-sm font-medium text-foreground glow-ring transition-transform hover:scale-[1.04]"
          >
            Join Now
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 glass md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-6 rounded-2xl p-5 glass md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a href="#connect" onClick={() => setOpen(false)} className="text-sm text-foreground/80">
              Log In
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
