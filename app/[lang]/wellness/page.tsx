"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";

const experiences = [
  { key: "massage", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" },
  { key: "sauna", img: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80" },
  { key: "spa", img: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80" },
  { key: "fitness", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" },
  { key: "massage", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" },
  { key: "sauna", img: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80" },
  { key: "spa", img: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80" },
  { key: "fitness", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" },
  { key: "massage", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" },
  { key: "sauna", img: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80" },
  { key: "spa", img: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=600&q=80" },
  { key: "fitness", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80" },
];

export default function WellnessPage() {
  const t = useTranslations("Wellness");
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

      const cardWidth = window.innerWidth < 768 ? 336 : 432;
      const totalWidth = experiences.length * cardWidth;
      const maxTranslate = totalWidth - window.innerWidth + 100;

      setTranslateX(-clampedProgress * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] bg-dark-brown overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
              {t("title")}
            </h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-6">
              {t("heading")}
            </h2>
            <p className="text-body-gray leading-relaxed max-w-3xl">
              {t("description")}
            </p>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-[3/4] bg-cover bg-center rounded-none"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80')",
                  }}
                />
                <div
                  className="aspect-[3/4] bg-cover bg-center rounded-none mt-8"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80')",
                  }}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
                  {t("featureHeading")}
                </h3>
                <p className="text-body-gray leading-relaxed mb-8">
                  {t("featureDescription")}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-white text-xs font-semibold uppercase tracking-widest hover:bg-olive-hover transition-colors rounded-none"
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
          className="relative h-[250vh] bg-warm-beige"
        >
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown">
                {t("experiences")}
              </h2>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex w-max transition-none"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {experiences.map((exp) => (
                  <div
                    key={exp.key}
                    className="flex-shrink-0 w-[320px] md:w-[400px] px-4"
                  >
                    <div className="bg-white rounded-none overflow-hidden">
                      <div
                        className="aspect-[16/10] bg-cover bg-center"
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
