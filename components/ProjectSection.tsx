import { Project } from "@/types";
import Reveal from "./Reveal";
import ProjectArt from "./ProjectArt";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectSection({ project, index }: Props) {
  const flipped = index % 2 === 1;

  return (
    <section
      id={project.slug}
      className="relative scroll-mt-24 border-t border-white/5 py-24 sm:py-32"
    >
      {/* Accent bloom behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-[0.16] blur-[90px]"
        style={{
          background: `radial-gradient(60% 100% at ${flipped ? "80%" : "20%"} 0%, ${project.accent} 0%, transparent 70%)`,
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Copy */}
        <div className={flipped ? "lg:order-2" : ""}>
          <Reveal from={flipped ? "right" : "left"}>
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-xs tracking-[0.3em]"
                style={{ color: project.accent }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-10" style={{ background: project.accent }} />
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.name}
            </h2>
            <p className="mt-3 text-xl text-white/70 sm:text-2xl">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal from={flipped ? "right" : "left"} delay={120}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/55">
              {project.description}
            </p>

            <div className="mt-7 max-w-xl space-y-5 border-l border-white/10 pl-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Why
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-white/60">
                  {project.context}
                </p>
              </div>
              <div>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.22em]"
                  style={{ color: project.accent }}
                >
                  Notes
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">
                  {project.detail}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal from="up" delay={220}>
            <dl className="mt-8 flex gap-10">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd
                    className="font-mono text-3xl font-medium"
                    style={{ color: project.accent }}
                  >
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal from="up" delay={300}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-white/60"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from="up" delay={380}>
            <div className="mt-9 flex flex-wrap gap-3">
              {project.links.map((link, i) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? "rounded-full px-5 py-2.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
                      : "rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
                  }
                  style={i === 0 ? { background: project.accent } : undefined}
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Artwork */}
        <Reveal
          from="scale"
          delay={100}
          className={flipped ? "lg:order-1" : ""}
        >
          <div
            className="rounded-[24px] p-px"
            style={{
              background: `linear-gradient(140deg, ${project.accent}55, transparent 55%)`,
            }}
          >
            <div className="overflow-hidden rounded-[23px] bg-[#0B0B0F] shadow-2xl shadow-black/60">
              <ProjectArt project={project} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
