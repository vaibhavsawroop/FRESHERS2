import { Compass, Users2, Sparkles, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const pillars = [
  {
    icon: Compass,
    title: "Find your way",
    body: "From lecture halls to the canteen's best dosa — know the campus before you arrive.",
  },
  {
    icon: Users2,
    title: "Meet your people",
    body: "Seniors, mentors and clubs ready to welcome you. You're never figuring it out alone.",
  },
  {
    icon: Sparkles,
    title: "Dive into life",
    body: "Music, sports, research, theatre — there's a place for every passion here.",
  },
  {
    icon: ShieldCheck,
    title: "Ask anything",
    body: "Real answers to real fresher questions, so nothing catches you off guard.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome to campus"
              title={
                <>
                  More than a college —{" "}
                  <span className="text-gradient">a community that grows with you</span>
                </>
              }
              subtitle={`${site.longName} is one of India's premier institutes for science education and research. This little corner of the internet is your head-start — built by seniors who remember exactly how the first week feels.`}
            />
            <Reveal direction="up" delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#events" className="btn-primary">
                  See the events
                </a>
                <a href="#faq" className="btn-ghost">
                  Read the FAQs
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: pillars */}
          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <RevealItem
                key={p.title}
                className="glass card-hover group p-6"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] ring-1 ring-white/10 transition group-hover:ring-white/25">
                  <p.icon className="h-6 w-6 text-brand-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {p.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
