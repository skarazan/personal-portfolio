import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-[12%] -z-10 h-[520px] w-[680px] max-w-[120vw] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(closest-side, #6D5BF7 0%, #1B7FD4 50%, transparent 80%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-white/70">
              Looking for Summer 2027 software engineering internships
            </span>
          </div>

          <h1 className="mt-7 text-[clamp(2rem,4.2vw,3.1rem)] font-semibold leading-[1.08] tracking-tight text-white">
            Saba Karazanashvili
          </h1>
          <p className="mt-3 text-xl text-white/70">
            Computer Science student. Backend and full-stack development.
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-white/55">
            Six projects are listed below — what each one does, why it exists,
            and what it is built with. All six are on GitHub; three are
            deployed and linked.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#streamclip"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
            >
              Résumé
            </a>
            <a
              href="#contact"
              className="px-2 py-3 text-sm text-white/50 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Identity card */}
        <div className="lg:justify-self-end">
          <div className="rounded-[28px] bg-gradient-to-b from-white/12 to-transparent p-px">
            <div className="rounded-[27px] bg-[#0A0A0E]/90 p-7 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <Avatar size={72} />
                <div>
                  <p className="text-lg font-medium tracking-tight text-white">
                    Saba Karazanashvili
                  </p>
                  <p className="text-sm text-white/50">
                    New York · skarazan@nyit.edu
                  </p>
                </div>
              </div>

              <dl className="mt-7 space-y-3 text-sm">
                {[
                  ["Languages", "Java, Python, TypeScript, JavaScript, SQL"],
                  ["Backend", "Spring Boot, Node.js, Prisma, REST, OAuth"],
                  ["Frontend", "React, Next.js, Tailwind CSS"],
                  ["Deploys to", "Render, Vercel, GitHub Actions"],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-3">
                    <dt className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-wider text-white/35">
                      {label}
                    </dt>
                    <dd className="text-white/70">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                <a
                  href="mailto:skarazan@nyit.edu"
                  className="rounded-full border border-white/12 px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:border-white/35 hover:text-white"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/saba-kara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/12 px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:border-white/35 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/skarazan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/12 px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:border-white/35 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
