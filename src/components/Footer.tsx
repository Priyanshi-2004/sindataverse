import { TbDatabase, TbBrandGithub, TbBrandLinkedin, TbBrandX, TbMail } from "react-icons/tb";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)] glow-blue">
              <TbDatabase className="h-5 w-5 text-background" />
            </div>
            <span className="text-lg font-semibold">
              Data<span className="text-gradient">Verse</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            A futuristic showcase universe for Data Analytics, Dashboards, AI and
            Data Science projects. Built with React, Tailwind & Framer Motion.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { i: TbBrandGithub, h: "https://github.com" },
              { i: TbBrandLinkedin, h: "https://linkedin.com" },
              { i: TbBrandX, h: "https://x.com" },
              { i: TbMail, h: "mailto:hello@example.com" },
            ].map(({ i: Icon, h }) => (
              <a
                key={h}
                href={h}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/10 hover:text-[var(--neon-cyan)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--neon-cyan)]">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#categories" className="hover:text-foreground">Categories</a></li>
            <li><a href="#projects" className="hover:text-foreground">All Projects</a></li>
            <li><a href="#ai" className="hover:text-foreground">AI Tools</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--neon-cyan)]">
            Stack
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Power BI · Tableau</li>
            <li>Python · SQL</li>
            <li>Machine Learning</li>
            <li>Data Visualization</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} DataVerse. Crafted in the data universe.</span>
          <span>v1.0 · galaxy build</span>
        </div>
      </div>
    </footer>
  );
}
