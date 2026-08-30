"use client";

import { useEffect, useState } from "react";
import { bioLines } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

/** Line-by-line typed terminal bio, triggered once the card scrolls into view. */
export function TerminalBio() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    let i = 0;
    let timer: number;
    const add = () => {
      if (i >= bioLines.length) return;
      setShown((s) => Math.max(s, i + 1));
      const isCommand = bioLines[i].prefix === "$";
      i++;
      timer = window.setTimeout(add, isCommand ? 420 : 200);
    };
    add();
    return () => clearTimeout(timer);
  }, [inView, started]);

  return (
    <div
      ref={ref}
      style={{
        padding: "20px 22px",
        fontFamily: "var(--font-code)",
        fontSize: 13.5,
        lineHeight: 1.95,
        minHeight: 300,
        color: "var(--text)",
      }}
    >
      {bioLines.slice(0, shown).map((line, i) => (
        <div key={i} style={{ opacity: 1, transition: "opacity .3s" }}>
          <span style={{ color: line.prefix === "$" ? "var(--primary)" : "var(--text2)" }}>
            {line.prefix}
          </span>
          <span style={{ color: line.color || "var(--text)" }}>
            {line.cursor ? (
              <>
                {line.text.replace("_", "")}
                <span
                  style={{
                    background: "var(--primary)",
                    color: "transparent",
                    animation: "blink 1s step-end infinite",
                  }}
                >
                  _
                </span>
              </>
            ) : (
              line.text
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
