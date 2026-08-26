"use client";

import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal style={{ fontFamily: "var(--font-mono)", color: "var(--primary)", fontSize: 13, marginBottom: 8 }}>
        // pinned_repos[]
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
        Things I&#39;ve built
      </Reveal>
      <div className="grid-projects">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
