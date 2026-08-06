"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [lifted, setLifted] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.body.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setLifted(window.scrollY > 80);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = projects
      .map((p) => document.getElementById(p.slug))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Reading progress */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-white/70"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          lifted
            ? "border-b border-white/5 bg-black/60 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a
            href="#top"
            className="font-mono text-sm tracking-tight text-white/90 hover:text-white"
          >
            saba<span className="text-white/35">.k</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {projects.map((p) => (
              <li key={p.slug}>
                <a
                  href={`#${p.slug}`}
                  className={`rounded-full px-3 py-1.5 text-xs transition-colors duration-300 ${
                    active === p.slug
                      ? "bg-white/10 text-white"
                      : "text-white/45 hover:text-white/80"
                  }`}
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
          >
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
