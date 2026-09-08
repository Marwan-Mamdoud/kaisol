"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

export default function EventsPage() {
  const t = useTranslations("Events");
  const tCommon = useTranslations("Common.buttons");
  const tHome = useTranslations("Home");

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
              style={{
                backgroundImage:
                  "url('/site-images/events-hero.png')",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
                {t("hero.title")}
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
                style={{
                  backgroundImage:
                    "url('/site-images/events-hero.png')",
                }}
              />
              <div className="absolute w-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-[300%] mx-auto z-10">
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-dark-brown tracking-wide">
                  {t("hero.title")}
                </h1>
              </div>
            </div>
          </section>
        )}

        {/* Celebrate Every Occasion */}
        <section className="pt-20 pb-10 bg-white">
          <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-10">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown leading-tight max-w-4xl">
              {t("intro.heading")}
            </h2>
            <p className="text-body-gray leading-relaxed mt-6 max-w-3xl">
              {t("intro.description")}
            </p>
          </div>
        </section>

        {/* Events Crafted to Perfection - Image Left */}
        <section className="pt-5 pb-20 bg-white h-[700px] mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6  h-[600px] lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-h-[600px] gap-12 items-center">
              <div className="relative h-full max-h-[600px]">
                <div className="w-full h-full max-h-[600px] ">
                  <img className="h-full w-full object-cover" src="/site-images/event-page-1.png" alt="" />
                </div>
              </div>
              <div className="h-full py-10 flex items-start justify-start gap-5 flex-col">
                <h3 className="font-heading text-5xl md:text-5xl font-light text-dark-brown mb-4">
                  {t("feature.heading")}
                </h3>
                <p className="text-body-gray text-lg leading-relaxed mb-4">
                  {t("feature.description1")}
                </p>
                <p className="text-body-gray text-lg leading-relaxed">
                  {t("feature.description2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Text Section */}
        <section className="pt-20 pb-8 bg-warm-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-6">
              {t("crafted.heading")}
            </h2>
            <div className="space-y-4 text-body-gray leading-relaxed max-w-4xl">
              <p>{t("crafted.description1")}</p>
              <p>{t("crafted.description2")}</p>
              <p>{t("crafted.description3")}</p>
            </div>
          </div>
        </section>

        {/* Event Categories Grid */}
        <section className="pt-8 pb-20 bg-warm-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Wedding - Full Width */}
              <div className="lg:col-span-2 bg-white">
                <div
                  className="w-full h-[400px] bg-cover bg-center rounded-none"
                  style={{
                    backgroundImage:
                      "url('/site-images/event-page-1.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-light text-dark-brown mb-1">
                    {t("categories.wedding.title")}
                  </h3>
                  <p className="text-sm text-body-gray mb-3 max-w-lg">
                    {t("categories.wedding.subtitle")}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-olive-hover transition-colors"
                  >
                    {tCommon("explore")}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>

              {/* Corporate */}
              <div className="bg-white">
                <div
                  className="w-full h-[350px]  bg-cover bg-center rounded-none"
                  style={{
                    backgroundImage:
                      "url('/site-images/event-page-5.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-light text-dark-brown mb-1">
                    {t("categories.corporate.title")}
                  </h3>
                  <p className="text-sm text-body-gray mb-3 max-w-sm">
                    {t("categories.corporate.subtitle")}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-olive-hover transition-colors"
                  >
                    {tCommon("explore")}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>

              {/* Private */}
              <div className="bg-white">
                <div
                  className="w-full h-[350px] bg-cover bg-center rounded-none"
                  style={{
                    backgroundImage:
                      "url('/site-images/event-page-2.png')",
                  }}
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-light text-dark-brown mb-1">
                    {t("categories.private.title")}
                  </h3>
                  <p className="text-sm text-body-gray mb-3 max-w-sm">
                    {t("categories.private.subtitle")}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-olive-hover transition-colors"
                  >
                    {tCommon("explore")}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="h-[600px] flex flex-col">
                <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
                  {tHome("gallery.heading")}
                </h2>
                <p className="text-body-gray leading-relaxed mb-8 max-w-md">
                  {tHome("gallery.description")}
                </p>
                <a
                  href="#"
                  className="inline-flex mt-auto items-center gap-2 text-sm font-medium text-olive hover:text-olive-hover transition-colors"
                >
                  {tCommon("seeAll")}
                  <span className="text-lg">→</span>
                </a>
              </div>
              <div className="lg:w-2/3 grid grid-cols-2 grid-rows-3 h-[600px] gap-4">
                {/* Image 1 — Column 1, spans 2 rows */}
                <div
                  className=" h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/site-images/event-page-3.png')",
                  }}
                />

                {/* Image 2 — Column 2, Row 1 */}
                <div
                  className=" row-span-2 h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/site-images/event-page-6.png')",
                  }}
                />

                {/* Image 3 — Column 2, Row 2 */}
                <div
                  className="h-full row-span-2 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/site-images/event-page-7.png')",
                  }}
                />

                {/* Image 4 — Column 1, spans 2 rows */}
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/site-images/event-page-4.png')",
                  }}
                />

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>

  );
}
