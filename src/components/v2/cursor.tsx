"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

// Cursor custom robusto: sobrevive cambio de pestaña y pointerleave (regla ATLAS).
// Posición 1:1 (sin spring) para que siga el mouse a la misma velocidad.
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
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
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-7 w-7 items-center justify-center rounded-full border-2 border-green-bright md:flex"
      // x/y crudos = 1:1 con el mouse, sin retraso.
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        boxShadow: "0 0 12px rgba(79,217,106,0.55)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovering ? 2 : 1,
        backgroundColor: hovering
          ? "rgba(79,217,106,0.22)"
          : "rgba(79,217,106,0)",
      }}
      transition={{ duration: 0.15 }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green-bright" />
    </motion.div>
  );
}
