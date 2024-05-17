import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mon portfolio | Alixan BALU",
  author: "Alixan BALU",
  url: "https://alixan.dev",
  description:
    "Je suis un développeur créatif et dynamique, passioné par les technologies de pointes.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  image: "/img/og-image.png",
  siteName: "Alixan BALU Portfolio d'un creative developer",
  robots: "all",
  link: [
    {
      rel: "canonical",
      href: "https://alixan.dev",
      key: "canonical",
    },
  ],
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
      "Je suis un développeur créatif et dynamique, passioné par les technologies de pointes.",
    image: "/img/og-image.png",
    url: "https://alixan.dev",
    type: "website",
    site_name: "Mon portfolio | Alixan BALU",
  },
  twitter: {
    title: "Mon portfolio | Alixan BALU",
    description:
      "Je suis un développeur créatif et dynamique, passioné par les technologies de pointes.",
    image: "/img/og-image.png",
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
      </body>
    </html>
  );
}
