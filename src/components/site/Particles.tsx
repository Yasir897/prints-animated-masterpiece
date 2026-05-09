import { useMemo } from "react";

export function Particles({ count = 24 }: { count?: number }) {
  const items = useMemo(() => Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const top = 60 + Math.random() * 40;
    const tx = (Math.random() - 0.5) * 200;
    const ty = -100 - Math.random() * 300;
    const delay = Math.random() * 12;
    const dur = 12 + Math.random() * 14;
    const size = 3 + Math.random() * 5;
    return { i, left, top, tx, ty, delay, dur, size };
  }), [count]);
  return (
    <div className="particles" aria-hidden>
      {items.map((p) => (
        <span
          key={p.i}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            ["--tx" as any]: `${p.tx}px`,
            ["--ty" as any]: `${p.ty}px`,
          }}
        />
      ))}
    </div>
  );
}
