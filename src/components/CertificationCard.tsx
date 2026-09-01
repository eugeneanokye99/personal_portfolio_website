"use client";

import { Reveal } from "./Reveal";
import type { Certification } from "@/lib/data";

export function CertificationCard({ certification }: { certification: Certification }) {
  const isLinked = Boolean(certification.link && certification.link !== "#");

  const card = (
    <Reveal
      style={{
        border: "1px solid var(--border)",
        borderRadius: 12,
        background: "var(--surface)",
        padding: "20px 22px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      {certification.image ? (
        <div
          style={{
            flex: "none",
            width: 48,
            height: 48,
            borderRadius: 10,
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "#fff",
          }}
        >
          <img
            src={certification.image}
            alt={certification.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      ) : (
        <div
          style={{
            flex: "none",
            width: 42,
            height: 42,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1.5px solid var(--primary)",
            color: "var(--primary)",
            fontFamily: "var(--font-mono)",
            fontSize: 16,
          }}
        >
          ✓
        </div>
      )}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 3 }}>
          {certification.name}
        </div>
        <div style={{ fontSize: 13, color: "var(--text2)" }}>
          {certification.issuer} <span style={{ color: "var(--border)" }}>·</span> {certification.date}
        </div>
      </div>
    </Reveal>
  );

  if (!isLinked) return card;

  return (
    <a href={certification.link} target="_blank" rel="noopener" style={{ textDecoration: "none", color: "inherit" }}>
      {card}
    </a>
  );
}
