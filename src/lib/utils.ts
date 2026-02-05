export function formatPrice(price: number): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateDiscount(price: number, priceOrig: number): number {
  if (priceOrig <= 0) return 0;
  return Math.round(((priceOrig - price) / priceOrig) * 100);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getProductDimensions(
  height: number,
  width: number,
  depth: number
): string {
  return `${height} x ${width} x ${depth} mm`;
}

export function getProductSlug(
  height: number,
  width: number,
  depth: number,
  color: string
): string {
  const colorSlug = slugify(color);
  return `regal-${height}x${width}x${depth}-${colorSlug}`;
}
