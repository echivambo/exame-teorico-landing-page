import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exame Teórico Moçambique 2026 | Simulados para Carta de Condução",
  description: "Prepare-se para o exame teórico de condução em Moçambique com centenas de perguntas, simulados completos e estatísticas de desempenho.",
  metadataBase: new URL("https://exameteorico.co.mz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Exame Teórico Moçambique 2026 | Simulados para Carta de Condução",
    description: "Estude onde e quando quiser com centenas de perguntas atualizadas, simulados completos e estatísticas de desempenho.",
    url: "https://exameteorico.co.mz",
    siteName: "Exame Teórico Moçambique 2026",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Logótipo do Aplicativo Exame Teórico Moçambique 2026",
      },
    ],
    locale: "pt_MZ",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Exame Teórico Moçambique 2026",
    description: "Prepare-se para o exame teórico de condução em Moçambique com simulados e estatísticas de desempenho.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Exame Teórico Moçambique 2026",
    "operatingSystem": "Android",
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MZN"
    },
    "installUrl": "https://play.google.com/store/apps/details?id=com.echivambo.exameteorico",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "342"
    }
  };

  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-dark">
        {children}
      </body>
    </html>
  );
}

