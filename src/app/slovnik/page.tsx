import type { Metadata } from "next";
import Link from "next/link";
import glossaryData from "@/data/glossary.json";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Slovník pojmů | Vše o regálech | Bazarovyregal.cz",
  description:
    "Slovník pojmů o kovových regálech. Vysvětlení nosnosti, zinkování, rozměrů a dalších odborných termínů srozumitelně.",
  openGraph: {
    title: "Slovník regálových pojmů | Bazarovyregal.cz",
    description:
      "19 odborných termínů vysvětlených srozumitelně. Nosnost, pozinkování, kotvení a další.",
  },
};

export default function SlovnikPage() {
  // Group terms by letter
  const groupedTerms = glossaryData.terms.reduce((acc, term) => {
    const letter = term.letter.toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryData.terms>);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "Slovník pojmů", url: "/slovnik" },
        ])}
      />

      <div className="py-12 sm:py-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Terminologie
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Slovník <span className="text-gold-shine">pojmů</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              {glossaryData.totalTerms} odborných termínů ze světa kovových
              regálů vysvětlených srozumitelně. Ideální pro ty, kteří chtějí
              vědět víc.
            </p>
          </div>

          {/* Letter navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-400/30 flex items-center justify-center text-sm font-bold text-gray-400 hover:text-gold-400 hover:border-gold-500/30 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Terms */}
          <div className="max-w-4xl mx-auto space-y-12">
            {letters.map((letter) => (
              <section key={letter} id={`letter-${letter}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center text-2xl font-bold text-dark-900">
                    {letter}
                  </span>
                  <div className="h-px flex-1 bg-dark-400/30" />
                </div>

                <div className="space-y-4">
                  {groupedTerms[letter].map((item) => (
                    <div
                      key={item.id}
                      id={item.id}
                      className="glass-card p-6 scroll-mt-24"
                    >
                      <h2 className="font-display text-xl font-bold text-white mb-3">
                        {item.term}
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {item.definition}
                      </p>
                      {item.related.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-gray-500 text-sm">
                            Souvisí s:
                          </span>
                          {item.related.map((rel) => (
                            <span
                              key={rel}
                              className="text-gold-400 text-sm bg-gold-500/10 px-2 py-0.5 rounded"
                            >
                              {rel}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-500 mb-4">
              Chybí vám nějaký pojem? Napište nám a doplníme ho.
            </p>
            <Link href="/kontakt" className="btn-outline-gold text-sm">
              Navrhnout pojem →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
