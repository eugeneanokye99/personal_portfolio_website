"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { BlogModal } from "./BlogModal";
import type { Post } from "@/lib/blog";

const PAGE_SIZE = 5;

export function Blog({ posts }: { posts: Post[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const activePost = posts.find((p) => p.slug === activeSlug) ?? null;
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <section id="blog" className="section">
      <Reveal style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 13, marginBottom: 8 }}>
        // posts[]
      </Reveal>
      <Reveal
        as="h2"
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 800,
          fontSize: "clamp(28px,4vw,42px)",
          letterSpacing: "-.03em",
          margin: "0 0 40px",
          color: "var(--text)",
        }}
      >
        Notes &amp; writing
      </Reveal>

      <div className="grid-blog">
        {visiblePosts.map((post) => (
          <Reveal
            key={post.slug}
            as="button"
            className="blog-card"
            onClick={() => setActiveSlug(post.slug)}
            style={{
              textAlign: "left",
              border: "1px solid var(--border)",
              borderRadius: 12,
              background: "var(--surface)",
              padding: "18px",
              cursor: "pointer",
              font: "inherit",
              color: "inherit",
              transition: "border-color .2s, transform .2s var(--ease)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text2)", marginBottom: 10 }}>
              {formatDate(post.date)}
            </div>
            <h3
              className="blog-card-clamp"
              style={{ margin: "0 0 10px", fontSize: 16, lineHeight: 1.35, fontWeight: 700, color: "var(--text)" }}
            >
              {post.title}
            </h3>
            <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 6 }}>
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: ".02em",
                    color: "var(--code)",
                    background: "color-mix(in srgb,var(--code) 12%,transparent)",
                    border: "1px solid color-mix(in srgb,var(--code) 30%,transparent)",
                    padding: "3px 7px",
                    borderRadius: 6,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {hasMore && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--primary)",
              background: "var(--tint)",
              border: "1px solid var(--primary)",
              borderRadius: 8,
              padding: "10px 22px",
              cursor: "pointer",
            }}
          >
            show more ⌄
          </button>
        </div>
      )}

      <BlogModal post={activePost} onClose={() => setActiveSlug(null)} />
    </section>
  );
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
