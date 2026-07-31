import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'School Name - Excellence in Education',
  description: 'Your school description here',
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
        </main>
        <Footer />
      </body>
    </html>
  )
}