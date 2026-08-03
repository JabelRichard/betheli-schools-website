import React from 'react'

export default function MapSection() {
  return (
    <section className="w-full border-t border-slate-200">
      <div className="bg-slate-100 py-4 px-6 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg text-[#2b2359]">Find Us On The Map</h3>
            <p className="text-xs text-[#2b2359]/70">
              Betheli English Medium Pre & Primary School
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/pZyU4v3868FmNLgt9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold bg-[#2b2359] text-white px-4 py-2 hover:bg-[#18a8e5] transition-colors rounded-none w-fit"
          >
            Open in Google Maps App &rarr;
          </a>
        </div>
      </div>

      {/* Embedded Map Container */}
      <div className="w-full h-[400px] md:h-[500px] bg-slate-200 relative">
        <iframe
          title="Betheli English Medium Pre & Primary School Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.6974690627426!2d32.96314597353176!3d-2.6043054973736686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19ce878a9286d8d3%3A0xe23c1b613d5e5cfd!2sBetheli%20English%20Medium%20Pre%20%26%20Primary%20school!5e0!3m2!1sen!2stz!4v1785774406731!5m2!1sen!2stz"
          className="w-full h-full border-0 rounded-none grayscale hover:grayscale-0 transition-all duration-300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  )
}