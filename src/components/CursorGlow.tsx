/**
 * CursorGlow — Cyberpunk / Sci-fi custom cursor
 *
 * Features
 * ─────────
 *  ✦ Small glowing centre dot (raw pointer position via tight spring)
 *  ✦ Outer animated neon ring with glow-pulse (lagged spring)
 *  ✦ Inner dashed ring — continuously spinning, faster on hover
 *  ✦ Smooth cursor interpolation via Framer Motion springs + rAF
 *  ✦ Magnetic hover on buttons / links / cards
 *  ✦ Cyan → blue neon colour palette
 *  ✦ mix-blend-mode: screen blend for glow compositing
 *  ✦ Scale animation: ring expands, dot shrinks on hover; both squish on click
 *  ✦ Trailing ghost dots (rAF-driven, colour shifts cyan → indigo)
 *  ✦ Particle burst on every click (12 radial particles, animated out)
 *  ✦ Ambient soft glow blob that follows ring with lazy spring
 *  ✦ No-op on touch devices
 */

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TRAIL_LENGTH = 14;

/** Tight spring — dot snaps to cursor almost immediately */
const DOT_SPRING = { damping: 32, stiffness: 380, mass: 0.5 };

/** Loose spring — ring lags behind for a cinematic feel */
const RING_SPRING = { damping: 20, stiffness: 160, mass: 0.9 };

/** Ambient blob — very lazy */
const BLOB_SPRING = { damping: 18, stiffness: 80, mass: 1.2 };

/** Magnetic pull spring */
const MAG_SPRING = { damping: 22, stiffness: 260, mass: 0.5 };

const TRAIL_COLORS: [string, string, string, string] = [
  "0, 255, 255",    // cyan
  "0, 200, 255",
  "60, 100, 255",
  "120, 40, 255",   // indigo
];

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useRawMouse() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return { x, y };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CursorTrails({ trails }: { trails: TrailDot[] }) {
  return (
    <>
      {trails.map((dot, i) => {
        const age   = i / TRAIL_LENGTH;
        const alpha = (1 - age) * 0.52;
        const size  = 7 * (1 - age * 0.72);
        const ci    = Math.min(
          TRAIL_COLORS.length - 1,
          Math.floor(age * TRAIL_COLORS.length)
        );
        const color = TRAIL_COLORS[ci];
        return (
          <div
            key={dot.id}
            className="cursor-trail-dot"
            style={{
              left:      dot.x,
              top:       dot.y,
              width:     size,
              height:    size,
              opacity:   alpha,
              background: `rgba(${color}, ${alpha})`,
              boxShadow: `0 0 ${size * 2.5}px rgba(${color}, 0.85)`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </>
  );
}

function ClickParticles({ particles }: { particles: Particle[] }) {
  return (
    <AnimatePresence>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="cursor-particle"
          style={{
            left:      p.x,
            top:       p.y,
            width:     p.size,
            height:    p.size,
            background: `hsl(${p.hue}, 100%, 68%)`,
            boxShadow: `0 0 ${p.size * 3}px hsl(${p.hue}, 100%, 58%)`,
          }}
          initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
          animate={{
            scale:   0,
            opacity: 0,
            x: p.vx * 55,
            y: p.vy * 55,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.15, 0, 0.85, 1] }}
        />
      ))}
    </AnimatePresence>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function CursorGlow() {
  const [isActive, setIsActive] = useState(false);

  // ── Raw mouse ─────────────────────────────────────────────────────────────
  const raw = useRawMouse();

  // ── Sprung positions ──────────────────────────────────────────────────────
  const dotX  = useSpring(raw.x, DOT_SPRING);
  const dotY  = useSpring(raw.y, DOT_SPRING);

  const ringX = useSpring(raw.x, RING_SPRING);
  const ringY = useSpring(raw.y, RING_SPRING);

  const blobX = useSpring(raw.x, BLOB_SPRING);
  const blobY = useSpring(raw.y, BLOB_SPRING);

  // ── Magnetic offset (added to ring position) ──────────────────────────────
  const magX = useSpring(0, MAG_SPRING);
  const magY = useSpring(0, MAG_SPRING);

  // Compose: ringX + magX
  const composedRingX = useTransform([ringX, magX], ([rx, mx]) => (rx as number) + (mx as number));
  const composedRingY = useTransform([ringY, magY], ([ry, my]) => (ry as number) + (my as number));

  // ── State ─────────────────────────────────────────────────────────────────
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible,  setIsVisible]  = useState(false);

  const [trails,    setTrails]    = useState<TrailDot[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [ripples,   setRipples]   = useState<Ripple[]>([]);

  const trailIdRef    = useRef(0);
  const trailBuf      = useRef<{ x: number; y: number }[]>([]);
  const particleIdRef = useRef(0);
  const rippleIdRef   = useRef(0);

  // ── rAF trail loop ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isActive) return;
    let rafId: number;
    const tick = () => {
      const x = raw.x.get();
      const y = raw.y.get();
      trailBuf.current = [{ x, y }, ...trailBuf.current.slice(0, TRAIL_LENGTH - 1)];
      setTrails(
        trailBuf.current.map((pt) => ({ id: trailIdRef.current++, x: pt.x, y: pt.y }))
      );
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [raw.x, raw.y, isActive]);

  // ── Hover / magnetic detection ────────────────────────────────────────────
  useEffect(() => {
    const SELECTORS = ["button", "a", "[data-cursor-magnetic]", ".project-card", "[role='button']"];
    let prevTarget: Element | null = null;

    const onMove = (e: MouseEvent) => {
      if (!isActive) {
        setIsActive(true);
        document.documentElement.classList.add("custom-cursor-active");
      }
      setIsVisible(true);
      const el = (e.target as Element).closest(SELECTORS.join(","));
      if (el) {
        setIsHovering(true);
        prevTarget = el;
        const r = el.getBoundingClientRect();
        magX.set((r.left + r.width  / 2 - e.clientX) * 0.32);
        magY.set((r.top  + r.height / 2 - e.clientY) * 0.32);
      } else if (prevTarget) {
        setIsHovering(false);
        prevTarget = null;
        magX.set(0);
        magY.set(0);
      }
    };

    const onLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      magX.set(0);
      magY.set(0);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [magX, magY, isActive]);

  // ── Click → particle burst & ripple wave ──────────────────────────────────
  const spawnParticles = useCallback((e: MouseEvent) => {
    setIsClicking(true);
    setTimeout(() => setIsClicking(false), 140);

    // Particle burst
    const COUNT = 14;
    const burst: Particle[] = Array.from({ length: COUNT }, (_, i) => {
      const angle = (i / COUNT) * Math.PI * 2;
      const speed = 0.5 + Math.random() * 0.9;
      return {
        id:   particleIdRef.current++,
        x:    e.clientX,
        y:    e.clientY,
        vx:   Math.cos(angle) * speed,
        vy:   Math.sin(angle) * speed,
        size: 2.5 + Math.random() * 4.5,
        hue:  175 + Math.random() * 65,  // cyan → blue spectrum
      };
    });

    setParticles((prev) => [...prev, ...burst]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !burst.find((b) => b.id === p.id)));
    }, 750);

    // Click Ripple wave
    const newRipple: Ripple = {
      id: rippleIdRef.current++,
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 650);
  }, []);

  useEffect(() => {
    if (!isActive) return;
    window.addEventListener("mousedown", spawnParticles);
    return () => window.removeEventListener("mousedown", spawnParticles);
  }, [spawnParticles, isActive]);

  // ── Clean up class on unmount ──────────────────────────────────────────────
  useEffect(() => {
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isActive) return null;

  // ── Derived values ────────────────────────────────────────────────────────
  const dotScale  = isHovering ? 0.35 : isClicking ? 1.8  : 1;
  const ringScale = isHovering ? 1.8  : isClicking ? 0.8  : 1;
  const opacity   = isVisible  ? 1    : 0;
  const spinSpeed = isHovering ? 1.4  : 3.2; // seconds per rotation

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 9999, mixBlendMode: "screen" }}
    >
      {/* ── Ambient blob ── */}
      <motion.div
        className="cursor-ambient"
        style={{ x: blobX, y: blobY }}
      />

      {/* ── Trail dots ── */}
      <CursorTrails trails={trails} />

      {/* ── Outer neon ring ── */}
      <motion.div
        className="cursor-ring"
        style={{
          x: composedRingX,
          y: composedRingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: ringScale, opacity }}
        transition={{ type: "spring", ...RING_SPRING }}
      />

      {/* ── Inner dashed spinning ring ── */}
      <motion.div
        className="cursor-ring-inner"
        style={{
          x: composedRingX,
          y: composedRingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale:   isHovering ? 1.6 : 1,
          opacity,
          rotate:  360,
        }}
        transition={{
          scale:  { type: "spring", ...RING_SPRING },
          opacity: { duration: 0.2 },
          rotate: {
            duration:   spinSpeed,
            repeat:     Infinity,
            ease:       "linear",
            repeatType: "loop",
          },
        }}
      />

      {/* ── Cross-hair tick marks (hover only) ── */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="cursor-crosshair"
            style={{
              x: composedRingX,
              y: composedRingY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            exit={{   scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* ── Centre dot ── */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: dotScale, opacity }}
        transition={{ type: "spring", ...DOT_SPRING }}
      />

      {/* ── Click particles ── */}
      <ClickParticles particles={particles} />

      {/* ── Click Ripples ── */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: r.x,
              top: r.y,
              x: "-50%",
              y: "-50%",
              border: "2px solid #00f5ff",
              boxShadow: "0 0 16px rgba(0, 245, 255, 0.7), inset 0 0 8px rgba(0, 245, 255, 0.3)",
              position: "fixed",
              zIndex: 10000,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 140, height: 140, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
