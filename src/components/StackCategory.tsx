"use client";

import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { ProficiencyBar } from "./ProficiencyBar";
import type { StackCategory as StackCategoryData } from "@/lib/data";

export function StackCategory({ category }: { category: StackCategoryData }) {
  const [open, setOpen] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const panel = panelRef.current;
    if (!panel) {
      setOpen((o) => !o);
      return;
    }
    if (open) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      requestAnimationFrame(() => {
        panel.style.maxHeight = "0px";
      });
      setOpen(false);
    } else {
      panel.style.maxHeight = "0px";
      requestAnimationFrame(() => {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      });
      setOpen(true);
    }
  };

  return (
    <Reveal
      style={{ border: "1px solid var(--border)", borderRadius: 12, background: "var(--surface)", overflow: "hidden" }}
    >
      <button
        onClick={toggle}
        data-cat-head
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "16px 20px",
          background: "var(--surface-2)",
          border: "none",
          borderBottom: "1px solid var(--border)",
          cursor: "pointer",
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: "var(--text)",
          textAlign: "left",
        }}
      >
        <span style={{ color: "var(--text2)" }}>{"{"}</span>{" "}
        <span style={{ color: "var(--primary)" }}>&quot;{category.key}&quot;</span>
        <span style={{ color: "var(--text2)" }}>: [</span>
        <span
          style={{
            marginLeft: "auto",
            color: "var(--text2)",
            transition: "transform .25s var(--ease)",
            transform: open ? "rotate(0)" : "rotate(-90deg)",
            display: "inline-block",
          }}
        >
          ▾
        </span>
      </button>
      <div
        ref={panelRef}
        style={{
          padding: open ? "8px 20px 18px" : "0 20px",
          display: "grid",
          gap: 6,
          maxHeight: open ? "none" : "0px",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height .4s var(--ease), opacity .3s, padding .3s",
        }}
      >
        {category.items.map((item, i) => (
          <ProficiencyBar key={item.name} name={item.name} tag={item.tag} value={item.prof} index={i} />
        ))}
      </div>
      {open && (
        <div style={{ padding: "0 20px 16px", fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text2)" }}>
          ] {"}"}
        </div>
      )}
    </Reveal>
  );
}
