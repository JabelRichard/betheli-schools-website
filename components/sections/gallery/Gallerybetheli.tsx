'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  title: string
  category: 'campus' | 'classrooms' | 'sports'
  imageSrc: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Primary School Learning Environment', category: 'classrooms', imageSrc: '/images/large-hero-mission.jpg' },
  { id: 2, title: 'Outdoor Play & Athletics', category: 'sports', imageSrc: '/images/build-Section1.jpg' },
  { id: 3, title: 'Modern Preschool Classrooms', category: 'classrooms', imageSrc: '/images/build-Section1.jpg' },
  { id: 4, title: 'Campus Grounds & Community', category: 'campus', imageSrc: '/images/large-hero-mission.jpg' },
  { id: 5, title: 'Student Activities & Events', category: 'sports', imageSrc: '/images/build-Section1.jpg' },
  { id: 6, title: 'Interactive Learning Spaces', category: 'classrooms', imageSrc: '/images/build-Section1.jpg' },
]

export function AdmissionsGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'campus' | 'classrooms' | 'sports'>('all')

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab)

  return (
    <section className="py-12 md:py-24 bg-white text-[#2b2359] font-figtree">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-12 text-center sm:text-left mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-semibold text-[#2b2359] tracking-tight leading-tight">
            Life at Betheli Schools
          </h2>
          
          {/* Accent Line: Hidden on mobile, visible on desktop */}
          <div className="hidden sm:block w-12 h-1 bg-[#f7f149] rounded-none mt-3 mb-4" />
          
          <p className="text-sm sm:text-lg text-[#2b2359]/80 font-medium mt-2 sm:mt-0">
            Take a look inside our vibrant learning environment, facilities, and campus activities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-8">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'campus', label: 'Campus Life' },
            { id: 'classrooms', label: 'Classrooms' },
            { id: 'sports', label: 'Sports & Activities' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-none text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#18a8e5] text-white shadow-sm'
                  : 'bg-slate-100 text-[#2b2359]/70 hover:bg-slate-200 hover:text-[#2b2359]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tight Image-Only Grid (No Titles, No Hover Effects, Sharp Angles) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] w-full bg-slate-100 rounded-none overflow-hidden"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center rounded-none"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}