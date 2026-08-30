"use client";

import { Reveal } from "./Reveal";
import { CertificationCard } from "./CertificationCard";
import { certificationsData } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <Reveal style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 13, marginBottom: 8 }}>
        // certifications[]
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
        Certifications
      </Reveal>

      <div className="grid-projects">
        {certificationsData.map((certification, i) => (
          <CertificationCard key={`${certification.name}-${i}`} certification={certification} />
        ))}
      </div>
    </section>
  );
}
