import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schemas";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { BestsellersSection } from "@/components/sections/BestsellersSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />

      <HeroSection />

      <div className="gold-divider" />

      <CategoriesSection />

      <div className="gold-divider" />

      <BestsellersSection />

      <div className="gold-divider" />

      <TrustSection />

      <div className="gold-divider" />

      <TestimonialsSection />

      <div className="gold-divider" />

      {/* SEO Internal Links */}
      <section className="py-16 sm:py-20 cosmic-bg">
        <div className="section-container relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Prozkoumejte naši <span className="text-gold-shine">nabídku</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { href: "/regaly-do-garaze", label: "Regály do garáže" },
              { href: "/regaly-do-sklepa", label: "Regály do sklepa" },
              { href: "/regaly-do-dilny", label: "Regály do dílny" },
              { href: "/zinkove-regaly", label: "Zinkované regály" },
              { href: "/levne-regaly", label: "Levné regály" },
              { href: "/jak-vybrat-regal-do-garaze", label: "Jak vybrat regál" },
              { href: "/slovnik", label: "Slovník pojmů" },
              { href: "/blog", label: "Blog & rady" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-card px-4 py-3 text-center text-sm text-gray-300
                           hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
