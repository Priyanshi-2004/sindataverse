import { motion } from "framer-motion";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandYoutube,
  TbArrowRight,
  TbUsers,
} from "react-icons/tb";

import { ParticleField } from "./ParticleField";

export function ConnectPage() {

  // SOCIAL LINKS
  const socials = [
    {
      icon: TbBrandGithub,
      link: "https://github.com/Priyanshi-2004",
    },
    {
      icon: TbBrandLinkedin,
      link: "https://www.linkedin.com/in/priyanshi-gupta2003/",
    },
    {
      icon: TbBrandInstagram,
      link: "https://www.instagram.com/techyanshi?igsh=cTA4cTU1aGxqMmxj",
    },
    {
      icon: TbBrandYoutube,
      link: "https://www.youtube.com/@TECHYANSHI",
    },
  ];

  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-[#020817] py-20"
    >
      {/* CYBER GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* SIDE GLOW */}
      <div className="absolute left-0 top-0 h-full w-40 bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 top-0 h-full w-40 bg-pink-500/10 blur-[120px]" />

      {/* FLOATING ORBS */}
      <div className="absolute left-20 top-40 h-32 w-32 rounded-full bg-cyan-400/10 blur-[90px] animate-pulse" />
      <div className="absolute bottom-40 right-20 h-32 w-32 rounded-full bg-pink-500/10 blur-[90px] animate-pulse" />

      <ParticleField density={18} className="opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-5">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[34px] border border-cyan-400/20 bg-[#030b1c]/95 px-6 py-10 md:px-10"
        >

          {/* ANIMATED TOP BORDER */}
          <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden">
            <div className="h-full w-full animate-pulse bg-gradient-to-r from-cyan-400 via-pink-500 to-cyan-400" />
          </div>

          {/* CORNER GLOW */}
          <div className="absolute left-0 top-0 h-40 w-40 bg-cyan-400/5 blur-[80px]" />
          <div className="absolute bottom-0 right-0 h-40 w-40 bg-pink-500/5 blur-[80px]" />

          {/* HEADING */}
          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl font-black uppercase tracking-[0.08em] text-white md:text-5xl"
            >
              BUILT AT{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
                DATA VERSE
              </span>
            </motion.h1>

            <div className="mt-5 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
              <div className="h-px w-6 bg-cyan-400" />

              <span>
                Powered by Innovation • Future Data Analysts • Jodhpur
              </span>

              <div className="h-px w-6 bg-cyan-400" />
            </div>
          </div>

          {/* BADGE */}
          <div className="mt-8 flex justify-center">
            <div className="rounded-full border border-cyan-400/10 bg-cyan-400/[0.03] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              DATA VERSE × ANALYTICS UNIVERSE
            </div>
          </div>

          {/* LOGOS */}
          <div className="mt-12 flex items-center justify-center gap-8">

            <div className="group text-center">
              <div className="rounded-2xl border border-cyan-400/20 bg-[#07111f] p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300">

                <img
                  src="https://sinmlverse.netlify.app/logo/sinschoolofai.png"
                  alt="logo"
                  className="h-14 w-14 object-contain"
                />
              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                DATA VERSE
              </p>
            </div>

            <div className="text-3xl text-cyan-400 animate-pulse">×</div>

            <div className="group text-center">
              <div className="rounded-2xl border border-pink-400/20 bg-[#07111f] p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-pink-400">

                <img
                  src="https://sinmlverse.netlify.app/logo/jietuniverse.png"
                  alt="logo"
                  className="h-14 w-14 object-contain"
                />
              </div>

              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                COMMUNITY
              </p>
            </div>
          </div>

          {/* SOCIAL BOX */}
          <div className="mt-12 rounded-2xl border border-cyan-400/10 bg-[#07111f]/80 p-6 backdrop-blur-xl">

            <p className="text-center text-[10px] uppercase tracking-[0.35em] text-white/40">
              CONNECT WITH DATA VERSE
            </p>

            <div className="mt-6 flex justify-center gap-4">

              {socials.map((social, i) => {
                const Icon = social.icon;

                return (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.03] transition-all duration-300 hover:scale-110 hover:border-cyan-300 hover:bg-cyan-400/10"
                  >

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-cyan-400/0 blur-xl transition-all duration-300 group-hover:bg-cyan-400/20" />

                    {/* Icon */}
                    <Icon className="relative z-10 h-5 w-5 text-cyan-300" />

                  </a>
                );
              })}

            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.03] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-pink-500/0 opacity-0 transition-all duration-300 group-hover:opacity-100" />
              <span className="relative z-10">Explore Projects</span>
            </button>

            <button className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.03] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300">
              <span className="relative z-10">GitHub</span>
            </button>

            <button className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.03] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300">
              <span className="relative z-10">LinkedIn</span>
            </button>

          </div>

          {/* DIVIDER */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

          {/* OFFICIALS */}


          <h2 className="text-center text-2xl font-black uppercase tracking-[0.25em] text-cyan-300">
            OUR OFFICIALS
          </h2>

          {/* MAIN CARD */}
          <div className="mt-10 rounded-[28px] border border-cyan-400/30 bg-gradient-to-r from-cyan-400/[0.03] to-pink-500/[0.03] p-8 text-center transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_0_50px_rgba(0,255,255,0.08)]">

            <div className="mb-5 flex justify-center">
              <div className="rounded-full bg-yellow-400 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                LEAD MENTOR
              </div>
            </div>

            <h3 className="text-3xl font-black text-cyan-300">
              Er Priyanshi Gupta
            </h3>

            <p className="mt-3 text-sm text-white/50">
              Data Analytics Instructor
            </p>

          </div>

          {/* SMALL CARDS */}
          <div className="mt-6">

            {/* TOP TWO CARDS */}
            <div className="grid gap-5 md:grid-cols-2">

              {/* CARD 1 */}
              <div className="relative overflow-hidden rounded-[28px] border border-yellow-400/30 bg-gradient-to-br from-yellow-400/[0.04] to-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 h-[200px]">

                {/* ROLE */}
                <p className="mt-3 text-center text-[11px] uppercase tracking-[0.35em] text-pink-400">
                  Director & Registrar
                </p>

                {/* NAME */}
                <h3 className="mt-6 text-center text-3xl font-black text-yellow-300">
                  Dr Manish Bafna
                </h3>

                {/* DESIGNATION */}
                <p className="mt-4 text-center text-sm text-white/50">
                  Registrar, JIET Universe
                </p>



              </div>

              {/* CARD 2 */}
              <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-cyan-400/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 h-[200px]">

                {/* ROLE */}
                <p className="text-center text-[11px] uppercase tracking-[0.35em] text-pink-400">
                  TPO
                </p>

                {/* NAME */}
                <h3 className="mt-6 text-center text-3xl font-black text-white">
                  Sanjay Bhandari
                </h3>

                {/* DESIGNATION */}
                <p className="mt-4 text-center text-sm text-white/50">
                  Training & Placement Officer
                </p>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="mt-5 max-w-[370px]">

              <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-cyan-400/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300">

                {/* ROLE */}
                <p className="text-center text-[11px] uppercase tracking-[0.35em] text-pink-400">
                  Coordinator
                </p>

                {/* NAME */}
                <h3 className="mt-6 text-center text-3xl font-black text-white">
                  Laxmi Choudhary
                </h3>

                {/* DESIGNATION */}
                <p className="mt-4 text-center text-sm text-white/50">
                  ML Course Coordinator
                </p>

              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}