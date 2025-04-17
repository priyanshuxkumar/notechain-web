import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { manrope } from "@/fonts/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.notechain.shop"),
  title: "Notechain | Decentralized Academic Resource Exchange",
  description: "Swap handwritten notes, cheatsheets, and study guides with students globally. Powered by Solana.",
  keywords: ["NoteChain",
    "StudySwap",
    "notes exchange",
    "Solana",
    "decentralized education",
    "student web3",
    "DARE",
    "academic resources",
    "study materials",
    "web3 notes",],
  alternates: {
    canonical: "https://www.notechain.shop",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  openGraph: {
    title: "NoteChain – Decentralized Academic Resource Exchange",
    description:
      "Exchange academic resources globally with NoteChain. A Solana-powered platform to share notes, guides & more.",
    url: "https://notechain.shop",
    siteName: "NoteChain",
    images: [
      {
        url: "https://notechain.shop/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoteChain – Exchange Academic Resources on Solana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoteChain – Decentralized Academic Resource Exchange",
    description:
      "Share and access handwritten notes, study guides, and more — built on Solana.",
    images: ["https://notechain.xyz/og-image.png"],
    creator: "@priyanshuxkumar", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
