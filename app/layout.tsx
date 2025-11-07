import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alixan BALU | Développeur Web Full Stack",
  applicationName: "Portfolio Alixan BALU",
  description:
    "Développeur web full stack créatif spécialisé en Next.js, React et TypeScript. Création d'expériences web modernes et performantes.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  authors: [{ name: "Alixan BALU" }],
  creator: "Alixan BALU",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  metadataBase: new URL('https://alixan.dev'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    "Développeur Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio Développeur",
    "Développeur Web France",
    "Creative Developer",
    "TailwindCSS",
    "Développeur Front-end",
    "Développeur Back-end",
  ],
  openGraph: {
    title: "Alixan BALU | Développeur Web Full Stack",
    description:
      "Développeur web full stack créatif spécialisé en Next.js, React et TypeScript. Création d'expériences web modernes et performantes.",
    images: [{
      url: "/img/og-image.png",
      width: 1200,
      height: 630,
      alt: "Portfolio Alixan BALU",
    }],
    url: "https://alixan.dev",
    siteName: "Alixan BALU Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    title: "Alixan BALU | Développeur Web Full Stack",
    description:
      "Développeur web full stack créatif spécialisé en Next.js, React et TypeScript. Création d'expériences web modernes et performantes.",
    images: [{
      url: "/img/og-image.png",
      alt: "Portfolio Alixan BALU",
    }],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alixan BALU",
    jobTitle: "Développeur Web Full Stack",
    url: "https://alixan.dev",
    sameAs: [
      "https://github.com/alixan",
      "https://linkedin.com/in/alixan-balu",
    ],
    knowsAbout: ["Next.js", "React", "TypeScript", "TailwindCSS", "Web Development"],
  };

  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn("bg-black max-w-screen", inter.className)}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
