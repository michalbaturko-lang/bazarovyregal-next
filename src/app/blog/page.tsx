import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blog.json";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Blog | Tipy a návody | Bazarovyregal.cz",
  description:
    "Praktické články o výběru, montáži a využití kovových regálů. Tipy pro garáž, sklep, dílnu i kancelář.",
  openGraph: {
    title: "Blog o regálech | Bazarovyregal.cz",
    description:
      "Návody, tipy a inspirace pro organizaci prostoru pomocí kovových regálů.",
  },
};

const categoryColors: Record<string, string> = {
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  orange: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  red: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function BlogPage() {
  const featuredArticle = blogData.articles.find((a) => a.featured);
  const otherArticles = blogData.articles.filter((a) => !a.featured);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <div className="py-12 sm:py-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Inspirace a návody
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Blog o <span className="text-gold-shine">regálech</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Praktické tipy, návody a inspirace pro organizaci vašeho prostoru.
              Od výběru regálu po jeho využití na maximum.
            </p>
          </div>

          {/* Featured article */}
          {featuredArticle && (
            <div className="mb-12">
              <Link
                href={`/blog/${featuredArticle.slug.replace(".html", "")}`}
                className="glass-card group block overflow-hidden relative"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900 md:block hidden" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-xs px-3 py-1 rounded-full border ${
                          categoryColors[featuredArticle.categoryColor]
                        }`}
                      >
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {featuredArticle.readTime} čtení
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-400 mb-6">
                      {featuredArticle.excerpt}
                    </p>
                    <span className="text-gold-500 font-medium group-hover:translate-x-2 transition-transform inline-block">
                      Číst článek →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Other articles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug.replace(".html", "")}`}
                className="glass-card group block overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${
                        categoryColors[article.categoryColor]
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {article.readTime} čtení
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-500 mb-4">
              Máte nápad na článek nebo otázku?
            </p>
            <Link href="/kontakt" className="btn-outline-gold text-sm">
              Napište nám →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
