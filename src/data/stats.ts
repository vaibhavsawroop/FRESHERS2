// Headline numbers shown in the animated stats strip.
// Edit freely — `value` is the number counted up to, `suffix` is appended.

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Student Clubs & Societies" },
  { value: 50, suffix: "+", label: "Senior Mentors Available" },
  { value: 12, suffix: "", label: "Campus Facilities" },
  { value: 2008, suffix: "", label: "Established" },
];
