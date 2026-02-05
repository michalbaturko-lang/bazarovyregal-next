import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kovové regály | Likvidace skladu - slevy až 75%",
    template: "%s | Bazarovyregal.cz",
  },
  description:
    "Kovové regály za nejlepší ceny. Likvidace skladu - slevy až 75%. Garáž, sklep, dílna, sklad. Nosnost až 875 kg. Doprava zdarma nad 2000 Kč.",
  metadataBase: new URL("https://bazarovyregal.vercel.app"),
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Bazarovyregal.cz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="grain-overlay antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
