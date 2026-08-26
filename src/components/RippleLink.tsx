"use client";

import { useRef, useState, type ReactNode } from "react";

export function RippleLink({ href, children }: { href: string; children: ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);

  const addRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const a = ref.current;
    if (!a) return;
    const rect = a.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const span = document.createElement("span");
    span.style.cssText = `position:absolute;left:${e.clientX - rect.left - size / 2}px;top:${
      e.clientY - rect.top - size / 2
    }px;width:${size}px;height:${size}px;border-radius:50%;background:var(--tint);transform:scale(0);animation:ringPulse .7s var(--ease) forwards;pointer-events:none;`;
    a.appendChild(span);
    setTimeout(() => span.remove(), 720);
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={addRipple}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 20px",
        border: `1px solid ${hovered ? "var(--primary)" : "var(--border)"}`,
        borderRadius: 10,
        background: "var(--surface)",
        textDecoration: "none",
        color: "var(--text)",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        transition: "border-color .2s,transform .18s var(--ease)",
      }}
    >
      {children}
    </a>
  );
}
