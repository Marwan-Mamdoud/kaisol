export const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

/* Stable slugs for the 10 rooms, index-aligned with Home.luxe.suites.rooms */
export const ROOM_SLUGS = [
  "signature-suite",
  "jacuzzi-suite",
  "superior-room",
  "royal-suite",
  "deluxe-pool-view",
  "junior-suite",
  "deluxe-swim-up",
  "deluxe-sea-view",
  "romance-suite",
  "deluxe-jacuzzi-room",
];

/* Business listing order from the accommodations content */
export const LIST_ORDER = [0, 7, 6, 3, 1, 2, 5, 4, 8, 9];

/* Photo counts per room folder (room1..room10): image.png + image-2..N.png */
const GALLERY_COUNTS = [3, 5, 3, 5, 4, 4, 3, 5, 4, 5];

export const roomGallery = (roomIndex: number): string[] => {
  const n = GALLERY_COUNTS[roomIndex] ?? 1;
  return Array.from(
    { length: n },
    (_, k) => `/room${roomIndex + 1}/${k === 0 ? "image" : `image-${k + 1}`}.png`
  );
};

export const toDDMMYYYY = (iso: string) => {
  const parts = iso.split("-");
  return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : "";
};

export const toISODate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
