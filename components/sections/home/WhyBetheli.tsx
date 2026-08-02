'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion'

const features = [
  {
    id: 1,
    title: 'Quality Education',
    description: 'We provide excellent academic programs that help students achieve their full potential.',
    image: '/images/why-quality.jpeg', // Add your image path
  },
  {
    id: 2,
    title: 'Experienced Teachers',
    description: 'Our dedicated and caring teachers support every child\'s learning journey.',
    image: '/images/why-teachers.jpeg',
  },
  {
    id: 3,
    title: 'Safe Environment',
    description: 'We offer a secure, welcoming, and inclusive environment where children can thrive.',
    image: '/images/why-safe.jpeg',
  },
  {
    id: 4,
    title: 'Character Development',
    description: 'We instill values such as honesty, respect, responsibility, and leadership.',
    image: '/images/Development.webp',
  },
  {
    id: 5,
    title: 'Faith & Spiritual Growth',
    description: 'We encourage students to grow in faith and develop strong moral principles.',
    image: '/images/why-faith.jpeg',
  },
  {
    id: 6,
    title: 'Preparing Future Leaders',
    description: 'We equip students with the knowledge, confidence, and skills needed for the future.',
    image: '/images/thefuture-leader.webp',
  }
]

// Animation variants
const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
}

const titleVariants: Variants = {
  hidden: { y: 40, opacity: 0, filter: 'blur(4px)' },
  visible: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

export function WhyBetheli() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.1])

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: y2, opacity: opacity1 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
<motion.div
  variants={titleVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  className="max-w-3xl mx-auto mb-16 text-center sm:text-left sm:mx-0"
>
  <h2 
    className="font-normal text-[35px] leading-[42px] text-[rgb(34,34,34)] mb-4"
    style={{ fontWeight: 400 }}
  >
    Why <span className="text-primary">Betheli Schools</span>
  </h2>
  <div className="w-12 h-1 bg-primary rounded-full mx-auto sm:mx-0 mb-4 hidden sm:block" />
  <p className="text-gray-600 text-lg">
    Discover what makes Betheli Schools the perfect place for your child&apos;s education and growth.
  </p>
</motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />

              {/* Overlay Layers */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                {/* Title - always visible */}
                <h3 
                  className="font-normal text-[35px] leading-[42px] text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ fontWeight: 400 }}
                >
                  {feature.title}
                </h3>

                {/* Description - visible on hover */}
                <motion.div
                  className="overflow-hidden"
                >
                  <div className="h-px w-12 bg-white/50 mb-3 group-hover:w-full transition-all duration-500" />
                  <p className="text-white/90 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 clip-corner opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        
      </div>

      {/* Custom CSS for clip-path corner */}
      <style jsx>{`
        .clip-corner {
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
      `}</style>
    </section>
  )
}