export type Slide = {
  /** the large 70% "hero" image of the pair — also used for previews */
  hero: string;
  /** the smaller 30% detail image */
  detail: string;
  caption: string;
};

export const slides: Slide[] = [
  {
    hero: "/images/gallery-1a.jpg",
    detail: "/images/gallery-1b.jpg",
    caption: "Letters — I",
  },
  {
    hero: "/images/gallery-2a.jpg",
    detail: "/images/gallery-2b.jpg",
    caption: "Postage & Stamps — II",
  },
  {
    hero: "/images/gallery-3a.svg",
    detail: "/images/gallery-3b.svg",
    caption: "Ink & Marks — III",
  },
  {
    hero: "/images/gallery-4a.svg",
    detail: "/images/gallery-4b.svg",
    caption: "Envelopes — IV",
  },
  {
    hero: "/images/gallery-5a.svg",
    detail: "/images/gallery-5b.svg",
    caption: "Fragments — V",
  },
];
