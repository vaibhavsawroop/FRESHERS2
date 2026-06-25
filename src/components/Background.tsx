import { motion, useReducedMotion } from "framer-motion";

/**
 * Fixed, GPU-friendly ambient background:
 *  - deep base colour
 *  - three slow "aurora" blobs (pure transform/opacity, so it stays smooth on mobile)
 *  - a faint grid + a top vignette
 * Sits behind everything with pointer-events disabled.
 */
export function Background() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-ink" />

      {/* aurora blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-[15%] -top-[10%] h-[55vh] w-[55vh] rounded-full bg-brand-600/30 blur-[120px]"
        animate={reduce ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-10%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-violet-600/25 blur-[120px]"
        animate={reduce ? undefined : { x: [0, -30, 25, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-15%] left-[25%] h-[55vh] w-[55vh] rounded-full bg-teal-500/20 blur-[130px]"
        animate={reduce ? undefined : { x: [0, 20, -25, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* faint grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />

      {/* top + bottom vignette for depth */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
