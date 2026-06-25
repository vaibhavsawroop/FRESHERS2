// ─────────────────────────────────────────────────────────────────────────────
// CLUBS  ·  Template entries. Duplicate a block and fill in the real details.
// `category` is used by the filter chips. `accent` themes the card glow.
// Icons come from lucide-react (https://lucide.dev) — use any icon name.
// ─────────────────────────────────────────────────────────────────────────────

export type ClubCategory =
  | "Cultural"
  | "Technical"
  | "Sports"
  | "Academic"
  | "Social"
  | "Arts";

export type Club = {
  id: string;
  name: string;
  category: ClubCategory;
  blurb: string;
  icon: string; // lucide-react icon name
  accent: "brand" | "violet" | "teal";
  lead?: string; // club coordinator name
  contact?: string; // email / instagram handle
};

export const clubCategories: ("All" | ClubCategory)[] = [
  "All",
  "Cultural",
  "Technical",
  "Sports",
  "Academic",
  "Social",
  "Arts",
];

export const clubs: Club[] = [
  {
    id: "club-1",
    name: "Club 1 — Music Society",
    category: "Cultural",
    blurb:
      "Template club. Replace with your real description — what you do, when you meet, and what makes you special.",
    icon: "Music",
    accent: "violet",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
  {
    id: "club-2",
    name: "Club 2 — Coding & Robotics",
    category: "Technical",
    blurb:
      "Template club. Hackathons, projects, workshops — describe the cool stuff freshers can build with you.",
    icon: "Cpu",
    accent: "brand",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
  {
    id: "club-3",
    name: "Club 3 — Sports & Athletics",
    category: "Sports",
    blurb:
      "Template club. Football, basketball, badminton, fitness — tell freshers how to get on the team.",
    icon: "Trophy",
    accent: "teal",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
  {
    id: "club-4",
    name: "Club 4 — Drama & Theatre",
    category: "Arts",
    blurb:
      "Template club. Stage productions, improv nights and backstage magic await. Describe your vibe here.",
    icon: "Drama",
    accent: "violet",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
  {
    id: "club-5",
    name: "Club 5 — Science & Astronomy",
    category: "Academic",
    blurb:
      "Template club. Stargazing, talks, journal clubs — perfect for the curious. Add your real details.",
    icon: "Telescope",
    accent: "brand",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
  {
    id: "club-6",
    name: "Club 6 — Photography & Film",
    category: "Arts",
    blurb:
      "Template club. Capture campus life, run photo walks and edit-a-thons. Replace with your story.",
    icon: "Camera",
    accent: "teal",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
  {
    id: "club-7",
    name: "Club 7 — Social Outreach",
    category: "Social",
    blurb:
      "Template club. Volunteering, community drives and impact projects. Tell freshers how to join in.",
    icon: "HeartHandshake",
    accent: "violet",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
  {
    id: "club-8",
    name: "Club 8 — Debate & Literary",
    category: "Cultural",
    blurb:
      "Template club. Debates, quizzes, open-mics and the campus magazine. Add your real description here.",
    icon: "BookOpen",
    accent: "brand",
    lead: "Coordinator Name",
    contact: "@club_handle",
  },
];
