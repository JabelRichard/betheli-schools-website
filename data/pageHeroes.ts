export interface PageHeroConfig {
  title: string
  imageSrc?: string
  alt?: string
}

export const pageHeroes: Record<string, PageHeroConfig> = {
  programs: {
    title: 'PROGRAMS',
    imageSrc: '/images/program-hero.webp',
    alt: 'Programs Hero',
  },
  facilities: {
    title: 'FACILITIES',
    imageSrc: '/images/large-hero-mission.jpg',
    alt: 'Facilities Hero',
  },
  about: {
    title: 'ABOUT US',
    imageSrc: '/images/about-us-hero.jpg',
    alt: 'About Us Hero',
  },
  admissions: {
    title: 'ADMISSIONS',
    imageSrc: '/images/large-hero-mission.jpg',
    alt: 'Admissions Hero',
  },
  gallery: {
    title: 'GALLERY',
    imageSrc: '/images/gallery-hero.webp',
    alt: 'Gallery Hero',
  },
  news: {
    title: 'NEWS',
    imageSrc: '/images/large-hero-mission.jpg',
    alt: 'News Hero',
  },
  contact: {
    title: 'GET IN TOUCH',
    imageSrc: '/images/large-hero-mission.jpg',
    alt: 'Contact Hero',
  },
}