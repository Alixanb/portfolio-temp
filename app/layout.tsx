import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mon portfolio | Alixan BALU", // Replace with your name
  description:
    "Je suis un développeur créatif et dynamique, passioné par les technologies de pointes.", // Replace with your own description
  keywords: [
    "développeur",
    "portfolio",
    "full stack",
    "créatif",
    "designer",
    "développeur web",
  ],
  og: {
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
      <body className={cn("bg-black", inter.className)}>{children}</body>
    </html>
  );
}
