import type { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schemas";
import { CatalogClient } from "./CatalogClient";

export const metadata: Metadata = {
  title: "Katalog kovových regálů | 102 produktů skladem",
  description:
    "Kompletní katalog kovových regálů. Filtrujte dle barvy, výšky, nosnosti a ceny. 102 produktů skladem, doprava zdarma nad 2000 Kč.",
  openGraph: {
    title: "Katalog kovových regálů | Bazarovyregal.cz",
    description:
      "102 kovových regálů skladem. Slevy až 75%. Filtrujte dle parametrů.",
  },
};

export default function KatalogPage() {
  const products = getAllProducts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Domov", url: "/" },
          { name: "Katalog", url: "/katalog" },
        ])}
      />
      <JsonLd data={itemListSchema(products)} />

      <CatalogClient products={products} />
    </>
  );
}
