import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import { events, type EventItem } from "@/data/events";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const tagStyles: Record<EventItem["tag"], string> = {
  Ceremony: "bg-brand-500/15 text-brand-300 border-brand-400/30",
  Fun: "bg-violet-500/15 text-violet-300 border-violet-400/30",
  Info: "bg-teal-500/15 text-teal-300 border-teal-400/30",
  Cultural: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30",
  Sports: "bg-amber-500/15 text-amber-300 border-amber-400/30",
};

function TimelineCard({ event, index }: { event: EventItem; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-8">
      {/* dot on the center line */}
      <span className="absolute left-4 top-6 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-ink ring-2 ring-brand-400 md:left-1/2">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
      </span>

      {/* card — alternate sides on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "ml-10 md:ml-0",
          isLeft ? "md:col-start-1 md:pr-4" : "md:col-start-2 md:pl-4"
        )}
      >
        <div className="glass card-hover p-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold text-brand-300">
              {event.day}
            </span>
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
                tagStyles[event.tag]
              )}
            >
              {event.tag}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-white">
            {event.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {event.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-teal-400" />
              {event.date} · {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-violet-400" />
              {event.venue}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Events() {
  return (
    <section id="events" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Freshers' Schedule"
          title={
            <>
              Your first few days, <span className="text-gradient">mapped out</span>
            </>
          }
          subtitle="A taste of what's coming. Times and venues are templates — swap in the official schedule when it's ready."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* center line */}
          <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-400/60 via-violet-400/40 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {events.map((e, i) => (
              <TimelineCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
