import Reveal from "./Reveal";

type Role = {
  title: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
};

const ROLES: Role[] = [
  {
    title: "Software Engineering Intern",
    org: "Hearst Magazines",
    location: "New York, NY",
    period: "June 2026 — Present",
    current: true,
    bullets: [
      "Work in a team of engineers on agile sprints, shipping front-end work in TypeScript, JavaScript, HTML, and CSS on Next.js in an AWS environment to improve sign-up conversion on a company website.",
      "Built a full-stack internal analytics platform with Node.js, React, and REST APIs, containerized with Docker and deployed through CI/CD pipelines, tracking LLM token usage to give leadership cost visibility.",
    ],
    tech: ["TypeScript", "Next.js", "React", "Node.js", "REST APIs", "AWS", "Docker", "CI/CD"],
  },
  {
    title: "Programming Instructor",
    org: "Coding Mind Academy",
    location: "Remote",
    period: "November 2025 — May 2026",
    bullets: [
      "Taught Java, Python, and generative AI to students by writing code together, using GitHub and CI/CD pipelines as part of the coursework.",
      "Worked from assessments and guidance from senior instructors to teach more effectively.",
    ],
    tech: ["Java", "Python", "Generative AI", "GitHub", "CI/CD"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/5 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal from="up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Experience
          </p>
        </Reveal>

        <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
          {ROLES.map((role, i) => (
            <Reveal key={role.org} from="up" delay={i * 90}>
              <div className="bg-black p-7 sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-white">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-white/60">
                      {role.org} · {role.location}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-sm text-white/45">
                    {role.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    )}
                    {role.period}
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-white/30"
                      />
                      <span className="max-w-3xl text-[15px] leading-relaxed text-white/65">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {role.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-white/55"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
