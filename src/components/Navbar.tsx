import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { nav, site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = nav.map((n) => n.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-px">
        <nav
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled
              ? "border border-white/10 bg-ink/70 shadow-glow backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Brand */}
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 via-violet-500 to-teal-400 text-white shadow-glow">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-tight text-white">
                {site.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Freshers' {site.batchYear}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden btn-primary !px-5 !py-2.5 text-sm sm:inline-flex"
            >
              Connect
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="container-px relative pt-24"
            >
              <div className="glass overflow-hidden p-2">
                <ul className="flex flex-col">
                  {nav.map((item, i) => {
                    const id = item.href.replace("#", "");
                    const isActive = active === id;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition",
                            isActive
                              ? "bg-white/10 text-white"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {item.label}
                          <span className="font-mono text-xs text-slate-500">
                            0{i + 1}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full"
                >
                  Connect with us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
