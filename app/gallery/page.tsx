
import { PageHero } from "@/components/layout/PageHero";
import { AdmissionsGallery } from "@/components/sections/gallery/Gallerybetheli";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section (~55-60vh, centered title) */}
      <PageHero pageKey="gallery" />
      <AdmissionsGallery />
      
    </main>
  );
}