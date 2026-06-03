"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Cursor custom robusto: sobrevive cambio de pestaña y pointerleave (regla ATLAS).
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Solo en dispositivos con puntero fino (no touch).
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [data-cursor='hover']"));
    };
    const leave = () => setVisible(false);
    const onVisibility = () => {
      if (document.hidden) setVisible(false);
    };

    document.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-6 w-6 items-center justify-center rounded-full border border-green-bright mix-blend-difference md:flex"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovering ? 2.2 : 1,
        backgroundColor: hovering ? "rgba(79,217,106,0.15)" : "rgba(79,217,106,0)",
      }}
      transition={{ duration: 0.18 }}
    >
      <span className="h-1 w-1 rounded-full bg-green-bright" />
    </motion.div>
  );
}
