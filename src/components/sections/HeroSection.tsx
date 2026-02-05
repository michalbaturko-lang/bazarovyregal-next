"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target to 7 days from now (rolling)
    const getTarget = () => {
      const stored = localStorage.getItem("countdown_target");
      if (stored) {
        const target = new Date(stored).getTime();
        if (target > Date.now()) return target;
      }
      const target = Date.now() + 7 * 24 * 60 * 60 * 1000;
      localStorage.setItem("countdown_target", new Date(target).toISOString());
      return target;
    };

    const target = getTarget();

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* Cosmic glow orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] animate-cosmic-drift" />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] animate-cosmic-drift"
        style={{ animationDelay: "-10s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-800/5 rounded-full blur-[200px]" />

      {/* Content */}
      <div className="section-container relative z-10 py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-danger-600/10 border border-danger-600/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-danger-500 animate-glow-pulse" />
            <span className="text-danger-400 text-xs sm:text-sm font-medium">
              Likvidace skladu – slevy až 75%
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up">
            <span className="text-white">Prémiové kovové </span>
            <span className="text-gold-shine">regály</span>
            <br />
            <span className="text-white">za </span>
            <span className="text-gold-shine">likvidační ceny</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Garáž, sklep, dílna, sklad – odolné regály s nosností až 875 kg.
            Doprava zdarma nad 2 000 Kč.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            <Link
              href="/katalog"
              className="btn-gold text-base sm:text-lg px-8 py-4 shimmer-effect"
            >
              Prohlédnout katalog
            </Link>
            <Link
              href="/quiz"
              className="btn-ghost text-base sm:text-lg px-8 py-4"
            >
              Najdi svůj regál
            </Link>
          </div>

          {/* Countdown */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "600ms" }}
          >
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">
              Akce končí za
            </p>
            <div className="flex gap-3">
              {[
                { value: countdown.days, label: "dní" },
                { value: countdown.hours, label: "hod" },
                { value: countdown.minutes, label: "min" },
                { value: countdown.seconds, label: "sek" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1.5 block uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-800 to-transparent" />
    </section>
  );
}
