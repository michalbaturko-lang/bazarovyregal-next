import Link from "next/link";

const categoryLinks = [
  { href: "/regaly-do-garaze", label: "Regály do garáže" },
  { href: "/regaly-do-sklepa", label: "Regály do sklepa" },
  { href: "/regaly-do-dilny", label: "Regály do dílny" },
  { href: "/regaly-do-kuchyne", label: "Regály do kuchyně" },
  { href: "/zinkove-regaly", label: "Zinkované regály" },
];

const infoLinks = [
  { href: "/o-nas", label: "O nás" },
  { href: "/faq", label: "Často kladené dotazy" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/blog", label: "Blog" },
  { href: "/slovnik", label: "Slovník pojmů" },
];

const guideLinks = [
  { href: "/jak-vybrat-regal-do-garaze", label: "Jak vybrat regál do garáže" },
  { href: "/srovnani-regalu", label: "Srovnání regálů" },
  { href: "/quiz", label: "Poradce výběru" },
  { href: "/srovnavac", label: "Srovnávač produktů" },
];

export function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Cosmic glow background */}
      <div className="bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-glow opacity-30" />

        <div className="section-container relative py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2 group mb-4">
                <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="text-dark-900 font-display font-bold text-xl">
                    B
                  </span>
                </div>
                <div>
                  <span className="text-white font-display text-lg font-semibold">
                    Bazarovy
                  </span>
                  <span className="text-gold-400 font-display text-lg font-semibold">
                    regal
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mt-3 max-w-xs">
                Prémiové kovové regály za likvidační ceny. Garáž, sklep, dílna,
                sklad – máme řešení pro každý prostor.
              </p>
              <div className="flex gap-3 mt-5">
                {["Facebook", "Instagram", "YouTube"].map((social) => (
                  <span
                    key={social}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.06]
                               flex items-center justify-center text-gray-400 text-xs
                               hover:bg-gold-500/10 hover:border-gold-500/30 hover:text-gold-400
                               transition-all duration-300 cursor-pointer"
                  >
                    {social[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Kategorie
              </h4>
              <ul className="space-y-2.5">
                {categoryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Informace
              </h4>
              <ul className="space-y-2.5">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides & Contact */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Průvodci
              </h4>
              <ul className="space-y-2.5">
                {guideLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <p className="text-gray-500 text-xs">
                  info@bazarovyregal.cz
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Po–Pá 8:00 – 16:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04]">
          <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Bazarovyregal.cz – Všechna práva
              vyhrazena
            </p>
            <p className="text-gray-600 text-xs">
              Provozováno na platformě Vyprodej-regalu.cz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
