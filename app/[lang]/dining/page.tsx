"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";
import { RESTAURANT_COUNT } from "./diningSlugs";
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
              src="/dining/Shrimpt-img.jpg"
              alt="KaiSol shrimp plate"
              fill
              priority
              sizes="100vw"
              className="object-cover anim-hero-bg"
            />
          </div>
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center pb-12 md:pb-16 pt-32">
            <h1
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-gold leading-[1.02]"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.title")}
            </h1>
            <p
              className="anim-hero-rise mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white font-light max-w-2xl mx-auto"
              style={{ animationDelay: "350ms" }}
            >
              {t("hero.subtitle")}
            </p>
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
