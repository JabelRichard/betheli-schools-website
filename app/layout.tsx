import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Betheli schools - Excellence in Education',
  description: 'Betheli Schools provides quality education in a safe, caring, and supportive learning environment. Our programs help students develop strong academic foundations, confidence, creativity, and essential skills for lifelong success.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Navbar />
        <main className="pt-[73px]"> {/* Add padding top to account for fixed navbar */}
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  )
}