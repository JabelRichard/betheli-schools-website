'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'

interface WhatsAppButtonProps {
  phoneNumber?: string // Format: Country code without '+' or spaces, e.g. '255700000001'
  message?: string
}

export function WhatsAppButton({
  phoneNumber = '255757971494',
  message = 'Hello Betheli Schools, I would like to make an inquiry.'
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group md:hidden">
      {/* Hover Tooltip */}
      <span className="mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:inline-block">
        Chat with us on WhatsApp
      </span>

      {/* Pulsing Backing Ring */}
      <div className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

      {/* Animated Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <FaWhatsapp className="w-8 h-8" />
      </motion.a>
    </div>
  )
}