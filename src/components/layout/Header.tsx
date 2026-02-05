"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/katalog", label: "Katalog" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/slovnik", label: "Slovník" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold-gradient rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-dark-900 font-display font-bold text-lg sm:text-xl">
                  B
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-display text-lg font-semibold tracking-tight">
                  Bazarovy
                </span>
                <span className="text-gold-400 font-display text-lg font-semibold tracking-tight">
                  regal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-gold-400
                             transition-colors duration-300 rounded-lg
                             hover:bg-white/[0.03] font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: Quiz CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Link
                href="/quiz"
                className="hidden sm:inline-flex btn-gold text-sm px-4 py-2 shimmer-effect"
              >
                Najdi svůj regál
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-gold-400 transition-colors"
                aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen
                        ? "rotate-45 translate-y-[9px]"
                        : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-current transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen
                        ? "-rotate-45 -translate-y-[9px]"
                        : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-900/95 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <nav className="relative flex flex-col items-center justify-center h-full gap-2 p-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-display font-semibold text-white hover:text-gold-400
                         transition-all duration-300 py-3 px-6 rounded-xl hover:bg-white/[0.03]
                         ${
                           isMobileMenuOpen
                             ? "animate-fade-in-up"
                             : "opacity-0"
                         }`}
              style={{
                animationDelay: `${index * 60}ms`,
                animationFillMode: "both",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-6 btn-gold text-lg px-8 py-4 shimmer-effect ${
              isMobileMenuOpen ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              animationDelay: `${navLinks.length * 60}ms`,
              animationFillMode: "both",
            }}
          >
            Najdi svůj regál
          </Link>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
