// ─────────────────────────────────────────────────────────────────────────────
// FAQs  ·  Searchable accordion. Grouped by category. Add as many as you like.
// ─────────────────────────────────────────────────────────────────────────────

export type Faq = {
  id: string;
  category: "Academics" | "Hostel" | "Campus" | "Clubs" | "General";
  question: string;
  answer: string;
};

export const faqCategories = [
  "All",
  "General",
  "Academics",
  "Hostel",
  "Campus",
  "Clubs",
] as const;

export const faqs: Faq[] = [
  {
    id: "faq-1",
    category: "General",
    question: "FAQ 1 — What should I pack before coming to campus?",
    answer:
      "Template answer. List essentials — documents, clothing for the climate, basic stationery, and anything else freshers should bring. Replace with the real checklist.",
  },
  {
    id: "faq-2",
    category: "Academics",
    question: "FAQ 2 — How does the BS-MS course structure work?",
    answer:
      "Template answer. Explain the credit system, first-year common courses, and how majors are chosen later. Add the real academic details here.",
  },
  {
    id: "faq-3",
    category: "Hostel",
    question: "FAQ 3 — What are the hostel rooms and facilities like?",
    answer:
      "Template answer. Describe room types, what's provided, mess timings, laundry and common rooms. Replace with accurate hostel info.",
  },
  {
    id: "faq-4",
    category: "Campus",
    question: "FAQ 4 — How do I get to campus and around it?",
    answer:
      "Template answer. Nearest railway station/airport, shuttle timings, and how to move around campus. Add real transport details.",
  },
  {
    id: "faq-5",
    category: "Clubs",
    question: "FAQ 5 — How and when can I join clubs?",
    answer:
      "Template answer. Explain the Club Expo, sign-up process, and whether there are auditions or open membership. Replace with real steps.",
  },
  {
    id: "faq-6",
    category: "General",
    question: "FAQ 6 — Who do I contact if I need help?",
    answer:
      "Template answer. Point to mentors, the student council, faculty advisors and emergency contacts. Add the real contact list.",
  },
  {
    id: "faq-7",
    category: "Academics",
    question: "FAQ 7 — Do I need to bring a laptop?",
    answer:
      "Template answer. State whether a laptop is required, recommended specs, and lab/computer-centre availability. Replace as needed.",
  },
  {
    id: "faq-8",
    category: "Campus",
    question: "FAQ 8 — What's the weather and what should I wear?",
    answer:
      "Template answer. Describe Thiruvananthapuram's climate through the year and practical clothing tips. Add the real guidance.",
  },
];
