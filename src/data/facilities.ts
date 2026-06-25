// ─────────────────────────────────────────────────────────────────────────────
// FACILITIES  ·  Campus facilities shown in a bento grid.
// `span` controls how big the card is on large screens.
// ─────────────────────────────────────────────────────────────────────────────

export type Facility = {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide-react icon name
  span: "sm" | "md" | "lg"; // grid footprint
  stat?: string; // optional highlight, e.g. "24/7"
};

export const facilities: Facility[] = [
  {
    id: "fac-1",
    name: "Central Library",
    description:
      "A vast collection of books, journals and digital resources with quiet study zones. Open late during exams.",
    icon: "Library",
    span: "lg",
    stat: "24/7 Reading Room",
  },
  {
    id: "fac-2",
    name: "Research Labs",
    description: "State-of-the-art labs across Biology, Chemistry, Physics and Maths.",
    icon: "FlaskConical",
    span: "md",
    stat: "World-class",
  },
  {
    id: "fac-3",
    name: "Hostels",
    description: "Comfortable on-campus residences — your home away from home.",
    icon: "BedDouble",
    span: "sm",
  },
  {
    id: "fac-4",
    name: "Dining & Mess",
    description: "Multi-cuisine messes and cafés serving fresh meals all day.",
    icon: "UtensilsCrossed",
    span: "sm",
  },
  {
    id: "fac-5",
    name: "Sports Complex",
    description:
      "Indoor and outdoor courts, a gym, and grounds for football, cricket and athletics.",
    icon: "Dumbbell",
    span: "md",
    stat: "10+ sports",
  },
  {
    id: "fac-6",
    name: "Health Centre",
    description: "On-campus medical care and counselling support whenever you need it.",
    icon: "Stethoscope",
    span: "sm",
  },
  {
    id: "fac-7",
    name: "Wi-Fi Campus",
    description: "High-speed internet across academic blocks and hostels.",
    icon: "Wifi",
    span: "sm",
  },
  {
    id: "fac-8",
    name: "Auditorium",
    description: "A modern auditorium for talks, performances and convocations.",
    icon: "Presentation",
    span: "md",
  },
];
