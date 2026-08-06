"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Milliseconds to stagger this element behind its neighbours. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "up" | "left" | "right" | "scale";
  className?: string;
};

const OFFSCREEN: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate3d(0, 48px, 0)",
  left: "translate3d(-48px, 0, 0)",
  right: "translate3d(48px, 0, 0)",
  scale: "scale(0.94)",
};

export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Show immediately when motion is unwanted, and when the element is
    // already in or above the viewport — an anchor jump can land past an
    // element without it ever intersecting, stranding it at opacity 0.
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || el.getBoundingClientRect().top < window.innerHeight) {
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : OFFSCREEN[from],
        filter: shown ? "none" : "blur(6px)",
        transition:
          "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1), filter 900ms ease",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
