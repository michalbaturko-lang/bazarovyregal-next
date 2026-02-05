"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { getAffiliateUrl } from "@/lib/affiliate";

interface Props {
  product: Product;
}

const tabs = [
  { id: "popis", label: "Popis" },
  { id: "parametry", label: "Parametry" },
  { id: "rozmery", label: "Rozměry" },
  { id: "montaz", label: "Montáž" },
];

export function ProductDetailClient({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("popis");
  const discount = calculateDiscount(product.price, product.priceOrig);

  const handleAddToCart = () => {
    const url = getAffiliateUrl(product.seoUrl, quantity, "detail");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-8 sm:py-12">
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

        {/* Main layout: Image + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product image */}
          <div className="product-image-container bio-glow aspect-square max-w-lg mx-auto lg:mx-0">
            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              {discount > 0 && (
                <span className="badge-sale text-sm px-3 py-1">
                  -{discount}%
                </span>
              )}
              {product.bestseller && (
                <span className="badge-bestseller text-sm px-3 py-1">
                  Bestseller
                </span>
              )}
            </div>

            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-contain p-8"
              priority
            />
          </div>

          {/* Product info */}
          <div className="space-y-6">
            {/* Tags */}
            <div className="flex gap-2">
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

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-gold-400 tabular-nums">
                {formatPrice(product.price)}
              </span>
              {product.priceOrig > product.price && (
                <span className="text-lg text-gray-500 line-through tabular-nums">
                  {formatPrice(product.priceOrig)}
                </span>
              )}
              {discount > 0 && (
                <span className="text-sm text-danger-400 font-bold">
                  Ušetříte {formatPrice(product.priceOrig - product.price)}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-3">
              {product.stock > 0 ? (
                <span className="badge-stock">Skladem ({product.stock} ks)</span>
              ) : (
                <span className="text-danger-400 text-sm">Vyprodáno</span>
              )}
              {product.sold7days > 0 && (
                <span className="text-gray-500 text-sm">
                  Koupilo {product.sold7days} lidí za 7 dní
                </span>
              )}
            </div>

            {/* Key specs */}
            <div className="glass-card p-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <span className="text-gold-400 text-lg font-bold block">
                  {product.height}
                </span>
                <span className="text-gray-500 text-xs">výška (cm)</span>
              </div>
              <div className="text-center border-x border-white/[0.06]">
                <span className="text-gold-400 text-lg font-bold block">
                  {product.capacity}
                </span>
                <span className="text-gray-500 text-xs">nosnost (kg)</span>
              </div>
              <div className="text-center">
                <span className="text-gold-400 text-lg font-bold block">
                  {product.shelves}
                </span>
                <span className="text-gray-500 text-xs">počet polic</span>
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-dark-400/30 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  −
                </button>
                <span className="w-12 h-12 flex items-center justify-center text-white font-medium tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn-gold flex-1 text-lg py-3 shimmer-effect"
              >
                Do košíku
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                "Doprava zdarma nad 2000 Kč",
                "Expedice do 24h",
                "Záruka 7 let",
              ].map((text) => (
                <span
                  key={text}
                  className="text-xs text-gray-400 flex items-center gap-1.5"
                >
                  <span className="text-success-400">✓</span>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-1 border-b border-dark-400/20 mb-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
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
                <p className="text-gray-300 leading-relaxed">
                  {product.name} je odolný kovový regál vhodný pro skladování v garáži,
                  sklepě, dílně i kanceláři. Díky {product.surface.toLowerCase()} povrchu
                  je chráněn proti korozi a mechanickému poškození.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Regál disponuje {product.shelves} policemi s celkovou nosností{" "}
                  {product.capacity} kg (tj. {product.capacityPerShelf} kg na polici při
                  rovnoměrném rozložení). Rozměry {product.height} × {product.width} ×{" "}
                  {product.depth} mm zajišťují optimální využití prostoru.
                </p>
              </div>
            )}

            {activeTab === "parametry" && (
              <table className="w-full">
                <tbody className="divide-y divide-dark-400/20">
                  {[
                    ["Výška", `${product.height} mm`],
                    ["Šířka", `${product.width} mm`],
                    ["Hloubka", `${product.depth} mm`],
                    ["Barva", product.color],
                    ["Povrchová úprava", product.surface],
                    ["Počet polic", `${product.shelves}`],
                    ["Celková nosnost", `${product.capacity} kg`],
                    ["Nosnost na polici", `${product.capacityPerShelf} kg`],
                    ["Kód produktu", product.code],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="py-3 text-gray-400 text-sm w-1/2">
                        {label}
                      </td>
                      <td className="py-3 text-white text-sm font-medium">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === "rozmery" && (
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong className="text-white">Vnější rozměry:</strong>{" "}
                  {product.height} × {product.width} × {product.depth} mm (V × Š × H)
                </p>
                <p>
                  <strong className="text-white">Rozteč polic:</strong>{" "}
                  přibližně {Math.round((product.height - 40) / product.shelves)} mm
                  (nastavitelná)
                </p>
                <p>
                  <strong className="text-white">Hmotnost:</strong> cca{" "}
                  {Math.round(product.height * product.width * 0.00003 + 8)} kg
                </p>
              </div>
            )}

            {activeTab === "montaz" && (
              <div className="text-gray-300 space-y-4">
                <p>
                  Regál je dodáván v rozloženém stavu. Montáž je jednoduchá a
                  zvládne ji jedna osoba. Potřebné nářadí: gumová palička.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Rozbalte všechny díly a zkontrolujte kompletnost</li>
                  <li>Sestavte boční rámy zasunutím příček</li>
                  <li>Nasaďte police na požadované výšky</li>
                  <li>Zajistěte spoje poklepem gumovou paličkou</li>
                  <li>Zkontrolujte stabilitu a případně ukotvěte ke stěně</li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
