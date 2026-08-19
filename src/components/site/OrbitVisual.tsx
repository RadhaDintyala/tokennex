import { motion } from "motion/react";
import { Mail, MessageSquare, Database, FileText, Sparkles, Cpu, Layers, Globe } from "lucide-react";

type Node = {
  label: string;
  icon: typeof Mail;
  radius: number;
  angle: number;
  duration: number;
  tint: string;
};

const NODES: Node[] = [
  { label: "Google", icon: Globe, radius: 46, angle: -70, duration: 60, tint: "var(--cyan)" },
  { label: "Gmail", icon: Mail, radius: 46, angle: -20, duration: 60, tint: "var(--pink)" },
  { label: "Slack", icon: MessageSquare, radius: 46, angle: 190, duration: 60, tint: "var(--violet-soft)" },
  { label: "Discord", icon: Sparkles, radius: 46, angle: 120, duration: 60, tint: "var(--violet)" },
  { label: "AI", icon: Cpu, radius: 34, angle: 20, duration: 44, tint: "var(--cyan)" },
  { label: "Docs", icon: FileText, radius: 34, angle: 150, duration: 44, tint: "var(--pink)" },
  { label: "Database", icon: Database, radius: 34, angle: 265, duration: 44, tint: "var(--violet-soft)" },
  { label: "Apps", icon: Layers, radius: 34, angle: 60, duration: 44, tint: "var(--violet)" },
];

function OrbitNode({ node }: { node: Node }) {
  const Icon = node.icon;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-0 w-0"
      initial={{ rotate: node.angle }}
      animate={{ rotate: node.angle + 360 }}
      transition={{ duration: node.duration, repeat: Infinity, ease: "linear" }}
    >
      <div style={{ transform: `translateX(${node.radius}%)` }}>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: node.duration, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-white/10 bg-background/80 backdrop-blur-md sm:h-14 sm:w-14"
            style={{ boxShadow: `0 0 26px -4px ${node.tint}` }}
          >
            <Icon size={20} style={{ color: node.tint }} strokeWidth={1.6} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function OrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="var(--violet-soft)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="none" stroke="white" strokeOpacity="0.08" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="white" strokeOpacity="0.1" />
        <circle
          cx="200"
          cy="200"
          r="92"
          fill="none"
          stroke="var(--violet-soft)"
          strokeOpacity="0.22"
          strokeDasharray="3 7"
        />
        <circle cx="200" cy="200" r="120" fill="url(#coreGlow)" />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const r = (a * Math.PI) / 180;
          return (
            <line
              key={a}
              x1={200 + Math.cos(r) * 60}
              y1={200 + Math.sin(r) * 60}
              x2={200 + Math.cos(r) * 178}
              y2={200 + Math.sin(r) * 178}
              stroke="var(--violet-soft)"
              strokeOpacity="0.14"
            />
          );
        })}
        <motion.circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="var(--cyan)"
          strokeOpacity="0.5"
          strokeWidth="1.4"
          strokeDasharray="18 1176"
          animate={{ strokeDashoffset: [0, -1194] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {NODES.map((n) => (
        <OrbitNode key={n.label} node={n} />
      ))}

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-background/60 backdrop-blur-xl sm:h-36 sm:w-36"
        style={{ boxShadow: "0 0 90px -10px var(--violet)" }}
      >
        <div className="text-center">
          <Sparkles className="mx-auto text-violet-soft" size={26} strokeWidth={1.4} />
          <p className="mt-2 font-display text-[11px] font-semibold tracking-wide">TokenNex</p>
          <p className="text-[10px] text-muted-foreground">Context Engine</p>
        </div>
      </motion.div>
    </div>
  );
}
