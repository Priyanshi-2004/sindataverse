import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { TbSearch, TbFilter } from "react-icons/tb";
import { projects, type Project, type Difficulty } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

const DIFFICULTIES: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

interface Props {
  activeCategory: string | null;
  onCategoryChange: (c: string | null) => void;
}

export function ProjectGrid({ activeCategory, onCategoryChange }: Props) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [open, setOpen] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (difficulty && p.difficulty !== difficulty) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [query, difficulty, activeCategory]);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
            // showcase
          </div>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            All <span className="text-gradient">projects</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Search across every project, filter by stack or difficulty.
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          {filtered.length} of {projects.length} shown
        </div>
      </div>

      {/* controls */}
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="glass relative flex flex-1 items-center rounded-2xl px-4">
          <TbSearch className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tech, categories…"
            className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              clear
            </button>
          )}
        </div>

        <div className="glass flex items-center gap-1 rounded-2xl p-1.5">
          <TbFilter className="mx-2 h-4 w-4 text-muted-foreground" />
          <button
            onClick={() => setDifficulty(null)}
            className={`rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
              difficulty === null
                ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(difficulty === d ? null : d)}
              className={`rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                difficulty === d
                  ? "bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* active filter chips */}
      {(activeCategory || difficulty) && (
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-muted-foreground">Active filters:</span>
          {activeCategory && (
            <button
              onClick={() => onCategoryChange(null)}
              className="rounded-full border border-[var(--neon-blue)]/40 bg-[var(--neon-blue)]/10 px-3 py-1 text-[var(--neon-cyan)] hover:bg-[var(--neon-blue)]/20"
            >
              {activeCategory} ✕
            </button>
          )}
          {difficulty && (
            <button
              onClick={() => setDifficulty(null)}
              className="rounded-full border border-[var(--neon-purple)]/40 bg-[var(--neon-purple)]/10 px-3 py-1 text-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/20"
            >
              {difficulty} ✕
            </button>
          )}
        </div>
      )}

      {/* grid */}
      {filtered.length === 0 ? (
        <div className="glass rounded-3xl py-20 text-center">
          <p className="text-lg font-medium">No projects match those filters</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try clearing the search or picking a different category.
          </p>
        </div>
      ) : (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} onOpen={setOpen} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
