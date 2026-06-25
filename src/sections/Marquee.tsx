const words = [
  "Research",
  "Clubs",
  "Friendships",
  "Hostel Life",
  "Fests",
  "Sports",
  "Mentorship",
  "Labs",
  "Adventure",
  "Community",
];

/** Infinite, accessibility-friendly marquee of campus-life keywords. */
export function Marquee() {
  return (
    <div className="relative border-y border-white/10 bg-white/[0.02] py-6">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
          {[...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-xl font-semibold text-slate-500 sm:text-2xl">
                {w}
              </span>
              <span className="text-teal-400/70">✦</span>
            </span>
          ))}
        </div>
        {/* duplicate track for seamless loop */}
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-8 pr-8"
        >
          {[...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-xl font-semibold text-slate-500 sm:text-2xl">
                {w}
              </span>
              <span className="text-teal-400/70">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
