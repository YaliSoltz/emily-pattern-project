export type Slide = {
  /** the large 70% "hero" image of the pair — also used for previews */
  hero: string;
  /** the smaller 30% detail image */
  detail: string;
  caption: string;
};

const roman = [
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII",
];

export const slides: Slide[] = roman.map((numeral, i) => ({
  hero: `/images/gallery-${i + 1}a.jpg`,
  detail: `/images/gallery-${i + 1}b.jpg`,
  caption: `Print — ${numeral}`,
}));
