"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { getAffiliateUrl } from "@/lib/affiliate";

interface Props {
  product: Product;
}

// FAQ data specific to product features
const getProductFaqs = (product: Product) => [
  {
    q: "Jak dlouho trvá montáž?",
    a: `Montáž regálu ${product.name} zvládne jedna osoba přibližně za 15-30 minut. Nepotřebujete žádné speciální nářadí – stačí gumová palička pro zajištění spojů.`,
  },
  {
    q: "Jaká je skutečná nosnost?",
    a: `Celková nosnost regálu je ${product.capacity} kg při rovnoměrném rozložení zátěže. Na jednu polici můžete umístit až ${product.capacityPerShelf} kg. Pro maximální nosnost doporučujeme ukotvit regál ke stěně.`,
  },
  {
    q: "Mohu nastavit výšku polic?",
    a: `Ano, výška všech ${product.shelves} polic je plně nastavitelná v rozmezí několika centimetrů. Police můžete přemístit podle potřeby bez demontáže celého regálu.`,
  },
  {
    q: "Je vhodný do vlhkého prostředí?",
    a: product.surface === "Pozinkovaný"
      ? "Ano, pozinkovaný povrch je ideální do vlhkého prostředí jako jsou sklepy, garáže nebo venkovní přístřešky. Zinek chrání ocel před korozí."
      : "Lakovaný povrch poskytuje základní ochranu proti korozi. Pro velmi vlhké prostředí (sklepy, garáže) doporučujeme spíše pozinkované provedení.",
  },
  {
    q: "Jak probíhá doprava?",
    a: "Regál je dodáván v rozloženém stavu ve dvou kartonových krabicích. Doprava je zdarma při objednávce nad 2000 Kč. Expedice do 24 hodin od objednávky.",
  },
];

// Benefits based on product specs
const getProductBenefits = (product: Product) => [
  {
    icon: "⚡",
    title: "Rychlá montáž",
    desc: "15-30 minut bez nářadí",
  },
  {
    icon: "💪",
    title: `${product.capacity} kg nosnost`,
    desc: `${product.capacityPerShelf} kg na polici`,
  },
  {
    icon: "📏",
    title: "Nastavitelné police",
    desc: `${product.shelves} polic s variabilní výškou`,
  },
  {
    icon: "🛡️",
    title: "7 let záruka",
    desc: "Na konstrukci a povrch",
  },
];

// Use cases based on product dimensions and color
const getUseCases = (product: Product) => {
  const cases = [];
  if (product.height >= 180) {
    cases.push({ icon: "🏠", text: "Sklep a spíž" });
    cases.push({ icon: "🔧", text: "Garáž a dílna" });
  }
  if (product.height <= 160) {
    cases.push({ icon: "👔", text: "Šatna" });
    cases.push({ icon: "📚", text: "Dětský pokoj" });
  }
  if (product.surface === "Pozinkovaný") {
    cases.push({ icon: "🏭", text: "Sklad" });
    cases.push({ icon: "🌧️", text: "Venkovní přístřešek" });
  }
  if (product.color === "Bílá") {
    cases.push({ icon: "🏢", text: "Kancelář" });
    cases.push({ icon: "🏥", text: "Ordinace" });
  }
  if (product.color === "Černá") {
    cases.push({ icon: "🔧", text: "Dílna" });
    cases.push({ icon: "🚗", text: "Garáž" });
  }
  return cases.slice(0, 4);
};

export function ProductDetailClient({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("popis");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const discount = calculateDiscount(product.price, product.priceOrig);
  const faqs = getProductFaqs(product);
  const benefits = getProductBenefits(product);
  const useCases = getUseCases(product);

  // Sticky buy bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    const url = getAffiliateUrl(product.seoUrl, quantity, "detail");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const tabs = [
    { id: "popis", label: "Popis" },
    { id: "parametry", label: "Specifikace" },
    { id: "montaz", label: "Montáž" },
    { id: "faq", label: "Časté dotazy" },
  ];

  return (
    <>
      {/* Sticky buy bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-xl border-t border-white/10 transform transition-transform duration-300 ${
          isSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="section-container py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-dark-700">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-white font-medium text-sm line-clamp-1">
                  {product.name}
                </p>
                <p className="text-gold-400 font-bold">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-1 sm:flex-initial justify-end">
              <div className="flex items-center border border-dark-400/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  −
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-white font-medium tabular-nums text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn-gold py-2.5 px-6 text-sm font-semibold"
              >
                Koupit za {formatPrice(product.price * quantity)}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 sm:py-12 pb-24 sm:pb-12">
        <div className="section-container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Domov
            </Link>
            <span>/</span>
            <Link href="/katalog" className="hover:text-gold-400 transition-colors">
              Katalog
            </Link>
            <span>/</span>
            <span className="text-gray-300 truncate">{product.name}</span>
          </nav>

          {/* Main layout: Image + Purchase Module */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product image section */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="product-image-container bio-glow aspect-square relative">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {discount > 0 && (
                    <span className="badge-sale text-sm px-3 py-1.5 font-bold">
                      -{discount}%
                    </span>
                  )}
                  {product.bestseller && (
                    <span className="badge-bestseller text-sm px-3 py-1.5">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Social proof badge */}
                {product.sold7days > 10 && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-dark-800/90 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
                      🔥 {product.sold7days}× prodáno za 7 dní
                    </span>
                  </div>
                )}

                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-contain p-8"
                  priority
                />
              </div>

              {/* Thumbnails placeholder - will be populated when we have multiple images */}
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                      i === 1
                        ? "border-gold-500 bg-dark-700"
                        : "border-transparent bg-dark-800/50 opacity-50"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name} - pohled ${i}`}
                      width={80}
                      height={80}
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Purchase module */}
            <div className="space-y-6">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs uppercase tracking-wider text-gray-500 px-3 py-1 border border-dark-400/30 rounded-full">
                  {product.color}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-500 px-3 py-1 border border-dark-400/30 rounded-full">
                  {product.surface}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-500 px-3 py-1 border border-dark-400/30 rounded-full">
                  {product.shelves} polic
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                {product.name}
              </h1>

              {/* Rating (placeholder) */}
              <div className="flex items-center gap-3">
                <div className="flex text-gold-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className={i < 4 ? "" : "opacity-30"}>
                      {star}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  4.8 / 5 (127 hodnocení)
                </span>
              </div>

              {/* Price */}
              <div className="glass-card p-5">
                <div className="flex items-end gap-3 mb-3">
                  <span className="text-4xl sm:text-5xl font-bold text-gold-400 tabular-nums">
                    {formatPrice(product.price)}
                  </span>
                  {product.priceOrig > product.price && (
                    <span className="text-xl text-gray-500 line-through tabular-nums mb-1">
                      {formatPrice(product.priceOrig)}
                    </span>
                  )}
                </div>
                {discount > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-success-400 font-bold">
                      Ušetříte {formatPrice(product.priceOrig - product.price)}
                    </span>
                    <span className="text-danger-400 bg-danger-500/20 px-2 py-0.5 rounded text-xs font-bold">
                      SLEVA {discount}%
                    </span>
                  </div>
                )}
              </div>

              {/* Stock & Urgency */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {product.stock > 0 ? (
                    <>
                      <span className="badge-stock">
                        ✓ Skladem ({product.stock} ks)
                      </span>
                      <span className="text-gray-500 text-sm">
                        Expedice do 24h
                      </span>
                    </>
                  ) : (
                    <span className="text-danger-400 text-sm font-medium">
                      ✕ Momentálně vyprodáno
                    </span>
                  )}
                </div>
                {product.stock > 0 && product.stock <= 10 && (
                  <p className="text-amber-400 text-sm animate-pulse">
                    ⚠️ Pozor – zbývá pouze {product.stock} kusů!
                  </p>
                )}
              </div>

              {/* Key specs grid */}
              <div className="grid grid-cols-4 gap-3">
                <div className="glass-card p-3 text-center">
                  <span className="text-gold-400 text-xl font-bold block">
                    {product.height}
                  </span>
                  <span className="text-gray-500 text-xs">výška (cm)</span>
                </div>
                <div className="glass-card p-3 text-center">
                  <span className="text-gold-400 text-xl font-bold block">
                    {product.width}
                  </span>
                  <span className="text-gray-500 text-xs">šířka (cm)</span>
                </div>
                <div className="glass-card p-3 text-center">
                  <span className="text-gold-400 text-xl font-bold block">
                    {product.depth}
                  </span>
                  <span className="text-gray-500 text-xs">hloubka (cm)</span>
                </div>
                <div className="glass-card p-3 text-center">
                  <span className="text-gold-400 text-xl font-bold block">
                    {product.capacity}
                  </span>
                  <span className="text-gray-500 text-xs">nosnost (kg)</span>
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center border border-dark-400/30 rounded-xl overflow-hidden bg-dark-800/50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-14 h-14 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-xl"
                  >
                    −
                  </button>
                  <span className="w-14 h-14 flex items-center justify-center text-white font-bold tabular-nums text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-14 h-14 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors text-xl"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="btn-gold flex-1 text-lg py-4 shimmer-effect font-bold"
                >
                  🛒 Koupit za {formatPrice(product.price * quantity)}
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: "🚚", text: "Doprava zdarma", sub: "nad 2000 Kč" },
                  { icon: "⚡", text: "Expedice do 24h", sub: "v pracovní dny" },
                  { icon: "🛡️", text: "Záruka 7 let", sub: "na konstrukci" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-sm bg-dark-800/50 rounded-lg px-3 py-2"
                  >
                    <span className="text-lg">{badge.icon}</span>
                    <div>
                      <p className="text-white font-medium text-xs">{badge.text}</p>
                      <p className="text-gray-500 text-[10px]">{badge.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini FAQ accordion */}
              <div className="glass-card p-4 space-y-2">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                  Rychlé odpovědi
                </p>
                {faqs.slice(0, 3).map((faq, idx) => (
                  <details
                    key={idx}
                    className="group"
                  >
                    <summary className="flex items-center justify-between cursor-pointer text-sm text-white hover:text-gold-400 transition-colors py-2">
                      {faq.q}
                      <span className="text-gold-500 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="text-gray-400 text-sm pl-0 pb-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="glass-card p-5 text-center group hover:border-gold-500/30 transition-colors"
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </span>
                <h3 className="text-white font-bold mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Use cases */}
          <div className="mb-16">
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Ideální použití
            </h2>
            <div className="flex flex-wrap gap-3">
              {useCases.map((useCase) => (
                <span
                  key={useCase.text}
                  className="inline-flex items-center gap-2 bg-dark-800/50 border border-dark-400/30 rounded-full px-4 py-2 text-sm text-gray-300"
                >
                  <span>{useCase.icon}</span>
                  {useCase.text}
                </span>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-16">
            <div className="flex gap-1 border-b border-dark-400/20 mb-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? "text-gold-400 border-gold-500"
                      : "text-gray-400 border-transparent hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="glass-card p-6 sm:p-8">
              {activeTab === "popis" && (
                <div className="prose prose-invert prose-gold max-w-none">
                  <h2 className="font-display text-2xl font-bold text-white mb-6">
                    {product.name}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    Robustní kovový regál s {product.shelves} policemi a celkovou
                    nosností {product.capacity} kg. Ideální řešení pro
                    profesionální i domácí skladování.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 my-8">
                    <div>
                      <h3 className="text-gold-400 font-bold mb-4">Klíčové vlastnosti</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✓</span>
                          <span className="text-gray-300">
                            <strong className="text-white">Vysoká nosnost</strong> – až{" "}
                            {product.capacityPerShelf} kg na jednu polici při rovnoměrném
                            rozložení zátěže
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✓</span>
                          <span className="text-gray-300">
                            <strong className="text-white">Snadná montáž</strong> –
                            složíte za 15-30 minut bez speciálního nářadí
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✓</span>
                          <span className="text-gray-300">
                            <strong className="text-white">Variabilní police</strong> –
                            výška všech {product.shelves} polic je plně nastavitelná
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-gold-500 mt-1">✓</span>
                          <span className="text-gray-300">
                            <strong className="text-white">{product.surface} povrch</strong> –
                            {product.surface === "Pozinkovaný"
                              ? " maximální odolnost proti korozi i v náročných podmínkách"
                              : " elegantní vzhled s ochranou proti poškrábání"}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-gold-400 font-bold mb-4">Obsah balení</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-dark-600 flex items-center justify-center text-xs text-gold-400">
                            4
                          </span>
                          Svislé nosníky (stojny)
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-dark-600 flex items-center justify-center text-xs text-gold-400">
                            {product.shelves}
                          </span>
                          Police s nosností {product.capacityPerShelf} kg
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-dark-600 flex items-center justify-center text-xs text-gold-400">
                            {product.shelves * 2}
                          </span>
                          Příčné vzpěry
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-dark-600 flex items-center justify-center text-xs text-gold-400">
                            1
                          </span>
                          Návod k montáži
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gold-500/10 border border-gold-500/30 rounded-xl p-6 mt-8">
                    <h3 className="text-gold-400 font-bold mb-2">💡 Tip od prodejce</h3>
                    <p className="text-gray-300">
                      Pro maximální stabilitu doporučujeme regál ukotvit ke stěně pomocí
                      přiloženého kotevního materiálu. Obzvlášť důležité při plném zatížení
                      nebo umístění na nerovném povrchu.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "parametry" && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-6">
                    Technické specifikace
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody className="divide-y divide-dark-400/20">
                        {[
                          ["Výška", `${product.height} cm`, "📏"],
                          ["Šířka", `${product.width} cm`, "↔️"],
                          ["Hloubka", `${product.depth} cm`, "↕️"],
                          ["Barva", product.color, "🎨"],
                          ["Povrchová úprava", product.surface, "✨"],
                          ["Počet polic", `${product.shelves}`, "📊"],
                          ["Celková nosnost", `${product.capacity} kg`, "💪"],
                          ["Nosnost na polici", `${product.capacityPerShelf} kg`, "⚖️"],
                          ["Materiál", "Ocelový plech", "🔩"],
                          ["Tloušťka plechu", "0,7 - 0,9 mm", "📐"],
                          ["Hmotnost regálu", `cca ${Math.round(product.height * product.width * 0.00003 + 8)} kg`, "⚡"],
                          ["Kód produktu", product.code, "🏷️"],
                        ].map(([label, value, icon]) => (
                          <tr key={label} className="group hover:bg-white/[0.02]">
                            <td className="py-4 text-gray-400 text-sm w-1/3 sm:w-1/2">
                              <span className="mr-2">{icon}</span>
                              {label}
                            </td>
                            <td className="py-4 text-white font-medium">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Dimensions visualization */}
                  <div className="mt-8 p-6 bg-dark-800/50 rounded-xl">
                    <h3 className="text-white font-bold mb-4">Vizualizace rozměrů</h3>
                    <div className="flex items-end justify-center gap-8">
                      <div className="text-center">
                        <div
                          className="w-4 bg-gold-500/30 border border-gold-500/50 mx-auto mb-2"
                          style={{ height: `${Math.min(product.height / 10, 150)}px` }}
                        />
                        <span className="text-sm text-gray-400">{product.height} cm</span>
                      </div>
                      <div className="text-center">
                        <div
                          className="h-4 bg-gold-500/30 border border-gold-500/50 mb-2"
                          style={{ width: `${Math.min(product.width / 5, 200)}px` }}
                        />
                        <span className="text-sm text-gray-400">{product.width} cm</span>
                      </div>
                      <div className="text-center">
                        <div
                          className="h-4 bg-gold-500/30 border border-gold-500/50 mb-2"
                          style={{ width: `${Math.min(product.depth / 3, 100)}px` }}
                        />
                        <span className="text-sm text-gray-400">{product.depth} cm</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "montaz" && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-6">
                    Návod k montáži
                  </h2>

                  <div className="bg-success-500/10 border border-success-500/30 rounded-xl p-6 mb-8">
                    <p className="text-success-400 font-medium">
                      ✓ Snadná montáž bez nářadí – zvládne jedna osoba za 15-30 minut
                    </p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        step: 1,
                        title: "Rozbalte a zkontrolujte",
                        desc: "Rozbalte všechny díly a zkontrolujte kompletnost podle přiloženého seznamu. Ujistěte se, že máte 4 stojny, 8 příček a všech 5 polic.",
                        tip: "Rozložte díly na čistém povrchu pro snadnou manipulaci.",
                      },
                      {
                        step: 2,
                        title: "Sestavte boční rámy",
                        desc: "Zasuňte příčky do otvorů ve svislých stojanech. Vytvořte tak dva boční rámy regálu.",
                        tip: "Příčky musí zaklapnout do správné polohy.",
                      },
                      {
                        step: 3,
                        title: "Nasaďte police",
                        desc: `Položte první polici na spodní úroveň a postupně přidávejte další. Můžete nastavit výšku všech ${product.shelves} polic podle potřeby.`,
                        tip: "Začněte od spodní police a postupujte nahoru.",
                      },
                      {
                        step: 4,
                        title: "Zajistěte spoje",
                        desc: "Poklepem gumovou paličkou zajistěte všechny spoje. Zkontrolujte, že jsou všechny díly pevně spojeny.",
                        tip: "Nepoužívejte kovové kladivo – mohlo by poškodit povrch.",
                      },
                      {
                        step: 5,
                        title: "Ukotvěte ke stěně",
                        desc: "Pro maximální stabilitu doporučujeme regál ukotvit ke stěně pomocí přiloženého kotevního materiálu.",
                        tip: "Obzvlášť důležité při plném zatížení regálu.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="shrink-0">
                          <span className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-dark-900 font-bold">
                            {item.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold mb-2">{item.title}</h3>
                          <p className="text-gray-400 mb-2">{item.desc}</p>
                          <p className="text-gold-500/80 text-sm">💡 {item.tip}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <h3 className="text-amber-400 font-bold mb-2">⚠️ Důležité upozornění</h3>
                    <p className="text-gray-300">
                      Nepřekračujte maximální nosnost {product.capacity} kg. Zátěž vždy
                      rovnoměrně rozložte po celé ploše police. Na jednu polici
                      umístěte maximálně {product.capacityPerShelf} kg.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-6">
                    Časté dotazy
                  </h2>

                  <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="border border-dark-400/30 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                        >
                          <span className="text-white font-medium pr-4">{faq.q}</span>
                          <span
                            className={`text-gold-500 transition-transform ${
                              activeFaq === idx ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            activeFaq === idx ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <p className="px-5 pb-5 text-gray-400 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-500 mb-3">Nenašli jste odpověď?</p>
                    <Link href="/kontakt" className="btn-outline-gold text-sm">
                      Napište nám →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
