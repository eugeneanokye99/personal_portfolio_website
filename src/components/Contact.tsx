"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { RippleLink } from "./RippleLink";
import { socialLinks } from "@/lib/data";

type SendState = "idle" | "sending" | "sent";

export function Contact() {
  const [sendState, setSendState] = useState<SendState>("idle");

  const handleSend = () => {
    setSendState("sending");
    setTimeout(() => setSendState("sent"), 1100);
    setTimeout(() => setSendState("idle"), 3000);
  };

  return (
    <section id="contact" className="section--contact">
      <Reveal style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 13, marginBottom: 8 }}>
        // reach_out()
      </Reveal>
      <Reveal
        as="h2"
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 800,
          fontSize: "clamp(30px,5vw,52px)",
          letterSpacing: "-.03em",
          margin: "0 0 18px",
          color: "var(--text)",
        }}
      >
        Let&#39;s build something solid
      </Reveal>
      <Reveal as="p" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text2)", maxWidth: 560, margin: "0 auto 40px" }}>
        Open to backend-heavy systems, APIs, distributed services, and clean-code collaborations.
      </Reveal>

      <Reveal
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          maxWidth: 440,
          margin: "0 auto 48px",
          fontFamily: "var(--font-code)",
          fontSize: 15,
        }}
      >
        <RippleLink href={socialLinks.linkedin}>
          <span style={{ color: "var(--primary)", fontWeight: 600 }}>linkedin</span>
          <span style={{ color: "var(--text2)" }}>.connect(</span>
          <span style={{ color: "var(--ok)" }}>&quot;eugene-anokye&quot;</span>
          <span style={{ color: "var(--text2)" }}>)</span>
          <span style={{ marginLeft: "auto", color: "var(--primary)" }}>↗</span>
        </RippleLink>
        <RippleLink href={socialLinks.github}>
          <span style={{ color: "var(--primary)", fontWeight: 600 }}>github</span>
          <span style={{ color: "var(--text2)" }}>.follow(</span>
          <span style={{ color: "var(--ok)" }}>&quot;eugeneanokye99&quot;</span>
          <span style={{ color: "var(--text2)" }}>)</span>
          <span style={{ marginLeft: "auto", color: "var(--primary)" }}>↗</span>
        </RippleLink>
        <RippleLink href={socialLinks.leetcode}>
          <span style={{ color: "var(--primary)", fontWeight: 600 }}>leetcode</span>
          <span style={{ color: "var(--text2)" }}>.solve(</span>
          <span style={{ color: "var(--ok)" }}>&quot;mR1Ju2yJLu&quot;</span>
          <span style={{ color: "var(--text2)" }}>)</span>
          <span style={{ marginLeft: "auto", color: "var(--primary)" }}>↗</span>
        </RippleLink>
      </Reveal>

      <Reveal
        style={{
          textAlign: "left",
          border: "1px solid var(--border)",
          borderRadius: 12,
          background: "var(--surface)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 18px",
            borderBottom: "1px solid var(--border)",
            background: "var(--surface-2)",
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
          }}
        >
          <span style={{ color: "var(--ok)", fontWeight: 700 }}>POST</span>
          <span style={{ color: "var(--text2)" }}>/api/v1/messages</span>
          <span style={{ marginLeft: "auto", color: "var(--text2)" }}>Content-Type: application/json</span>
        </div>
        <div style={{ padding: "22px 24px", fontFamily: "var(--font-code)", fontSize: 14, lineHeight: 2.1, color: "var(--text)" }}>
          <div style={{ color: "var(--text2)" }}>{"{"}</div>
          <div style={{ paddingLeft: 22, display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: "var(--primary)" }}>&quot;name&quot;</span>
            <span style={{ color: "var(--text2)" }}>:</span>
            <input
              placeholder="Ada Lovelace"
              style={{
                flex: 1,
                minWidth: 160,
                background: "transparent",
                border: "none",
                borderBottom: "1px dashed var(--border)",
                color: "var(--ok)",
                fontFamily: "inherit",
                fontSize: 14,
                padding: "2px 4px",
                outline: "none",
              }}
            />
            <span style={{ color: "var(--text2)" }}>,</span>
          </div>
          <div style={{ paddingLeft: 22, display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: "var(--primary)" }}>&quot;email&quot;</span>
            <span style={{ color: "var(--text2)" }}>:</span>
            <input
              type="email"
              placeholder="ada@example.com"
              style={{
                flex: 1,
                minWidth: 160,
                background: "transparent",
                border: "none",
                borderBottom: "1px dashed var(--border)",
                color: "var(--ok)",
                fontFamily: "inherit",
                fontSize: 14,
                padding: "2px 4px",
                outline: "none",
              }}
            />
            <span style={{ color: "var(--text2)" }}>,</span>
          </div>
          <div style={{ paddingLeft: 22, display: "flex", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
            <span style={{ color: "var(--primary)" }}>&quot;message&quot;</span>
            <span style={{ color: "var(--text2)" }}>:</span>
            <textarea
              rows={2}
              placeholder="Tell me about the system you're building..."
              style={{
                flex: 1,
                minWidth: 200,
                resize: "vertical",
                background: "transparent",
                border: "none",
                borderBottom: "1px dashed var(--border)",
                color: "var(--ok)",
                fontFamily: "inherit",
                fontSize: 14,
                padding: "2px 4px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ color: "var(--text2)" }}>{"}"}</div>
          <div style={{ marginTop: 18, display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={handleSend}
              disabled={sendState !== "idle"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                fontSize: 13.5,
                color: "#fff",
                background: sendState === "sent" ? "var(--ok)" : "var(--primary)",
                padding: "12px 22px",
                border: "none",
                borderRadius: 8,
                cursor: sendState === "idle" ? "pointer" : "default",
                boxShadow: "0 8px 26px -10px var(--glow)",
                transition: "transform .18s var(--ease), background-color .2s",
              }}
            >
              {sendState === "idle" && (
                <>
                  Send request <span>→</span>
                </>
              )}
              {sendState === "sending" && (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      width: 13,
                      height: 13,
                      border: "2px solid rgba(255,255,255,.4)",
                      borderTopColor: "#fff",
                      borderRadius: "50%",
                      animation: "spin .7s linear infinite",
                    }}
                  />
                  sending...
                </>
              )}
              {sendState === "sent" && <>✓ 201 Created</>}
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
