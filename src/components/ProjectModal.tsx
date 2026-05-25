import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { TbX, TbBrandGithub, TbExternalLink, TbCheck } from "react-icons/tb";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/70 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", damping: 24, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/60 backdrop-blur transition-colors hover:bg-background"
              aria-label="Close"
            >
              <TbX className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
                  {project.category} · {project.difficulty}
                </div>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">{project.title}</h2>
              </div>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              <p className="leading-relaxed text-muted-foreground">
                {project.longDescription ?? project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--neon-cyan)]">
                    Highlights
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <TbCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--neon-cyan)]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--neon-cyan)]">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium hover:bg-white/10"
                  >
                    <TbBrandGithub className="h-4 w-4" /> View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-5 py-2.5 text-sm font-medium text-background glow-blue transition-transform hover:scale-[1.02]"
                  >
                    <TbExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
