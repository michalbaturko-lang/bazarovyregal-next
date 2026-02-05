"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { getAffiliateUrl } from "@/lib/affiliate";

interface ProductCardProps {
  product: Product;
  campaign?: string;
}

export function ProductCard({ product, campaign = "katalog" }: ProductCardProps) {
  const discount = calculateDiscount(product.price, product.priceOrig);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = getAffiliateUrl(product.seoUrl, 1, campaign);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Link
      href={`/produkt/${product.slug}`}
      className="glass-card group block overflow-hidden"
    >
      {/* Image */}
      <div className="product-image-container bio-glow">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="badge-sale">-{discount}%</span>
          )}
          {product.bestseller && (
            <span className="badge-bestseller">Bestseller</span>
          )}
        </div>

        {/* Stock warning */}
        {product.stock > 0 && product.stock <= 10 && (
          <div className="absolute top-3 right-3 z-10">
            <span className="badge-stock text-[10px]">
              Zbývá {product.stock} ks
            </span>
          </div>
        )}

        <Image
          src={product.image}
          alt={product.imageAlt || product.name}
          width={400}
          height={400}
          className="object-contain p-4"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Color & Surface tags */}
        <div className="flex gap-2">
          <span className="text-[10px] uppercase tracking-wider text-gray-500 px-2 py-0.5 border border-dark-400/30 rounded-full">
            {product.color}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-gray-500 px-2 py-0.5 border border-dark-400/30 rounded-full">
            {product.surface}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-sm font-medium text-white leading-snug line-clamp-2 group-hover:text-gold-400 transition-colors duration-300">
          {product.name}
        </h3>

        {/* Dimensions */}
        <p className="text-xs text-gray-500">
          {product.height} x {product.width} x {product.depth} mm |{" "}
          {product.shelves} polic | {product.capacity} kg
        </p>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-xl font-bold text-gold-400 tabular-nums">
            {formatPrice(product.price)}
          </span>
          {product.priceOrig > product.price && (
            <span className="text-sm text-gray-500 line-through tabular-nums">
              {formatPrice(product.priceOrig)}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          onClick={handleAddToCart}
          className="w-full btn-gold text-sm py-2.5 shimmer-effect"
        >
          Do košíku
        </button>
      </div>
    </Link>
  );
}
