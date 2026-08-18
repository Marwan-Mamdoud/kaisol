"use client";

import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EventsPage() {
  const t = useTranslations("Events");
  const tCommon = useTranslations("Common.buttons");
  const tHome = useTranslations("Home");

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] bg-dark-brown overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-heading text-4xl md:text-6xl font-light text-white tracking-wide text-center">
              {t("hero.title")}
            </h1>
          </div>
        </section>

        {/* Celebrate Every Occasion */}
        <section className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown leading-tight max-w-4xl">
              {t("intro.heading")}
            </h2>
            <p className="text-body-gray leading-relaxed mt-6 max-w-3xl">
              {t("intro.description")}
            </p>
          </div>
        </section>

        {/* Events Crafted to Perfection - Image Left */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div
                  className="aspect-[4/5] bg-cover bg-center rounded-none"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80')",
                  }}
                />
              </div>
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
                  {t("feature.heading")}
                </h3>
                <p className="text-body-gray leading-relaxed mb-4">
                  {t("feature.description1")}
                </p>
                <p className="text-body-gray leading-relaxed">
                  {t("feature.description2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width Text Section */}
        <section className="py-20 bg-warm-beige">
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
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Wedding - Full Width */}
              <div className="lg:col-span-2 relative group overflow-hidden rounded-none h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <h3 className="font-heading text-3xl md:text-4xl font-light text-white mb-2">
                    {t("categories.wedding.title")}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 max-w-lg">
                    {t("categories.wedding.subtitle")}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
                  >
                    {tCommon("explore")}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>

              {/* Corporate */}
              <div className="relative group overflow-hidden rounded-none h-[350px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-white mb-2">
                    {t("categories.corporate.title")}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 max-w-sm">
                    {t("categories.corporate.subtitle")}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
                  >
                    {tCommon("explore")}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>

              {/* Private */}
              <div className="relative group overflow-hidden rounded-none h-[350px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-white mb-2">
                    {t("categories.private.title")}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 max-w-sm">
                    {t("categories.private.subtitle")}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
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
        <section className="py-20 bg-warm-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
                  {tHome("gallery.heading")}
                </h2>
                <p className="text-body-gray leading-relaxed mb-8 max-w-md">
                  {tHome("gallery.description")}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-olive hover:text-olive-hover transition-colors"
                >
                  {tCommon("seeAll")}
                  <span className="text-lg">→</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div
                    className="aspect-square bg-cover bg-center rounded-none"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80')",
                    }}
                  />
                  <div
                    className="aspect-[3/4] bg-cover bg-center rounded-none"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80')",
                    }}
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <div
                    className="aspect-[3/4] bg-cover bg-center rounded-none"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80')",
                    }}
                  />
                  <div
                    className="aspect-square bg-cover bg-center rounded-none"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80')",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
