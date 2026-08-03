// data/news.ts

export interface NewsItem {
  id: string
  slug: string
  title: string
  date: string
  category: 'Announcements' | 'Academic' | 'Events'
  excerpt: string
  content: string[] // Array of paragraphs for the full article
  imageSrc: string
  featured?: boolean
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    slug: 'admissions-open-2026-2027',
    title: 'Admissions Open for 2026–2027 Academic Year',
    date: 'August 1, 2026',
    category: 'Announcements',
    excerpt: 'Betheli Schools is now accepting applications for Nursery through Standard 7. Download our application forms online or visit the campus office.',
    content: [
      'We are delighted to announce that admissions for the upcoming 2026–2027 academic year are officially open. Betheli Schools continues to offer quality education focused on academic excellence, strong moral values, and student growth.',
      'Parents and guardians interested in enrolling their children for Nursery, Pre-Primary, or Primary levels (Standard 1 to 7) are encouraged to submit applications early, as available places are limited.',
      'Application packages can be picked up directly at the main campus administration office during regular business hours (Monday to Friday, 8:00 AM – 4:00 PM) or requested via our official website contact channels.'
    ],
    imageSrc: '/images/large-hero-mission.jpg',
    featured: true,
  },
  // Additional news items...
]