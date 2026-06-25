// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG  ·  Edit these values to personalise the whole site in one place.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "IISER TVM",
  fullName: "IISER Thiruvananthapuram",
  longName: "Indian Institute of Science Education and Research Thiruvananthapuram",
  tagline: "Freshers' Welcome",
  batchYear: "2026",
  // The big day — used by the Hero countdown. (YYYY, monthIndex 0-11, day, hour, min)
  freshersDate: new Date(2026, 7, 1, 9, 0, 0), // 1 Aug 2026, 9:00 AM — TODO: set real date
  location: "Vithura, Thiruvananthapuram, Kerala",
  email: "freshers@iisertvm.ac.in", // TODO: replace
  instagram: "https://instagram.com/", // TODO: replace
  website: "https://www.iisertvm.ac.in/",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Clubs", href: "#clubs" },
  { label: "Campus", href: "#campus" },
  { label: "Bring", href: "#bring" },
  { label: "Mentors", href: "#mentors" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
] as const;
