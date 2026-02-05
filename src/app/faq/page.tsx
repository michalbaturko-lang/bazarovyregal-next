import type { Metadata } from "next";
import faqData from "@/data/faq.json";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";
import { FaqClient } from "./FaqClient";

export const metadata: Metadata = {
  title: "Často kladené otázky (FAQ) | Bazarovyregal.cz",
  description:
    "Odpovědi na nejčastější dotazy o objednávce, dopravě, montáži a záruce kovových regálů. Vše co potřebujete vědět před nákupem.",
  openGraph: {
    title: "FAQ - Časté dotazy | Bazarovyregal.cz",
    description:
      "21 odpovědí na vaše otázky o kovových regálech. Objednávka, doprava, montáž, záruka.",
  },
};

export default function FaqPage() {
  // Flatten all questions for FAQ schema
  const allQuestions = faqData.categories.flatMap((cat) =>
    cat.questions.map((q) => ({
      question: q.question,
      answer: q.answer,
    }))
  );

  return (
    <>
      <JsonLd data={faqSchema(allQuestions)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "Časté dotazy", url: "/faq" },
        ])}
      />

      <div className="py-12 sm:py-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-gold-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Máte otázku?
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Často kladené <span className="text-gold-shine">otázky</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Odpovědi na {faqData.totalQuestions} nejčastějších dotazů o našich
              kovových regálech. Nenašli jste odpověď?{" "}
              <a href="/kontakt" className="text-gold-400 hover:underline">
                Napište nám
              </a>
              .
            </p>
          </div>

          <FaqClient categories={faqData.categories} />
        </div>
      </div>
    </>
  );
}
