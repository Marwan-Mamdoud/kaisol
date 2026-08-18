"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

const restaurants = ["pavilion", "reefs", "masala", "cedar"] as const;

const restaurantImages: Record<string, string> = {
  pavilion: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  reefs: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  masala: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&q=80",
  cedar: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
};

export default function DiningPage() {
  const t = useTranslations("Dining");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const sectionHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollProgress = -rect.top / (sectionHeight - viewportHeight);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      const cardWidth = window.innerWidth < 768 ? 336 : 432;
      const totalWidth = restaurants.length * cardWidth;
      const maxTranslate = totalWidth - window.innerWidth + 100;

      setTranslateX(-clampedProgress * Math.max(0, maxTranslate));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] bg-dark-brown overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80')",
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
        <section ref={scrollRef} className="relative h-[250vh] bg-warm-beige">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-4">
              <p className="text-sm text-body-gray mb-2">
                {t("restaurants.subtitle")}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-dark-brown">
                {t("restaurants.heading")}
              </h3>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex w-max transition-none"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {restaurants.map((key) => (
                  <div
                    key={key}
                    className="flex-shrink-0 w-[320px] md:w-[400px] px-4"
                  >
                    <div className="bg-white rounded-none overflow-hidden">
                      <div
                        className="aspect-square bg-cover bg-center"
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
