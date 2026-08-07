'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    title: 'School Event',
    image: '/images/_MG_0840.webp',
  },
  {
    id: 2,
    title: 'Classroom Learning',
    image: '/images/studentswithteach3.webp',
  },
  {
    id: 3,
    title: 'Outdoor Activities',
    image: '/images/studentsstudying2.webp',
  },
  {
    id: 4,
    title: 'Student Life',
    image: '/images/students2.webp',
  },
]

export function PreFooterGallery() {
  return (
    <section className="relative w-full p-0 m-0 bg-[#2b2359] overflow-hidden">
      
      {/* Top Right "View More" Anchor Link */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2b2359]/80 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-[#18a8e5] hover:border-[#18a8e5] transition-colors duration-300 shadow-lg cursor-pointer"
        >
          <span>View More</span>
          <ArrowUpRight className="w-4 h-4 text-[#f7f149]" />
        </Link>
      </div>

      {/* 4-Image Edge-to-Edge Grid (0 Gaps, 0 Padding) */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full p-0 m-0 gap-0">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className="relative h-48 sm:h-64 md:h-72 w-full overflow-hidden"
          >
            <Image
              src={img.image}
              alt={img.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center"
            />
            
            {/* Soft tint gradient overlay for consistency */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2359]/60 via-transparent to-black/20 z-10" />
          </div>
        ))}
      </div>

    </section>
  )
}