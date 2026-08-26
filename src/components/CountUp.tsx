"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

export function CountUp({ target, prefix = "" }: { target: number; prefix?: string }) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const steps = 34;
    const dur = 1300;
    const t0 = Date.now();
    let timer: number;
    const tick = () => {
      const p = Math.min((Date.now() - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) timer = window.setTimeout(tick, dur / steps);
      else setDisplay(target);
    };
    tick();
    return () => clearTimeout(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
    </span>
  );
}
