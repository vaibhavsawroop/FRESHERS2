import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, CalendarDays } from "lucide-react";
import { site } from "@/data/site";
import { useCountdown } from "@/hooks/useCountdown";

function CountUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="gradient-ring relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur sm:h-20 sm:w-20">
        <span className="font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
          {display}
        </span>
      </div>
      <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const t = useCountdown(site.freshersDate);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Floating sparkle accents */}
      {!reduce &&
        [
          { top: "20%", left: "12%", d: 0 },
          { top: "30%", right: "14%", d: 1.2 },
          { bottom: "22%", left: "18%", d: 0.6 },
        ].map(({ d, ...pos }, i) => (
          <motion.span
            key={i}
            className="absolute hidden text-violet-300/60 sm:block"
            style={pos as React.CSSProperties}
            animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: d }}
          >
            <Sparkles className="h-5 w-5" />
          </motion.span>
        ))}

      <div className="container-px relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* badge */}
          <motion.div variants={item}>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
              </span>
              Welcome, Batch of {site.batchYear}
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={item}
            className="mt-7 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Your journey at{" "}
            <span className="text-gradient">IISER Thiruvananthapuram</span>{" "}
            begins here
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            Everything a fresher needs in one place — explore clubs, discover
            campus facilities, meet your seniors, and get answers to all your
            questions before day one.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a href="#clubs" className="btn-primary group w-full sm:w-auto">
              Explore campus life
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#mentors" className="btn-ghost w-full sm:w-auto">
              Connect with seniors
            </a>
          </motion.div>

          {/* countdown */}
          <motion.div variants={item} className="mt-16 w-full">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm text-slate-400">
              <CalendarDays className="h-4 w-4 text-brand-300" />
              {t.done ? (
                <span>The celebration has begun — welcome aboard! 🎉</span>
              ) : (
                <span>Countdown to Freshers' Day</span>
              )}
            </div>
            <div className="flex items-start justify-center gap-3 sm:gap-5">
              <CountUnit value={t.days} label="Days" />
              <span className="pt-5 font-display text-2xl text-slate-600 sm:pt-6 sm:text-3xl">:</span>
              <CountUnit value={t.hours} label="Hours" />
              <span className="pt-5 font-display text-2xl text-slate-600 sm:pt-6 sm:text-3xl">:</span>
              <CountUnit value={t.minutes} label="Minutes" />
              <span className="pt-5 font-display text-2xl text-slate-600 sm:pt-6 sm:text-3xl">:</span>
              <CountUnit value={t.seconds} label="Seconds" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      {!reduce && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <div className="grid h-9 w-6 place-items-start justify-center rounded-full border border-white/20 pt-1.5">
            <span className="h-1.5 w-1 rounded-full bg-white/60" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
