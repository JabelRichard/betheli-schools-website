import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { newsData } from '@/data/news'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function NewsArticlePage({ params }: PageProps) {
  // 1. Await params to extract the slug string safely in Next.js 15
  const { slug } = await params

  // 2. Match the slug against newsData
  const post = newsData.find((item) => item.slug === slug)

  // 3. If no match is found, trigger 404
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white py-12 md:py-20 text-[#2b2359] font-figtree">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#18a8e5] hover:underline mb-8"
        >
          &larr; Back to News
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <span className="bg-[#18a8e5] text-white font-bold px-2.5 py-1 uppercase tracking-wider rounded-none">
              {post.category}
            </span>
            <span className="text-[#2b2359]/60 font-semibold">{post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[35px] font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full bg-slate-100 rounded-none overflow-hidden mb-10">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover object-center rounded-none"
            priority
          />
        </div>

        {/* Dynamic Article Content */}
        <div className="prose prose-slate max-w-none text-base sm:text-lg text-[#2b2359]/85 leading-relaxed space-y-6">
          <p className="font-semibold text-lg sm:text-xl text-[#2b2359]">
            {post.excerpt}
          </p>

          {/* Render all content paragraphs from array */}
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </main>
  )
}