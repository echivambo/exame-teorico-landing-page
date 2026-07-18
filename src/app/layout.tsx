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
  title: "Exame Teórico de Condução em Moçambique | Simulados Gratuitos para Carta de Condução",
  description: "Pratique gratuitamente o exame teórico de condução em Moçambique. Simulados completos, perguntas atualizadas e preparação para obter a carta de condução.",
  metadataBase: new URL("https://eteorico.automatizamoz.tech"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Exame Teórico Moçambique 2026",
    "Exame Teórico de Condução em Moçambique",
    "Carta de Condução Moçambique",
    "Simulados INATRO",
    "Código de Estrada Moçambique",
    "INATRO Moçambique",
    "Estudar Condução Moçambique",
    "Perguntas Exame de Condução",
    "Exame Teórico de Condução",
    "Aplicativo de Condução Moçambique",
    "Exame Teórico Carta de Condução",
    "Exame de Condução Moçambique"
  ],
  authors: [{ name: "Edson Chivambo" }],
  openGraph: {
    title: "Exame Teórico de Condução em Moçambique | Simulados Gratuitos para Carta de Condução",
    description: "Pratique gratuitamente o exame teórico de condução em Moçambique. Simulados completos, perguntas atualizadas e preparação para obter a carta de condução.",
    url: "https://eteorico.automatizamoz.tech",
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
    title: "Exame Teórico de Condução em Moçambique",
    description: "Pratique gratuitamente o exame teórico de condução em Moçambique. Simulados completos, perguntas atualizadas e preparação para obter a carta de condução.",
    images: ["/logo.png"],
  },
  other: {
    "geo.region": "MZ",
    "geo.position": "-18.665695;35.529562",
    "ICBM": "-18.665695, 35.529562",
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
    "description": "Prepare-se para o exame teórico de condução em Moçambique com centenas de perguntas, simulados completos e estatísticas de desempenho.",
    "genre": "Driving Code, Código de Estrada",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MZN"
    },
    "author": {
      "@type": "Person",
      "name": "Edson Chivambo"
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
      lang="pt-MZ"
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

