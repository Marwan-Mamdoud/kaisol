"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";
import AppBadges from "../components/AppBadges";
import { RESERVE_TEL, RESTAURANT_COUNT } from "./diningSlugs";
import { VenueSlider, VenueHeader } from "../components/VenueSlider";

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

export default function DiningPage() {
  const t = useTranslations("Dining");
  const venues = t.raw("venues") as Venue[];
  const restaurants = venues.slice(0, RESTAURANT_COUNT);
  const bars = venues.slice(RESTAURANT_COUNT);

  return (
    <>
      <Header />
      <main className="w-full bg-cream overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-cream rounded-none hero-glow">
          <div className="absolute inset-0">
            <Image
              src="/home-page-images/dining.png"
              alt="KaiSol restaurant hall"
              fill
              priority
              sizes="100vw"
              className="object-cover anim-hero-bg"
            />
          </div>
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center pb-12 md:pb-16 pt-32">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-gold font-medium mb-4"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.02]"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <div
              className="anim-hero-rise mt-6 md:mt-8"
              style={{ animationDelay: "350ms" }}
            >
              <a
                href={RESERVE_TEL}
                className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-cream text-[11px] uppercase tracking-[0.22em] px-8 py-3.5 rounded-none"
              >
                <span>{t("hero.cta")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ APP STRIP ============ */}
        <section className="w-full bg-cream border-y border-gold rounded-none">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 py-5 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-gold font-semibold">
              Download the KaiSol app for dining offers
            </span>
            <AppBadges compact />
          </div>
        </section>

        {/* ============ RESTAURANTS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="left">
              <VenueHeader label={t("restaurants.overline")} />
            </Reveal>
            <VenueSlider venues={restaurants} startIndex={0} />
          </div>
        </section>

        {/* ============ BARS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gold/15 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="right">
              <VenueHeader label={t("bars.overline")} />
            </Reveal>
            <VenueSlider venues={bars} startIndex={RESTAURANT_COUNT} />
          </div>
        </section>

        <Partners />
      </main>
      <Footer />
    </>
  );
}
