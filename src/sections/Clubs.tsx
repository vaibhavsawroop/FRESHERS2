import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { clubs, clubCategories, type ClubCategory } from "@/data/clubs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { cn, accentMap } from "@/lib/utils";

export function Clubs() {
  const [filter, setFilter] = useState<"All" | ClubCategory>("All");

  const visible = useMemo(
    () => (filter === "All" ? clubs : clubs.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <section id="clubs" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Clubs & Societies"
          title={
            <>
              Find your <span className="text-gradient">tribe</span>
            </>
          }
          subtitle="25+ clubs across culture, tech, sports and more. These are template cards — duplicate one in src/data/clubs.ts and add the real club."
        />

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {clubCategories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-ink" : "text-slate-300 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="club-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.03]" />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((club) => {
              const a = accentMap[club.accent];
              return (
                <motion.article
                  key={club.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group glass card-hover relative overflow-hidden p-6"
                >
                  {/* accent glow */}
                  <div
                    className={cn(
                      "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity group-hover:opacity-70",
                      a.from,
                      "to-transparent"
                    )}
                  />
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-xl ring-1",
                        a.bg,
                        a.border
                      )}
                    >
                      <Icon name={club.icon} className={cn("h-6 w-6", a.text)} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-400">
                      {club.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {club.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {club.blurb}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="text-xs text-slate-500">
                      {club.lead}
                      {club.contact && (
                        <span className={cn("ml-1", a.text)}>· {club.contact}</span>
                      )}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-400 transition group-hover:border-white/30 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
