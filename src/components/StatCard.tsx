"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import type { Stat } from "@/lib/data";

export function StatCard({ stat }: { stat: Stat }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        background: "var(--surface)",
        padding: "22px 20px",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        borderColor: hovered ? "var(--primary)" : "var(--border)",
        boxShadow: hovered ? "0 18px 40px -24px var(--glow)" : "none",
        transition: "transform .25s var(--ease),border-color .2s,box-shadow .3s",
      }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text2)", marginBottom: 12 }}>
        // {stat.mono}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 800,
          fontSize: 38,
          letterSpacing: "-.03em",
          color: "var(--text)",
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {stat.value != null ? (
          <CountUp target={stat.value} prefix={stat.prefix} />
        ) : (
          <span style={{ color: "var(--primary)" }}>{stat.text}</span>
        )}
      </div>
      <div style={{ fontSize: 13.5, color: "var(--text2)" }}>{stat.label}</div>
    </Reveal>
  );
}
