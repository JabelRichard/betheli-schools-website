import React from 'react'

export default function ContactFormSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT: Contact Form */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-10 rounded-none shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
          <p className="text-sm text-[#2b2359]/70 mb-8">
            Fill out the form below and our administrative team will get back to you shortly.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
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
                  className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#18a8e5] rounded-none transition-colors"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="Admissions">Admissions Inquiry</option>
                  <option value="General">General Questions</option>
                  <option value="Academics">Academic Programs</option>
                  <option value="Other">Other Concerns</option>
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
                placeholder="How can we help you?"
                className="w-full bg-white border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:border-[#18a8e5] rounded-none transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#18a8e5] hover:bg-[#1596ce] text-white font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors rounded-none"
            >
              Send Message
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

            {/* Three Phone Numbers */}
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

            {/* Two Email Addresses */}
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
          </div>
        </div>

      </div>
    </section>
  )
}