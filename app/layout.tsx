import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StarryBackground } from "@/components/starry-background";
import { Analytics } from "@vercel/analytics/react";
import ClientLayout from "./client-layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "MeloGraph - Graphic & Digital Artist",
  description: "MeloGraph is a graphic and digital artist based in Paris.",
  robots: "page, follow",
  keywords: "graphic design, digital art, illustration, Paris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-transparent text-gray-100">
          <StarryBackground />
          <ClientLayout>{children}</ClientLayout>
        </div>
      </body>
    </html>
  );
}
