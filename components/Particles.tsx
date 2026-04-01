"use client";

import { useMemo } from "react";

type Particle = {
  id: number;
  left: string;
  bottom: string;
  duration: string;
  delay: string;
  size: string;
  opacity: number;
};

export default function Particles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * -20}%`,
      duration: `${8 + Math.random() * 14}s`,
      delay: `${Math.random() * 10}s`,
      size: `${1 + Math.random() * 2}px`,
      opacity: 0.15 + Math.random() * 0.25,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
