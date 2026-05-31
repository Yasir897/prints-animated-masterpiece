import { useEffect, useState } from "react";

type P = { left: number; top: number; tx: number; ty: number; delay: number; dur: number; size: number };

export function Particles({ count = 24 }: { count?: number }) {
  const [items, setItems] = useState<P[] | null>(null);

  useEffect(() => {
    const arr: P[] = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: 60 + Math.random() * 40,
      tx: (Math.random() - 0.5) * 200,
      ty: -100 - Math.random() * 300,
      delay: Math.random() * 12,
      dur: 12 + Math.random() * 14,
      size: 3 + Math.random() * 5,
    }));
    setItems(arr);
  }, [count]);

  if (!items) return <div className="particles" aria-hidden />;

  return (
    <div className="particles" aria-hidden>
      {items.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            ["--tx" as any]: `${p.tx}px`,
            ["--ty" as any]: `${p.ty}px`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
