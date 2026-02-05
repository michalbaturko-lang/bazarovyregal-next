import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Kontakt | Bazarovyregal.cz",
  description:
    "Kontaktujte nás s dotazem o kovových regálech. Odpovídáme do 24 hodin. E-mail, telefon i kontaktní formulář.",
  openGraph: {
    title: "Kontaktujte nás | Bazarovyregal.cz",
    description: "Máte dotaz? Jsme tu pro vás. Odpovídáme do 24 hodin.",
  },
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "Kontakt", url: "/kontakt" },
        ])}
      />

      <div className="py-12 sm:py-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Jsme tu pro vás
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Kontaktujte <span className="text-gold-shine">nás</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Máte dotaz ohledně regálů, objednávky nebo čehokoli jiného?
              Napište nám a odpovíme do 24 hodin.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact info */}
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h2 className="font-display text-xl font-bold text-white mb-6">
                    Kontaktní údaje
                  </h2>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">E-mail</p>
                        <a
                          href="mailto:info@bazarovyregal.cz"
                          className="text-white hover:text-gold-400 transition-colors font-medium"
                        >
                          info@bazarovyregal.cz
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Telefon</p>
                        <a
                          href="tel:+420123456789"
                          className="text-white hover:text-gold-400 transition-colors font-medium"
                        >
                          +420 123 456 789
                        </a>
                        <p className="text-gray-500 text-xs mt-1">
                          Po–Pá 8:00–16:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">Sklad</p>
                        <p className="text-white font-medium">Praha</p>
                        <p className="text-gray-500 text-xs mt-1">
                          Osobní vyzvednutí po domluvě
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h2 className="font-display text-xl font-bold text-white mb-4">
                    Rychlé odpovědi
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    Možná najdete odpověď v našich častých dotazech.
                  </p>
                  <Link href="/faq" className="btn-outline-gold text-sm">
                    Přejít na FAQ →
                  </Link>
                </div>

                <div className="glass-card p-6 bg-gold-500/5 border-gold-500/20">
                  <h2 className="text-gold-400 font-bold mb-2">
                    💡 Tip pro rychlejší odpověď
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Uveďte číslo objednávky (pokud existuje) a konkrétní dotaz.
                    Odpovíme zpravidla do několika hodin.
                  </p>
                </div>
              </div>

              {/* Contact form */}
              <div className="glass-card p-6">
                <h2 className="font-display text-xl font-bold text-white mb-6">
                  Napište nám
                </h2>

                <form className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Jméno
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-dark-800/50 border border-dark-400/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-500/40 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-colors"
                      placeholder="Jan Novák"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-dark-800/50 border border-dark-400/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-500/40 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-colors"
                      placeholder="jan@email.cz"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Předmět
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full bg-dark-800/50 border border-dark-400/30 rounded-xl px-4 py-3 text-white focus:border-gold-500/40 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-colors"
                    >
                      <option value="dotaz">Obecný dotaz</option>
                      <option value="objednavka">Dotaz k objednávce</option>
                      <option value="reklamace">Reklamace</option>
                      <option value="spoluprace">Spolupráce</option>
                      <option value="jine">Jiné</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Zpráva *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-dark-800/50 border border-dark-400/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-gold-500/40 focus:ring-1 focus:ring-gold-500/20 focus:outline-none transition-colors resize-none"
                      placeholder="Napište svůj dotaz..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-gold py-3">
                    Odeslat zprávu
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů za účelem
                    odpovědi na váš dotaz.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
