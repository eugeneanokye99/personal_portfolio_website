"use client";

import { useEffect, useRef } from "react";

/** Fixed background grid that drifts slightly opposite the mouse for a subtle parallax feel. */
export function ParallaxGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const move = (e: MouseEvent) => {
      const dx = (e.clientX / window.innerWidth - 0.5) * -22;
      const dy = (e.clientY / window.innerHeight - 0.5) * -22;
      grid.style.transform = `translate(${dx}px,${dy}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={gridRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: "-60px",
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage:
          "linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 80%)",
        willChange: "transform",
      }}
    />
  );
}
