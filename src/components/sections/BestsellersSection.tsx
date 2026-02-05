import { RevealOnScroll } from "@/components/layout/RevealOnScroll";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/lib/types";
import Link from "next/link";

// Placeholder bestsellers – will be replaced with data from products.json
const bestsellers: Product[] = [
  {
    id: 1,
    code: "REG-180-90-40-B",
    name: "Regál 1800×900×400 mm lakovaný 5-policový černý",
    slug: "regal-1800x900x400-cerna",
    price: 759,
    priceOrig: 1499,
    height: 1800,
    width: 900,
    depth: 400,
    color: "Černá",
    surface: "Lakovaný",
    shelves: 5,
    capacity: 875,
    capacityPerShelf: 175,
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/l690377af7480a-1-regal-1800x900x400-mm-lakovany-5-policovy-nosnost-875-kg-cerny-pravy-18090405875black1.jpeg",
    seoUrl: "regal-1800x900x400-mm-lakovany-5-policovy-nosnost-875-kg-cerny",
    stock: 47,
    sold7days: 23,
    bestseller: true,
  },
  {
    id: 2,
    code: "REG-180-90-40-Z",
    name: "Regál 1800×900×400 mm pozinkovaný 5-policový",
    slug: "regal-1800x900x400-zinkovany",
    price: 849,
    priceOrig: 1699,
    height: 1800,
    width: 900,
    depth: 400,
    color: "Zinkovaný",
    surface: "Pozinkovaný",
    shelves: 5,
    capacity: 875,
    capacityPerShelf: 175,
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/z6914605330838-5-pol-pravy-zink.jpg",
    seoUrl: "regal-1800x900x400-mm-pozinkovany-5-policovy-nosnost-875-kg",
    stock: 35,
    sold7days: 18,
    bestseller: true,
  },
  {
    id: 3,
    code: "REG-180-90-40-W",
    name: "Regál 1800×900×400 mm lakovaný 5-policový bílý",
    slug: "regal-1800x900x400-bila",
    price: 789,
    priceOrig: 1549,
    height: 1800,
    width: 900,
    depth: 400,
    color: "Bílá",
    surface: "Lakovaný",
    shelves: 5,
    capacity: 875,
    capacityPerShelf: 175,
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/l690377af7480a-1-regal-1800x900x400-mm-lakovany-5-policovy-nosnost-875-kg-cerny-pravy-18090405875black1.jpeg",
    seoUrl: "regal-1800x900x400-mm-lakovany-5-policovy-nosnost-875-kg-bily",
    stock: 28,
    sold7days: 15,
    bestseller: true,
  },
  {
    id: 4,
    code: "REG-180-120-40-B",
    name: "Regál 1800×1200×400 mm lakovaný 5-policový černý",
    slug: "regal-1800x1200x400-cerna",
    price: 949,
    priceOrig: 1899,
    height: 1800,
    width: 1200,
    depth: 400,
    color: "Černá",
    surface: "Lakovaný",
    shelves: 5,
    capacity: 875,
    capacityPerShelf: 175,
    image: "https://vyprodej-regalucz.s26.cdn-upgates.com/l690377af7480a-1-regal-1800x900x400-mm-lakovany-5-policovy-nosnost-875-kg-cerny-pravy-18090405875black1.jpeg",
    seoUrl: "regal-1800x1200x400-mm-lakovany-5-policovy-nosnost-875-kg-cerny",
    stock: 19,
    sold7days: 12,
    bestseller: true,
  },
];

export function BestsellersSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                Nejprodávanější{" "}
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
