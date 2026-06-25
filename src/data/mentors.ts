// ─────────────────────────────────────────────────────────────────────────────
// MENTORS  ·  Seniors freshers can connect with. Template entries below.
// `initials` is used for the avatar fallback. Add `image` to use a photo.
// ─────────────────────────────────────────────────────────────────────────────

export type Mentor = {
  id: string;
  name: string;
  initials: string;
  year: string; // e.g. "BS-MS · 3rd Year"
  stream: string; // e.g. "Physics"
  bio: string;
  tags: string[];
  contact?: string; // instagram / email
  accent: "brand" | "violet" | "teal";
  image?: string;
};

export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "Senior 1",
    initials: "S1",
    year: "BS-MS · 4th Year",
    stream: "Physics",
    bio: "Template mentor. Friendly face for academics, research and settling into campus life.",
    tags: ["Academics", "Research", "Hostel life"],
    contact: "@senior_handle",
    accent: "brand",
  },
  {
    id: "mentor-2",
    name: "Senior 2",
    initials: "S2",
    year: "BS-MS · 3rd Year",
    stream: "Biology",
    bio: "Template mentor. Ask me about clubs, fests and balancing fun with coursework.",
    tags: ["Clubs", "Events", "Time management"],
    contact: "@senior_handle",
    accent: "violet",
  },
  {
    id: "mentor-3",
    name: "Senior 3",
    initials: "S3",
    year: "BS-MS · 3rd Year",
    stream: "Chemistry",
    bio: "Template mentor. Here for course selection, labs and exam-prep tips.",
    tags: ["Courses", "Labs", "Exams"],
    contact: "@senior_handle",
    accent: "teal",
  },
  {
    id: "mentor-4",
    name: "Senior 4",
    initials: "S4",
    year: "BS-MS · 5th Year",
    stream: "Mathematics",
    bio: "Template mentor. Talk to me about research projects, internships and grad-school plans.",
    tags: ["Research", "Internships", "Higher studies"],
    contact: "@senior_handle",
    accent: "brand",
  },
  {
    id: "mentor-5",
    name: "Senior 5",
    initials: "S5",
    year: "BS-MS · 4th Year",
    stream: "Data Science",
    bio: "Template mentor. Coding, projects and tech clubs — let's build something cool.",
    tags: ["Coding", "Projects", "Tech"],
    contact: "@senior_handle",
    accent: "violet",
  },
  {
    id: "mentor-6",
    name: "Senior 6",
    initials: "S6",
    year: "BS-MS · 3rd Year",
    stream: "IDC / Humanities",
    bio: "Template mentor. Culture, sports and everything that makes campus feel like home.",
    tags: ["Culture", "Sports", "Wellbeing"],
    contact: "@senior_handle",
    accent: "teal",
  },
];
