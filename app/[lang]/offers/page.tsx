"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

const offerImages = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
];

export default function OffersPage() {
  const t = useTranslations("Offers");
  const tButtons = useTranslations("Common.buttons");
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

      const cardWidth = window.innerWidth < 768 ? 316 : 416;
      const totalWidth = 5 * cardWidth;
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
        {/* Title */}
        <section className="py-16 text-center bg-cream">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-dark-brown">
            {t("title")}
          </h1>
        </section>

        {/* Hero Image */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div
            className="aspect-[21/9] bg-cover bg-center rounded-none"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80')",
            }}
          />
        </section>

        {/* Intro */}
        <section className="py-8 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
              {t("intro.heading")}
            </h2>
            <p className="text-body-gray leading-relaxed max-w-3xl">
              {t("intro.description")}
            </p>
          </div>
        </section>

        {/* Feature */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="aspect-[4/5] bg-cover bg-center rounded-none"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80')",
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

        {/* Featured Offers - Scroll-Linked */}
        <section ref={scrollRef} className="relative h-[250vh] bg-warm-beige">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-4">
              <h3 className="font-heading text-2xl md:text-3xl font-light text-dark-brown mb-2">
                {t("featured.heading")}
              </h3>
              <p className="text-sm text-body-gray max-w-2xl">
                {t("featured.subtitle")}
              </p>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex w-max transition-none"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {offerImages.map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[280px] md:w-[360px] px-4"
                  >
                    <div className="bg-white rounded-none overflow-hidden">
                      <div
                        className="aspect-[4/3] bg-cover bg-center"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                      <div className="p-6">
                        <h4 className="font-heading text-xl font-light text-dark-brown mb-2">
                          {t("romantic.name")}
                        </h4>
                        <p className="text-sm text-body-gray leading-relaxed mb-4">
                          {t("romantic.desc")}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-olive-hover transition-colors"
                        >
                          {tButtons("learnMore")}
                          <span>→</span>
                        </a>
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
