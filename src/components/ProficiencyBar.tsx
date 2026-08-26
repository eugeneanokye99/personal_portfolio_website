"use client";

import { useInView } from "@/hooks/useInView";

type ProficiencyBarProps = {
  name: string;
  tag: string;
  value: number;
  index: number;
};

export function ProficiencyBar({ name, tag, value, index }: ProficiencyBarProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ padding: "12px 4px", borderRadius: 8, transition: "background-color .15s" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--tint)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 9 }}>
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14.5, color: "var(--text)" }}>
          {name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-code)",
            fontSize: 12,
            color: "var(--code)",
            background: "var(--tint)",
            padding: "3px 9px",
            borderRadius: 5,
          }}
        >
          {tag}
        </span>
      </div>
      <div style={{ position: "relative", height: 7, borderRadius: 99, background: "var(--tint)", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: "0 100% 0 0",
            right: inView ? `${100 - value}%` : "100%",
            background: "var(--primary)",
            borderRadius: 99,
            transition: "right 1.1s var(--ease)",
            transitionDelay: `${index * 90}ms`,
            boxShadow: "0 0 12px -2px var(--glow)",
          }}
        />
      </div>
    </div>
  );
}
