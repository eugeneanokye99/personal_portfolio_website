"use client";

import { useEffect, useState } from "react";
import { rolesData } from "@/lib/data";

/** Types and deletes each role in `roles`, cycling forever. */
export function RoleTypewriter({ roles = rolesData }: { roles?: string[] }) {
  const [text, setText] = useState("");

  useEffect(() => {
    let r = 0;
    let c = 0;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const word = roles[r];
      c += deleting ? -1 : 1;
      setText(word.slice(0, c));
      let d = deleting ? 45 : 85;
      if (!deleting && c === word.length) {
        d = 1500;
        deleting = true;
      } else if (deleting && c === 0) {
        deleting = false;
        r = (r + 1) % roles.length;
        d = 350;
      }
      timer = window.setTimeout(tick, d);
    };
    tick();

    return () => clearTimeout(timer);
  }, [roles]);

  return <span style={{ color: "var(--text)" }}>{text}</span>;
}
