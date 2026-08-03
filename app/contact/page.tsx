import React from 'react'
import ContactFormSection from '@/components/sections/contact/ContactFormSection'
import MapSection from '@/components/sections/contact/MapSection'
import { PageHero } from '@/components/layout/PageHero'

export const metadata = {
  title: 'Contact Us | Betheli Schools',
  description: 'Get in touch with Betheli Schools. Reach out via email, phone, or visit our campus.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#2b2359] font-figtree">
     <PageHero pageKey="contact" />

      {/* Section 1: Form & Contact Info */}
      <ContactFormSection />

      {/* Section 2: Interactive Google Map */}
      <MapSection />
    </main>
  )
}