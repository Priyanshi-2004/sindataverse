import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "@/data/projects";

export function FeaturedProjects() {
  const [open, setOpen] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
          // hand-picked
        </div>
        <h2 className="mt-2 text-4xl font-bold md:text-5xl">
          Featured <span className="text-gradient">projects</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Personal favorites — most polished, most insight-dense, most fun to build.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpen} index={i} />
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
