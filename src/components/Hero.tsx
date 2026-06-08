import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleField } from "./ParticleField";
import { TbSparkles, TbArrowRight, TbChartBar } from "react-icons/tb";
import { getDBProjects } from "../lib/actions/dbActions";

const TYPED = [
  "Data Analytics",
  "Power BI Dashboards",
  "Machine Learning",
  "Tableau Stories",
  "SQL Pipelines",
];

function useTyped() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = TYPED[i % TYPED.length];
    const timeout = setTimeout(
      () => {
        if (!del) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 35 : 75,
    );
    return () => clearTimeout(timeout);
  }, [text, del, i]);
  return text;
}

function FloatingChart({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`glass absolute hidden rounded-2xl p-4 shadow-2xl md:block ${className}`}
      style={{ animation: `float 7s ease-in-out ${delay}s infinite` }}
    >
      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
        <TbChartBar className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
        <span>Revenue · Q4</span>
      </div>
      <div className="flex h-20 items-end gap-1.5">
        {[40, 65, 50, 80, 70, 95, 85].map((h, idx) => (
          <div
            key={idx}
            className="w-3 rounded-t bg-gradient-to-t from-[var(--neon-blue)] to-[var(--neon-purple)]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FloatingDonut({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`glass absolute hidden rounded-2xl p-4 shadow-2xl lg:block ${className}`}
      style={{ animation: `float 9s ease-in-out ${delay}s infinite` }}
    >
      <div className="mb-2 text-xs text-muted-foreground">Channels</div>
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(0.25 0.04 270)" strokeWidth="4" />
          <circle
            cx="18" cy="18" r="15" fill="none"
            stroke="url(#g1)" strokeWidth="4" strokeDasharray="70 100" strokeLinecap="round"
          />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
              <stop offset="100%" stopColor="oklch(0.68 0.26 305)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center text-sm font-semibold">70%</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const typed = useTyped();
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getDBProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects in Hero:", err));
  }, []);

  // Calculate unique tech stacks dynamically
  const uniqueTechs = new Set<string>();
  projects.forEach((p) => {
    if (Array.isArray(p.technologies)) {
      p.technologies.forEach((tech) => {
        if (tech) uniqueTechs.add(tech.trim());
      });
    }
  });
  const techStacksCount = uniqueTechs.size > 0 ? `${uniqueTechs.size}` : "9";

  // Calculate open source percentage dynamically
  const openSourcePct = projects.length > 0
    ? `${Math.round((projects.filter((p) => p.github || p.demo).length / projects.length) * 100)}%`
    : "100%";

  const projectCountStr = projects.length > 0 ? `${projects.length}+` : "50+";

  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <ParticleField density={50} />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.22 265 / 0.45), transparent 60%)",
          animation: "glow-pulse 6s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
        >
          <TbSparkles className="h-3.5 w-3.5 text-[var(--neon-cyan)]" />
          <span className="text-muted-foreground">
            A universe of data projects · {new Date().getFullYear()}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight md:text-7xl"
        >
          Welcome to <span className="text-gradient-animated">DataVerse</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Explore the universe of Data Analytics, Dashboards, AI &amp; Data Science
          projects — crafted with{" "}
          <span className="text-foreground font-medium">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 -mb-0.5 animate-pulse bg-[var(--neon-cyan)]" />
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3.5 font-medium text-background transition-transform hover:scale-[1.03] glow-blue"
          >
            Explore Projects
            <TbArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#trending"
            className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-medium transition-colors hover:bg-white/5"
          >
            View Dashboards
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-4"
        >
          {[
            { v: projectCountStr, l: "Projects" },
            { v: techStacksCount, l: "Tech Stacks" },
            { v: openSourcePct, l: "Open Source" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-5 text-center">
              <div className="text-2xl font-bold text-gradient md:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <FloatingChart className="left-8 top-44" delay={0.6} />
      <FloatingDonut className="right-10 top-56" delay={1} />
      <FloatingChart className="bottom-20 right-16" delay={1.4} />
    </section>
  );
}
