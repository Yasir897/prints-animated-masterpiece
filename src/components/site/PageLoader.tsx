import { useEffect, useState } from "react";
import { Printer } from "lucide-react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeT = setTimeout(() => setFading(true), 4200);
    const hideT = setTimeout(() => setShow(false), 5200);
    return () => {
      clearTimeout(fadeT);
      clearTimeout(hideT);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="page-loader"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.7s ease",
        background:
          "radial-gradient(1200px 800px at 50% 40%, color-mix(in oklab, var(--neon) 12%, transparent), transparent 60%), var(--background)",
      }}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      {/* Floating particles */}
      <div className="particles" aria-hidden>
        {Array.from({ length: 22 }).map((_, i) => {
          const left = Math.random() * 100;
          const top = 60 + Math.random() * 40;
          const tx = (Math.random() - 0.5) * 240;
          const ty = -120 - Math.random() * 320;
          const dur = 8 + Math.random() * 8;
          const delay = Math.random() * 4;
          return (
            <span
              key={i}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDuration: `${dur}s`,
                animationDelay: `${delay}s`,
                ["--tx" as any]: `${tx}px`,
                ["--ty" as any]: `${ty}px`,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Glowing logo */}
        <div className="relative">
          <span
            className="absolute inset-0 rounded-2xl blur-2xl animate-pulse-slow"
            style={{
              background:
                "radial-gradient(circle, var(--neon), transparent 70%)",
            }}
          />
          <div
            className="relative grid h-20 w-20 place-items-center rounded-2xl text-brand-foreground shadow-glow animate-float"
            style={{
              background:
                "linear-gradient(135deg, var(--neon), var(--neon-2))",
            }}
          >
            <Printer className="h-10 w-10" />
          </div>
        </div>

        {/* Brand name with letter reveal */}
        <div className="flex gap-[2px] text-2xl sm:text-3xl font-bold tracking-[0.35em] text-foreground">
          {"EASYPRINTS".split("").map((ch, i) => (
            <span
              key={i}
              style={{
                animation: `fade-up 0.7s ${i * 0.07}s ease-out both`,
                textShadow:
                  "0 0 18px color-mix(in oklab, var(--neon) 70%, transparent)",
              }}
            >
              {ch}
            </span>
          ))}
        </div>

        <p
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground"
          style={{ animation: "fade-up 0.8s 0.6s ease-out both" }}
        >
          Preparing Your Printing Experience
          <span className="loader-dots">...</span>
        </p>

        <div className="loader-track mt-2" />
      </div>

      <style>{`
        .loader-dots {
          display: inline-block;
          animation: dots 1.4s steps(4, end) infinite;
        }
        @keyframes dots {
          0%, 20% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
