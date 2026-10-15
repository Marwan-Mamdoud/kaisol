export const RESERVE_TEL = "tel:+201273299991";

/* Stable slugs for the 11 venues, index-aligned with Dining.venues */
export const VENUE_SLUGS = [
  "matsu",
  "reefs-shells",
  "sicilia",
  "pavilion",
  "cedar",
  "masala-house",
  "romance-bar",
  "poolside-bar",
  "sea-breeze-bar",
  "fusion-bar",
  "palmside-bar",
];

/* Gallery files per venue (exact names as uploaded) */
const GALLERIES: string[][] = [
  ["mastu.png", "mastu1.png", "mastu2.png"],
  ["reefs.png", "reefs1.png"],
  ["sicilia.png", "sicilia1.png", "sicilia2.png"],
  ["pavilon.png"],
  ["cedar.png", "cedar_1.png", "cedar_2.png"],
  ["masala.png", "masla_1.png"],
  ["romance.png", "romance1.png"],
  ["poolside.png", "poolside1.png", "poolside2.png", "poolside3.png"],
  ["sea-breeze.png", "sea-breeze1.png", "sea-breeze2.png", "sea-breeze3.png"],
  ["fusion.png", "fusion1.png", "fusion2.png"],
  ["palmside.png", "palmside1.png"],
];

export const venueGallery = (venueIndex: number): string[] =>
  (GALLERIES[venueIndex] ?? []).map((f) => `/dining/${f}`);

export const RESTAURANT_COUNT = 6;
