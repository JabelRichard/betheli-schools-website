import { PageHero } from "@/components/layout/PageHero";
import { NewsGrid } from "@/components/sections/news/NewsGrid";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
     <PageHero pageKey="news" />
      <NewsGrid />
    </main>
  );
}