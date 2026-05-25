import { useState } from "react";
import { motion } from "framer-motion";
import { TbSparkles, TbUsers } from "react-icons/tb";
import { teamMembers } from "../data/team";
import { TeamCard } from "./TeamCard";
import { TeamMemberModal } from "./TeamMemberModal";
import { ParticleField } from "./ParticleField";

// ── Section-level floating blur orbs ──────────────────────────

function FloatOrb({
  style,
  delay = 0,
}: {
  style: React.CSSProperties;
  delay?: number;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute rounded-full"
      style={{
        animation: `glow-pulse ${5 + delay}s ease-in-out ${delay}s infinite`,
        filter: "blur(70px)",
        ...style,
      }}
    />
  );
}

// ── Section heading ────────────────────────────────────────────

function SectionHead() {
  return (
    <div className="relative z-10 mx-auto mb-16 max-w-3xl px-6 text-center">
      {/* Pill badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs backdrop-blur-sm"
      >
        <TbUsers className="h-3.5 w-3.5 text-cyan-400" />
        <span className="text-white/50">
          {teamMembers.length} builders · {teamMembers.reduce((s, m) => s + m.projects.length, 0)} projects
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="font-heading text-5xl font-bold uppercase tracking-tight md:text-7xl"
        style={{
          background:
            "linear-gradient(135deg, #00f5ff 0%, #7b5ea7 45%, #ff2d78 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "none",
        }}
      >
        THE BUILDERS
      </motion.h2>

      {/* Sub-heading */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="mt-4 text-base text-white/40 md:text-lg"
      >
        The minds behind DataVerse — each member a universe of their own.
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-6 h-px max-w-xs"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,245,255,0.5), rgba(255,45,120,0.4), transparent)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────

export function TeamSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section
      id="team"
      className="relative overflow-hidden py-28"
      style={{ background: "rgba(2,4,14,0.6)" }}
    >
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 90%)",
        }}
      />

      {/* Floating particles */}
      <ParticleField density={30} className="opacity-40" />

      {/* Ambient blur orbs */}
      <FloatOrb
        delay={0}
        style={{
          width: 600,
          height: 600,
          top: "-15%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(0,245,255,0.07), transparent 70%)",
        }}
      />
      <FloatOrb
        delay={2}
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(255,45,120,0.06), transparent 70%)",
        }}
      />
      <FloatOrb
        delay={1}
        style={{
          width: 400,
          height: 400,
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(100,0,255,0.06), transparent 70%)",
        }}
      />

      {/* Section label */}
      <div className="relative z-10 mb-2 flex justify-center">
        <div className="flex items-center gap-2">
          <TbSparkles className="h-3.5 w-3.5 text-cyan-400/60" />
          <span
            className="font-mono text-[10px] font-bold uppercase tracking-[0.35em]"
            style={{ color: "rgba(0,245,255,0.4)" }}
          >
            Data Verse — Season 2026
          </span>
          <TbSparkles className="h-3.5 w-3.5 text-cyan-400/60" />
        </div>
      </div>

      {/* Heading block */}
      <SectionHead />

      {/* Team grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, i) => (
            <TeamCard
              key={member.id}
              member={member}
              index={i}
              onClick={() => setSelectedId(member.id)}
            />
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >
          {[
            { v: teamMembers.length, l: "Team Members" },
            {
              v: teamMembers.reduce((s, m) => s + m.projects.length, 0),
              l: "Projects Built",
            },
            { v: "9+", l: "Tech Stacks" },
            { v: "100%", l: "Open Source" },
          ].map((s) => (
            <div
              key={s.l}
              className="flex min-w-[120px] flex-col items-center rounded-2xl border border-white/6 bg-white/[0.025] px-6 py-4 text-center backdrop-blur-sm"
            >
              <span
                className="font-heading text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg,#00f5ff,#a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.v}
              </span>
              <span className="mt-1 text-[11px] text-white/35">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedId !== null && (
        <TeamMemberModal
          memberId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </section>
  );
}
