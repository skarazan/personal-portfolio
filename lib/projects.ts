import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "streamclip",
    name: "StreamClip",
    tagline: "Twitch VOD to vertical Shorts pipeline",
    description:
      "Takes a Twitch VOD URL and produces captioned 9:16 clips. The stream is transcribed, an LLM proposes candidate moments from the transcript and chat activity, deterministic checks verify each candidate's timestamps and speaker roles, and accepted clips are rendered with captions. A Next.js dashboard runs the pipeline and edits the results.",
    tech: ["Python", "FFmpeg", "Whisper", "LLM APIs", "Next.js", "Supabase", "Cloudflare R2", "Stripe"],
    accent: "#8B5CF6",
    image: "/projects/streamclip.jpg",
    context:
      "Manual clipping means scrubbing hours of VOD, and existing auto-clippers cut moments that have no setup or payoff.",
    detail:
      "Each run writes a selection manifest recording why every candidate was accepted or rejected. The worker and the web service deploy separately and communicate through a documented Supabase and R2 contract.",
    links: [
      { label: "Live site", href: "https://streamclip-alpha.vercel.app" },
      { label: "GitHub", href: "https://github.com/skarazan/streamclip" },
    ],
    stats: [
      { value: "9:16", label: "render format" },
      { value: "1–8", label: "clips per run" },
    ],
  },
  {
    slug: "tutorrev",
    name: "TutorRev",
    tagline: "Review platform for online tutorials",
    description:
      "A full-stack application where students rate and review online programming tutorials. Spring Boot REST API with JWT and OAuth authentication, MongoDB for storage, React front end. Deployed and publicly reachable.",
    tech: ["Java", "Spring Boot", "MongoDB", "JWT", "OAuth", "React"],
    accent: "#38BDF8",
    image: "/projects/tutorrev.jpg",
    context:
      "View counts say nothing about whether a tutorial is current, complete, or worth the time it takes.",
    detail:
      "Users authenticate through OAuth or email, post reviews tied to their account, and browse tutorials by rating.",
    links: [
      { label: "Live site", href: "https://www.tutorrev.live" },
      { label: "GitHub", href: "https://github.com/skarazan/TutorRev" },
    ],
    stats: [
      { value: "Spring", label: "Boot REST API" },
      { value: "OAuth", label: "and JWT auth" },
    ],
  },
  {
    slug: "ghostguard",
    name: "GhostGuard",
    tagline: "Chrome extension that scores job listings",
    description:
      "Scores every job listing on LinkedIn, Indeed, and Glassdoor as it loads. Twenty-one weighted signals — posting age, repost status, salary disclosure, applicant volume, description length, visible hiring manager, and others — produce a 0–100 score shown as a colored badge on each job card. Hovering shows the top contributing signals; clicking opens the full breakdown.",
    tech: ["JavaScript", "Chrome Extension APIs", "MutationObserver", "DOM scraping"],
    accent: "#F59E0B",
    context:
      "Ghost jobs are listings posted with no intent to hire. Nothing on the listing page distinguishes them from active ones.",
    detail:
      "Content scripts scrape each board's card markup, an observer re-scores cards as the feed loads more results, and scores are cached locally.",
    links: [{ label: "GitHub", href: "https://github.com/skarazan/ghostguard" }],
    stats: [
      { value: "21", label: "scored signals" },
      { value: "3", label: "job boards" },
    ],
  },
  {
    slug: "questions",
    name: "QuestionS",
    tagline: "Practice question and course platform",
    description:
      "A Next.js platform for practice questions and courses, with Google OAuth sign-in, an admin surface for authoring content, and a seeded SAT math course. Prisma over PostgreSQL on Neon, images in Supabase Storage, deployed on Render.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Zod", "Render"],
    accent: "#34D399",
    image: "/projects/questions.jpg",
    context:
      "Built to take real sign-ups, so the security work came before the feature work.",
    detail:
      "Every string field is validated and sanitized with Zod before it reaches the database, user IDs always come from the session rather than the request body, admin routes check role server-side, and API errors are logged in full server-side while returning a generic message to the client.",
    links: [
      { label: "Live site", href: "https://questions-tn0q.onrender.com" },
      { label: "GitHub", href: "https://github.com/skarazan/QuestionS" },
    ],
    stats: [
      { value: "OAuth", label: "Google sign-in" },
      { value: "Zod", label: "validated input" },
    ],
  },
  {
    slug: "internship-scanner",
    name: "Internship Scanner",
    tagline: "Scheduled internship listing scanner",
    description:
      "Searches the JSearch API for software engineering and data science internships every hour on weekdays, filters to NYC metro and remote-USA roles, excludes PhD-only listings, deduplicates against four sibling repositories, and posts new results to Discord. Runs entirely on GitHub Actions.",
    tech: ["Python", "JSearch API", "GitHub Actions", "Discord Webhooks"],
    accent: "#F472B6",
    context:
      "Internship postings fill quickly, and JSearch aggregates LinkedIn, Indeed, Glassdoor, and ZipRecruiter in one query.",
    detail:
      "Two RapidAPI keys split the SWE and data science queries to stay inside rate limits. No server or database — state lives in the repository.",
    links: [{ label: "GitHub", href: "https://github.com/skarazan/jsearch-internship-scanner" }],
    stats: [
      { value: "Hourly", label: "8am–5pm, Mon–Fri" },
      { value: "5", label: "repos deduplicated" },
    ],
  },
  {
    slug: "crypto-tax",
    name: "Crypto Tax Tool",
    tagline: "Multi-wallet Solana transaction analyzer",
    description:
      "Pulls transaction history for multiple Solana wallets through the Helius API, reconstructs cost basis across them, and writes realized profit and loss to CSV.",
    tech: ["Python", "Helius API", "Blockchain parsing"],
    accent: "#A3E635",
    context:
      "Activity spread across several wallets makes cost basis impractical to reconstruct by hand.",
    detail:
      "Handles transfers between the owner's own wallets so they are not counted as disposals.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/skarazan/solana-multi-wallet-tax-engine",
      },
    ],
    stats: [
      { value: "Multi", label: "wallet cost basis" },
      { value: "CSV", label: "output" },
    ],
  },
];
