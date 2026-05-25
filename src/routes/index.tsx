import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { ProjectGrid } from "@/components/ProjectGrid";
import { AITools } from "@/components/AITools";
import { TeamSection } from "@/components/TeamSection";
import { ConnectPage } from "@/components/ConnectPage";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DataVerse — A universe of Data Analytics, BI & ML projects" },
      {
        name: "description",
        content:
          "Explore Power BI, Tableau, SQL, Python and Machine Learning projects in a futuristic, animated portfolio universe.",
      },
      { property: "og:title", content: "DataVerse — Data Analytics & ML showcase" },
      {
        property: "og:description",
        content:
          "A futuristic showcase universe for Data Analytics, Dashboards, AI and Data Science projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategory = (c: string | null) => {
    setActiveCategory(c);
    if (c) {
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="relative min-h-screen">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Categories active={activeCategory} onSelect={handleCategory} />
        <ProjectGrid activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <AITools />
        {/* ── Team Section ── */}
        <TeamSection />
        {/* ── Connect + Officials Section ── */}
        <ConnectPage />
      </main>
      <Footer />
    </div>
  );
}
