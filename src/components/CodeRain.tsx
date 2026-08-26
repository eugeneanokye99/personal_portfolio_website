"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const WORDS = [
  "Java", "@Service", "Spring", "public", "class", "void", "final", "REST",
  "JPA", "@Bean", "try", "catch", "POST", "GET", "null", "int", "String",
  "@Override", "docker", "SELECT", "JWT", "OAuth2", "async", "@Entity",
];

type Column = { x: number; y: number; sp: number; w: string };

/** Faint falling-code background, tinted with the current theme's primary color. */
export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { primaryColor } = useTheme();
  const primaryRef = useRef(primaryColor);

  useEffect(() => {
    primaryRef.current = primaryColor;
  }, [primaryColor]);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let cols: Column[] = [];

    const resize = () => {
      W = cv.width = window.innerWidth;
      H = cv.height = window.innerHeight;
      const n = Math.floor(W / 90);
      cols = Array.from({ length: n }, (_, i) => ({
        x: (i + 0.5) * (W / n),
        y: Math.random() * H,
        sp: 0.5 + Math.random() * 0.9,
        w: WORDS[Math.floor(Math.random() * WORDS.length)],
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    let raf = 0;
    const draw = () => {
      frame++;
      if (frame % 2 === 0) {
        ctx.clearRect(0, 0, W, H);
        ctx.font = '12px "Fira Code", monospace';
        ctx.fillStyle = primaryRef.current;
        cols.forEach((c) => {
          ctx.fillText(c.w, c.x, c.y);
          c.y += c.sp;
          if (c.y > H + 20) {
            c.y = -20;
            c.w = WORDS[Math.floor(Math.random() * WORDS.length)];
            c.x = Math.random() * W;
          }
        });
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.06,
      }}
    />
  );
}
