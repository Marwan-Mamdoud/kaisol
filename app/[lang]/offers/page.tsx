"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import Reveal from "../components/Reveal";

const BOOKING_URL = "https://bookings.kaisolhotels.com/105902";

/* Where each "while you wait" card leads, index-aligned with Offers.experiences.items */
const EXPERIENCE_HREFS = ["/wellness", "/dining", "/accommodation"];
const EXPERIENCE_IMAGES = [
  "/site-images/wellness-page-3.png",
  "/dining/pavilon.png",
  "/room1/image.png",
];

export default function OffersPage() {
  const t = useTranslations("Offers");
  const tButtons = useTranslations("Common.buttons");
  const locale = useLocale();
  const items = t.raw("experiences.items") as { title: string; desc: string }[];

  return (
    <>
      <Header />
      <main className="w-full bg-cream overflow-x-clip">
        {/* ============ HERO ============ */}
        <section className="relative w-full min-h-[62vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-cream rounded-none hero-glow">
          <div className="absolute inset-0">
            <Image
              src="/gallary/photo-24.png"
              alt="Private jacuzzi overlooking the KaiSol resort"
              fill
              priority
              sizes="100vw"
              className="object-cover anim-hero-bg"
            />
          </div>
          <div className="relative z-10 max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12 w-full text-center pb-12 md:pb-16 pt-32">
            <p
              className="anim-hero-rise text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-gold font-medium mb-4"
              style={{ animationDelay: "100ms" }}
            >
              {t("hero.eyebrow")}
            </p>
            <h1
              className="anim-hero-rise font-heading uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-cream leading-[1.02]"
              style={{ animationDelay: "200ms" }}
            >
              {t("hero.titleA")}{" "}
              <span className="font-heading italic font-light text-gold">
                {t("hero.titleB")}
              </span>
            </h1>
            <p
              className="anim-hero-rise text-sm sm:text-base md:text-lg text-cream max-w-2xl mx-auto font-light mt-5 leading-relaxed"
              style={{ animationDelay: "350ms" }}
            >
              {t("hero.subtitle")}
            </p>
            <div className="anim-hero-rise mt-8" style={{ animationDelay: "500ms" }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luxe-btn luxe-shimmer inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.25em] px-10 py-4 rounded-none"
              >
                <span>{t("hero.cta")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============ HONEYMOON HAVEN ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-gold/15 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
              <Reveal variant="left" className="lg:col-span-5">
                <div className="relative w-full aspect-[4/5] max-h-[560px] bg-cream overflow-hidden rounded-none">
                  <Image
                    src="/site-images/honeymall.png"
                    alt="Honeymoon Haven"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <Reveal variant="right" className="lg:col-span-7 lg:ps-6">
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                      Honeymoon Haven
                    </span>
                  </div>
                  <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
                    Your Dream Honeymoon Is Now A Reality
                  </h2>
                  <p className="text-[15px] sm:text-base md:text-lg text-brand font-light leading-relaxed">
                    From exotic views to romantic candlelight dinners, experience your dream romantic honeymoon haven and create memories that you will cherish for a lifetime while enjoying a world of unmatched luxury, serenity and exclusivity. Lavish interiors, spacious rooms and suites, exquisite restaurants, breathtaking scenes of the Red Sea and gracious service combine to await you at our outstanding resort, offering a memorable honeymoon full of delightful surprises.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxe-btn bg-gold hover:bg-gold-hover text-cream text-xs uppercase tracking-[0.2em] px-9 py-4 transition-colors text-center border border-gold hover:border-cream rounded-none"
                    >
                      Check Availability
                    </a>
                    <a
                      href="#newsletter"
                      className="text-xs uppercase tracking-[0.2em] text-brand hover:text-gold transition-colors text-center py-2 border-b border-brand hover:border-gold rounded-none w-fit mx-auto sm:mx-0"
                    >
                      Subscribe for Updates
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

        </section>

        {/* ============ HONEYMOON SPECIAL BENEFITS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="up">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                  Honeymoon Special Benefits
                </span>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight mt-3">
                  Exclusive Perks for Your Stay
                </h2>
              </div>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="md:border-e md:border-gold/40 md:pe-8">
                  <h4 className="font-heading uppercase text-lg md:text-xl text-brand font-normal mb-4">
                    Benefits
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Free upgrade to Deluxe Pool View (subject to hotel availability)",
                      "VIP check-in upon arrival",
                      "Early check-in (according to hotel availability and with previous reservation)",
                      "Late check-out free of charge (according to hotel availability and with previous reservation)",
                      "Special room decoration",
                      "Amenities in the room once per stay (fruit basket, honeymoon cake, oriental pastry)",
                      "Romantic dinner on the beach (according to hotel availability and with previous reservation)",
                      "Unlimited dinner in à la carte restaurant (according to hotel availability and with previous reservation)",
                      "Gym free of charge",
                      "20% discount on laundry service",
                      "15% discount in spa",
                      "15% discount in beauty salon",
                      "Free transportation from Hurghada airport (according to hotel availability and with previous reservation)",
                      "Daily entertainment show",
                      "Free Wi-Fi",
                      "Free billiards",
                    ].map((b) => (
                      <p key={b} className="text-sm md:text-base text-brand font-light leading-relaxed">
                        {b}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading uppercase text-lg md:text-xl text-brand font-normal mb-4">
                    Conditions
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Marriage certificate required (within last 6 months)",
                      "Based on all-inclusive mountain view room",
                      "Minimum stay: 3 nights",
                      "Check-in: 2:00 pm",
                      "Check-out: 12:00 pm",
                      "Subject to hotel availability",
                      "One night charged for cancellation / no-show",
                      "Minimum age: 16 years old",
                      "No check-in for children",
                      "Room service not included",
                      "Missing meals not refundable",
                      "Valid for Egyptian & foreign residents",
                    ].map((b) => (
                      <p key={b} className="text-sm md:text-base text-brand font-light leading-relaxed">
                        {b}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ RATES & CONDITIONS ============ */}
        <section className="w-full py-16 sm:py-20 md:py-24 bg-gold/15 rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="up">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                  Rates & Conditions
                </span>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight mt-3">
                  Important Information
                </h2>
              </div>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl mx-auto">
                {[
                  "Marriage certificate required (within last 6 months)",
                  "Based on all-inclusive mountain view room",
                  "Minimum stay: 3 nights",
                  "Check-in: 2:00 pm",
                  "Check-out: 12:00 pm",
                  "Subject to hotel availability",
                  "One night charged for cancellation / no-show",
                  "Minimum age: 16 years old",
                  "No check-in for children",
                  "Room service not included",
                  "Missing meals not refundable",
                  "Valid for Egyptian & foreign residents",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-gold" />
                    <span className="text-sm md:text-base text-brand font-light leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </section>

        {/* ============ WHILE YOU WAIT ============ */}
        <section className="w-full py-16 sm:py-20 md:py-28 bg-cream rounded-none overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-6 md:px-12">
            <Reveal variant="right">
              <div className="max-w-2xl mb-10 md:mb-14">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-gold font-semibold">
                    {t("experiences.overline")}
                  </span>
                </div>
                <h2 className="font-heading uppercase text-3xl sm:text-4xl md:text-5xl font-light text-brand leading-tight">
                  {t("experiences.heading")}
                </h2>
                <p className="text-sm sm:text-base text-brand font-light mt-3">
                  {t("experiences.sub")}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              {items.map((item, i) => (
                <Reveal
                  key={item.title}
                  variant={(["left", "up", "right"] as const)[i % 3]}
                  delay={(i % 3) * 150}
                >
                  <a
                    href={`/${locale}${EXPERIENCE_HREFS[i] ?? "/"}`}
                    className="luxe-card group flex flex-col h-full bg-cream border border-gold hover:border-gold rounded-none overflow-hidden"
                  >
                    <div className="luxe-img-zoom relative aspect-[4/3] bg-cream overflow-hidden shrink-0">
                      <Image
                        src={EXPERIENCE_IMAGES[i % EXPERIENCE_IMAGES.length]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover rounded-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-6 sm:p-7 flex flex-col flex-1">
                      <h3 className="font-heading uppercase text-xl md:text-2xl text-brand font-normal mb-3 group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand leading-relaxed mb-6 font-light flex-1">
                        {item.desc}
                      </p>
                      <span className="luxe-link-arrow inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.2em] text-brand group-hover:text-gold transition-colors">
                        <span>{tButtons("explore")}</span>
                        <span className="arrow">→</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Partners />
      </main>
      <Footer />
    </>
  );
}