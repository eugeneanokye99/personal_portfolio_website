"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

type Node = { x: number; y: number; l: string };
type Edge = { a: Node; b: Node; off: number };

const COLS: Node[][] = [
  [{ x: 0.1, y: 0.5, l: "client" }],
  [{ x: 0.34, y: 0.5, l: "gateway" }],
  [
    { x: 0.62, y: 0.24, l: "auth" },
    { x: 0.62, y: 0.5, l: "orders" },
    { x: 0.62, y: 0.76, l: "catalog" },
  ],
  [
    { x: 0.88, y: 0.34, l: "db" },
    { x: 0.88, y: 0.66, l: "cache" },
  ],
];

/** Animated client → gateway → services → db node graph illustrating the backend's shape. */
export function HeroCanvas() {
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

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: Node[] = [];
    COLS.forEach((col) => col.forEach((n) => nodes.push(n)));
    const edges: Edge[] = [];
    for (let ci = 0; ci < COLS.length - 1; ci++) {
      COLS[ci].forEach((a) =>
        COLS[ci + 1].forEach((b) => edges.push({ a, b, off: Math.random() }))
      );
    }

    let t = 0;
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const P = primaryRef.current;

      edges.forEach((e) => {
        const ax = e.a.x * W;
        const ay = e.a.y * H;
        const bx = e.b.x * W;
        const by = e.b.y * H;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.strokeStyle = "rgba(120,130,210,0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const prog = (t * 0.006 + e.off) % 1;
        const px = ax + (bx - ax) * prog;
        const py = ay + (by - ay) * prog;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = P;
        ctx.shadowColor = P;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      nodes.forEach((n) => {
        const x = n.x * W;
        const y = n.y * H;
        const pulse = 1 + Math.sin(t * 0.04 + n.x * 10) * 0.12;
        ctx.beginPath();
        ctx.arc(x, y, 7 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = P;
        ctx.shadowColor = P;
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(x, y, 13, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(120,130,210,0.30)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = "rgba(136,144,204,0.85)";
        ctx.textAlign = "center";
        ctx.fillText(n.l, x, y + 26);
      });

      t++;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: "100%", height: 440, display: "block" }} />;
}
