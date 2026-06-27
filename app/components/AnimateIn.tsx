"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function AnimateIn({ children, className = "", direction = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cls =
      direction === "left"
        ? "scroll-reveal-left"
        : direction === "right"
        ? "scroll-reveal-right"
        : "scroll-reveal";

    el.classList.add(cls);
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          io.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
