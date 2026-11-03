"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Partners from "../../components/Partners";
import Reveal from "../../components/Reveal";
import { BOOKING_URL, ROOM_SLUGS, roomGallery } from "../roomSlugs";

type Room = {
  name: string;
  desc: string;
  tag: string;
  meta: string;
  img: string;
  bed: string;
  occupancy: string;
  amenities: string[];
};

function RoomHeroSlider({
  gallery,
  roomName,
  roomTag,
  roomMeta,
  backHref,
  backLabel,
  bookLabel,
}: {
  gallery: string[];
  roomName: string;
  roomTag: string;
  roomMeta: string;
  backHref: string;
  backLabel: string;
  bookLabel: string;
}) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  useEffect(() => {
    if (paused || gallery.length < 2) return;
    const id = setInterval(
      () => setPhotoIdx((i) => (i + 1) % gallery.length),
      6000
    );
    return () => clearInterval(id);
  }, [paused, gallery.length]);

  const goPhoto = (d: number) =>
    setPhotoIdx((i) => (i + d + gallery.length) % gallery.length);

  return (
    <section className="relative w-full bg-cream overflow-hidden">
      <div
        className="relative h-[62vh] md:h-[76vh] min-h-[440px] overflow-hidden hero-glow"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const dx = e.changedTouches[0].clientX - touchX;
          if (Math.abs(dx) > 40) goPhoto(dx < 0 ? 1 : -1);
          setTouchX(null);
        }}
      >
        <div className="absolute inset-0 grid">
          {gallery.map((src, i) => (
            <div
              key={src}
              className={`col-start-1 row-start-1 relative transition-all duration-[1200ms] ease-out ${
                i === photoIdx
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
              aria-hidden={i !== photoIdx}
            >
              <Image
                src={src}
                alt={`${roomName} — photo ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => goPhoto(-1)}
              className="absolute top-1/2 -translate-y-1/2 start-3 md:start-6 z-30 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-white/85 backdrop-blur-md border border-white/40 text-brand hover:bg-gold hover:border-gold hover:text-white active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
            >
              <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => goPhoto(1)}
              className="absolute top-1/2 -translate-y-1/2 end-3 md:end-6 z-30 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-white/85 backdrop-blur-md border border-white/40 text-brand hover:bg-gold hover:border-gold hover:text-white active:scale-95 transition-all duration-300 rounded-none cursor-pointer"
            >
              <svg className="w-5 h-5 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Title overlay */}
        <div className="absolute inset-x-0 bottom-0 z-30">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full pb-8 md:pb-10 flex items-end justify-between gap-6">
            <div className="min-w-0">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-3">
                {roomTag} · {roomMeta}
              </p>
              <h1 className="font-heading uppercase text-3xl sm:text-5xl md:text-6xl font-light text-white leading-tight drop-shadow-[0_2px_4px_rgba(71,69,68,0.5)]">
                {roomName}
              </h1>
            </div>
            <span className="font-heading text-xl md:text-2xl text-white/90 tabular-nums shrink-0 hidden sm:block">
              {String(photoIdx + 1).padStart(2, "0")}
              <span className="text-white/50 text-base md:text-lg">
                {" "}
                / {String(gallery.length).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Control row: back + book + thumbs */}
      <div className="relative z-10 border-t border-brand/10">
        <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-5 md:py-6 flex flex-col lg:flex-row lg:items-center gap-5">
          <div className="flex items-center justify-between gap-4 lg:w-auto lg:shrink-0">
            <a
              href={backHref}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-brand/70 hover:text-gold transition-colors whitespace-nowrap"
            >
              <svg className="w-4 h-4 rtl-flip" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              {backLabel}
            </a>
            <span className="font-heading text-lg text-white/90 tabular-nums sm:hidden">
              {String(photoIdx + 1).padStart(2, "0")}
              <span className="text-white/50 text-sm"> / {gallery.length}</span>
            </span>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="luxe-btn lg:hidden inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-white text-[11px] uppercase tracking-[0.2em] px-6 py-3 rounded-none whitespace-nowrap"
            >
              {bookLabel}
            </a>
          </div>
          <div className="hidden lg:block">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-white text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none whitespace-nowrap"
            >
              <span>{bookLabel}</span>
            </a>
          </div>
          <div className="flex items-center gap-2.5 overflow-x-auto flex-1 py-1">
            {gallery.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setPhotoIdx(i)}
                aria-label={`Photo ${i + 1}`}
                className={`relative h-14 md:h-16 aspect-video shrink-0 overflow-hidden rounded-none cursor-pointer transition-all duration-300 ${
                  i === photoIdx
                    ? "ring-2 ring-gold opacity-100"
                    : "opacity-50 hover:opacity-90"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RoomDetailPage() {
  const params = useParams<{ slug: string }>();
  const t = useTranslations("Accommodation.detail");
  const tRooms = useTranslations("Home.luxe.suites");
  const locale = useLocale();
  const rooms = tRooms.raw("rooms") as Room[];

  const idx = ROOM_SLUGS.indexOf(params.slug);
  if (idx === -1) notFound();
  const room = rooms[idx];
  const gallery = roomGallery(idx);

  const similar = [1, 3, 5].map((o) => (idx + o) % rooms.length);
  const facts = [
    { l: t("occupancy"), v: room.occupancy },
    { l: t("view"), v: room.meta },
    { l: t("bed"), v: room.bed },
  ];

  return (
    <>
      <Header />
      <main className="w-full bg-surface overflow-x-clip">
        <RoomHeroSlider
          key={params.slug}
          gallery={gallery}
          roomName={room.name}
          roomTag={room.tag}
          roomMeta={room.meta}
          backHref={`/${locale}/accommodation`}
          backLabel={t("back")}
          bookLabel={t("book")}
        />

        {/* ============ DESCRIPTION + FACTS RIBBON ============ */}
        <section className="w-full py-14 sm:py-18 md:py-24 bg-surface rounded-none">
          <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-3">
                  {room.meta}
                </p>
                <h2 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-dark-brown leading-tight">
                  {room.name}
                </h2>
              </div>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <p className="text-sm sm:text-base md:text-lg text-body-gray font-light leading-relaxed text-center max-w-4xl mx-auto">
                {room.desc}
              </p>
            </Reveal>

            <Reveal variant="up" delay={250}>
              <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-light-border border border-light-border rounded-none overflow-hidden">
                {facts.map((f) => (
                  <div key={f.l} className="bg-white p-5 md:p-6 text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold block mb-2">
                      {f.l}
                    </span>
                    <span className="font-heading text-xl md:text-2xl text-brand">
                      {f.v}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" delay={350}>
              <div className="mt-10 md:mt-12 text-center">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
                  {t("amenities")}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-[11px] md:text-xs uppercase tracking-[0.14em] text-dark-brown/80 border border-light-border px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-300"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxe-btn mt-8 inline-flex items-center justify-center bg-gold hover:bg-gold-hover text-white text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
                >
                  {t("book")}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ SIMILAR ROOMS ============ */}
        <section className="w-full py-14 md:py-20 bg-cream border-y border-light-border/80 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="down">
              <h2 className="font-heading uppercase text-2xl sm:text-3xl md:text-4xl font-light text-dark-brown text-center mb-8 md:mb-12">
                {t("similar")}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {similar.map((si, i) => {
                const r = rooms[si];
                return (
                  <Reveal
                    key={ROOM_SLUGS[si]}
                    variant={["left", "up", "right"][i] as "left" | "up" | "right"}
                    delay={i * 150}
                  >
                    <a
                      href={`/${locale}/accommodation/${ROOM_SLUGS[si]}`}
                      className="luxe-card group block bg-white border border-light-border/80 hover:border-gold rounded-none overflow-hidden h-full"
                    >
                      <div className="relative h-56 sm:h-64 bg-warm-beige overflow-hidden">
                        <Image
                          src={r.img}
                          alt={r.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <span className="absolute top-4 start-4 bg-white/90 text-brand px-3 py-1 text-[9px] uppercase tracking-[0.25em] border border-gold/30 rounded-none">
                          {r.tag}
                        </span>
                      </div>
                      <div className="p-6">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
                          {r.meta}
                        </p>
                        <h3 className="font-heading uppercase text-xl md:text-2xl text-dark-brown font-normal group-hover:text-gold transition-colors duration-300">
                          {r.name}
                        </h3>
                      </div>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Partners />
      </main>
      <Footer />
    </>
  );
}
