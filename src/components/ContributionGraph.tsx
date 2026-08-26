"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const WEEKS = 52;
const DAYS = 7;

const LEVELS = [
  "var(--tint)",
  "color-mix(in srgb,var(--primary) 30%,transparent)",
  "color-mix(in srgb,var(--primary) 55%,transparent)",
  "color-mix(in srgb,var(--primary) 78%,transparent)",
  "var(--primary)",
];

function randomLevel() {
  const r = Math.random();
  return r > 0.82 ? 4 : r > 0.68 ? 3 : r > 0.5 ? 2 : r > 0.3 ? 1 : 0;
}

/** GitHub-style contribution grid. Cell levels are randomized client-side after mount
 * (never during SSR) so the server and client render passes never disagree. */
export function ContributionGraph() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [grid, setGrid] = useState<number[][] | null>(null);

  useEffect(() => {
    setGrid(
      Array.from({ length: WEEKS }, () => Array.from({ length: DAYS }, () => randomLevel()))
    );
  }, []);

  return (
    <div>
      <div ref={ref} data-graph style={{ display: "flex", gap: 3, overflowX: "auto", paddingBottom: 4, minHeight: 88 }}>
        {grid?.map((col, w) => (
          <div key={w} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {col.map((level, d) => (
              <div
                key={d}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 2.5,
                  background: LEVELS[level],
                  opacity: inView ? 1 : 0,
                  transform: inView ? "scale(1)" : "scale(.4)",
                  transition: "opacity .3s, transform .3s",
                  transitionDelay: `${w * 4 + d * 1.2}ms`,
                  boxShadow: level === 4 ? "0 0 7px -1px var(--glow)" : "none",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContributionLegend() {
  return (
    <span style={{ display: "inline-flex", gap: 3 }}>
      {LEVELS.map((c) => (
        <span key={c} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
      ))}
    </span>
  );
}
