import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts } from "@/lib/products";
import { getAllSeoPages, getSeoPageBySlug } from "@/lib/seo-pages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schemas";
import { ProductCard } from "@/components/product/ProductCard";

interface Props {
  params: { seoSlug: string };
}

// Generate static paths for all SEO pages
export function generateStaticParams() {
  const seoPages = getAllSeoPages();
  return seoPages.map((page) => ({
    seoSlug: page.slug,
  }));
}

// Generate metadata for each SEO page
export function generateMetadata({ params }: Props): Metadata {
  const page = getSeoPageBySlug(params.seoSlug);

  if (!page) {
    return { title: "Stránka nenalezena" };
  }

  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: page.h1,
      description: page.metaDescription,
    },
  };
}

export default function SeoPage({ params }: Props) {
  const page = getSeoPageBySlug(params.seoSlug);

  if (!page) {
    notFound();
  }

  const allProducts = getAllProducts();
  const filteredProducts = allProducts.filter(page.filterFn);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "Katalog", url: "/katalog" },
          { name: page.h1, url: `/${page.slug}` },
        ])}
      />
      <JsonLd data={itemListSchema(filteredProducts.slice(0, 20))} />

      <div className="py-12 sm:py-16">
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
            <span className="text-gray-300">{page.h1}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              {page.h1.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="text-gold-shine">
                    {word}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>
            <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
              {page.content.intro}
            </p>
          </div>

          {/* Stats bar */}
          <div className="glass-card p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div>
                <span className="text-gold-400 font-bold text-xl">
                  {filteredProducts.length}
                </span>
                <span className="text-gray-500 text-sm ml-2">produktů</span>
              </div>
              <div className="h-8 w-px bg-dark-400/30" />
              <div>
                <span className="text-gold-400 font-bold text-xl">
                  {Math.round(
                    filteredProducts.reduce(
                      (acc, p) =>
                        acc +
                        ((p.priceOrig - p.price) / p.priceOrig) * 100,
                      0
                    ) / filteredProducts.length
                  )}
                  %
                </span>
                <span className="text-gray-500 text-sm ml-2">průměrná sleva</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-success-400">✓</span>
              Vše skladem s expedicí do 24h
            </div>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {page.content.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-dark-800/50 rounded-xl px-4 py-3"
              >
                <span className="text-gold-500">✓</span>
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                campaign={page.slug}
              />
            ))}
          </div>

          {/* Use cases */}
          <div className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="font-display text-xl font-bold text-white mb-4">
              Ideální použití
            </h2>
            <div className="flex flex-wrap gap-3 mb-6">
              {page.content.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="bg-gold-500/10 text-gold-400 px-4 py-2 rounded-full text-sm"
                >
                  {useCase}
                </span>
              ))}
            </div>
            <div className="bg-gold-500/5 border border-gold-500/20 rounded-xl p-5">
              <p className="text-gold-400 font-bold mb-1">💡 Tip</p>
              <p className="text-gray-300 text-sm">{page.content.tip}</p>
            </div>
          </div>

          {/* SEO content */}
          <div className="prose prose-invert prose-gold max-w-none mb-12">
            <h2 className="font-display text-2xl font-bold text-white">
              Proč si vybrat {page.h1.toLowerCase()}?
            </h2>
            <p className="text-gray-300 leading-relaxed">{page.description}</p>
            <p className="text-gray-300 leading-relaxed">
              Všechny naše regály jsou 100% nové, v originálním balení a s 7letou
              zárukou. Díky likvidaci skladu nabízíme slevy až 75 % z původní ceny.
              Doprava je zdarma pro objednávky nad 2000 Kč a expedujeme do 24 hodin.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">
              Nenašli jste, co hledáte? Prohlédněte si celý katalog.
            </p>
            <Link href="/katalog" className="btn-outline-gold">
              Zobrazit všechny regály →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
