"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { TerminalBio } from "./TerminalBio";

export function About() {
  return (
    <section id="about" className="section">
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

      <div className="grid-about">
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
                  alt="Eugene Dokye Anokye"
                  fill
                  sizes="74px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 18, color: "var(--text)" }}>
                Eugene Dokye Anokye
              </div>
              <div style={{ fontFamily: "var(--font-code)", fontSize: 13, color: "var(--text2)" }}>
                Full-Stack Software Engineer
              </div>
            </div>
          </div>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text2)", margin: "0 0 18px" }}>
            Five years in, I build across the stack: Spring Boot and Java on the backend, React and
            TypeScript up front, with Django and Node.js in the mix whenever a problem calls for it.
            I think in services, contracts, and failure modes, but I&apos;m just as comfortable
            chasing a Core Web Vitals regression as I am hardening a REST API.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text2)", margin: "0 0 18px" }}>
            Most of that work has happened inside agile teams: standups, sprint planning, retros,
            the whole rhythm. I collaborate closely with designers, product owners, and other
            engineers, and I&apos;d rather flag a blocker early than surprise someone at review
            time. I&apos;ve led cross-functional teams and mentored junior developers, and the
            mentoring side is genuinely one of my favorite parts of the job.
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--text2)", margin: 0 }}>
            I&apos;m a committed learner: daily algorithm practice, ongoing system design study, and
            a habit of picking apart unfamiliar codebases just to understand how they think.
            Automated testing with JUnit and disciplined Git workflows keep that curiosity from
            turning into chaos, and I care about clean code because the next engineer to read it
            deserves a good day.
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
