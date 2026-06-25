// ─────────────────────────────────────────────────────────────────────────────
// EVENTS  ·  Freshers schedule shown as a vertical timeline.
// Duplicate an entry and edit. `tag` colours the dot/label.
// ─────────────────────────────────────────────────────────────────────────────

export type EventItem = {
  id: string;
  day: string; // e.g. "Day 1" or a date
  date: string; // human readable date
  time: string;
  title: string;
  description: string;
  venue: string;
  tag: "Ceremony" | "Fun" | "Info" | "Cultural" | "Sports";
};

export const events: EventItem[] = [
  {
    id: "event-1",
    day: "Day 1",
    date: "Aug 1, 2026",
    time: "9:00 AM",
    title: "Event 1 — Inauguration & Welcome",
    description:
      "Template event. Opening ceremony, director's address and the official welcome to the new batch.",
    venue: "Main Auditorium",
    tag: "Ceremony",
  },
  {
    id: "event-2",
    day: "Day 1",
    date: "Aug 1, 2026",
    time: "11:30 AM",
    title: "Event 2 — Campus Orientation Walk",
    description:
      "Template event. Guided tour of academic blocks, library, labs, hostels and the must-know spots.",
    venue: "Meet at Central Lawn",
    tag: "Info",
  },
  {
    id: "event-3",
    day: "Day 1",
    date: "Aug 1, 2026",
    time: "4:00 PM",
    title: "Event 3 — Club Expo & Mixer",
    description:
      "Template event. Every club sets up a booth — explore, sign up and meet your seniors over snacks.",
    venue: "Student Activity Centre",
    tag: "Fun",
  },
  {
    id: "event-4",
    day: "Day 2",
    date: "Aug 2, 2026",
    time: "10:00 AM",
    title: "Event 4 — Academics & Mentorship Briefing",
    description:
      "Template event. How courses, credits and the mentor-buddy system work. Bring your questions.",
    venue: "Lecture Hall Complex",
    tag: "Info",
  },
  {
    id: "event-5",
    day: "Day 2",
    date: "Aug 2, 2026",
    time: "6:30 PM",
    title: "Event 5 — Cultural Night",
    description:
      "Template event. Music, dance and drama performances by seniors to officially kick off campus life.",
    venue: "Open Air Theatre",
    tag: "Cultural",
  },
  {
    id: "event-6",
    day: "Day 3",
    date: "Aug 3, 2026",
    time: "7:00 AM",
    title: "Event 6 — Sports Meet & Treasure Hunt",
    description:
      "Template event. Friendly matches and a campus-wide treasure hunt to break the ice with your batch.",
    venue: "Sports Grounds",
    tag: "Sports",
  },
];
