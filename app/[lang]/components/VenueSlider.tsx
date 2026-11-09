"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { VENUE_SLUGS, venueGallery } from "../dining/diningSlugs";
import Reveal from "./Reveal";

type Venue = {
  name: string;
  kind: string;
  desc: string;
  serving: string;
  type: string;
  dress: string;
  indoor: string;
  outdoor: string;
};

export function VenueHeader({ label }: { label: string }) {
  return (
    <div className="text-center mb-5 md:mb-6">
      <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
        {label}
      </span>
    </div>
  );
}

export function VenueSlider({
  venues,
  startIndex,
}: {
  venues: Venue[];
  startIndex: number;
}) {
  const locale = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = parseInt(getComputedStyle(track).gap || "16", 10);
    const delta = card.offsetWidth + gap;
    track.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        className="flex gap-3 md:gap-4 overflow-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {venues.map((r, i) => {
          const vi = startIndex + i;
          return (
            <a
              key={VENUE_SLUGS[vi]}
              href={`/${locale}/dining/${VENUE_SLUGS[vi]}`}
              className="group relative block shrink-0 snap-start aspect-[4/3] w-[48vw] md:w-[calc(50%-8px)] overflow-hidden bg-cream border border-gold hover:border-gold transition-colors duration-500 rounded-none"
            >
              <Image
                src={venueGallery(vi)[0]}
                alt={r.name}
                fill
                sizes="(max-width: 768px) 48vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-2">
                <h3 className="font-heading uppercase text-sm sm:text-base md:text-lg font-normal text-cream leading-tight">
                  {r.name}
                </h3>
              </div>
            </a>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scroll("left")}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-cream border border-gold text-brand hover:bg-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
        >
          <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scroll("right")}
          className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-cream border border-gold text-brand hover:bg-gold hover:text-cream active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
        >
          <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function VenueSliderWithHeader({
  label,
  venues,
  startIndex,
}: {
  label: string;
  venues: Venue[];
  startIndex: number;
}) {
  return (
    <div>
      <Reveal variant="right">
        <VenueHeader label={label} />
      </Reveal>
      <VenueSlider venues={venues} startIndex={startIndex} />
    </div>
  );
}
