"use client";

import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll } from "@/components/layout/RevealOnScroll";

const categories = [
  {
    title: "Domácnost",
    subtitle: "Sklep • Spíž • Kuchyně • Šatna",
    description:
      "Elegantní a praktické regály pro váš domov. Ideální pro přehledné uskladnění zavařenin, vína, sezónního oblečení i domácích potřeb. Díky nastavitelným policím si přizpůsobíte výšku podle potřeby.",
    benefits: ["Snadná montáž bez nářadí", "Antikorozní povrch", "Nosnost až 175 kg/police"],
    href: "/regaly-do-sklepa",
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/_cache/9/e/9eef5f9f2ad8880b75926a3eae58485b-1-regal-1500x700x300-mm-lakovany-4-policovy-nosnost-700-kg-cerveny-pravy-15070304700red1.jpeg",
    gradient: "from-blue-600/30 via-blue-900/20 to-transparent",
    accent: "text-blue-400",
    stats: { products: 34, avgDiscount: 72 },
  },
  {
    title: "Sklad & Průmysl",
    subtitle: "Sklad • Výroba • Logistika",
    description:
      "Profesionální regálové systémy pro náročné průmyslové prostředí. Vysoká nosnost, robustní konstrukce a dlouhá životnost. Pozinkované provedení odolává i agresivnímu prostředí.",
    benefits: ["Nosnost až 875 kg celkem", "Pozinkované provedení", "Stohovatelné"],
    href: "/tezke-regaly",
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/z6914605330838-5-pol-pravy-zink.jpg",
    gradient: "from-amber-600/30 via-amber-900/20 to-transparent",
    accent: "text-amber-400",
    stats: { products: 28, avgDiscount: 68 },
  },
  {
    title: "Garáž & Dílna",
    subtitle: "Nářadí • Pneumatiky • Autodíly",
    description:
      "Robustní regály pro garáže a dílny. Perfektní pro uskladnění pneumatik, nářadí, olejů a autodílů. Odolné lakované nebo pozinkované provedení zvládne i náročné podmínky.",
    benefits: ["Ideální pro pneumatiky", "Odolný povrch", "Variabilní výšky polic"],
    href: "/regaly-do-garaze",
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/v/v6903779a99ff1-1-regal-1500x700x300-mm-lakovany-4-policovy-nosnost-700-kg-cerny-pravy-15070304700black1.jpeg",
    gradient: "from-emerald-600/30 via-emerald-900/20 to-transparent",
    accent: "text-emerald-400",
    stats: { products: 26, avgDiscount: 74 },
  },
  {
    title: "Kancelář & Archiv",
    subtitle: "Dokumenty • Šanony • Krabice",
    description:
      "Elegantní regály pro kanceláře a archivy. Čisté linie v bílém nebo černém provedení. Perfektní pro organizaci dokumentů, šanonů a kancelářských potřeb.",
    benefits: ["Moderní design", "Bílé a černé provedení", "Stabilní konstrukce"],
    href: "/kancelarske-regaly",
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/6/6690a777ad6edc-1-18090405875white1.jpeg",
    gradient: "from-violet-600/30 via-violet-900/20 to-transparent",
    accent: "text-violet-400",
    stats: { products: 14, avgDiscount: 70 },
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 sm:py-28 cosmic-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Vyberte si podle prostoru
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Regály pro <span className="text-gold-shine">každý prostor</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Od domácího sklepa po profesionální sklad. Všechny regály ve slevě
              až 75 % s dopravou zdarma nad 2000 Kč.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <RevealOnScroll key={cat.title} delay={index * 100}>
              <Link
                href={cat.href}
                className="glass-card group block overflow-hidden relative min-h-[320px] sm:min-h-[280px]"
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover object-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors duration-300">
                        {cat.title}
                      </h3>
                      <p className={`text-sm font-medium ${cat.accent}`}>
                        {cat.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-bold text-gold-400">
                        -{cat.stats.avgDiscount}%
                      </span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        prům. sleva
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {cat.description}
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cat.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="inline-flex items-center text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full"
                      >
                        <span className="text-gold-500 mr-1.5">✓</span>
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <span className="text-gray-500 text-sm">
                      {cat.stats.products} produktů skladem
                    </span>
                    <span className="text-gold-500 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Prohlédnout katalog →
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll delay={400}>
          <div className="text-center mt-12">
            <Link href="/katalog" className="btn-gold inline-flex items-center gap-2">
              Zobrazit všech 102 regálů
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
