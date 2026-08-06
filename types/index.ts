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
  /** Concrete points about what it does and how it is built. */
  bullets: string[];
  tech: string[];
  /** Hex color used for glow, chips, and section accents. */
  accent: string;
  links: ProjectLink[];
  stats: ProjectStat[];
  /** Screenshot under /public. Projects without a public UI have none. */
  image?: string;
};
