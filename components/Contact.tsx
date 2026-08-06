import Reveal from "./Reveal";

const LINKS = [
  { label: "Email", value: "skarazan@nyit.edu", href: "mailto:skarazan@nyit.edu" },
  { label: "GitHub", value: "github.com/skarazan", href: "https://github.com/skarazan" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saba-kara",
    href: "https://www.linkedin.com/in/saba-kara/",
  },
  { label: "Résumé", value: "resume.pdf", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 py-28 sm:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, #6D5BF7 0%, #1B7FD4 50%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal from="up">
          <h2 className="text-[clamp(1.9rem,5vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-white">
            Contact
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-white/55">
            Available for Summer 2027 software engineering internships. Email is
            the fastest way to reach me.
          </p>
        </Reveal>

        <Reveal from="up" delay={140}>
          <ul className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col items-start gap-1 bg-black px-6 py-6 text-left transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                    {link.label}
                  </span>
                  <span className="text-white/85 transition-colors group-hover:text-white">
                    {link.value}
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-16 font-mono text-[11px] tracking-widest text-white/25">
          BUILT WITH NEXT.JS · NEW YORK
        </p>
      </div>
    </section>
  );
}
