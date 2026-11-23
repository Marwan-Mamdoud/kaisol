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
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-cream rounded-none hero-glow no-dot">
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
              className="anim-hero-rise text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-cream leading-[1.02]"
              style={{ animationDelay: "200ms" }}
            >
              <span className="font-heading font-light">Dine at</span>{" "}
              <span className="font-maginia">KaiSol</span>
            </h1>
            <p
              className="anim-hero-rise mt-6 md:mt-8 mb-5 text-base sm:text-lg md:text-xl text-white font-light max-w-3xl mx-auto"
              style={{ animationDelay: "350ms" }}
            >
              {t("hero.pageSubtitle")}
            </p>
          </div>
        </section>

        {/* ============ RESTAURANTS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 text-center">
            <p className="text-sm sm:text-base md:text-lg text-brand font-light leading-relaxed max-w-3xl mx-auto mb-6">
              Savor moments of connection in refined restaurants led by experienced chefs upholding authentic culinary techniques and cultural heritage. Each restaurant brings meticulously crafted dishes prepared with high-quality ingredients and rich flavors.
            </p>
            <Reveal variant="left">
              <VenueHeader label={t("restaurants.overline")} />
            </Reveal>
            <VenueSlider venues={restaurants} startIndex={0} />
            <p className="text-sm sm:text-base md:text-lg text-brand font-light leading-relaxed max-w-3xl mx-auto mt-6">
              Our restaurants accommodate romantic dinners and large group gatherings. Dietary adjustments available upon request.
            </p>
          </div>
        </section>

        {/* ============ BARS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-gold/15 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 text-center">
            <p className="text-sm sm:text-base md:text-lg text-brand font-light leading-relaxed max-w-3xl mx-auto mb-6">
              Discover signature cocktails and premium classic drinks at our beachfront and indoor bars, where every sip invites you to enjoy flavorful infusions and creative twists in distinct, vibrant atmospheres throughout your stay.
            </p>
            <Reveal variant="right">
              <VenueHeader label="Bar Experiences" />
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
