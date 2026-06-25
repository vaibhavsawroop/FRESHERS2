import { motion } from "framer-motion";
import { FileText, Backpack } from "lucide-react";
import { documents, essentials } from "@/data/essentials";

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function Column({
  icon,
  title,
  data,
}: {
  icon: React.ReactNode;
  title: string;
  data: { title: string; note: string }[];
}) {
  return (
    <div className="glass card-hover p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="gradient-ring grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.04] text-brand-300">
          {icon}
        </span>
        <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      </div>

      <motion.ul
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-3"
      >
        {data.map((d) => (
          <motion.li
            key={d.title}
            variants={item}
            className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-colors hover:border-brand-300/30 hover:bg-white/[0.05]"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300 transition-transform group-hover:scale-150" />
            <div>
              <p className="font-medium text-slate-100">{d.title}</p>
              <p className="text-sm text-slate-400">{d.note}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export function Essentials() {
  return (
    <section id="bring" className="section">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Before You Arrive</span>
          <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
            What to <span className="text-gradient">Bring</span>
          </h2>
          <p className="mt-4 text-pretty text-slate-300">
            Pack these before day one — keep your papers in one folder, and travel light on the rest.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Column icon={<FileText className="h-5 w-5" />} title="Documents" data={documents} />
          <Column icon={<Backpack className="h-5 w-5" />} title="Essentials" data={essentials} />
        </div>
      </div>
    </section>
  );
}
