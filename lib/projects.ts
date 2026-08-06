import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "streamclip",
    name: "StreamClip",
    tagline: "Twitch VOD to vertical Shorts pipeline",
    description:
      "Takes a Twitch VOD URL and returns captioned 9:16 clips. A worker transcribes the stream, an LLM proposes candidate moments, deterministic checks verify each one, and accepted clips are rendered vertically with captions. A separate Next.js service handles accounts, billing, and the dashboard.",
    context:
      "Manual clipping means scrubbing hours of VOD, and existing auto-clippers cut moments that have no setup or payoff.",
    bullets: [
      "Downloads the VOD with yt-dlp and transcribes it with faster-whisper, then combines transcript text with chat activity and viewer-clip density to nominate candidate moments.",
      "An LLM proposes complete trigger/reaction/payoff arcs; deterministic gates then re-verify timestamps, speaker roles, and speech boundaries on the post-cut timeline and reject anything that fails.",
      "Renders 9:16 with burned-in captions, runs media and OCR quality checks, and refills rejected slots from a ranked bench so a run does not ship short.",
      "Every batch writes a selection manifest recording why each candidate was accepted or rejected.",
      "Dashboard queues runs, streams pipeline stage progress, and offers a timeline editor that applies edits to a lightweight proxy in-browser rather than re-rendering.",
      "Worker and web service deploy separately and share only a documented Supabase and R2 contract, with atomic credit RPCs and heartbeat checks between them.",
    ],
    stack: [
      { group: "Worker", items: ["Python", "yt-dlp", "faster-whisper", "FFmpeg", "OpenCV", "NumPy", "httpx", "PyYAML"] },
      { group: "Models", items: ["Anthropic API", "OpenAI API"] },
      { group: "Web", items: ["Next.js 16", "React 19", "Tailwind CSS", "PostCSS"] },
      { group: "Data", items: ["Supabase (Postgres)", "@supabase/ssr", "Cloudflare R2", "AWS SDK S3 client", "Presigned URLs"] },
      { group: "Integrations", items: ["Stripe", "Twitch EventSub"] },
      { group: "Infra", items: ["Vercel", "Separate worker deploy"] },
    ],
    accent: "#8B5CF6",
    image: "/projects/streamclip.jpg",
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
      "A full-stack application where students rate and review online programming tutorials. Spring Boot REST API, MongoDB storage, React front end, deployed and publicly reachable.",
    context:
      "View counts say nothing about whether a tutorial is current, complete, or worth the time it takes.",
    bullets: [
      "Spring Boot REST API with Spring Security, issuing JWTs for session auth and supporting Google OAuth as an alternative sign-in path.",
      "MongoDB stores tutorials, reviews, and users; reviews are tied to the authenticated account rather than submitted anonymously.",
      "Community-submitted tutorials with star ratings, difficulty levels, tag filtering, and search across title, channel, and topic.",
      "Rankings view orders tutorials by aggregate rating so the list reflects what other learners finished.",
      "React front end deployed separately from the API, which runs on Render.",
    ],
    stack: [
      { group: "API", items: ["Java", "Spring Boot", "Spring Web MVC", "Spring Security", "Spring OAuth2 Client", "Spring Mail", "Lombok", "Maven"] },
      { group: "Auth", items: ["JJWT (api / impl / jackson)", "Google OAuth2"] },
      { group: "Data", items: ["MongoDB", "Spring Data MongoDB"] },
      { group: "Frontend", items: ["React", "React Router", "Vite", "Axios", "Tailwind CSS", "PostCSS"] },
      { group: "Infra", items: ["Docker", "Render"] },
    ],
    accent: "#38BDF8",
    image: "/projects/tutorrev-tutorials.jpg",
    links: [
      { label: "Live site", href: "https://www.tutorrev.live" },
      { label: "GitHub", href: "https://github.com/skarazan/TutorRev" },
    ],
    stats: [
      { value: "REST", label: "Spring Boot API" },
      { value: "OAuth", label: "and JWT auth" },
    ],
  },
  {
    slug: "questions",
    name: "QuestionS",
    tagline: "Practice question and course platform",
    description:
      "A Next.js platform for practice questions and courses, with Google sign-in, an admin surface for authoring content, subscription tiers, and a seeded SAT math course. Deployed on Render.",
    context:
      "Built to take real sign-ups, so the input validation and access-control work came before the feature work.",
    bullets: [
      "Google OAuth sign-in through NextAuth; the server always reads the user ID from the session rather than the request body.",
      "Prisma over PostgreSQL on Neon, with Supabase Storage holding question images.",
      "Every string field is validated by Zod with DOMPurify sanitization and null-byte rejection before it reaches the database.",
      "Admin-only routes check the session role server-side through a shared guard rather than hiding UI.",
      "API errors are logged in full server-side with the request path and returned to the client as a generic message.",
      "Rate limiting on account endpoints through Upstash Redis, with an in-memory limiter as the fallback when Redis is not configured.",
    ],
    stack: [
      { group: "App", items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Base UI", "lucide-react", "sonner", "next-themes"] },
      { group: "Auth", items: ["NextAuth", "@auth/prisma-adapter", "Google OAuth", "bcryptjs"] },
      { group: "Data", items: ["Prisma", "@prisma/adapter-pg", "PostgreSQL (Neon)", "Supabase Storage"] },
      { group: "Validation", items: ["Zod", "react-hook-form", "isomorphic-dompurify", "rehype-sanitize", "react-markdown"] },
      { group: "Limits", items: ["@upstash/ratelimit", "@upstash/redis", "in-memory fallback"] },
      { group: "Infra", items: ["Render"] },
    ],
    accent: "#34D399",
    image: "/projects/questions.jpg",
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
    slug: "ghostguard",
    name: "GhostGuard",
    tagline: "Chrome extension that scores job listings",
    description:
      "Scores every job listing on LinkedIn, Indeed, and Glassdoor as it loads, and shows the result as a colored badge on each job card.",
    context:
      "Ghost jobs are listings posted with no intent to hire, and nothing on the listing page distinguishes them from active ones.",
    bullets: [
      "Twenty-one weighted signals produce a 0–100 score: posting age, repost status, salary disclosure, applicant volume, description length, visible hiring manager, external apply links, stack specificity, and others.",
      "Signals cut both ways — a disclosed salary range subtracts 20 points, a posting older than 90 days adds 35.",
      "Per-board scrapers read each site's own card markup; a MutationObserver re-scores cards as the feed lazy-loads more results.",
      "Badge colors split at 30 and 60: green for likely real, yellow for caution, red for likely ghost. Hover shows the top contributing signals, click opens the full breakdown.",
      "Scores are cached in extension storage so revisited listings do not need re-scoring.",
    ],
    stack: [
      { group: "Extension", items: ["JavaScript", "Chrome Manifest V3", "Content scripts", "Service worker", "Popup UI", "CSP: script-src 'self'"] },
      { group: "Browser APIs", items: ["chrome.storage", "activeTab", "MutationObserver", "DOM scraping"] },
      { group: "Scrapers", items: ["LinkedIn", "Indeed", "Glassdoor"] },
      { group: "Scoring", items: ["21-signal weighted scorer", "Buzzword list", "Tech-keyword list", "Known-ghoster list"] },
    ],
    accent: "#F59E0B",
    links: [{ label: "GitHub", href: "https://github.com/skarazan/ghostguard" }],
    stats: [
      { value: "21", label: "scored signals" },
      { value: "3", label: "job boards" },
    ],
  },
  {
    slug: "internship-scanner",
    name: "Internship Scanner",
    tagline: "Scheduled internship listing scanner",
    description:
      "Searches for software engineering and data science internships every hour on weekdays and posts new matches to Discord. Runs entirely on GitHub Actions with no server.",
    context:
      "Internship postings fill quickly, and JSearch aggregates LinkedIn, Indeed, Glassdoor, and ZipRecruiter behind one query.",
    bullets: [
      "Runs on a GitHub Actions cron, hourly from 8am to 5pm EDT, Monday through Friday.",
      "Filters results to NYC metro and remote-USA roles and drops PhD-only listings.",
      "Deduplicates against four sibling internship repositories so the same posting is not announced twice.",
      "Two RapidAPI keys split the software engineering and data science queries to stay inside per-key rate limits.",
      "New listings are posted to a Discord channel through a webhook; state lives in the repository, so there is nothing to host.",
    ],
    stack: [
      { group: "Runtime", items: ["Python 3.12"] },
      { group: "Data source", items: ["JSearch API", "RapidAPI", "Two-key rotation"] },
      { group: "Automation", items: ["GitHub Actions", "cron schedule", "actions/checkout", "actions/setup-python"] },
      { group: "Output", items: ["Discord webhooks", "Cross-repo deduplication"] },
    ],
    accent: "#F472B6",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/skarazan/jsearch-internship-scanner",
      },
    ],
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
      "Reconstructs cost basis across several Solana wallets and writes realized profit and loss to CSV.",
    context:
      "Activity spread across multiple wallets makes cost basis impractical to reconstruct by hand at tax time.",
    bullets: [
      "Pulls full transaction history per wallet through the Helius API and parses the on-chain instruction data.",
      "Treats transfers between the owner's own wallets as internal moves rather than taxable disposals.",
      "Matches disposals against acquisitions in FIFO order, with historical price lookups, to compute realized profit and loss per position.",
      "Writes a CSV that can be handed to tax software or an accountant directly.",
    ],
    stack: [
      { group: "Runtime", items: ["Python", "requests"] },
      { group: "Chain data", items: ["Helius API", "Solana RPC", "Transfer and deposit parsing"] },
      { group: "Accounting", items: ["FIFO cost basis", "Realized P&L", "Price lookups"] },
      { group: "Output", items: ["CSV report"] },
    ],
    accent: "#A3E635",
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
