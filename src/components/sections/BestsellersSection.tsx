import { RevealOnScroll } from "@/components/layout/RevealOnScroll";
import { ProductCard } from "@/components/product/ProductCard";
import { getBestsellers } from "@/lib/products";
import Link from "next/link";

export function BestsellersSection() {
  const bestsellers = getBestsellers(4);

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                Nejprodavanější{" "}
                <span className="text-gold-shine">regály</span>
              </h2>
              <p className="text-gray-400 max-w-lg">
                Naši zákazníci kupují tyto regály nejčastěji. Prověřená kvalita
                za skvělé ceny.
              </p>
            </div>
            <Link
              href="/katalog"
              className="btn-outline-gold text-sm shrink-0"
            >
              Zobrazit vše →
            </Link>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 100}>
              <ProductCard product={product} campaign="homepage" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
