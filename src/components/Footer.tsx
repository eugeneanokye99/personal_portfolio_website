import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 2, borderTop: "1px solid var(--border)", background: "var(--surface)", overflow: "hidden" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "repeating-linear-gradient(0deg,transparent 0 2px,var(--grid) 2px 3px)",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: "var(--maxw)",
          margin: "0 auto",
          padding: "26px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text2)" }}>
          © 2025 Eugene Dokye Anokye <span style={{ color: "var(--border)" }}>·</span> built with precision
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <a href={socialLinks.github} target="_blank" rel="noopener" style={{ color: "var(--text2)", textDecoration: "none" }}>
            github
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener" style={{ color: "var(--text2)", textDecoration: "none" }}>
            linkedin
          </a>
          <a href={socialLinks.leetcode} target="_blank" rel="noopener" style={{ color: "var(--text2)", textDecoration: "none" }}>
            leetcode
          </a>
          <a href="#hero" style={{ color: "var(--primary)", textDecoration: "none" }}>
            ↑ top
          </a>
        </div>
      </div>
    </footer>
  );
}
