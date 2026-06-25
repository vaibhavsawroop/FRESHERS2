import { facilities, type Facility } from "@/data/facilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const spanClass: Record<Facility["span"], string> = {
  sm: "sm:col-span-1 sm:row-span-1",
  md: "sm:col-span-2 sm:row-span-1",
  lg: "sm:col-span-2 lg:col-span-2 sm:row-span-2",
};

export function Campus() {
  return (
    <section id="campus" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Campus & Facilities"
          title={
            <>
              A campus built to <span className="text-gradient">help you thrive</span>
            </>
          }
          subtitle="Everything from world-class labs to late-night reading rooms. Tap into the spaces that'll shape your five years here."
        />

        <RevealGroup
          className="mt-14 grid auto-rows-[170px] grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4"
          stagger={0.06}
        >
          {facilities.map((f) => (
            <RevealItem
              key={f.id}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]",
                spanClass[f.span]
              )}
            >
              {/* hover sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-violet-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-500/10 group-hover:to-violet-500/10 group-hover:opacity-100" />

              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] ring-1 ring-white/10">
                  <Icon name={f.icon} className="h-6 w-6 text-teal-300" />
                </div>
                {f.stat && (
                  <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-2.5 py-1 text-[11px] font-medium text-teal-300">
                    {f.stat}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{f.name}</h3>
                <p
                  className={cn(
                    "mt-1.5 text-sm leading-relaxed text-slate-400",
                    f.span === "sm" && "line-clamp-2"
                  )}
                >
                  {f.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
