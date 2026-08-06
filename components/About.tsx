import Reveal from "./Reveal";

const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "Node.js", "REST APIs", "JWT", "OAuth", "Prisma"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Supabase"] },
  { group: "Infra", items: ["Docker", "GitHub Actions", "Vercel", "Render", "Cloudflare R2", "AWS"] },
  { group: "Other", items: ["LLM APIs", "FFmpeg", "Chrome Extensions", "Stripe"] },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal from="up">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Background
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal from="left" delay={80}>
            <p className="text-xl leading-relaxed text-white/80 sm:text-2xl">
              Computer Science student working mainly on backend systems: APIs,
              scheduled jobs, and data pipelines, with Next.js front ends where a
              project needs one.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-white/55">
              Each project listed here started as a problem I ran into —
              filtering ghost job listings, cutting clips out of long VODs,
              finding internship postings before they close, reconstructing
              cost basis across wallets. Java and Spring Boot or Python on the
              server side, TypeScript and Next.js on the client.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-white/55">
              Looking for software engineering internships for Summer 2027.
            </p>
          </Reveal>

          <Reveal from="right" delay={160}>
            <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {SKILLS.map((skill) => (
                <div
                  key={skill.group}
                  className="border-t border-white/10 pt-4"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                    {skill.group}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/75">
                    {skill.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
