import { RevealOnScroll } from "@/components/layout/RevealOnScroll";

const trustItems = [
  {
    icon: "📦",
    value: "10 000+",
    label: "Prodaných regálů",
    description: "Důvěřují nám tisíce zákazníků po celé ČR",
  },
  {
    icon: "🛡️",
    value: "7 let",
    label: "Záruka",
    description: "Špičková kvalita s prodlouženou zárukou",
  },
  {
    icon: "🚚",
    value: "Zdarma",
    label: "Doprava nad 2 000 Kč",
    description: "Doručíme až k vám domů bez poplatku",
  },
  {
    icon: "⚡",
    value: "24h",
    label: "Expedice",
    description: "Objednávky expedujeme do druhého dne",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 sm:py-24 cosmic-bg">
      <div className="section-container relative z-10">
        <RevealOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Proč nakupovat <span className="text-gold-shine">u nás</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <RevealOnScroll key={item.label} delay={index * 100}>
              <div className="glass-card p-6 sm:p-8 text-center group">
                <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-gold-400 block mb-1">
                  {item.value}
                </span>
                <span className="text-white font-medium text-sm block mb-2">
                  {item.label}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
