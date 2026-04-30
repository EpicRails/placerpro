import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://placerprotection.net"),
  title: {
    default: "Placer Protection Group | Private Security Services in Roseville, CA",
    template: "%s | Placer Protection Group",
  },
  description:
    "Professional private security services in Roseville, CA. Armed guards, unarmed officers, vehicle patrol, fire watch, and construction site security for the Sacramento region.",
  keywords: [
    "security company Roseville CA",
    "private security Sacramento",
    "vehicle patrol Roseville",
    "unarmed security guards",
    "fire watch services",
    "construction site security",
    "armed security officers",
    "Placer County security",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://placerprotection.net",
    siteName: "Placer Protection Group",
    title: "Placer Protection Group | Private Security Services in Roseville, CA",
    description:
      "Professional private security services in Roseville, CA. Armed guards, unarmed officers, vehicle patrol, fire watch, and construction site security.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Placer Protection Group | Private Security Services in Roseville, CA",
    description:
      "Professional private security services in Roseville, CA — vehicle patrol, armed and unarmed guards, fire watch, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white flex flex-col">
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="N79L6aN/lvrev8dQLaQK8g"
          strategy="beforeInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18034197912"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18034197912');
          `}
        </Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
