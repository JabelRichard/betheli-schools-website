'use client'

import { useRef, ElementType } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import { motion, useInView, Variants } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  type LucideIcon
} from 'lucide-react'

interface ContactItem {
  icon: LucideIcon
  label: string
  href?: string
}

interface SocialItem {
  icon: ElementType
  label: string
  href: string
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' }
]

const programs = [
  { label: 'Pre-School', href: '/programs#preschool' },
  { label: 'Primary School', href: '/programs#primary' },
  { label: 'Enrichment Activities', href: '/programs#enrichment' }
]

const contactInfo: ContactItem[] = [
  { icon: Phone, label: '+254 700 123 456', href: 'tel:+254700123456' },
  { icon: Mail, label: 'info@bethelischools.sc.tz', href: 'mailto:info@bethelischools.sc.tz' },
  { icon: MapPin, label: 'Mwanza, Tanzania', href: '#' },
  { icon: Clock, label: 'Mon – Fri: 7:30 AM – 5:00 PM' }
]

// Updated with react-icons components
const socialLinks: SocialItem[] = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com' }
]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
      staggerChildren: 0.08
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })

  return (
    <footer
      ref={footerRef}
      className="bg-slate-950 text-white/80 border-t border-white/5 relative overflow-hidden"
    >
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative"
      >
        {/* Top Section: Logo + Description */}
        <motion.div variants={itemVariants} className="mb-10 max-w-lg">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/10 overflow-hidden transition-all duration-300 group-hover:border-primary/50 shadow-lg">
              <Image
                src="/images/LOGO.jpg"
                alt="Betheli Schools Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-white block leading-tight">
                Betheli Schools
              </span>
              <span className="text-sm text-white/60 tracking-wide">
                Knowledge • Character • Faith
              </span>
            </div>
          </Link>
          <p className="mt-4 text-white/60 text-[15px] leading-relaxed max-w-sm">
            Nurturing young minds through quality education, strong values, and a supportive learning environment where every child can thrive.
          </p>
        </motion.div>

        {/* Four-Column Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-[15px] flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Programs */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Programs
            </h3>
            <ul className="space-y-2.5">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-white/60 hover:text-primary transition-colors duration-200 text-[15px] flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {program.label}
                    </span>
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <li key={index}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors duration-200 text-[15px] group"
                      >
                        <IconComponent className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                        <span>{item.label}</span>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 text-white/60 text-[15px]">
                        <IconComponent className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                        <span>{item.label}</span>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Follow Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/30 flex items-center justify-center text-white/60 hover:text-primary transition-all duration-300 group"
                  >
                    <SocialIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                )
              })}
            </div>
            <p className="mt-4 text-white/40 text-sm">
              Join our community online
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mt-10 pt-6 border-t border-white/10"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
        >
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Betheli Schools. All rights reserved.
          </p>
          <p className="text-white/30 text-sm font-light italic">
            Building Knowledge, Character, and Faith for a Brighter Future.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}