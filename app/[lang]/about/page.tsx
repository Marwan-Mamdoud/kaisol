"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

export default function AboutPage() {
  const t = useTranslations("About");

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);
  const fullWidthSectionRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (isMobile) return;

    const section = fullWidthSectionRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    if (!section || !leftPanel || !rightPanel) return;

    let rafId: number;

    const handleFullWidthScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;

        const progress = -rect.top / (sectionHeight - viewportHeight);
        const clamped = Math.max(0, Math.min(1, progress));

        leftPanel.style.width = `${17.5 - clamped * 17.5}%`;
        rightPanel.style.width = `${17.5 - clamped * 17.5}%`;
      });
    };

    window.addEventListener("scroll", handleFullWidthScroll, { passive: true });
    handleFullWidthScroll();

    return () => {
      window.removeEventListener("scroll", handleFullWidthScroll);
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        {isMobile ? (
          <section className="relative h-[60vh] min-h-[400px] bg-dark-brown overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage:
                  "url('/site-images/about-us-hero.png')",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white text-center px-4">
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
                    "url('/site-images/about-us-hero.png')",
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

        {/* Intro Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-6">
              {t("intro.heading")}
            </h2>
            <p className="text-body-gray leading-relaxed max-w-4xl">
              {t("intro.description")}
            </p>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="aspect-[4/5] bg-cover bg-center rounded-none"
                style={{
                  backgroundImage:
                    "url('/site-images/about-us-page-1.png')",
                }}
              />
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-6">
                  {t("feature.heading")}
                </h3>
                <div className="space-y-4 text-body-gray leading-relaxed">
                  <p>{t("feature.description1")}</p>
                  <p>{t("feature.description2")}</p>
                  <p>{t("feature.description3")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Width Image with Text Overlay */}
        <section ref={fullWidthSectionRef} className="relative h-[200vh] bg-white">
          <div className="sticky top-0 h-screen overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/site-images/about-us-page-2.png')",
              }}
            />
            <div className="absolute inset-0 bg-dark-brown/40" />
            <div ref={leftPanelRef} className="absolute top-0 left-0 h-full bg-white z-10" style={{ width: "17.5%" }} />
            <div ref={rightPanelRef} className="absolute top-0 right-0 h-full bg-white z-10" style={{ width: "17.5%" }} />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white text-center px-4">
                About Kaisol Hotels
              </h2>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-warm-beige">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="font-heading text-2xl md:text-3xl font-light text-dark-brown leading-relaxed italic mb-8">
              {t("mission.paragraph1")}
            </p>
            <p className="font-heading text-2xl md:text-3xl font-light text-dark-brown leading-relaxed italic">
              {t("mission.paragraph2")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
