'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { newsData, NewsItem } from '@/data/news'

export function NewsGrid() {
  const [activeTab, setActiveTab] = useState<string>('All')

  // Identify featured item vs list items
  const featuredPost = newsData.find((item) => item.featured) || newsData[0]
  
  // Filter news items based on selected category tab
  const filteredNews = newsData.filter((item) => {
    if (activeTab === 'All') return true
    return item.category === activeTab
  })

  return (
    <section className="py-12 md:py-24 bg-white text-[#2b2359] font-figtree">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-8 md:mb-12 text-center sm:text-left mx-auto sm:mx-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-semibold text-[#2b2359] tracking-tight leading-tight">
            News & Announcements
          </h2>
          <div className="hidden sm:block w-12 h-1 bg-[#f7f149] rounded-none mt-3 mb-4" />
          <p className="text-sm sm:text-lg text-[#2b2359]/80 font-medium mt-2 sm:mt-0">
            Stay updated with the latest news, academic notices, and upcoming campus events.
          </p>
        </div>

        {/* 1. FEATURED POST HIGHLIGHT (Only visible on "All" tab) */}
        {activeTab === 'All' && featuredPost && (
          <div className="mb-12 border border-slate-200 bg-slate-50/50 rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="relative lg:col-span-7 aspect-[16/9] lg:aspect-auto w-full min-h-[260px]">
              <Image
                src={featuredPost.imageSrc}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center rounded-none"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-[#18a8e5] text-white text-xs font-bold px-2.5 py-1 uppercase tracking-wider rounded-none">
                    Latest Highlight
                  </span>
                  <span className="text-xs text-[#2b2359]/60 font-semibold">
                    {featuredPost.date}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2b2359] leading-snug">
                  {featuredPost.title}
                </h3>
                <p className="text-sm text-[#2b2359]/80 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href={`/news/${featuredPost.slug}`}
                  className="inline-block bg-[#2b2359] hover:bg-[#18a8e5] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-none transition-colors"
                >
                  Read Full Notice
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* 2. CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-8 border-b border-slate-100 pb-4">
          {['All', 'Announcements', 'Academic', 'Events'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-none text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-[#18a8e5] text-white'
                  : 'bg-slate-100 text-[#2b2359]/70 hover:bg-slate-200 hover:text-[#2b2359]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3. NEWS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-none overflow-hidden flex flex-col justify-between hover:border-[#18a8e5]/50 transition-colors"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center rounded-none"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#2b2359]/60">
                    <span className="font-bold text-[#18a8e5] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#2b2359] leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2b2359]/70 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-5 pt-0">
                <Link
                  href={`/news/${item.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#2b2359] hover:text-[#18a8e5] transition-colors inline-flex items-center gap-1"
                >
                  Read More <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}