"use client";

import { useEffect, useRef } from "react";

/** Subtly pulls an element toward the cursor while hovered. */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * 0.18;
      const dy = (e.clientY - r.top - r.height / 2) * 0.28;
      el.style.transform = `translate(${dx}px,${dy}px)`;
    };
    const leave = () => {
      el.style.transform = "translate(0,0)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return ref;
}
