"use client";

import { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
};

/** Fades + slides content up once it scrolls into view — the site-wide reveal effect. */
export function Reveal({ children, as = "div", style, className }: RevealProps) {
  const [ref, revealed] = useInView<HTMLElement>();
  const Comp = as;
  return (
    <Comp
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "none" : "translateY(28px)",
        transition: "opacity .7s var(--ease), transform .7s var(--ease)",
        ...style,
      }}
    >
      {children}
    </Comp>
  );
}
