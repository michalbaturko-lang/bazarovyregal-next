"use client";

import { RevealOnScroll } from "@/components/layout/RevealOnScroll";

const testimonials = [
  {
    name: "Martin K.",
    location: "Praha",
    rating: 5,
    text: "Regál dorazil do dvou dnů, kvalita odpovídá popisu. Za tu cenu naprosto bezkonkurenční. Koupil jsem 3 kusy do garáže.",
  },
  {
    name: "Petra V.",
    location: "Brno",
    rating: 5,
    text: "Skvělý poměr cena/kvalita. Sestavení zvládl manžel sám za 15 minut. Nosnost je opravdu solidní.",
  },
  {
    name: "Jan N.",
    location: "Ostrava",
    rating: 5,
    text: "Už třetí objednávka. Tentokrát pozinkované regály do dílny. Drží jako skála, ani po roce žádné známky koroze.",
  },
  {
    name: "Eva M.",
    location: "Plzeň",
    rating: 4,
    text: "Překvapila mě rychlost dodání a kvalita balení. Regál vypadá mnohem lépe než na fotkách. Určitě doporučuji.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < rating ? "text-gold-400" : "text-dark-400"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-4">
              <span className="text-gold-400 font-bold">4.9 / 5</span>
              <StarRating rating={5} />
              <span className="text-gray-400 text-sm">
                z 2 847 hodnocení
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Co říkají naši{" "}
              <span className="text-gold-shine">zákazníci</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {testimonials.map((t, index) => (
            <RevealOnScroll key={t.name} delay={index * 100}>
              <div className="glass-card p-6 h-full flex flex-col">
                <StarRating rating={t.rating} />
                <p className="text-gray-300 text-sm leading-relaxed mt-3 mb-4 flex-grow">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                  <div className="w-8 h-8 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
