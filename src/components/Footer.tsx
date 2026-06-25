import { GraduationCap, Instagram, Globe, Mail, MapPin, Heart } from "lucide-react";
import { nav, site } from "@/data/site";
import { AnagramReveal } from "@/components/ui/AnagramReveal";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand block */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 via-violet-500 to-teal-400 text-white shadow-glow">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                {site.name}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {site.longName}. A warm welcome to the {site.batchYear} batch — your
              journey into research, friendships and campus life starts here.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-teal-400" />
              {site.location}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Explore
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] transition group-hover:border-white/25">
                    <Mail className="h-4 w-4" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] transition group-hover:border-white/25">
                    <Instagram className="h-4 w-4" />
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.website}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] transition group-hover:border-white/25">
                    <Globe className="h-4 w-4" />
                  </span>
                  Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {site.batchYear} {site.fullName}. Made for freshers, by seniors.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <AnagramReveal
              from="where every great story begins"
              to="behind every mask, a friend"
              className="italic tracking-wide"
            />
            <Heart className="h-3.5 w-3.5 fill-violet-400 text-violet-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
