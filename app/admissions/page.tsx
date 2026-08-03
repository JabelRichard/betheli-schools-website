

import { PageHero } from "@/components/layout/PageHero";
import { AdmissionsOverview } from "@/components/sections/admissions/AdmissionsOverview";
import { AdmissionsProcess } from "@/components/sections/admissions/AdmissionsProcess";
import { SchoolFees } from "@/components/sections/admissions/SchoolFees";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section (~55-60vh, centered title) */}
      <PageHero pageKey="admissions" />
      <AdmissionsOverview />
      <AdmissionsProcess />
      <SchoolFees />
    </main>
  );
}