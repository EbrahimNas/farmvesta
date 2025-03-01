import type { Metadata } from "next";
import Header from "./components/header";
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
  title: {
    template: '%s | FarmVesta',
    default: 'FarmVesta',
  },
  description: "Empowering farmers with innovation and community-driven solutions.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "FarmVesta",
    description: "Join FarmVesta in revolutionizing agriculture with smart solutions for farmers.",
    url: "https://farmvesta.vercel.app/",
    siteName: "FarmVesta",
    images: [
      {
        url: "/favicon.png", 
        width: 1200,
        height: 630,
        alt: "FarmVesta - Smart Solutions for Farmers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@FarmVesta", // update twitter handle after setup
    title: "FarmVesta - Empowering Farmers",
    description: "Join FarmVesta in revolutionizing agriculture with smart solutions for farmers.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
