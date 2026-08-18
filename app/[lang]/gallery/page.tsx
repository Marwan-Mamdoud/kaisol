"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const allGalleryImages = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=800&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
];

export default function GalleryPage() {
  const t = useTranslations("Gallery");
  const tButtons = useTranslations("Common.buttons");
  const [viewMode, setViewMode] = useState<"grid" | "single">("grid");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(20);

  const visibleImages = allGalleryImages.slice(0, visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? allGalleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === allGalleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 20, allGalleryImages.length));
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        {/* Title Section */}
        <section className="py-20 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-dark-brown">
            {t("title")}
          </h1>

          {/* View Toggle */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${viewMode === "grid"
                ? "text-dark-brown"
                : "text-body-gray hover:text-dark-brown"
                }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
              {t("grid")}
            </button>
            <button
              onClick={() => setViewMode("single")}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${viewMode === "single"
                ? "text-dark-brown"
                : "text-body-gray hover:text-dark-brown"
                }`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
              {t("single")}
            </button>
          </div>
        </section>

        {/* Grid View */}
        {viewMode === "grid" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div
              className="gallery-grid grid gap-4"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                gridAutoRows: "250px",
              }}
            >
              {visibleImages.map((src, index) => {
                const isTall = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className="relative overflow-hidden group cursor-pointer"
                    style={{
                      gridColumn: "span 1",
                      gridRow: isTall ? "span 2" : "span 1",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                );

              })}
            </div>

            {/* Load More */}
            {visibleCount < allGalleryImages.length && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 border border-dark-brown text-dark-brown text-sm font-medium hover:bg-dark-brown hover:text-white transition-colors rounded-none"
                >
                  {tButtons("loadMore")}
                </button>
              </div>
            )}
          </section>
        )}

        {/* Single View */}
        {viewMode === "single" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src={allGalleryImages[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-end gap-4 mt-4">
                <span className="text-sm text-body-gray">
                  {currentIndex + 1} {t("of")} {allGalleryImages.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 flex items-center justify-center border border-light-border text-dark-brown hover:bg-dark-brown hover:text-white transition-colors rounded-none"
                >
                  <svg
                    className="w-5 h-5 rtl-flip"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 flex items-center justify-center border border-light-border text-dark-brown hover:bg-dark-brown hover:text-white transition-colors rounded-none"
                >
                  <svg
                    className="w-5 h-5 rtl-flip"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
