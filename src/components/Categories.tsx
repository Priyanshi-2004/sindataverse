import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";

interface Props {
  active: string | null;
  onSelect: (cat: string | null) => void;
}

export function Categories({ active, onSelect }: Props) {
  const counts = projects.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section id="categories" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
            // explore
          </div>
          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Pick a <span className="text-gradient">universe</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Nine disciplines, one playground. Click a tile to filter projects below.
          </p>
        </div>
        {active && (
          <button
            onClick={() => onSelect(null)}
            className="glass rounded-xl px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Clear filter ✕
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {categories.map((c, idx) => {
          const isActive = active === c.name;
          const Icon = c.icon;
          return (
            <motion.button
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => onSelect(isActive ? null : c.name)}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all ${
                isActive
                  ? "border-transparent glass-strong glow-blue"
                  : "border-white/5 glass hover:border-white/10"
              }`}
            >
              <div
                aria-hidden
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />
              <div
                className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${c.gradient}`}
              >
                <Icon className="h-6 w-6 text-background" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {counts[c.name] ?? 0} project{counts[c.name] === 1 ? "" : "s"}
                  </div>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
