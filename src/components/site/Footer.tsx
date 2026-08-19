export function Footer() {
  const links = [
    { label: "Services", href: "#challenge" },
    { label: "Solutions", href: "#lifecycle" },
    { label: "Our Team", href: "#team" },
    { label: "Connect", href: "#connect" },
  ];

  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold">TokenNex</p>
            <p className="mt-1 text-sm text-foreground/55">
              The semantic context layer for production AI.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-xs text-foreground/40">© 2026 TokenNex</p>
      </div>
    </footer>
  );
}
