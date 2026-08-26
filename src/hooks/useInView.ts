"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element scrolls into view. Mirrors the original
 * site's reveal check: already-visible-on-mount counts as "in view" too,
 * plus a safety-net timeout so nothing stays hidden if IO never fires.
 */
export function useInView<T extends HTMLElement>(
  threshold = 0.15,
  safetyNetMs = 2600
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const vh = () => window.innerHeight || document.documentElement.clientHeight;
    const isVisible = () => {
      const r = el.getBoundingClientRect();
      return r.top < vh() * 0.88 && r.bottom > 0;
    };

    if (isVisible()) {
      setInView(true);
      return;
    }

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold }
      );
      io.observe(el);
    } catch {
      // IntersectionObserver unavailable — safety net below covers it
    }

    const safety = window.setTimeout(() => setInView(true), safetyNetMs);

    return () => {
      io?.disconnect();
      clearTimeout(safety);
    };
  }, [threshold, safetyNetMs]);

  return [ref, inView] as const;
}
