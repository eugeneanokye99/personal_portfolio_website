"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { methodColors, type Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!hovered) return;
    const rect = rectRef.current;
    if (!rect) return;
    const len = rect.getTotalLength ? rect.getTotalLength() : 1000;
    rect.style.strokeDasharray = `${len}`;
    rect.style.strokeDashoffset = `${len}`;
    rect.style.animation = "none";
    // force reflow so the animation restarts from the reset state every hover
    void rect.getBBox();
    rect.style.animation = "dashRun 1.1s var(--ease) forwards";
  }, [hovered]);

  return (
    <Reveal
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        border: "1px solid var(--border)",
        borderRadius: 12,
        background: "var(--surface)",
        padding: "22px 22px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        overflow: "hidden",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 50px -22px var(--glow)" : "none",
        borderColor: hovered ? "var(--primary)" : "var(--border)",
        transition: "transform .25s var(--ease),box-shadow .3s,border-color .2s",
      }}
    >
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: hovered ? 1 : 0, transition: "opacity .2s" }}
      >
        <rect
          ref={rectRef}
          x={1}
          y={1}
          rx={11}
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          fill="none"
          stroke="var(--primary)"
          strokeWidth={1.5}
          strokeDasharray="8 6"
        />
      </svg>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span style={{ color: "var(--primary)", fontFamily: "var(--font-mono)", fontSize: 13 }}>›</span>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>
              {project.name}
            </span>
            {project.subtitle && (
              <span style={{ marginLeft: 8, fontFamily: "var(--font-code)", fontSize: 12, color: "var(--text2)" }}>
                {project.subtitle}
              </span>
            )}
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          aria-label={`Open ${project.name}`}
          style={{ position: "relative", color: "var(--text2)", textDecoration: "none", fontSize: 17, transition: "color .15s,transform .2s" }}
        >
          ↗
        </a>
      </div>

      {project.preview && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          style={{
            position: "relative",
            display: "block",
            height: 160,
            borderRadius: 8,
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "var(--surface-2)",
          }}
        >
          <iframe
            src={project.preview}
            title={`${project.name} preview`}
            loading="lazy"
            tabIndex={-1}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "250%",
              height: "250%",
              transform: "scale(0.4)",
              transformOrigin: "top left",
              border: "none",
              pointerEvents: "none",
            }}
          />
        </a>
      )}

      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text2)", flex: 1 }}>{project.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {project.tags.map(([label, method]) => {
          const col = methodColors[method];
          return (
            <span
              key={label}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".02em",
                color: col,
                background: `color-mix(in srgb,${col} 12%,transparent)`,
                border: `1px solid color-mix(in srgb,${col} 30%,transparent)`,
                padding: "4px 9px",
                borderRadius: 6,
              }}
            >
              {label}
            </span>
          );
        })}
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener"
        style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--primary)", textDecoration: "none" }}
      >
        ↗ {project.linkLabel}
      </a>
      {project.note && (
        <div style={{ fontFamily: "var(--font-code)", fontSize: 11.5, color: "var(--text2)" }}>{project.note}</div>
      )}
    </Reveal>
  );
}
