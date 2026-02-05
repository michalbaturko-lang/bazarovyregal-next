import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { productSchema, breadcrumbSchema } from "@/lib/schemas";
import { ProductDetailClient } from "./ProductDetailClient";
import { ProductCard } from "@/components/product/ProductCard";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const discount = calculateDiscount(product.price, product.priceOrig);

  return {
    title: `${product.name} | ${formatPrice(product.price)} (-${discount}%)`,
    description: `${product.name}. Rozměry ${product.height}×${product.width}×${product.depth} mm, ${product.shelves} polic, nosnost ${product.capacity} kg. Sleva ${discount}%. Doprava zdarma.`,
    openGraph: {
      title: product.name,
      description: `${formatPrice(product.price)} (sleva ${discount}%) | ${product.color} | ${product.surface}`,
      images: [{ url: product.image, width: 800, height: 800 }],
      type: "website",
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: product.name, url: `/produkt/${product.slug}` },
        ])}
      />

      <ProductDetailClient product={product} />

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="section-container">
            <div className="gold-divider mb-12" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              Podobné <span className="text-gold-shine">regály</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} campaign="detail-related" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
