import { Project } from "@/types";

/**
 * Generated artwork for each project — a stylised screenshot rendered as SVG so
 * the site stays a static export with no image assets to ship. Drop a real
 * screenshot at `public/...` and set `image` on the project to override it.
 */

const FRAME = "#0B0B0F";
const SURFACE = "#15151C";
const LINE = "#26262F";
const TEXT = "#5A5A68";

function Frame({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: string;
}) {
  const gradientId = `glow-${accent.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-auto"
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="800" height="500" rx="20" fill={FRAME} />
      <rect width="800" height="500" rx="20" fill={`url(#${gradientId})`} />
      <rect
        x="0.5"
        y="0.5"
        width="799"
        height="499"
        rx="19.5"
        fill="none"
        stroke={LINE}
      />

      {/* Window chrome */}
      <circle cx="26" cy="26" r="5" fill="#3A3A45" />
      <circle cx="44" cy="26" r="5" fill="#3A3A45" />
      <circle cx="62" cy="26" r="5" fill="#3A3A45" />
      <rect x="90" y="19" width="140" height="14" rx="7" fill={SURFACE} />

      <g transform="translate(0, 52)">{children}</g>
    </svg>
  );
}

function StreamClipArt({ accent }: { accent: string }) {
  return (
    <>
      {/* Source VOD strip */}
      <rect x="32" y="24" width="330" height="150" rx="10" fill={SURFACE} />
      <rect x="48" y="40" width="80" height="10" rx="5" fill={TEXT} />
      {Array.from({ length: 26 }).map((_, i) => {
        const h = 10 + ((i * 37) % 60);
        return (
          <rect
            key={i}
            x={48 + i * 12}
            y={140 - h}
            width="6"
            height={h}
            rx="3"
            fill={accent}
            opacity={0.25 + ((i * 13) % 60) / 100}
          />
        );
      })}
      <rect x="150" y="62" width="70" height="86" rx="4" fill={accent} opacity="0.14" />
      <rect x="150" y="62" width="70" height="86" rx="4" fill="none" stroke={accent} />

      {/* Pipeline arrow */}
      <path
        d="M382 99 H 432"
        stroke={accent}
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <path d="M430 93 L 442 99 L 430 105 Z" fill={accent} />

      {/* Rendered vertical shorts */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${462 + i * 106}, 24)`}>
          <rect width="92" height="150" rx="10" fill={SURFACE} />
          <rect
            x="0.5"
            y="0.5"
            width="91"
            height="149"
            rx="9.5"
            fill="none"
            stroke={i === 0 ? accent : LINE}
          />
          <rect x="14" y="104" width="64" height="8" rx="4" fill={accent} opacity="0.9" />
          <rect x="24" y="120" width="44" height="8" rx="4" fill={accent} opacity="0.5" />
        </g>
      ))}

      {/* Selection manifest rows */}
      <rect x="32" y="200" width="736" height="216" rx="10" fill={SURFACE} />
      <rect x="52" y="220" width="120" height="10" rx="5" fill={TEXT} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(52, ${250 + i * 40})`}>
          <circle cx="8" cy="8" r="6" fill={i === 3 ? "#4B4B57" : accent} />
          <rect x="26" y="3" width={220 - i * 28} height="10" rx="5" fill={TEXT} />
          <rect
            x={420}
            y="3"
            width={i === 3 ? 60 : 92}
            height="10"
            rx="5"
            fill={i === 3 ? "#3A3A45" : accent}
            opacity={i === 3 ? 1 : 0.55}
          />
          <rect x={570 + (i % 2) * 20} y="3" width="70" height="10" rx="5" fill="#2E2E38" />
        </g>
      ))}
    </>
  );
}

function TutorRevArt({ accent }: { accent: string }) {
  return (
    <>
      <rect x="32" y="24" width="736" height="64" rx="10" fill={SURFACE} />
      <rect x="52" y="46" width="150" height="12" rx="6" fill={TEXT} />
      <rect x="620" y="40" width="128" height="24" rx="12" fill={accent} opacity="0.85" />

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(32, ${108 + i * 104})`}>
          <rect width="736" height="88" rx="10" fill={SURFACE} />
          <rect x="20" y="20" width="48" height="48" rx="24" fill={accent} opacity={0.2 + i * 0.15} />
          <rect x="86" y="24" width={260 - i * 40} height="12" rx="6" fill={TEXT} />
          <rect x="86" y="48" width={420 - i * 60} height="10" rx="5" fill="#33333D" />
          {/* Star rating */}
          {Array.from({ length: 5 }).map((_, s) => (
            <path
              key={s}
              transform={`translate(${600 + s * 26}, 34) scale(0.9)`}
              d="M9 0 L11.5 6 L18 6.6 L13 11 L14.6 17.4 L9 14 L3.4 17.4 L5 11 L0 6.6 L6.5 6 Z"
              fill={s <= 3 - i + 1 ? accent : "#33333D"}
            />
          ))}
        </g>
      ))}
    </>
  );
}

function GhostGuardArt({ accent }: { accent: string }) {
  const badges = ["#34D399", "#F59E0B", "#F87171", "#34D399"];
  const scores = ["12", "48", "83", "21"];

  return (
    <>
      <rect x="32" y="24" width="736" height="52" rx="10" fill={SURFACE} />
      <rect x="52" y="43" width="180" height="14" rx="7" fill={TEXT} />
      <rect x="676" y="38" width="72" height="24" rx="12" fill={accent} opacity="0.85" />

      {badges.map((color, i) => (
        <g key={i} transform={`translate(32, ${96 + i * 84})`}>
          <rect width="736" height="68" rx="10" fill={SURFACE} />
          <rect x="20" y="16" width="36" height="36" rx="8" fill="#2A2A34" />
          <rect x="74" y="18" width={230 - i * 22} height="12" rx="6" fill={TEXT} />
          <rect x="74" y="42" width={340 - i * 30} height="9" rx="4.5" fill="#33333D" />

          {/* Legitimacy badge */}
          <rect x="620" y="18" width="96" height="32" rx="16" fill={color} opacity="0.16" />
          <circle cx="642" cy="34" r="7" fill={color} />
          <text
            x="660"
            y="39"
            fill={color}
            fontSize="15"
            fontFamily="ui-monospace, monospace"
          >
            {scores[i]}
          </text>
        </g>
      ))}
    </>
  );
}

function QuestionsArt({ accent }: { accent: string }) {
  return (
    <>
      {/* Progress */}
      <rect x="32" y="24" width="736" height="8" rx="4" fill={SURFACE} />
      <rect x="32" y="24" width="430" height="8" rx="4" fill={accent} />

      <rect x="32" y="56" width="736" height="360" rx="14" fill={SURFACE} />
      <rect x="60" y="84" width="90" height="22" rx="11" fill={accent} opacity="0.18" />
      <rect x="60" y="128" width="560" height="14" rx="7" fill="#4A4A57" />
      <rect x="60" y="156" width="400" height="14" rx="7" fill="#3A3A45" />

      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(60, ${204 + i * 52})`}>
          <rect
            width="680"
            height="40"
            rx="10"
            fill={i === 1 ? accent : "#1D1D25"}
            opacity={i === 1 ? 0.16 : 1}
          />
          <rect
            x="0.5"
            y="0.5"
            width="679"
            height="39"
            rx="9.5"
            fill="none"
            stroke={i === 1 ? accent : "transparent"}
          />
          <circle
            cx="24"
            cy="20"
            r="8"
            fill="none"
            stroke={i === 1 ? accent : "#3A3A45"}
            strokeWidth="2"
          />
          {i === 1 && <circle cx="24" cy="20" r="4" fill={accent} />}
          <rect x="48" y="14" width={300 - i * 44} height="12" rx="6" fill={TEXT} />
        </g>
      ))}
    </>
  );
}

function ScannerArt({ accent }: { accent: string }) {
  return (
    <>
      {/* Channel header */}
      <rect x="32" y="24" width="736" height="48" rx="10" fill={SURFACE} />
      <rect x="52" y="42" width="14" height="14" rx="3" fill={TEXT} />
      <rect x="78" y="42" width="150" height="13" rx="6.5" fill={TEXT} />

      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(32, ${92 + i * 112})`}>
          <rect width="736" height="96" rx="10" fill={SURFACE} />
          <rect x="4" width="3" height="96" rx="1.5" fill={accent} />
          <circle cx="42" cy="30" r="14" fill={accent} opacity={0.25 + i * 0.15} />
          <rect x="68" y="18" width="120" height="11" rx="5.5" fill={TEXT} />
          <rect x="200" y="18" width="70" height="11" rx="5.5" fill={accent} opacity="0.6" />
          <rect x="68" y="44" width={360 - i * 50} height="11" rx="5.5" fill="#3E3E4A" />
          <rect x="68" y="66" width="88" height="16" rx="8" fill="#2A2A34" />
          <rect x="166" y="66" width="72" height="16" rx="8" fill="#2A2A34" />
          <rect x="640" y="62" width="76" height="22" rx="11" fill={accent} opacity="0.2" />
        </g>
      ))}
    </>
  );
}

function CryptoArt({ accent }: { accent: string }) {
  const points = "52,150 132,118 212,132 292,86 372,104 452,58 532,72 612,34 692,46";
  return (
    <>
      <rect x="32" y="24" width="736" height="160" rx="12" fill={SURFACE} />
      <polyline
        points={points}
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points={`${points} 692,168 52,168`} fill={accent} opacity="0.12" />

      <rect x="32" y="204" width="736" height="212" rx="12" fill={SURFACE} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(56, ${232 + i * 46})`}>
          <rect y="4" width="120" height="11" rx="5.5" fill={TEXT} />
          <rect x="160" y="4" width="180" height="11" rx="5.5" fill="#33333D" />
          <rect x="384" y="4" width="90" height="11" rx="5.5" fill="#33333D" />
          <rect
            x={560}
            y="0"
            width="128"
            height="20"
            rx="10"
            fill={i % 3 === 2 ? "#F87171" : accent}
            opacity="0.22"
          />
        </g>
      ))}
    </>
  );
}

const ART: Record<string, (p: { accent: string }) => React.JSX.Element> = {
  streamclip: StreamClipArt,
  tutorrev: TutorRevArt,
  ghostguard: GhostGuardArt,
  questions: QuestionsArt,
  "internship-scanner": ScannerArt,
  "crypto-tax": CryptoArt,
};

export default function ProjectArt({ project }: { project: Project }) {
  if (project.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        className="w-full h-auto rounded-[20px] border border-white/10"
      />
    );
  }

  const Art = ART[project.slug];
  if (!Art) return null;

  return (
    <Frame accent={project.accent}>
      <Art accent={project.accent} />
    </Frame>
  );
}
