import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — We Buy Houses for Cash in ${site.serviceArea.state}`,
    template: `%s | ${site.name}`,
  },
  description: `Sell your house fast for cash in ${site.serviceArea.state}. Fair, no-obligation offer in 24 hours. No fees, no commissions, no repairs. Close in as little as 7 days.`,
  applicationName: site.name,
  keywords: [
    "we buy houses",
    "sell house fast",
    "cash home buyer",
    `we buy houses ${site.serviceArea.state}`,
    `sell my house fast ${site.serviceArea.state}`,
    "no realtor fees",
    "cash offer for house",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — We Buy Houses for Cash in ${site.serviceArea.state}`,
    description: `Fair cash offer in 24 hours. Close in 7 days. No fees, no repairs.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — We Buy Houses for Cash`,
    description: `Fair cash offer in 24 hours. Close in 7 days. No fees, no repairs.`,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    areaServed: {
      "@type": "State",
      name: site.serviceArea.state,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: site.serviceArea.stateAbbr,
      addressCountry: "US",
    },
    description: `Cash home buyer serving ${site.serviceArea.state}. Fast closings, no fees, no commissions.`,
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
