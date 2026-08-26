"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { TerminalBio } from "./TerminalBio";

export function About() {
  return (
    <section id="about" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "100px 28px" }}>
      <Reveal style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 13, marginBottom: 8 }}>
        // about
      </Reveal>
      <Reveal
        as="h2"
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 800,
          fontSize: "clamp(28px,4vw,42px)",
          letterSpacing: "-.03em",
          margin: "0 0 44px",
          color: "var(--text)",
        }}
      >
        The engineer behind the commits
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "center" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
            <div style={{ position: "relative", width: 74, height: 74, flex: "none" }}>
              <div
                style={{
                  position: "absolute",
                  inset: -5,
                  borderRadius: "50%",
                  border: "2px solid var(--primary)",
                  animation: "glowPulse 3s var(--ease) infinite",
                }}
              />
              <div
                style={{
                  position: "relative",
                  width: 74,
                  height: 74,
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Eugene Anokye"
                  fill
                  sizes="74px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 18, color: "var(--text)" }}>
                Eugene Anokye
              </div>
              <div style={{ fontFamily: "var(--font-code)", fontSize: 13, color: "var(--text2)" }}>
                Backend Software Engineer · Amali-Tech
              </div>
            </div>
          </div>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text2)", margin: "0 0 18px" }}>
            I think in services, contracts, and failure modes. My work centers on the parts of a
            product users never see but always feel — the data models that stay sane at scale, the
            APIs that stay backward-compatible, the queues that absorb the spike.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text2)", margin: 0 }}>
            Lately that means Java and Spring Boot in production, sharpened by an ongoing habit of
            system-design study and daily algorithm practice. I care about clean code because the
            next engineer to read it deserves a good day.
          </p>
        </Reveal>

        <Reveal>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: 12,
              overflow: "hidden",
              background: "var(--surface)",
              boxShadow: "0 24px 60px -28px var(--glow)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface-2)",
              }}
            >
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: 8, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text2)" }}>
                bio.sh — zsh
              </span>
            </div>
            <TerminalBio />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
