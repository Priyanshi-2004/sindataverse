import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "@/data/projects";
import { TbTrendingUp } from "react-icons/tb";

export function TrendingDashboards() {
  const [open, setOpen] = useState<Project | null>(null);
  const trending = projects.filter((p) => p.trending);

  return (
    <section id="trending" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex items-end justify-between"
      >
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
            <TbTrendingUp className="h-3.5 w-3.5" /> // trending now
          </div>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Trending <span className="text-gradient">dashboards</span>
          </h2>
        </div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trending.map((p, i) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpen} index={i} />
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
