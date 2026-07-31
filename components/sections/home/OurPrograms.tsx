'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion'

import { ArrowRight } from 'lucide-react'




const programs = [
  {
    id: 1,
    title: 'Pre-School',
    subtitle: 'Building Strong Foundations',
    description: 'Our pre-school program provides a caring and engaging environment where young learners develop essential skills through exploration, creativity, play-based learning, and positive interaction.',
    image: '/images/Pre-school.jpeg',
    // Uses Primary Blue (#18a8e5) gradient overlay
    overlay: 'from-[#18a8e5]/90 via-[#18a8e5]/80 to-[#2b2359]/95',
    link: '/programs/pre-school'
  },
  {
    id: 2,
    title: 'Primary School',
    subtitle: 'Growing Knowledge and Character',
    description: 'Our primary education program focuses on academic excellence, critical thinking, and personal development while encouraging students to become confident, responsible, and lifelong learners.',
    image: '/images/why-teachers.jpeg',
    // Uses Deep Brand Navy (#2b2359) gradient overlay
    overlay: 'from-[#2b2359]/90 via-[#2b2359]/80 to-[#000000]/95',
    link: '/programs/primary-school'
  },
  {
    id: 3,
    title: 'Enrichment Activities',
    subtitle: 'Beyond the Classroom',
    description: 'We offer enriching activities that help students discover their talents, develop creativity, build teamwork skills, and explore new interests beyond academics.',
    image: '/images/why-safe.jpeg',
    // Uses Accent Secondary (#f7f149) with contrast navy base
    overlay: 'from-[#f7f149]/80 via-[#18a8e5]/85 to-[#2b2359]/95',
    link: '/programs/enrichment'
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
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

export function OurPrograms() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden text-[#2b2359]"
    >
      {/* Background decorative elements using brand colors */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-96 h-96 bg-[#18a8e5]/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#f7f149]/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto mb-16 text-center sm:text-left sm:mx-0"
        >
          
          
          <h2 className="font-normal text-[35px] leading-[42px] text-[#2b2359] mb-3">
            Our <span className="text-[#18a8e5]">Programs</span>
          </h2>
          
          <div className="w-12 h-1 bg-[#18a8e5] rounded-full mx-auto sm:mx-0 mb-4 hidden sm:block" />
          
          <p className="text-[#2b2359]/80 text-lg">
            Every child has the potential to shine. We're here to guide, encourage, and support them every step of the way.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link href={program.link} className="block h-full">
                <div className="relative h-[420px] md:h-[300px] rounded-0xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-[#2b2359]">
                  
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  
                  {/* Base dark shadow gradient for permanent baseline readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent z-10" />

                  {/* Brand Color Overlay (expands smoothly on hover) */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.overlay} opacity-40 group-hover:opacity-95 transition-opacity duration-500 z-10`} />
                  
                  {/* Texture pattern overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px] z-10 pointer-events-none" />

                  {/* Card Content Layer - Pinned to Bottom */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-6 md:p-8 text-[#ffffff]">
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#ffffff] drop-shadow-sm">
                          {program.title}
                        </h3>
                        <p className="text-[#ffffff]/90 text-sm font-medium mt-1">
                          {program.subtitle}
                        </p>
                      </div>

                      {/* Expanding Description on Card Hover */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <div className="pt-2 border-t border-[#ffffff]/30 mt-3">
                            <p className="text-[#ffffff]/95 text-sm leading-relaxed font-normal">
                              {program.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Learn More Action Button */}
                      <div className="flex items-center gap-2 text-[#ffffff] font-semibold text-sm pt-1">
                        <span className="group-hover:text-[#f7f149] transition-colors duration-300">Learn More</span>
                        <ArrowRight className="w-4 h-4 text-[#ffffff] group-hover:text-[#f7f149] group-hover:translate-x-1.5 transition-all duration-300" />
                      </div>

                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  )
}