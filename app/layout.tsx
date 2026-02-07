import React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Northway Immigration Counsel | Distinguished Immigration Law Firm",
    template: "%s | Northway Immigration Counsel",
  },
  description:
    "Expert immigration legal counsel for individuals, families, and businesses. Precision, discretion, and dedication at every stage of your journey.",
  metadataBase: new URL("https://northway-immigration.com"), // Replace with actual production URL
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    title: "Northway Immigration Counsel | Distinguished Immigration Law Firm",
    description: "Expert immigration legal counsel with over 15 years of experience. Your future deserves distinguished counsel.",
    url: "https://northway-immigration.com",
    siteName: "Northway Immigration Counsel",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Northway Immigration Counsel - Distinguished Legal Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northway Immigration Counsel | Distinguished Immigration Law Firm",
    description: "Expert immigration legal counsel. Precision, discretion, and dedication.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
