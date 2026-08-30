
"use client";

import { Reveal } from "./Reveal";
import { HeroCanvas } from "./HeroCanvas";
import { RoleTypewriter } from "./RoleTypewriter";
import { useMagnetic } from "@/hooks/useMagnetic";

export function Hero() {
  const viewProjectsRef = useMagnetic<HTMLAnchorElement>();
  const downloadCvRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="hero" className="section--hero grid-hero">
      <Reveal>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            color: "var(--text2)",
            padding: "6px 12px",
            border: "1px solid var(--border)",
            borderRadius: 999,
            background: "var(--surface)",
            marginBottom: 26,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--ok)",
              boxShadow: "0 0 10px 0 var(--ok)",
            }}
          />
          available for full-stack engineering work
        </div>
        <div style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 14, marginBottom: 10 }}>
          &gt; whoami
        </div>
        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 800,
            fontSize: "clamp(40px,6vw,72px)",
            lineHeight: 1.02,
            letterSpacing: "-.04em",
            margin: "0 0 18px",
            color: "var(--text)",
          }}
        >
          Eugene Dokye
          <br />
          Anokye<span style={{ color: "var(--primary)" }}>_</span>
        </h1>
        <div
          style={{
            fontFamily: "var(--font-code)",
            fontSize: "clamp(16px,2vw,20px)",
            color: "var(--text2)",
            minHeight: 30,
            marginBottom: 14,
          }}
        >
          <span style={{ color: "var(--code)" }}>const</span> role{" "}
          <span style={{ color: "var(--code)" }}>=</span>{" "}
          <span style={{ color: "var(--primary)" }}>&quot;</span>
          <RoleTypewriter />
          <span style={{ color: "var(--primary)" }}>&quot;</span>
        </div>
        <p style={{ maxWidth: 520, fontSize: 15.5, lineHeight: 1.7, color: "var(--text2)", margin: "0 0 32px" }}>
          Full-stack software engineer with 5+ years shipping production systems in Spring Boot,
          Java, React, TypeScript, Django, and Node.js. I care about clean APIs, fast interfaces,
          and code the next engineer can actually read.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a
            ref={viewProjectsRef}
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              background: "var(--primary)",
              padding: "14px 22px",
              borderRadius: 8,
              textDecoration: "none",
              boxShadow: "0 8px 30px -8px var(--glow)",
              transition: "transform .18s var(--ease),box-shadow .25s",
            }}
          >
            View Projects <span style={{ fontSize: 15 }}>→</span>
          </a>
          <a
            ref={downloadCvRef}
            href="https://drive.google.com/uc?export=download&id=1JMee2NFyZCkuD-dOo6QH8LSFakELbfyS"
            target="_blank"
            rel="noopener"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
              fontSize: 14,
              color: "var(--text)",
              background: "transparent",
              padding: "14px 22px",
              borderRadius: 8,
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "transform .18s var(--ease),border-color .2s,background-color .2s",
            }}
          >
            Download CV <span style={{ fontSize: 14, color: "var(--primary)" }}>↓</span>
          </a>
        </div>
      </Reveal>

      <Reveal style={{ position: "relative" }}>
        <HeroCanvas />
      </Reveal>
    </section>
  );
}
