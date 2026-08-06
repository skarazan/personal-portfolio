export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectStat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Why the project exists. */
  context: string;
  /** How it works, or a notable implementation detail. */
  detail: string;
  tech: string[];
  /** Hex color used for glow, chips, and section accents. */
  accent: string;
  links: ProjectLink[];
  stats: ProjectStat[];
  /** Optional path under /public — overrides the generated artwork. */
  image?: string;
};
