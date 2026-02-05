import productsData from "@/data/products.json";
import { Product } from "./types";
import { slugify } from "./utils";

// Transform raw data into typed products with slugs
function transformProducts(): Product[] {
  return productsData.map((p) => ({
    ...p,
    slug: `regal-${p.height}x${p.width}x${p.depth}-${slugify(p.color)}`,
    capacityPerShelf: Math.round(p.capacity / p.shelves),
    bestseller: (p as Record<string, unknown>).bestseller === true || p.sold7days > 15,
  }));
}

const products: Product[] = transformProducts();

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getBestsellers(limit: number = 4): Product[] {
  return products
    .filter((p) => p.bestseller)
    .sort((a, b) => b.sold7days - a.sold7days)
    .slice(0, limit);
}

export function getProductsByColor(color: string): Product[] {
  return products.filter((p) => p.color === color);
}

export function getProductsBySurface(surface: string): Product[] {
  return products.filter((p) => p.surface === surface);
}

export function getRelatedProducts(
  product: Product,
  limit: number = 4
): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.color === product.color || p.height === product.height)
    )
    .sort((a, b) => b.sold7days - a.sold7days)
    .slice(0, limit);
}

export function getUniqueColors(): string[] {
  return [...new Set(products.map((p) => p.color))];
}

export function getUniqueHeights(): number[] {
  return [...new Set(products.map((p) => p.height))].sort((a, b) => a - b);
}

export function getUniqueWidths(): number[] {
  return [...new Set(products.map((p) => p.width))].sort((a, b) => a - b);
}

export function getUniqueSurfaces(): string[] {
  return [...new Set(products.map((p) => p.surface))];
}

export function getPriceRange(): { min: number; max: number } {
  const prices = products.map((p) => p.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}
