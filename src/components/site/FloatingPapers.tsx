import { useEffect, useMemo, useState } from "react";

/**
 * Softly floating paper sheets — subtle, ambient. Used between sections.
 */
export function FloatingPapers({ count = 6 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const sheets = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = 5 + Math.random() * 90;
        const top = Math.random() * 100;
        const dur = 14 + Math.random() * 10;
        const delay = -Math.random() * dur;
        const rot = (Math.random() - 0.5) * 30;
        const size = 60 + Math.random() * 80;
        const opacity = 0.06 + Math.random() * 0.08;
        return { i, left, top, dur, delay, rot, size, opacity };
      }),
    [count],
  );
  return (
    <div className="floating-papers" aria-hidden>
      {sheets.map((s) => (
        <span
          key={s.i}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size * 1.3,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
            opacity: s.opacity,
            ["--rot" as any]: `${s.rot}deg`,
          }}
        />
      ))}
    </div>
  );
}
