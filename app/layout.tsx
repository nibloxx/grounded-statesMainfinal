import type { Metadata } from "next";
import "./globals.css";

// Import Google Fonts optimized
import { GFS_Didot, Montserrat, Libre_Baskerville } from 'next/font/google'

export const metadata: Metadata = {
  title: "Grounded Estates",
  description: "Professional real estate website showcasing premium properties with modern design",
  keywords: "real estate, luxury homes, properties, grounded estates",
  authors: [{ name: "Grounded Estates" }],
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Configure fonts with optimal loading
const gfsDidot = GFS_Didot({
  weight: "400",
  subsets: ["latin"],
  display: "optional", // Don't block render if font fails to load
  preload: false,
  fallback: ["serif"],
  variable: "--font-gfs-didot",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap", // Main font - allow swap
  preload: true,
  fallback: ["sans-serif"],
  variable: "--font-montserrat",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
  display: "optional", // Don't block render if font fails to load
  preload: false,
  fallback: ["serif"],
  variable: "--font-libre-baskerville",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F9F8F4" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <meta name="msapplication-TileColor" content="#F9F8F4" />
        <link rel="preload" href="/images/hero-main.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/images/grounded-estates-logo.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`antialiased overflow-x-hidden ${gfsDidot.variable} ${montserrat.variable} ${libreBaskerville.variable}`}>
        {children}
      </body>
    </html>
  )
} 
