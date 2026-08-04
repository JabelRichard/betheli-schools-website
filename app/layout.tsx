import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // Added 800 for extra bold headings
  display: 'swap',
  variable: '--font-figtree',
})

export const metadata: Metadata = {
  title: 'Betheli Schools - Excellence in Education',
  description: 'Betheli Schools provides quality education in a safe, caring, and supportive learning environment. Our programs help students develop strong academic foundations, confidence, creativity, and essential skills for lifelong success.',
  
  // 1. FIX SEO: Explicitly instruct search engines to index the site
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

  // 2. Add OpenGraph metadata for preview cards on social sharing
  openGraph: {
    title: 'Betheli Schools - Excellence in Education',
    description: 'Quality nursery and primary education in Mwanza, Tanzania.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Betheli Schools',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={figtree.className}>
      <body className="min-h-screen bg-white text-[#2b2359] antialiased">
        <Navbar />
        {/* Padding top accounts for fixed navbar */}
        <main className="pt-[73px]">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  )
}