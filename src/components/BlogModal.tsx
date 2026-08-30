"use client";

import { useEffect } from "react";
import type { Post } from "@/lib/blog";

export function BlogModal({ post, onClose }: { post: Post | null; onClose: () => void }) {
  useEffect(() => {
    if (!post) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "color-mix(in srgb,var(--bg) 60%,#000 40%)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "64px 20px",
        animation: "fadeIn .2s var(--ease)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="blog-modal-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 720,
          maxHeight: "calc(100vh - 128px)",
          overflowY: "auto",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 14,
          padding: "36px 36px 44px",
          boxShadow: "0 32px 64px -24px var(--glow)",
          animation: "modalIn .25s var(--ease)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "sticky",
            top: 0,
            float: "right",
            marginLeft: 12,
            width: 34,
            height: 34,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--border)",
            background: "var(--surface-2)",
            color: "var(--text2)",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          ✕
        </button>

        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text2)", marginBottom: 10 }}>
          {formatDate(post.date)}
        </div>
        <h2
          id="blog-modal-title"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 800,
            fontSize: "clamp(22px,3.4vw,30px)",
            letterSpacing: "-.03em",
            margin: "0 0 16px",
            color: "var(--text)",
          }}
        >
          {post.title}
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 32 }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".02em",
                color: "var(--code)",
                background: "color-mix(in srgb,var(--code) 12%,transparent)",
                border: "1px solid color-mix(in srgb,var(--code) 30%,transparent)",
                padding: "4px 9px",
                borderRadius: 6,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose-blog">{post.content}</div>
      </div>
    </div>
  );
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
