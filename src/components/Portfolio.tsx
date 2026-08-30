"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { CursorTrailer } from "./CursorTrailer";
import { CodeRain } from "./CodeRain";
import { ParallaxGrid } from "./ParallaxGrid";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Stack } from "./Stack";
import { Certifications } from "./Certifications";
import { Projects } from "./Projects";
import { Activity } from "./Activity";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { BootScreen } from "./BootScreen";
import type { Post } from "@/lib/blog";
import type { GithubActivity } from "@/lib/github";

export function Portfolio({ posts, activity }: { posts: Post[]; activity: GithubActivity | null }) {
  return (
    <ThemeProvider>
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "var(--bg)",
          color: "var(--text)",
          transition: "background-color .5s var(--ease),color .5s var(--ease)",
        }}
      >
        <CodeRain />
        <ParallaxGrid />
        <CursorTrailer />

        <Navbar />

        <main style={{ position: "relative", zIndex: 2 }}>
          <Hero />
          <About />
          <Stack />
          <Certifications />
          <Projects />
          <Activity activity={activity} />
          <Blog posts={posts} />
          <Contact />
        </main>

        <Footer />

        <BootScreen />
      </div>
    </ThemeProvider>
  );
}
