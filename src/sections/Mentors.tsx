import { MessageCircle, GraduationCap } from "lucide-react";
import { mentors, type Mentor } from "@/data/mentors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn, accentMap } from "@/lib/utils";

function MentorCard({ mentor }: { mentor: Mentor }) {
  const a = accentMap[mentor.accent];
  return (
    <RevealItem className="group glass card-hover relative overflow-hidden p-6">
      <div
        className={cn(
          "pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity group-hover:opacity-70",
          a.from,
          "to-transparent"
        )}
      />
      <div className="flex items-center gap-4">
        {/* avatar */}
        {mentor.image ? (
          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-14 w-14 rounded-2xl object-cover ring-1 ring-white/15"
          />
        ) : (
          <div
            className={cn(
              "grid h-14 w-14 place-items-center rounded-2xl font-display text-lg font-bold text-white ring-1",
              a.bg,
              a.border
            )}
          >
            {mentor.initials}
          </div>
        )}
        <div>
          <h3 className="text-base font-semibold text-white">{mentor.name}</h3>
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            <GraduationCap className="h-3.5 w-3.5" />
            {mentor.year}
          </p>
          <span className={cn("mt-1 inline-block text-xs font-medium", a.text)}>
            {mentor.stream}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">{mentor.bio}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {mentor.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.07]"
      >
        <MessageCircle className="h-4 w-4" />
        Reach out {mentor.contact ? `· ${mentor.contact}` : ""}
      </a>
    </RevealItem>
  );
}

export function Mentors() {
  return (
    <section id="mentors" className="section">
      <div className="container-px">
        <SectionHeading
          eyebrow="Connect with Seniors"
          title={
            <>
              Mentors who've <span className="text-gradient">been there</span>
            </>
          }
          subtitle="Real seniors, ready to help you settle in. These are template profiles — add the actual mentors in src/data/mentors.ts."
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m) => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </RevealGroup>

        <Reveal direction="up" delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-brand-500/10 via-violet-500/10 to-teal-500/10 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Want a dedicated mentor-buddy?
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Sign up and we'll pair you with a senior from your stream.
              </p>
            </div>
            <a href="#contact" className="btn-primary shrink-0">
              Request a mentor
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
