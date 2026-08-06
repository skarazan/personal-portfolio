"use client";

import { useState } from "react";

/**
 * Uses `public/profile.jpg` when it exists and falls back to a monogram, so the
 * page never ships a broken image if the photo has not been dropped in yet.
 */
export default function Avatar({ size = 96 }: { size?: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.06]"
      style={{ width: size, height: size }}
    >
      {failed ? (
        <span
          className="font-mono font-medium tracking-tight text-white/70"
          style={{ fontSize: size * 0.34 }}
        >
          SK
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/profile.jpg"
          alt="Saba Karazanashvili"
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
