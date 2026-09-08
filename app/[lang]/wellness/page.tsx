"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

const experiences = [
  { key: "massage", img: "/site-images/wellness-page-4.jpg" },
  { key: "sauna", img: "/site-images/wellness-page-4.jpg" },
  { key: "spa", img: "/site-images/wellness-page-4.jpg" },
  { key: "fitness", img: "/site-images/wellness-page-4.jpg" },
  { key: "massage", img: "/site-images/wellness-page-4.jpg" },
  { key: "sauna", img: "/site-images/wellness-page-4.jpg" },
  { key: "spa", img: "/site-images/wellness-page-4.jpg" },
  { key: "fitness", img: "/site-images/wellness-page-4.jpg" },
  { key: "massage", img: "/site-images/wellness-page-4.jpg" },
  { key: "sauna", img: "/site-images/wellness-page-4.jpg" },
  { key: "spa", img: "/site-images/wellness-page-4.jpg" },
  { key: "fitness", img: "/site-images/wellness-page-4.jpg" },
];

export default function WellnessPage() {
  const t = useTranslations("Wellness");
  const tButtons = useTranslations("Common.buttons");

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
        const totalWidth = experiences.length * cardWidth;
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
      <main className="flex-1 bg-cream">
        {/* Hero Section */}
        {isMobile ? (
          <section className="relative h-[60vh] min-h-[400px] bg-dark-brown overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: "url('/site-images/wellness-page-1.jpg')" }}
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
              style={{ backgroundImage: "url('/site-images/wellness-page-1.jpg')" }}
              />
              <div className="absolute w-fit left-1/2 -translate-x-1/2 top-1/2 -translate-y-[300%] mx-auto z-10">
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-dark-brown tracking-wide">
                  {t("title")}
                </h1>
              </div>
            </div>
          </section>
        )}

        {/* Intro Section */}
        <section className="py-20 bg-cream">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-5xl md:text-6xl font-light text-dark-brown mb-6">
              {t("heading")}
            </h2>
            <p className="text-body-gray text-lg leading-relaxed max-w-3xl">
              {t("description")}
            </p>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-16 bg-cream">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-[800px] items-center">
              {/* Images */}
              <div className="grid grid-cols-3 h-full gap-4">
                <div
                  className="col-span-2 bg-cover h-full  flex items-center justify-center bg-center rounded-none"
                  style={{
                    backgroundImage:
                      "url('/site-images/wellness-page-2.png')",
                  }}
                />
                <div
                  className="col-span-1 bg-cover h-[550px] my-auto flex items-center bg-center rounded-none"
                  style={{
                    backgroundImage:
                      "url('/site-images/wellness-page-3.png')",
                  }}
                />
              </div>

              {/* Text */}
              <div className="w-full h-[550px] max-w-[500px] flex flex-col justify-between">
                <div className=""
                >  <h3 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
                    {t("featureHeading")}
                  </h3>
                  <p className="text-body-gray leading-relaxed mb-8">
                    {t("featureDescription")}
                  </p></div>
                <a
                  href="#"
                  className="inline-flex w-fit items-center gap-2 px-6 py-3 bg-olive text-white text-xs font-semibold uppercase tracking-widest hover:bg-olive-hover transition-colors rounded-none"
                >
                  {tButtons("reserveNow")}
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Experiences - Scroll-Linked Horizontal */}
        <section
          ref={scrollRef}
          className="relative h-[400vh] bg-warm-beige"
        >
          <div className="sticky top-0 h-screen pb-10 flex flex-col justify-center">
            <div className="max-w-8xl mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full mb-8">
              <h2 className="font-heading text-7xl md:text-6xl font-light text-dark-brown">
                {t("experiences")}
              </h2>
            </div>

            <div className="overflow-hidden">
              <div
                ref={cardsTrackRef}
                className="flex w-max will-change-transform"
              >
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[600px] md:w-[650px] px-4"
                  >
                    <div className="bg-transparent rounded-none overflow-hidden">
                      <div
                        className="w-full h-[450px] md:h-[450px] bg-cover bg-center"
                        style={{ backgroundImage: `url('${exp.img}')` }}
                      />
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-light text-dark-brown mb-2">
                          {t(exp.key as "massage" | "sauna" | "spa" | "fitness")}
                        </h3>
                        <p className="text-sm text-body-gray leading-relaxed">
                          {t(
                            `${exp.key}Desc` as
                            | "massageDesc"
                            | "saunaDesc"
                            | "spaDesc"
                            | "fitnessDesc"
                          )}
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
