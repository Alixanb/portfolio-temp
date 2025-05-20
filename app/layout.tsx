import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon portfolio | Alixan BALU",
  applicationName: "Mon portfolio | Alixan BALU",
  description:
    "Étudiant développeur web créatif passionné par la création et le développement d'expériences en ligne captivantes, avec une expertise particulière en Next.js et le Design.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: "all",
  metadataBase: new URL('https://alixan.dev'),
  keywords: [
    "Développeur",
    "Portfolio",
    "Full stack",
    "Créatif",
    "Designer",
    "Développeur web",
    "Creative Web Developer France",
    "Web Developer Portfolio",
    "Next.js Portfolio",
    "React Portfolio",
    "Fullstack Developer",
    "Creative Developer",
    "web apps",
  ],
  openGraph: {
    title: "Mon portfolio | Alixan BALU",
    description:
      "Passionné par la création d’expériences en ligne captivantes, spécialisé dans les technologies front-end et back-end.",
    images: "/img/og-image.png",
    url: "https://alixan.dev",
    type: "website",
    emails: "contact@alixan.dev",
  },
  twitter: {
    title: "Mon portfolio | Alixan BALU",
    description:
      "Passionné par la création d’expériences en ligne captivantes, spécialisé dans les technologies front-end et back-end.",
    images: "/img/og-image.png",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth ">
      <body className={cn("bg-black max-w-screen", inter.className)}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
