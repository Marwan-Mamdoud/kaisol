"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

const offerImages = [
  "/site-images/offers-page-2.jpg",
  "/site-images/offers-page-2.jpg",
  "/site-images/offers-page-2.jpg",
  "/site-images/offers-page-2.jpg",
  "/site-images/offers-page-2.jpg",
];

export default function OffersPage() {
  const t = useTranslations("Offers");
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    const track = cardsTrackRef.current;
    if (!container || !track) return;

    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const sectionHeight = container.offsetHeight;
        const viewportHeight = window.innerHeight;

        const scrollProgress = -rect.top / (sectionHeight - viewportHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        const cardWidth = window.innerWidth < 768 ? 600 : 650;
        const totalWidth = offerImages.length * cardWidth;
        const maxTranslate = totalWidth - window.innerWidth + 100;

        const eased = clampedProgress * (2 - clampedProgress);
        track.style.transform = `translate3d(${-eased * maxTranslate}px, 0, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const section = heroSectionRef.current;
    const overlay = whiteOverlayRef.current;
    if (!section || !overlay) return;

    let rafId: number;

    const handleHeroScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const progress = -rect.top / (sectionHeight - viewportHeight);
        const clamped = Math.max(0, Math.min(1, progress));

        overlay.style.borderTopWidth = `${350 - clamped * 350}px`;
        overlay.style.borderLeftWidth = `${100 - clamped * 100}px`;
        overlay.style.borderRightWidth = `${100 - clamped * 100}px`;
      });
    };

    window.addEventListener("scroll", handleHeroScroll, { passive: true });
    handleHeroScroll();

    return () => {
      window.removeEventListener("scroll", handleHeroScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        {isMobile ? (
          <section className="relative h-[60vh] min-h-[400px] bg-dark-brown overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: "url('/site-images/offers-hero.png')" }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
                {t("title")}
              </h1>
            </div>
          </section>
        ) : (
          <section ref={heroSectionRef} className="relative h-[200vh] bg-white">
            <div className="sticky top-0 h-[calc(100vh-80px)] overflow-hidden">
              <div ref={whiteOverlayRef} className="absolute bg-transparent border-white border-[100px] border-t-[350px] border-b-0 top-0 left-0 right-0 w-full h-full flex items-center justify-center z-10">

              </div>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/site-images/offers-hero.png')" }}
              />
              <div className="absolute w-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-[300%] mx-auto z-10">
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-dark-brown tracking-wide">
                  {t("title")}
                </h1>
              </div>
            </div>
          </section>
        )}

        {/* Intro */}
        <section className="py-8 mt-10 bg-white">
          <div className="max-w-8xl mx-auto px-20 sm:px-6 lg:px-20">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
              {t("intro.heading")}
            </h2>
            <p className="text-body-gray leading-relaxed max-w-3xl">
              {t("intro.description")}
            </p>
          </div>
        </section>

        {/* Feature */}
        <section className="py-16 mt-10 mb-20 max-w-8xl mx-auto px-20 sm:px-6 lg:px-20 h-[800px]  bg-white">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="w-full">
                <img
                  src="/site-images/offers-page-1.png"
                  alt="Spa"

                  className="w-full bg-cover bg-center rounded-none"
                />
              </div>
              <div className="h-full flex flex-col pt-10 items-start justify-start">
                <h3 className="font-heading  text-5xl md:text-6xl font-light text-dark-brown mb-6">
                  {t("feature.heading")}
                </h3>
                <div className="space-y-4 text-body-gray text-2xl leading-relaxed">
                  <p>{t("feature.description1")}</p>
                  <p>{t("feature.description2")}</p>
                  <p>{t("feature.description3")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Offers - Scroll-Linked */}
        <section
          ref={scrollRef}
          className="relative px-20 h-[400vh] bg-warm-beige"
        >
          <div className="sticky top-0 h-screen pb-10 flex flex-col justify-center">
            <div className="max-w-8xl mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full mb-8">
              <h2 className="font-heading text-7xl md:text-6xl font-light text-dark-brown">
                {t("featured.heading")}
              </h2>
              <p className="text-lg text-body-gray max-w-2xl mt-2">
                {t("featured.subtitle")}
              </p>
            </div>

            <div className="overflow-hidden">
              <div
                ref={cardsTrackRef}
                className="flex w-max will-change-transform"
              >
                {offerImages.map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[600px] md:w-[650px] px-4"
                  >
                    <div className="bg-transparent rounded-none overflow-hidden">
                      <div
                        className="w-full h-[450px] bg-cover bg-center"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                      <div className="p-6">
                        <h4 className="font-heading text-xl font-light text-dark-brown mb-2">
                          {t("romantic.name")}
                        </h4>
                        <p className="text-sm text-body-gray leading-relaxed">
                          {t("romantic.desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
