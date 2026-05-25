import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { TbDatabase } from "react-icons/tb";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass-strong flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
            <TbDatabase className="h-5 w-5 text-background" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Data<span className="text-gradient">Verse</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#projects" className="nav-link transition-colors hover:text-foreground">Projects</a>
          <a href="#team" className="nav-link transition-colors hover:text-foreground">Team</a>
          <a href="#connect" className="nav-link transition-colors hover:text-foreground">Connect</a>
          <a href="#ai" className="nav-link transition-colors hover:text-foreground">AI Tools</a>
        </div>
        <a
          href="#projects"
          className="rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03] glow-purple"
        >
          Explore
        </a>
      </nav>
    </motion.header>
  );
}
