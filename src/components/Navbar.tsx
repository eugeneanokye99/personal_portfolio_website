"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { navLinks } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setSpinning(true);
    setTimeout(() => setSpinning(false), 400);
  };

  const linkStyle = (id: string): CSSProperties => {
    const active = activeId === id;
    return {
      color: active ? "var(--primary)" : "var(--text2)",
      background: active ? "var(--tint)" : "transparent",
      textDecoration: "none",
      padding: "8px 12px",
      borderRadius: 6,
      transition: "color .15s",
    };
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

        <div style={{ display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} style={linkStyle(l.href.slice(1))}>
                {l.label}
              </a>
            ))}
          </div>

          <button
            className="nav-hamburger-btn"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={{
              width: 38,
              height: 38,
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              color: "var(--primary)",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>

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

      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: 14,
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            boxShadow: "0 24px 40px -24px var(--glow)",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ ...linkStyle(l.href.slice(1)), padding: "12px 14px" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
