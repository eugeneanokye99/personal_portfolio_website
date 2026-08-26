"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { CursorTrailer } from "./CursorTrailer";
import { CodeRain } from "./CodeRain";
import { ParallaxGrid } from "./ParallaxGrid";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Stack } from "./Stack";
import { Projects } from "./Projects";
import { Activity } from "./Activity";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { BootScreen } from "./BootScreen";

export function Portfolio() {
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
          <Projects />
          <Activity />
          <Contact />
        </main>

        <Footer />

        <BootScreen />
      </div>
    </ThemeProvider>
  );
}
