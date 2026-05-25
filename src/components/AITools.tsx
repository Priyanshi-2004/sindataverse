import { motion } from "framer-motion";
import { TbBrain, TbMessageChatbot, TbWand, TbDatabaseSearch, TbChartArcs, TbCode } from "react-icons/tb";

const TOOLS = [
  {
    icon: TbMessageChatbot,
    name: "AskYourData",
    desc: "Chat with any CSV — get charts, insights and SQL in seconds.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: TbWand,
    name: "AutoEDA",
    desc: "One-click exploratory analysis with smart visual recommendations.",
    color: "from-fuchsia-400 to-purple-600",
  },
  {
    icon: TbDatabaseSearch,
    name: "QueryGenius",
    desc: "Natural-language to optimized SQL across any schema.",
    color: "from-indigo-400 to-violet-600",
  },
  {
    icon: TbChartArcs,
    name: "DashForge",
    desc: "Generate Power BI / Tableau-ready layouts from raw datasets.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: TbBrain,
    name: "ModelPilot",
    desc: "Pick the right ML model for your problem in three questions.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: TbCode,
    name: "NotebookAI",
    desc: "AI pair-programmer for Jupyter notebooks and data scripts.",
    color: "from-amber-400 to-orange-500",
  },
];

export function AITools() {
  return (
    <section id="ai" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--neon-cyan)]">
          // intelligence layer
        </div>
        <h2 className="mt-2 text-4xl font-bold md:text-5xl">
          AI tools for <span className="text-gradient">data people</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A growing arsenal of AI helpers built around the analytics workflow.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((t, i) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass border border-white/5 p-6 transition-all hover:border-white/15"
            >
              <div
                aria-hidden
                className={`absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${t.color} opacity-20 blur-3xl transition-opacity group-hover:opacity-40`}
              />
              <div className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${t.color}`}>
                <Icon className="h-6 w-6 text-background" />
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{t.name}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <div className="relative mt-5 inline-flex items-center gap-1 text-xs text-[var(--neon-cyan)]">
                Coming soon
                <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon-cyan)]" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
