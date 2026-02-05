import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "O nás | Bazarovyregal.cz",
  description:
    "Jsme partnerský web pro Vyprodej-regalu.cz. Nabízíme přehledný výběr kovových regálů za likvidační ceny s dopravou zdarma.",
  openGraph: {
    title: "O nás | Bazarovyregal.cz",
    description:
      "Příběh Bazarovyregal.cz - jak jsme začali a proč máme nejlepší ceny.",
  },
};

export default function ONasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "O nás", url: "/o-nas" },
        ])}
      />

      <div className="py-12 sm:py-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Náš příběh
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              O <span className="text-gold-shine">Bazarovyregal.cz</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Jak vznikl web s nejlepšími cenami kovových regálů v ČR a proč
              můžeme nabídnout slevy až 75 %.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Story sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-xl">
                    1
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white">
                    Jak to celé začalo
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bazarovyregal.cz je prezentační web pro e-shop{" "}
                  <strong className="text-white">Vyprodej-regalu.cz</strong>.
                  Vznikli jsme s jedním cílem: nabídnout zákazníkům lepší
                  přehled produktů a jednodušší výběr regálu.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Zatímco Vyprodej-regalu.cz je zaměřen na rychlý nákup,
                  Bazarovyregal.cz vám pomůže vybrat ten správný regál díky
                  podrobným popisům, filtrům a porovnání.
                </p>
              </section>

              {/* Section 2 */}
              <section className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-xl">
                    2
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white">
                    Proč jsou ceny tak nízké?
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Probíhá{" "}
                  <strong className="text-gold-400">likvidace skladu</strong>.
                  Velké přebytky zásob od výrobců se nahromadily a je potřeba je
                  prodat. Proto můžeme nabídnout slevy až 75 % z původní ceny.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { label: "Slevy až", value: "75 %" },
                    { label: "Produktů", value: "102+" },
                    { label: "Záruka", value: "7 let" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-dark-800/50 rounded-xl"
                    >
                      <span className="block text-2xl font-bold text-gold-400 mb-1">
                        {stat.value}
                      </span>
                      <span className="text-gray-500 text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 */}
              <section className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-xl">
                    3
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white">
                    Jak funguje nákup?
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Veškeré objednávky probíhají přes{" "}
                  <strong className="text-white">Vyprodej-regalu.cz</strong>.
                  Když kliknete na &bdquo;Do košíku&ldquo;, přejdete na náš partnerský
                  e-shop, kde dokončíte objednávku.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Vyberte regál",
                      desc: "Použijte filtry a porovnejte produkty na Bazarovyregal.cz",
                    },
                    {
                      step: "2",
                      title: "Klikněte Do košíku",
                      desc: "Budete přesměrováni na Vyprodej-regalu.cz",
                    },
                    {
                      step: "3",
                      title: "Dokončete objednávku",
                      desc: "Vyplňte adresu a zvolte platbu",
                    },
                    {
                      step: "4",
                      title: "Čekejte na doručení",
                      desc: "Expedice do 24h, doručení 2-3 dny",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center text-gold-400 font-bold text-sm shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 */}
              <section className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold text-xl">
                    4
                  </span>
                  <h2 className="font-display text-2xl font-bold text-white">
                    Naše garance
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "✓",
                      title: "100% nové produkty",
                      desc: "Vše je nové, v originálním balení",
                    },
                    {
                      icon: "✓",
                      title: "Skutečné slevy",
                      desc: "Ceny porovnány s výrobcem",
                    },
                    {
                      icon: "✓",
                      title: "7 let záruka",
                      desc: "Na konstrukci a materiál",
                    },
                    {
                      icon: "✓",
                      title: "30 dní na vrácení",
                      desc: "Bez udání důvodu",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-4 bg-dark-800/50 rounded-xl"
                    >
                      <span className="text-success-400 font-bold">
                        {item.icon}
                      </span>
                      <div>
                        <h3 className="text-white font-medium text-sm">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">
                Máte otázky? Rádi vám pomůžeme.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/katalog" className="btn-gold">
                  Prohlédnout katalog
                </Link>
                <Link href="/kontakt" className="btn-outline-gold">
                  Kontaktovat nás
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
