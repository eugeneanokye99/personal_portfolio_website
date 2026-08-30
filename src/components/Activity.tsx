"use client";

import { Reveal } from "./Reveal";
import { StatCard } from "./StatCard";
import { ContributionGraph, ContributionLegend } from "./ContributionGraph";
import { activityToStats, type GithubActivity } from "@/lib/github";

export function Activity({ activity }: { activity: GithubActivity | null }) {
  return (
    <section id="activity" className="section">
      <Reveal style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 13, marginBottom: 8 }}>
        // activity_log
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
        Shipping in public
      </Reveal>

      {activity ? (
        <>
          <div className="grid-stats" style={{ marginBottom: 34 }}>
            {activityToStats(activity).map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>

          <Reveal style={{ border: "1px solid var(--border)", borderRadius: 12, background: "var(--surface)", padding: "24px 26px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18, flexWrap: "wrap", gap: 10 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text)" }}>
                contributions <span style={{ color: "var(--text2)" }}>· last 12 months</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text2)" }}>
                less
                <ContributionLegend />
                more
              </div>
            </div>
            <ContributionGraph weeks={activity.weeks} />
          </Reveal>
        </>
      ) : (
        <Reveal
          style={{
            border: "1px solid var(--border)",
            borderRadius: 12,
            background: "var(--surface)",
            padding: "24px 26px",
            fontFamily: "var(--font-mono)",
            fontSize: 13.5,
            color: "var(--text2)",
          }}
        >
          // github activity data unavailable right now
        </Reveal>
      )}
    </section>
  );
}
