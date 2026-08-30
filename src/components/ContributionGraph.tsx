"use client";

import { useInView } from "@/hooks/useInView";
import type { ContributionDay } from "@/lib/github";

const LEVELS = [
  "var(--tint)",
  "color-mix(in srgb,var(--primary) 30%,transparent)",
  "color-mix(in srgb,var(--primary) 55%,transparent)",
  "color-mix(in srgb,var(--primary) 78%,transparent)",
  "var(--primary)",
];

/** GitHub-style contribution grid, rendered from real contribution-calendar data. */
export function ContributionGraph({ weeks }: { weeks: ContributionDay[][] }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div>
      <div ref={ref} data-graph style={{ display: "flex", gap: 3, overflowX: "auto", paddingBottom: 4, minHeight: 88 }}>
        {weeks.map((col, w) => (
          <div key={w} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {col.map((day, d) => (
              <div
                key={day.date}
                title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 2.5,
                  background: LEVELS[day.level],
                  opacity: inView ? 1 : 0,
                  transform: inView ? "scale(1)" : "scale(.4)",
                  transition: "opacity .3s, transform .3s",
                  transitionDelay: `${w * 4 + d * 1.2}ms`,
                  boxShadow: day.level === 4 ? "0 0 7px -1px var(--glow)" : "none",
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
