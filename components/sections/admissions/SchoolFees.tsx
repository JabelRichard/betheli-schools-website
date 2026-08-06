'use client'

import Link from 'next/link'

export function SchoolFees() {
  // Sample fee structure - update amounts as needed
  const tuitionData = [
    { level: 'Nursery / Pre-School', dayTuition: 'TZS 1,200,000', boardingTuition: 'N/A' },
    { level: 'Standard 1 – Standard 3', dayTuition: 'TZS 1,500,000', boardingTuition: 'TZS 2,800,000' },
    { level: 'Standard 4 – Standard 7', dayTuition: 'TZS 1,800,000', boardingTuition: 'TZS 3,200,000' },
  ]

  return (
    <section className="py-16 md:py-10 bg-slate-50/60 text-[#2b2359] font-figtree">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[35px] font-semibold text-[#2b2359] tracking-tight">
            Investing in Your Child’s Future
          </h2>
          <div className="hidden sm:block w-12 h-1 bg-[#f7f149] rounded-full mt-3 mb-4" />
          
        </div>

        
        {/* 2. Additional Services Cards (Boarding & Transport) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Boarding Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-[#18a8e5]/10 text-[#18a8e5] rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-[#2b2359]">Boarding Services</h3>
              </div>
              <p className="text-sm md:text-base text-[#2b2359]/80 leading-relaxed mb-4">
                Available for Standard 1 to Standard 7. Boarding fees cover full accommodation, three balanced daily meals, evening study supervision, and medical care support on campus.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-[#2b2359]/60 font-medium">
              * Included in the Boarding Tuition rate listed above.
            </div>
          </div>

          {/* School Transport Card */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 bg-[#f7f149] text-[#2b2359] rounded-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-[#2b2359]">School Bus Transport</h3>
              </div>
              <p className="text-sm md:text-base text-[#2b2359]/80 leading-relaxed mb-4">
                Safe and reliable door-to-door or central pick-up transport service is available for day students across designated routes. Transport fees vary depending on distance/location zone.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-[#2b2359]/60 font-medium">
              * Transport fees are billed separately per installment/term.
            </div>
          </div>

        </div>

        {/* 3. Payment Notice Box */}
        <div className="bg-[#f7f149]/30 border border-[#f7f149] p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-[#2b2359]">Need detailed fee schedules or payment plan assistance?</h4>
            <p className="text-sm text-[#2b2359]/80">
              Our Finance Office can provide flexible term payment options and route-specific transport fees.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-[#2b2359] hover:bg-[#18a8e5] text-white font-bold py-3 px-6 rounded transition-colors text-sm"
          >
            Contact Finance Office
          </Link>
        </div>

      </div>
    </section>
  )
}