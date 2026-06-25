import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Plus, HelpCircle } from "lucide-react";
import { faqs, faqCategories } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function FaqRow({
  faq,
  open,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03] sm:px-6"
      >
        <span className="flex items-center gap-3">
          <span className="hidden rounded-md border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:inline">
            {faq.category}
          </span>
          <span className="text-base font-medium text-white">{faq.question}</span>
        </span>
        <span
          className={cn(
            "grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-300 transition-transform duration-300",
            open && "rotate-45 border-white/30 bg-white/10"
          )}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400 sm:px-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof faqCategories)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchesCat = category === "All" || f.category === category;
      const matchesQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="faq" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Got Questions?"
          title={
            <>
              Everything you're <span className="text-gradient">wondering about</span>
            </>
          }
          subtitle="Search or filter. Answers are templates for now — fill in the real ones in src/data/faqs.ts."
        />

        <div className="mx-auto mt-10 max-w-3xl">
          {/* search */}
          <Reveal direction="up">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions…"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-400/50 focus:bg-white/[0.05] focus:ring-2 focus:ring-brand-400/20"
              />
            </div>
          </Reveal>

          {/* category chips */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                  category === cat
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* list */}
          <div className="mt-6 space-y-3">
            {filtered.length === 0 ? (
              <div className="glass flex flex-col items-center gap-2 px-6 py-12 text-center">
                <HelpCircle className="h-8 w-8 text-slate-500" />
                <p className="text-sm text-slate-400">
                  No matches. Try a different word or category.
                </p>
              </div>
            ) : (
              filtered.map((faq) => (
                <FaqRow
                  key={faq.id}
                  faq={faq}
                  open={openId === faq.id}
                  onToggle={() =>
                    setOpenId((cur) => (cur === faq.id ? null : faq.id))
                  }
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
