'use client'

import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error'
    message: string
  }>({ type: 'idle', message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.')
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      })

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setStatus({ type: 'error', message: errorMessage })
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT: Contact Form */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-none shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
          <p className="text-sm text-[#2b2359]/70 mb-8">
            Fill out the form below and our administrative team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#18a8e5] rounded-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#18a8e5] rounded-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+255 ..."
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#18a8e5] rounded-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#18a8e5] rounded-none transition-colors"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="Admissions Inquiry">Admissions Inquiry</option>
                  <option value="General Questions">General Questions</option>
                  <option value="Academic Programs">Academic Programs</option>
                  <option value="Other Concerns">Other Concerns</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#18a8e5] rounded-none transition-colors resize-none"
              ></textarea>
            </div>

            {status.message && (
              <div
                className={`p-4 text-sm ${
                  status.type === 'success'
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                    : status.type === 'error'
                    ? 'bg-rose-50 border border-rose-200 text-rose-800'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="w-full sm:w-auto bg-[#18a8e5] hover:bg-[#1596ce] text-white font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors rounded-none disabled:opacity-50 cursor-pointer"
            >
              {status.type === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* RIGHT: Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-sm text-[#2b2359]/75 leading-relaxed">
              We welcome visits from prospective parents and guardians. Reach out directly via our phone lines or official emails.
            </p>
          </div>

          <hr className="border-slate-200" />

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2b2359] text-white p-3 shrink-0 rounded-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#18a8e5] mb-1">Campus Location</h3>
                <p className="text-sm font-semibold">Betheli Schools Campus</p>
                <p className="text-sm text-[#2b2359]/70">Mwanza, Tanzania</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2b2359] text-white p-3 shrink-0 rounded-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#18a8e5] mb-1">Phone Numbers</h3>
                <p className="text-sm font-medium">+255 700 000 001 <span className="text-xs text-[#2b2359]/50">(Main Office)</span></p>
                <p className="text-sm font-medium">+255 700 000 002 <span className="text-xs text-[#2b2359]/50">(Admissions)</span></p>
                <p className="text-sm font-medium">+255 700 000 003 <span className="text-xs text-[#2b2359]/50">(Headmaster)</span></p>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2b2359] text-white p-3 shrink-0 rounded-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#18a8e5] mb-1">Email Addresses</h3>
                <p className="text-sm font-medium">info@bethelischools.sc.tz</p>
                <p className="text-sm font-medium">admissions@bethelischools.sc.tz</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2b2359] text-white p-3 shrink-0 rounded-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#18a8e5] mb-1">Office Hours</h3>
                <p className="text-sm font-semibold">Monday – Friday: <span className="font-normal text-[#2b2359]/80">8:00 AM – 4:30 PM</span></p>
                <p className="text-sm font-semibold">Saturday: <span className="font-normal text-[#2b2359]/80">9:00 AM – 1:00 PM</span></p>
                <p className="text-sm font-semibold">Sunday & Holidays: <span className="font-normal text-[#2b2359]/80">Closed</span></p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-start gap-4 pt-2">
              <div className="bg-[#2b2359] text-white p-3 shrink-0 rounded-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#18a8e5] mb-2">Connect With Us</h3>
                <div className="flex gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 bg-slate-100 hover:bg-[#18a8e5] text-[#2b2359] hover:text-white flex items-center justify-center transition-colors border border-slate-200"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 bg-slate-100 hover:bg-[#18a8e5] text-[#2b2359] hover:text-white flex items-center justify-center transition-colors border border-slate-200"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-9 h-9 bg-slate-100 hover:bg-[#18a8e5] text-[#2b2359] hover:text-white flex items-center justify-center transition-colors border border-slate-200"
                  >
                    <FaYoutube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="w-9 h-9 bg-slate-100 hover:bg-[#18a8e5] text-[#2b2359] hover:text-white flex items-center justify-center transition-colors border border-slate-200"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}