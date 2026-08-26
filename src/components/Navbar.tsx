"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setSpinning(true);
    setTimeout(() => setSpinning(false), 400);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: 64,
        borderBottom: "1px solid var(--border)",
        background: "color-mix(in srgb,var(--bg) 72%,transparent)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)",
          height: "100%",
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "var(--text)",
            fontFamily: "var(--font-mono)",
            fontWeight: 800,
            letterSpacing: "-.02em",
            fontSize: 17,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid var(--primary)",
              borderRadius: 7,
              color: "var(--primary)",
              boxShadow: "0 0 16px -4px var(--glow)",
            }}
          >
            ~
          </span>
          <span>
            eugene<span style={{ color: "var(--primary)" }}>.</span>anokye
          </span>
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
          }}
        >
          {navLinks.map((l) => {
            const active = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: active ? "var(--primary)" : "var(--text2)",
                  background: active ? "var(--tint)" : "transparent",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: 6,
                  transition: "color .15s",
                }}
              >
                {l.label}
              </a>
            );
          })}
          <button
            onClick={handleToggle}
            aria-label="Toggle theme"
            style={{
              marginLeft: 8,
              width: 38,
              height: 38,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--primary)",
              borderRadius: 8,
              cursor: "pointer",
              transform: spinning ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform .4s var(--ease),border-color .2s",
            }}
          >
            <span style={{ display: "inline-block", fontSize: 16, lineHeight: 1 }}>
              {theme === "dark" ? "☾" : "☀"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
