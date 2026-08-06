import { Project } from "@/types";
import Reveal from "./Reveal";
import ProjectArt from "./ProjectArt";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectSection({ project, index }: Props) {
  const flipped = index % 2 === 1;
  const hasImage = Boolean(project.image);

  return (
    <section
      id={project.slug}
      className="relative scroll-mt-24 border-t border-white/5 py-20 sm:py-28"
    >
      {/* Accent bloom behind the section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-[0.16] blur-[90px]"
        style={{
          background: `radial-gradient(60% 100% at ${flipped ? "80%" : "20%"} 0%, ${project.accent} 0%, transparent 70%)`,
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <Reveal from="up">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs tracking-[0.3em]"
              style={{ color: project.accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-10" style={{ background: project.accent }} />
          </div>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h2>
              <p className="mt-2 text-xl text-white/65">{project.tagline}</p>
            </div>

            <dl className="flex gap-8">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd
                    className="font-mono text-2xl font-medium"
                    style={{ color: project.accent }}
                  >
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* Summary, beside the screenshot when there is one */}
        <div
          className={
            hasImage
              ? "mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14"
              : "mt-10"
          }
        >
          <Reveal from={hasImage && flipped ? "right" : "left"} className={flipped ? "lg:order-2" : ""}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-white/60">
              {project.description}
            </p>
            <div className="mt-6 max-w-2xl border-l border-white/10 pl-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Why
              </p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-white/60">
                {project.context}
              </p>
            </div>
          </Reveal>

          {hasImage && (
            <Reveal from="scale" delay={100} className={flipped ? "lg:order-1" : ""}>
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
          )}
        </div>

        {/* Details */}
        <Reveal from="up" delay={80}>
          <ul className="mt-12 grid gap-x-12 gap-y-4 border-t border-white/10 pt-8 md:grid-cols-2">
            {project.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-[9px] h-1 w-1 shrink-0 rounded-full"
                  style={{ background: project.accent }}
                />
                <span className="text-[15px] leading-relaxed text-white/65">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Stack and links */}
        <Reveal from="up" delay={140}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6 border-t border-white/10 pt-8">
            <div className="flex-1 min-w-[16rem]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-white/60"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
