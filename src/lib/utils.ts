/** Tiny classNames joiner — keeps JSX tidy without pulling in a dependency. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Maps an accent name to its Tailwind-friendly colour tokens. */
export const accentMap = {
  brand: {
    text: "text-brand-300",
    ring: "ring-brand-500/40",
    glow: "shadow-glow",
    from: "from-brand-500/25",
    bg: "bg-brand-500/15",
    border: "border-brand-400/30",
    dot: "bg-brand-400",
  },
  violet: {
    text: "text-violet-400",
    ring: "ring-violet-500/40",
    glow: "shadow-[0_20px_60px_-20px_rgba(124,58,237,0.5)]",
    from: "from-violet-500/25",
    bg: "bg-violet-500/15",
    border: "border-violet-400/30",
    dot: "bg-violet-400",
  },
  teal: {
    text: "text-teal-400",
    ring: "ring-teal-500/40",
    glow: "shadow-glow-teal",
    from: "from-teal-500/25",
    bg: "bg-teal-500/15",
    border: "border-teal-400/30",
    dot: "bg-teal-400",
  },
} as const;

export type Accent = keyof typeof accentMap;
