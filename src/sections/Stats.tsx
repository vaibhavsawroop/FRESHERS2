import { stats, type Stat } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

function StatCard({ stat }: { stat: Stat }) {
  const { value, ref } = useCountUp(stat.value);
  return (
    <RevealItem className="glass card-hover relative overflow-hidden p-6 text-center sm:p-8">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        <span ref={ref} className="tabular-nums">
          {value.toLocaleString()}
        </span>
        <span className="text-gradient">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
    </RevealItem>
  );
}

export function Stats() {
  return (
    <section className="container-px -mt-10 mb-4">
      <RevealGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} stat={s} />
        ))}
      </RevealGroup>
    </section>
  );
}
