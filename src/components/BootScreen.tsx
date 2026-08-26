"use client";

import { useEffect, useState } from "react";
import { bootLines } from "@/lib/data";

/** Terminal-style boot sequence shown once on load, then fades out. */
export function BootScreen() {
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    bootLines.forEach((_, idx) => {
      timers.push(
        window.setTimeout(() => setShown((s) => Math.max(s, idx + 1)), 260 + idx * 230)
      );
    });
    timers.push(
      window.setTimeout(() => setFading(true), 260 + bootLines.length * 230 + 380)
    );
    timers.push(
      window.setTimeout(() => setDone(true), 260 + bootLines.length * 230 + 380 + 700)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  if (done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity .6s var(--ease)",
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <div
        style={{
          width: "min(560px,86vw)",
          fontFamily: "var(--font-code)",
          fontSize: 14,
          lineHeight: 2,
          color: "var(--text)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 18,
            fontFamily: "var(--font-mono)",
            fontWeight: 800,
            fontSize: 18,
            color: "var(--primary)",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              width: 34,
              height: 34,
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid var(--primary)",
              borderRadius: 8,
              boxShadow: "0 0 22px -4px var(--glow)",
            }}
          >
            ~
          </span>
          portfolio_os
        </div>
        <div style={{ color: "var(--text2)", minHeight: 160 }}>
          {bootLines.slice(0, shown).map(([txt, ok], i) => (
            <div key={i}>
              {txt}
              {ok && <span style={{ color: "var(--ok)" }}> {ok}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
