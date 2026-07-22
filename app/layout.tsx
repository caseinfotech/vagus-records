import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vagusrecords.com"),
  title: "Vagus Records — Music for the Inner Current",
  description: "Independent melodic house and techno label. Music for body, mind, and everything between.",
  icons: { icon: "/images/vagus-geometric-logo.png", shortcut: "/images/vagus-geometric-logo.png" },
  openGraph: {
    title: "Vagus Records — Music for the Inner Current",
    description: "Melodic house and techno for body, mind, and everything between.",
    url: "https://vagusrecords.com",
    siteName: "Vagus Records",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vagus Records — Music for the Inner Current" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Vagus Records", description: "Music for the Inner Current", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
