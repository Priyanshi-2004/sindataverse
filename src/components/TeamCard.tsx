import { motion } from "framer-motion";
import { TbUser, TbChevronRight } from "react-icons/tb";
import type { TeamMember } from "../data/team";

interface Props {
  member: any;
  index: number;
  onClick: () => void;
}

export function TeamCard({ member, index, onClick }: Props) {
  const displayId = member.id !== undefined ? member.id : (index + 1);
  const serial = `#${String(displayId).padStart(3, "0")}`;


  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="team-card group relative w-full cursor-pointer rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-left backdrop-blur-sm transition-colors hover:border-cyan-400/40 hover:bg-white/[0.06]"
      style={{ "--i": index } as React.CSSProperties}
    >
      {/* Animated border glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 0 24px -4px rgba(0,245,255,0.35), inset 0 0 24px -8px rgba(0,245,255,0.08)",
        }}
      />

      {/* Serial number */}
      <div className="mb-3 flex items-center justify-between">
        <span
          className="font-mono text-[11px] font-bold tracking-widest"
          style={{ color: "rgba(0,245,255,0.55)" }}
        >
          {serial}
        </span>
        {/* Glowing cyan dot */}
        <span
          className="relative flex h-2.5 w-2.5 items-center justify-center"
          aria-hidden
        >
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ background: "rgba(0,245,255,0.7)", animationDuration: "2.2s" }}
          />
          <span
            className="relative inline-flex h-2 w-2 rounded-full"
            style={{
              background: "#00f5ff",
              boxShadow: "0 0 8px 2px rgba(0,245,255,0.9)",
            }}
          />
        </span>
      </div>

      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,245,255,0.12), rgba(150,0,255,0.12))",
          }}
        >
          <TbUser className="h-5 w-5 text-cyan-400/80" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
            {member.name}
          </p>
          <p className="mt-0.5 text-xs text-white/35">
            {member.projects.length} project{member.projects.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Project preview pills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {member.projects.slice(0, 2).map((p: any) => (
          <span
            key={p.title}
            className="rounded-md px-2 py-0.5 text-[10px] font-medium tracking-wide"
            style={{
              background: "rgba(0,245,255,0.08)",
              color: "rgba(0,245,255,0.75)",
              border: "1px solid rgba(0,245,255,0.18)",
            }}
          >
            {p.category}
          </span>
        ))}
        {member.projects.length > 2 && (
          <span
            className="rounded-md px-2 py-0.5 text-[10px] font-medium tracking-wide"
            style={{
              background: "rgba(150,0,255,0.08)",
              color: "rgba(200,100,255,0.75)",
              border: "1px solid rgba(150,0,255,0.18)",
            }}
          >
            +{member.projects.length - 2}
          </span>
        )}
      </div>

      {/* CTA arrow */}
      <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-white/30 transition-colors group-hover:text-cyan-400/80">
        <span>View projects</span>
        <TbChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </motion.button>
  );
}
