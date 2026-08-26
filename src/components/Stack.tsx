"use client";

import { Reveal } from "./Reveal";
import { StackCategory } from "./StackCategory";
import { stackData } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" style={{ maxWidth: "var(--maxw)", margin: "0 auto", padding: "100px 28px" }}>
      <Reveal style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 13, marginBottom: 8 }}>
        // tech_stack.json
      </Reveal>
      <Reveal
        as="h2"
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: 800,
          fontSize: "clamp(28px,4vw,42px)",
          letterSpacing: "-.03em",
          margin: "0 0 8px",
          color: "var(--text)",
        }}
      >
        The toolchain
      </Reveal>
      <Reveal as="p" style={{ fontFamily: "var(--font-code)", color: "var(--text2)", fontSize: 13.5, margin: "0 0 40px" }}>
        // proficiency fills as you scroll · click a block to collapse
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        {stackData.map((category) => (
          <StackCategory key={category.key} category={category} />
        ))}
      </div>
    </section>
  );
}
