import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "The Run Club Thane | Best Running Club in Thane",
    template: "%s | The Run Club Thane",
  },
  description: "Join TRCT.IN — the best running club in Thane for Gen Z. Join Thane's most electrifying running community every Sunday at 7 AM. Not a club, a CULT.",
  keywords: [
    "runclub in thane",
    "best runclub in thane",
    "thane run club",
    "TRCT",
    "TRCT.IN",
    "running in thane",
    "fitness thane",
    "thane runners community",
    "best fitness club in thane",
    "sunday run thane",
    "marathon training thane",
    "thane jogging",
    "running club in thane",
    "running community in thane",
    "running group in thane",
    "running shoes",
    "jogging",
    "joggers park",
    "5k run thane",
    "10k run thane",
    "half marathon training thane",
    "full marathon training thane",
    "marathon training group thane",
    "weekend run thane",
    "sunday morning run thane",
    "early morning run thane",
    "night run thane",
    "running group kopri thane",
    "running club pokhran road thane",
    "runners at yeoor hills thane",
    "upvan lake running thane",
    "teen hath naka runners",
    "hiranandani estate run club",
    "ghodbunder road runners thane",
  ],
  authors: [{ name: "Rithvik Shetty" }],
  creator: "Rithvik Shetty",
  publisher: "The Run Club Thane",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trct.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Run Club Thane | Best Running Club in Thane",
    description: "Join Thane's most electrifying running community every Sunday at 7 AM. Not a club, a CULT.",
    url: "https://trct.in",
    siteName: "The Run Club Thane",
    images: [
      {
        url: "/trct_logo.png",
        width: 1200,
        height: 630,
        alt: "The Run Club Thane Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Run Club Thane | Best Running Club in Thane",
    description: "Join Thane's most electrifying running community every Sunday at 7 AM. Not a club, a CULT.",
    images: ["/trct_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/trct_logo.png",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#dc2626",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
