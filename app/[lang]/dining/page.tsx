"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";

const restaurants = ["pavilion", "reefs", "masala", "cedar"] as const;

const restaurantImages: Record<string, string> = {
  pavilion: "/site-images/dining-page-1.png",
  reefs: "/site-images/dining-page-2.png",
  masala: "/site-images/dining-page-3.png",
  cedar: "/site-images/dining-page-4.png",
};

export default function DiningPage() {
  const t = useTranslations("Dining");
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);

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
        const totalWidth = restaurants.length * cardWidth;
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

  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] bg-dark-brown overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-top opacity-50"
            style={{
              backgroundImage:
                "url('/site-images/dining-hero.png')",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
            <div className="font-heading text-center">
              <div className="text-5xl md:text-6xl font-light tracking-wide mb-2">
                KaiSol
              </div>
              <div className="text-lg tracking-[0.15em] uppercase">
                Romance Resort
              </div>
              <div className="text-sm tracking-[0.2em] text-white/70 mt-1">
                — Sahl Hasheesh —
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-olive uppercase tracking-wider mb-4">
              {t("intro.overline")}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-dark-brown leading-tight max-w-5xl">
              {t("intro.heading")}
            </h2>
          </div>
        </section>

        {/* Discover Our Restaurants - Scroll-Linked */}
        <section
          ref={scrollRef}
          className="relative h-[400vh] bg-warm-beige"
        >
          <div className="sticky top-0 h-screen pb-10 flex flex-col justify-center">
            <div className="max-w-8xl mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full mb-8">
              <p className="text-sm text-body-gray mb-2">
                {t("restaurants.subtitle")}
              </p>
              <h2 className="font-heading text-7xl md:text-6xl font-light text-dark-brown">
                {t("restaurants.heading")}
              </h2>
            </div>

            <div className="overflow-hidden">
              <div
                ref={cardsTrackRef}
                className="flex w-max will-change-transform"
              >
                {restaurants.map((key) => (
                  <div
                    key={key}
                    className="flex-shrink-0 w-[600px] md:w-[650px] px-4"
                  >
                    <div className="bg-transparent rounded-none overflow-hidden">
                      <div
                        className="w-full h-[450px] bg-cover bg-center"
                        style={{
                          backgroundImage: `url('${restaurantImages[key]}')`,
                        }}
                      />
                      <div className="p-6">
                        <h4 className="font-heading text-xl font-light text-dark-brown mb-2">
                          {t(`${key}.name` as "pavilion.name" | "reefs.name" | "masala.name" | "cedar.name")}
                        </h4>
                        <p className="text-sm text-body-gray leading-relaxed">
                          {t(`${key}.desc` as "pavilion.desc" | "reefs.desc" | "masala.desc" | "cedar.desc")}
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
