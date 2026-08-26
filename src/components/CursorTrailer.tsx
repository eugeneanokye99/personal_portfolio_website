"use client";

import { useEffect, useRef } from "react";

/** Custom cursor dot that lags toward the pointer and grows over interactive elements. */
export function CursorTrailer() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;
    if (window.matchMedia && window.matchMedia("(hover:none)").matches) {
      dot.style.display = "none";
      return;
    }

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest && t.closest("a,button,input,textarea,[data-cat-head]");
      if (interactive) {
        dot.style.width = "44px";
        dot.style.height = "44px";
        dot.style.backgroundColor = "var(--tint)";
      } else {
        dot.style.width = "26px";
        dot.style.height = "26px";
        dot.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      dot.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        border: "1.5px solid var(--primary)",
        borderRadius: "50%",
        zIndex: 9998,
        pointerEvents: "none",
        transform: "translate(-50%,-50%)",
        transition: "width .2s var(--ease),height .2s var(--ease),background-color .2s",
        boxShadow: "0 0 18px -2px var(--glow)",
      }}
    />
  );
}
