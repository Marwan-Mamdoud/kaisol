import { useTranslations } from "next-intl";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  const t = useTranslations("Home");
  const tCommon = useTranslations("Common");

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
                "url('/Kaisol website.png')",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
            {/* Logo Overlay */}
            <div className="text-center mb-8">
              <img
                src="/kaisol_hero_logo.svg"
                alt="KaiSol Romance Resort"
                className="w-48 md:w-56 mx-auto"
              />
            </div>

            {/* Booking Widget */}
            <div className=" rounded-none  w-full max-w-lg mx-4">
              <div className="grid grid-cols-2 gap-0 mb-1">
                <div className="w-full px-3 py-2 border border-r-0 border-white/40 text-white text-sm uppercase text-center tracking-wider">
                  {t("hero.arrival")}
                </div>
                <div className="w-full px-3 py-2 border border-white/40 text-white text-sm uppercase text-center tracking-wider">
                  {t("hero.departure")}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-0 mb-1">
                <div className="relative">
                  <select defaultValue="" className="w-full px-3 py-2 bg-transparent border border-white/40 text-white text-sm uppercase tracking-wider focus:outline-none focus:border-white/60 rounded-none appearance-none cursor-pointer">
                    <option value="" disabled>1 Adult</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} className="text-dark-brown bg-white">{n} Adult</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="relative">
                  <select defaultValue="" className="w-full px-3 py-2 bg-transparent border-l-0 border border-white/40 text-white text-sm uppercase tracking-wider focus:outline-none focus:border-white/60 rounded-none appearance-none cursor-pointer">
                    <option value="" disabled>1 Room</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} className="text-dark-brown bg-white">{n} Room</option>
                    ))}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <button className="w-full py-3 bg-olive text-white text-xs font-semibold uppercase tracking-widest hover:bg-olive-hover transition-colors rounded-none">
                {tCommon("buttons.bookNow")}
              </button>
            </div>
          </div>
        </section>

        {/* Dining Section */}
        <section className="bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <p className="text-sm font-medium text-olive uppercase tracking-wider mb-4">
              {t("dining.overline")}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown leading-tight max-w-4xl">
              {t("dining.heading")}
            </h2>
          </div>

          {/* Dining Feature - Full Bleed */}
          <div className="flex flex-col lg:flex-row min-h-[800px]">
            {/* Text Column */}
            <div className="lg:w-1/2 flex flex-col justify-between p-8 lg:p-16">
              <div>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
                  {t("dining.featureHeading")}
                </h3>
                <p className="text-sm text-olive mb-6">
                  {t("dining.featureSubtitle")}
                </p>
                <div className="space-y-4 text-body-gray leading-relaxed">
                  <p>{t("dining.featureDescription1")}</p>
                  <p>{t("dining.featureDescription2")}</p>
                  <p className="italic">{t("dining.featureDescription3")}</p>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-white text-xs font-semibold uppercase tracking-widest hover:bg-olive-hover transition-colors rounded-none"
                >
                  {tCommon("buttons.discoverMore")}
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
            {/* Image Column - Edge to Edge */}
            <div className="lg:w-1/2">
              <div
                className="w-full h-full min-h-[500px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Wellness Section */}
        <section className="pt-10 pb-0 bg-[#E9E2D1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-dark-brown text-center mb-16">
              {t("wellness.heading")}
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
              {/* Images */}
              <div className="lg:w-4/7 flex gap-2">
                <div className="w-3/5">
                  <div
                    className="w-full h-[600px] bg-cover bg-center rounded-none"
                    style={{
                      backgroundImage:
                        "url('/wide.png')",
                    }}
                  />
                </div>
                <div className="w-2/5">
                  <div
                    className="w-full h-[600px] bg-cover bg-center rounded-none"
                    style={{
                      backgroundImage:
                        "url('/small.png')",
                    }}
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className="lg:w-3/7 flex py-10 flex-col justify-between">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-light text-dark-brown mb-4">
                    {t("wellness.featureHeading")}
                  </h3>
                  <p className="text-sm text-olive mb-6">
                    {t("wellness.featureSubtitle")}
                  </p>
                  <p className="text-body-gray leading-relaxed mb-8">
                    {t("wellness.featureDescription")}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-olive text-white text-xs font-semibold uppercase tracking-widest hover:bg-olive-hover transition-colors rounded-none"
                  >
                    {tCommon("buttons.discoverMore")}
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
              {/* Text Column */}
              <div className="lg:w-1/3 flex flex-col justify-between min-h-[800px]">
                <div>
                  <h2 className="font-heading text-xl md:text-6xl font-light text-dark-brown mb-4">
                    {t("gallery.heading")}
                  </h2>
                  <p className="text-body-gray text-xl leading-relaxed mb-8 max-w-md">
                    {t("gallery.description")}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="mt-auto items-center gap-2 font-medium text-olive hover:text-olive-hover transition-colors"
                  >
                    {tCommon("buttons.seeAll")}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
              {/* Image Grid - 2 cols x 3 rows */}
              <div className="lg:w-2/3 grid grid-cols-2 grid-rows-3 h-[800px] gap-4">
                {/* Image 1 — Column 1, spans 2 rows */}
                <div
                  className=" h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80')",
                  }}
                />

                {/* Image 2 — Column 2, Row 1 */}
                <div
                  className=" row-span-2 h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80')",
                  }}
                />

                {/* Image 3 — Column 2, Row 2 */}
                <div
                  className="h-full row-span-2 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80')",
                  }}
                />

                {/* Image 4 — Column 1, spans 2 rows */}
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80')",
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
