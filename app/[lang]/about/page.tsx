import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] bg-dark-brown overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white text-center px-4">
              {t("hero.title")}
            </h1>
          </div>
        </section>

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

        {/* Full Width Image with Text Overlay */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-dark-brown/40" />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white text-center px-4">
              About Kaisol Hotels
            </h2>
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
