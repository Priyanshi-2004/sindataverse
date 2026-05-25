import { motion } from "framer-motion";
import { TbBrandGithub, TbExternalLink, TbBolt } from "react-icons/tb";
import type { Project } from "@/data/projects";

const DIFF_COLORS: Record<string, string> = {
  Beginner: "from-emerald-400 to-teal-500",
  Intermediate: "from-amber-400 to-orange-500",
  Advanced: "from-fuchsia-400 to-rose-500",
};

interface Props {
  project: Project;
  onOpen: (p: Project) => void;
  index?: number;
}

export function ProjectCard({ project, onOpen, index = 0 }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      whileHover={{ y: -6 }}
      onClick={() => onOpen(project)}
      className="group relative cursor-pointer overflow-hidden rounded-2xl glass border border-white/5 transition-all hover:border-white/15"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.7 0.22 265 / 0.18), transparent 50%)",
        }}
      />

      {/* image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {project.trending && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
            <TbBolt className="h-3 w-3" /> Trending
          </div>
        )}
        <div
          className={`absolute right-3 top-3 rounded-full bg-gradient-to-r ${DIFF_COLORS[project.difficulty]} px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background`}
        >
          {project.difficulty}
        </div>
      </div>

      {/* body */}
      <div className="relative space-y-3 p-5">
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--neon-cyan)]">
          {project.category}
        </div>
        <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-gradient">
          {project.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium transition-colors hover:bg-white/10"
            >
              <TbBrandGithub className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-3 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.02]"
            >
              <TbExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
