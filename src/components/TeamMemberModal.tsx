import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TbX,
  TbUser,
  TbExternalLink,
  TbChartBar,
  TbSparkles,
} from "react-icons/tb";
import { teamMembers } from "../data/team";

interface Props {
  memberId: number;
  onClose: () => void;
}

export function TeamMemberModal({ memberId, onClose }: Props) {
  const member = teamMembers.find((m) => m.id === memberId);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!member) return null;

  const serial = `#${String(member.id).padStart(3, "0")}`;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-[10000] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{ background: "rgba(2,4,14,0.85)", backdropFilter: "blur(12px)" }}
      >
        {/* Modal panel */}
        <motion.div
          key="modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10"
          style={{
            background:
              "linear-gradient(160deg, rgba(8,12,32,0.98) 0%, rgba(4,8,22,0.98) 100%)",
            boxShadow:
              "0 0 0 1px rgba(0,245,255,0.12), 0 32px 80px -12px rgba(0,0,0,0.9), 0 0 60px -20px rgba(0,245,255,0.2)",
          }}
        >
          {/* Glow accent top */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,245,255,0.6) 30%, rgba(150,0,255,0.6) 70%, transparent)",
            }}
          />

          {/* ── Header ── */}
          <div className="relative flex items-start justify-between p-6 pb-4">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div
                className="relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(150,0,255,0.15))",
                  boxShadow: "0 0 24px -8px rgba(0,245,255,0.4)",
                }}
              >
                <TbUser className="h-8 w-8 text-cyan-400" />
                {/* Pinging dot */}
                <span
                  className="absolute -right-1 -top-1 flex h-3.5 w-3.5"
                  aria-hidden
                >
                  <span
                    className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                    style={{
                      background: "rgba(0,245,255,0.8)",
                      animationDuration: "2s",
                    }}
                  />
                  <span
                    className="relative inline-flex h-3.5 w-3.5 rounded-full border border-black"
                    style={{
                      background: "#00f5ff",
                      boxShadow: "0 0 8px rgba(0,245,255,1)",
                    }}
                  />
                </span>
              </div>

              <div>
                <div
                  className="mb-1 font-mono text-[10px] font-bold tracking-[0.2em]"
                  style={{ color: "rgba(0,245,255,0.5)" }}
                >
                  BUILDER {serial}
                </div>
                <h2 className="text-xl font-bold text-white">{member.name}</h2>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-white/40">
                  <TbChartBar className="h-3.5 w-3.5 text-cyan-400/60" />
                  <span>
                    {member.projects.length} project
                    {member.projects.length !== 1 ? "s" : ""} contributed
                  </span>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white/80"
              aria-label="Close modal"
            >
              <TbX className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Divider */}
          <div
            className="mx-6 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,245,255,0.2), transparent)",
            }}
          />

          {/* ── Projects ── */}
          <div className="p-6 pt-5">
            <div className="mb-4 flex items-center gap-2">
              <TbSparkles className="h-4 w-4 text-cyan-400/70" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Projects
              </span>
            </div>

            <div className="space-y-3">
              {member.projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 p-4 transition-colors hover:border-cyan-400/30"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      boxShadow: "inset 0 0 30px -10px rgba(0,245,255,0.08)",
                    }}
                  />

                  {/* Category badge */}
                  <span
                    className="mb-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(0,245,255,0.08)",
                      color: "rgba(0,245,255,0.8)",
                      border: "1px solid rgba(0,245,255,0.2)",
                    }}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-sm font-semibold text-white/90">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/45">
                    {project.description}
                  </p>

                  {/* Visit button */}
                  {project.link && project.link !== "#" ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-all"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(0,180,255,0.1))",
                        border: "1px solid rgba(0,245,255,0.3)",
                        color: "#00f5ff",
                        boxShadow: "0 0 12px -4px rgba(0,245,255,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 0 22px -4px rgba(0,245,255,0.6)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          "0 0 12px -4px rgba(0,245,255,0.3)";
                      }}
                    >
                      <TbExternalLink className="h-3.5 w-3.5" />
                      Visit Project
                    </a>
                  ) : (
                    <span
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Footer ── */}
          <div
            className="flex items-center justify-between px-6 py-4 text-[11px] text-white/25"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span>DataVerse · The Builders</span>
            <button
              onClick={onClose}
              className="transition-colors hover:text-white/50"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
