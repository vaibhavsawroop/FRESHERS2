import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/**
 * Letters fly + reshuffle from one phrase into another when scrolled into view.
 * A quiet nod to a certain diary scene — kept subtle on purpose.
 */
export function AnagramReveal({
  from,
  to,
  className = "",
}: {
  from: string;
  to: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"from" | "to">("from");

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setPhase("to");
    const id = setTimeout(() => setPhase("to"), 1400);
    return () => clearTimeout(id);
  }, [inView, reduce]);

  const text = phase === "from" ? from : to;
  const letters = text.split("");

  return (
    <span ref={ref} className={className} aria-label={to}>
      {letters.map((ch, i) => (
        <motion.span
          key={`${phase}-${i}`}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: 8, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}
