// ─────────────────────────────────────────────────────────────────────────────
// GALLERY  ·  Placeholder tiles. Drop real photos into /public/gallery and set
// `src: "/gallery/your-photo.jpg"`. Leave `src` empty to show a styled
// placeholder with the caption — handy until you have the real images.
// ─────────────────────────────────────────────────────────────────────────────

export type GalleryItem = {
  id: string;
  caption: string;
  src?: string;
  span: "tall" | "wide" | "normal";
  hue: "brand" | "violet" | "teal";
};

export const gallery: GalleryItem[] = [
  { id: "g-1", caption: "Campus at golden hour", span: "tall", hue: "brand" },
  { id: "g-2", caption: "Club Expo crowd", span: "wide", hue: "violet" },
  { id: "g-3", caption: "Library study nights", span: "normal", hue: "teal" },
  { id: "g-4", caption: "Cultural Night stage", span: "normal", hue: "violet" },
  { id: "g-5", caption: "Sports meet finals", span: "wide", hue: "teal" },
  { id: "g-6", caption: "Hostel corridor laughs", span: "normal", hue: "brand" },
  { id: "g-7", caption: "Lab in action", span: "tall", hue: "teal" },
  { id: "g-8", caption: "Convocation day", span: "normal", hue: "brand" },
];
