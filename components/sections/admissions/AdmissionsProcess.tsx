'use client'

import Link from 'next/link'

export function AdmissionsProcess() {
  return (
    <section className="py-16 md:py-24 bg-white text-[#2b2359] font-figtree">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: How to Apply ================= */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[35px] font-semibold text-[#2b2359] tracking-tight text-center sm:text-left">
                How to apply
              </h2>
              {/* Secondary Yellow Accent Line */}
              <div className="hidden sm:block w-12 h-1 bg-[#f7f149] rounded-full mt-3 mb-8" />
            </div>

            {/* Logical Step-by-Step Flow */}
            <ol className="space-y-8 text-base md:text-lg text-[#2b2359]/90 leading-relaxed">
              
              {/* Step 1: Download & Complete */}
              <li className="flex items-start gap-4">
                <span className="text-3xl font-black text-[#18a8e5] leading-none shrink-0">
                  1.
                </span>
                <div>
                  <h3 className="font-bold text-[#2b2359] text-xl mb-1">
                    Download & Fill Out the Form
                  </h3>
                  <p>
                    Start by downloading our official{' '}
                    <a
                      href="/forms/application-form.pdf"
                      download
                      className="text-[#18a8e5] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                    >
                      Application Form
                    </a>
                    . Print and complete all required sections carefully with accurate student details.
                  </p>
                </div>
              </li>

              {/* Step 2: Prepare Documents */}
              <li className="flex items-start gap-4">
                <span className="text-3xl font-black text-[#18a8e5] leading-none shrink-0">
                  2.
                </span>
                <div className="space-y-4 w-full">
                  <h3 className="font-bold text-[#2b2359] text-xl mb-1">
                    Prepare Required Documents
                  </h3>
                  <p className="text-base text-[#2b2359]/80">
                    Gather all required attachments based on your child's enrollment category:
                  </p>

                  {/* Document Checklists */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {/* New Students */}
                    <div className="bg-[#18a8e5]/5 p-4 rounded border border-[#18a8e5]/20">
                      <h4 className="font-bold text-[#2b2359] text-base mb-2">New Students</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[#2b2359]/80">
                        <li>Birth Certificate</li>
                        <li>Passport-size Photos</li>
                        <li>Parent/Guardian ID</li>
                      </ul>
                      <p className="text-xs text-[#2b2359]/60 italic mt-3">
                        * No entrance interview required.
                      </p>
                    </div>

                    {/* Transfer Students */}
                    <div className="bg-[#f7f149]/20 p-4 rounded border border-[#f7f149]">
                      <h4 className="font-bold text-[#2b2359] text-base mb-2">Transfer Students</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-[#2b2359]/80">
                        <li>Previous School Reports</li>
                        <li>Official Transfer Letter</li>
                        <li>Passport-size Photos</li>
                        <li>Parent/Guardian ID</li>
                      </ul>
                      <p className="text-xs text-[#2b2359]/60 italic mt-3">
                        * Interview scheduled after submission.
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              {/* Step 3: Application Fee & Submission */}
              <li className="flex items-start gap-4">
                <span className="text-3xl font-black text-[#18a8e5] leading-none shrink-0">
                  3.
                </span>
                <div>
                  <h3 className="font-bold text-[#2b2359] text-xl mb-1">
                    Submit Application & Administration Fee
                  </h3>
                  <p>
                    Submit your completed application form along with all required documents directly to the school administration office. The non-refundable administration fee should be paid at the finance office upon submission.
                  </p>
                </div>
              </li>

            </ol>
          </div>

          {/* ================= RIGHT COLUMN: Important Information Sidebar ================= */}
          <div className="lg:col-span-5">
            <div className="bg-[#f7f149] text-[#2b2359] rounded-sm overflow-hidden shadow-sm">
              {/* Top Banner Block */}
              <div className="p-8 md:p-10 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-center text-[#2b2359]">
                  Important Application Information
                </h3>

                <div className="space-y-5 text-base leading-relaxed text-[#2b2359]/90 font-medium">
                  <p>
                    Before submitting your application, please ensure that all required documents are complete and accurate. Providing correct information helps our Admissions Office review your application efficiently.
                  </p>
                  <p>
                    Applications should be submitted together with all required documents to the school office. Our team will carefully review each application.
                  </p>
                  <p>
                    For new students, no interview is required. Transfer students will be scheduled for an interview after application submission.
                  </p>
                </div>
              </div>

              {/* Bottom Light Yellow Box for Contact CTA */}
              <div className="bg-[#fffde6] p-8 space-y-6 border-t border-[#2b2359]/10">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-[#18a8e5]">?</span>
                  <p className="text-sm font-medium text-[#2b2359]">
                    For questions or support during the application process, feel free to contact our Admissions Team.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#2b2359] hover:bg-[#18a8e5] text-white font-bold py-3.5 px-6 rounded transition-colors duration-200"
                >
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}