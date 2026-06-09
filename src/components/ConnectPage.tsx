import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandYoutube,
  TbArrowRight,
  TbUsers,
  TbTerminal,
  TbSend,
  TbLoader,
  TbRefresh,
  TbDatabase,
  TbLock,
} from "react-icons/tb";

import { ParticleField } from "./ParticleField";
import { submitInquiry, getInquiries, deleteInquiry } from "../lib/actions/inquiryActions";
import { getDBOfficials } from "../lib/actions/dbActions";


export function ConnectPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showInbox, setShowInbox] = useState(false);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [isLoadingInbox, setIsLoadingInbox] = useState(false);

  const fetchInquiries = async () => {
    setIsLoadingInbox(true);
    try {
      const res = await getInquiries();
      setInquiries(res);
    } catch (err: any) {
      console.error("Failed to load inquiries:", err);
      toast.error("Failed to connect to MongoDB. Ensure your local server is running.");
    } finally {
      setIsLoadingInbox(false);
    }
  };

  const [officials, setOfficials] = useState<any[]>([]);

  useEffect(() => {
    getDBOfficials()
      .then((data) => setOfficials(data))
      .catch((err) => console.error("Failed to load officials from DB:", err));
  }, []);

  useEffect(() => {
    if (showInbox) {
      fetchInquiries();
    }
  }, [showInbox]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await submitInquiry({
        data: { name, email, interest, message }
      });
      if (res.success) {
        toast.success("Transmission successful! Document saved in MongoDB.");
        setName("");
        setEmail("");
        setMessage("");
        if (showInbox) {
          fetchInquiries();
        }
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to transmit message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteInquiry({ data: { id } });
      if (res.success) {
        toast.success("Telemetry payload purged from MongoDB!");
        fetchInquiries();
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to purge telemetry payload.");
    }
  };

  // SOCIAL LINKS
  const socials = [
    {
      icon: TbBrandGithub,
      link: "https://github.com/Priyanshi-2004/sindataverse",
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
              <a href="https://github.com/Priyanshi-2004/sindataverse"><span className="relative z-10">GitHub</span></a>
            </button>

            <button className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-cyan-400/[0.03] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300">
              <a href="https://www.linkedin.com/in/priyanshi-gupta2003/"><span className="relative z-10">LinkedIn</span></a>
            </button>

          </div>

          {/* TRANSMISSION TERMINAL (CONTACT FORM) */}


          {/* CYBER INBOX PANEL */}
          <div className="mt-8 flex flex-col items-center">


            {showInbox && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="w-full mt-6 rounded-2xl border border-green-500/30 bg-[#010a05]/95 p-6 backdrop-blur-xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.05)] relative"
              >
                {/* Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[size:100%_4px,_6px_100%] opacity-20" />

                <div className="flex items-center justify-between border-b border-green-500/20 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <TbDatabase className="h-5 w-5 text-green-400 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400 font-bold">
                      DATABASE: dataverse | COLLECTION: inquiries
                    </span>
                  </div>
                  <button
                    onClick={fetchInquiries}
                    disabled={isLoadingInbox}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-green-500/20 bg-green-500/5 text-green-400 transition-all hover:bg-green-500/20 disabled:opacity-50 cursor-pointer"
                  >
                    <TbRefresh className={`h-4 w-4 ${isLoadingInbox ? "animate-spin" : ""}`} />
                  </button>
                </div>

                <div className="mt-6 space-y-4 max-h-[350px] overflow-y-auto custom-scrollbar relative z-10">
                  {isLoadingInbox && inquiries.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10">
                      <div className="h-6 w-6 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-green-400/60">
                        Querying MongoDB cluster...
                      </p>
                    </div>
                  ) : inquiries.length === 0 ? (
                    <div className="text-center py-10">
                      <p className="font-mono text-xs text-green-500/50 uppercase tracking-widest">
                        -- NO RECORDS DETECTED IN MONGODB --
                      </p>
                      <p className="mt-2 text-[10px] font-mono text-green-500/30">
                        Submit a message above to populate the collection instantly!
                      </p>
                    </div>
                  ) : (
                    inquiries.map((inquiry, i) => (
                      <motion.div
                        key={inquiry.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-lg border border-green-500/10 bg-green-950/[0.05] p-4 hover:border-green-500/30 transition-all duration-300 hover:bg-green-950/[0.1] text-left"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-green-500/10 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-green-400">
                              {inquiry.name}
                            </span>
                            <span className="rounded border border-green-500/30 bg-green-950/20 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-green-300">
                              {inquiry.interest}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[9px] text-green-500/40">
                              {new Date(inquiry.createdAt).toLocaleString()}
                            </span>
                            <button
                              onClick={() => handleDelete(inquiry.id)}
                              className="rounded border border-red-500/30 bg-red-950/20 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                              Purge
                            </button>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="font-mono text-[11px] text-green-400 leading-relaxed whitespace-pre-wrap">
                            <span className="text-green-500/30 mr-1">$</span>
                            {inquiry.message}
                          </p>
                        </div>
                        <div className="mt-2 font-mono text-[8px] text-green-500/30 flex justify-between">
                          <span>ID: {inquiry.id}</span>
                          <span>EMAIL: {inquiry.email}</span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>

                <div className="mt-4 border-t border-green-500/10 pt-4 flex justify-between items-center relative z-10 font-mono text-[9px] text-green-500/40">
                  <span>STATUS: SECURE HANDSHAKE COMPLETED</span>
                  <span>SYNCED WITH COMPASS</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* DYNAMIC OFFICIALS LIST */}
          {officials.length === 0 ? (
            <div className="mt-8 text-center text-xs text-white/35 font-mono">

            </div>
          ) : (
            <div className="mt-10 ml-[20%] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {officials.map((official) => {
                const isMentor = official.badge === "DIRECTOR" || official.badge === "LEAD" || official.badge === "LEAD MENTOR" || official.badge === "CHIEF PATRON";
                return (
                  <div
                    key={official.id || official._id}
                    className={`relative overflow-hidden rounded-[28px] text-center border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] ${isMentor
                      ? "border-yellow-400/30 bg-gradient-to-br from-yellow-400/[0.04] to-transparent hover:border-yellow-300"
                      : "border-cyan-400/20 bg-cyan-400/[0.03] hover:border-cyan-300"
                      }`}
                  >
                    {/* Badge */}
                    {official.badge && (
                      <div className="mb-4 flex justify-center">
                        <div className={`rounded-full px-3 py-1 text-[9px] font-black tracking-wider ${isMentor ? "bg-yellow-400 text-black" : "bg-cyan-500/10 text-cyan-300 border border-cyan-400/20"
                          }`}>
                          {official.badge}
                        </div>
                      </div>
                    )}

                    {/* Role */}
                    <p className="text-center text-[10px] uppercase tracking-[0.35em] text-pink-400">
                      {official.role}
                    </p>

                    {/* Name */}
                    <h3 className={`mt-3 text-center text-xl font-black ${isMentor ? "text-yellow-300" : "text-white"}`}>
                      {official.name}
                    </h3>

                    {/* Designation */}
                    <p className="mt-3 text-center text-xs text-white/50 leading-relaxed">
                      {official.designation}
                    </p>
                  </div>
                );
              })}
            </div>
          )}


        </motion.div>
      </div>
    </section>
  );
}