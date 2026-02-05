"use client";

import { useState, useMemo } from "react";
import { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";
import { formatPrice } from "@/lib/utils";

interface CatalogClientProps {
  products: Product[];
}

type SortOption = "bestseller" | "price-asc" | "price-desc" | "name" | "capacity";

export function CatalogClient({ products }: CatalogClientProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedHeights, setSelectedHeights] = useState<number[]>([]);
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState<SortOption>("bestseller");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const perPage = 12;

  // Extract unique values
  const colors = useMemo(() => [...new Set(products.map((p) => p.color))], [products]);
  const heights = useMemo(
    () => [...new Set(products.map((p) => p.height))].sort((a, b) => a - b),
    [products]
  );
  const surfaces = useMemo(() => [...new Set(products.map((p) => p.surface))], [products]);

  // Filter
  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedColors.length && !selectedColors.includes(p.color)) return false;
      if (selectedHeights.length && !selectedHeights.includes(p.height)) return false;
      if (selectedSurfaces.length && !selectedSurfaces.includes(p.surface)) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });
  }, [products, selectedColors, selectedHeights, selectedSurfaces, priceRange]);

  // Sort
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortBy) {
      case "bestseller":
        return arr.sort((a, b) => b.sold7days - a.sold7days);
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      case "name":
        return arr.sort((a, b) => a.name.localeCompare(b.name, "cs"));
      case "capacity":
        return arr.sort((a, b) => b.capacity - a.capacity);
      default:
        return arr;
    }
  }, [filtered, sortBy]);

  // Paginate
  const totalPages = Math.ceil(sorted.length / perPage);
  const paginated = sorted.slice((currentPage - 1) * perPage, currentPage * perPage);

  const toggleFilter = (
    value: string | number,
    selected: (string | number)[],
    setter: (v: never[]) => void
  ) => {
    if (selected.includes(value)) {
      setter(selected.filter((v) => v !== value) as never[]);
    } else {
      setter([...selected, value] as never[]);
    }
    setCurrentPage(1);
  };

  const activeFilterCount =
    selectedColors.length + selectedHeights.length + selectedSurfaces.length;

  return (
    <div className="py-8 sm:py-12">
      <div className="section-container">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Katalog <span className="text-gold-shine">regálů</span>
          </h1>
          <p className="text-gray-400">
            {sorted.length} produktů{" "}
            {activeFilterCount > 0 && (
              <span className="text-gold-400">
                ({activeFilterCount} filtrů aktivních)
              </span>
            )}
          </p>
        </div>

        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden btn-ghost text-sm flex items-center gap-2"
          >
            <span>Filtry</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-gold-500 text-dark-900 text-xs font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-dark-700 border border-dark-400/30 text-white text-sm rounded-xl px-4 py-2.5
                       focus:border-gold-500/40 focus:ring-1 focus:ring-gold-500/20 focus:outline-none"
          >
            <option value="bestseller">Nejprodávanější</option>
            <option value="price-asc">Cena: nejnižší</option>
            <option value="price-desc">Cena: nejvyšší</option>
            <option value="name">Název A–Z</option>
            <option value="capacity">Nosnost</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside
            className={`${
              showFilters ? "block" : "hidden"
            } sm:block w-full sm:w-64 shrink-0`}
          >
            <div className="glass-card p-5 space-y-6 sticky top-24">
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
                Filtry
              </h3>

              {/* Colors */}
              <div>
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                  Barva
                </h4>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() =>
                        toggleFilter(color, selectedColors, setSelectedColors as (v: never[]) => void)
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                        selectedColors.includes(color)
                          ? "bg-gold-500/20 text-gold-400 border border-gold-500/40"
                          : "bg-dark-600/50 text-gray-400 border border-dark-400/20 hover:border-dark-300/40"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Heights */}
              <div>
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                  Výška (cm)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {heights.map((h) => (
                    <button
                      key={h}
                      onClick={() =>
                        toggleFilter(h, selectedHeights, setSelectedHeights as (v: never[]) => void)
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                        selectedHeights.includes(h)
                          ? "bg-gold-500/20 text-gold-400 border border-gold-500/40"
                          : "bg-dark-600/50 text-gray-400 border border-dark-400/20 hover:border-dark-300/40"
                      }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              {/* Surface */}
              <div>
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                  Povrch
                </h4>
                <div className="flex flex-wrap gap-2">
                  {surfaces.map((s) => (
                    <button
                      key={s}
                      onClick={() =>
                        toggleFilter(s, selectedSurfaces, setSelectedSurfaces as (v: never[]) => void)
                      }
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                        selectedSurfaces.includes(s)
                          ? "bg-gold-500/20 text-gold-400 border border-gold-500/40"
                          : "bg-dark-600/50 text-gray-400 border border-dark-400/20 hover:border-dark-300/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                  Cena
                </h4>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">{formatPrice(priceRange[0])}</span>
                  <input
                    type="range"
                    min={0}
                    max={2000}
                    step={50}
                    value={priceRange[1]}
                    onChange={(e) => {
                      setPriceRange([priceRange[0], Number(e.target.value)]);
                      setCurrentPage(1);
                    }}
                    className="flex-1 accent-gold-500"
                  />
                  <span className="text-gold-400">{formatPrice(priceRange[1])}</span>
                </div>
              </div>

              {/* Clear filters */}
              {activeFilterCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedColors([]);
                    setSelectedHeights([]);
                    setSelectedSurfaces([]);
                    setPriceRange([0, 2000]);
                    setCurrentPage(1);
                  }}
                  className="text-gold-400 text-sm hover:text-gold-300 transition-colors"
                >
                  Zrušit filtry
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {paginated.length === 0 ? (
              <div className="glass-card p-12 text-center">
                <p className="text-gray-400 text-lg mb-4">
                  Žádné produkty neodpovídají vašim filtrům.
                </p>
                <button
                  onClick={() => {
                    setSelectedColors([]);
                    setSelectedHeights([]);
                    setSelectedSurfaces([]);
                    setPriceRange([0, 2000]);
                  }}
                  className="btn-outline-gold text-sm"
                >
                  Zrušit filtry
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {paginated.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      campaign="katalog"
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-10">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="btn-ghost text-sm px-3 py-2 disabled:opacity-30"
                    >
                      ←
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-xl text-sm font-medium transition-all duration-200 ${
                            page === currentPage
                              ? "bg-gold-gradient text-dark-900"
                              : "bg-dark-600/50 text-gray-400 hover:text-white hover:bg-dark-500/50"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}
                    <button
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="btn-ghost text-sm px-3 py-2 disabled:opacity-30"
                    >
                      →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
