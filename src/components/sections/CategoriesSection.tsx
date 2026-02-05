import Link from "next/link";
import { RevealOnScroll } from "@/components/layout/RevealOnScroll";

const categories = [
  {
    title: "Domácnost",
    description: "Sklep, kuchyně, spíž – elegantní řešení pro váš domov",
    href: "/regaly-do-sklepa",
    icon: "🏠",
    gradient: "from-blue-900/20 to-purple-900/10",
  },
  {
    title: "Sklad & Průmysl",
    description: "Těžké regály pro profesionální skladování",
    href: "/katalog",
    icon: "🏭",
    gradient: "from-amber-900/20 to-orange-900/10",
  },
  {
    title: "Garáž & Dílna",
    description: "Robustní regály pro nářadí, pneumatiky i díly",
    href: "/regaly-do-garaze",
    icon: "🔧",
    gradient: "from-green-900/20 to-emerald-900/10",
  },
  {
    title: "Kancelář",
    description: "Čisté linie pro archivaci a organizaci",
    href: "/katalog",
    icon: "💼",
    gradient: "from-violet-900/20 to-indigo-900/10",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-16 sm:py-24 cosmic-bg">
      <div className="section-container relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Regály pro <span className="text-gold-shine">každý prostor</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Od domácího sklepa po profesionální sklad. Vyberte si kategorii a
              najděte perfektní regál.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, index) => (
            <RevealOnScroll key={cat.title} delay={index * 100}>
              <Link
                href={cat.href}
                className="glass-card group block p-6 sm:p-8 relative overflow-hidden h-full"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{cat.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-4 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Prohlédnout →
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
