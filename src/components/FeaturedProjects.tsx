import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { getDBProjects } from "../lib/actions/dbActions";

export function FeaturedProjects() {
  const [open, setOpen] = useState<any | null>(null);
  const [projectsList, setProjectsList] = useState<any[]>([]);

  useEffect(() => {
    getDBProjects()
      .then((data) => setProjectsList(data))
      .catch((err) => console.error("Failed to load featured projects:", err));
  }, []);

  const featured = projectsList.filter((p) => p.featured).slice(0, 3);

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
          <ProjectCard key={p.id || p._id || i} project={p} onOpen={setOpen} index={i} />
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}

