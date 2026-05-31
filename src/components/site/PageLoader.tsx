import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function PageLoader() {
  // First-load intro
  const [firstShow, setFirstShow] = useState(true);
  const [firstFading, setFirstFading] = useState(false);

  // Route-change overlay
  const isPending = useRouterState({ select: (s) => s.status === "pending" });
  const [routeShow, setRouteShow] = useState(false);
  const [routeFading, setRouteFading] = useState(false);

  useEffect(() => {
    const fadeT = setTimeout(() => setFirstFading(true), 3200);
    const hideT = setTimeout(() => setFirstShow(false), 4400);
    return () => {
      clearTimeout(fadeT);
      clearTimeout(hideT);
    };
  }, []);

  // Show route loader while navigation is pending
  useEffect(() => {
    if (firstShow) return;
    if (isPending) {
      setRouteShow(true);
      setRouteFading(false);
    } else if (routeShow) {
      setRouteFading(true);
      const t = setTimeout(() => setRouteShow(false), 900);
      return () => clearTimeout(t);
    }
  }, [isPending, firstShow, routeShow]);

  if (!firstShow && !routeShow) return null;

  const fading = firstShow ? firstFading : routeFading;

  return (
    <div
      className="page-loader"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 1.1s cubic-bezier(0.65, 0, 0.35, 1)",
        background:
          "radial-gradient(1200px 800px at 50% 40%, color-mix(in oklab, var(--neon) 12%, transparent), transparent 60%), var(--background)",
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="particles" aria-hidden>
        {Array.from({ length: 22 }).map((_, i) => {
          const left = (i * 37) % 100;
          const top = 60 + ((i * 53) % 40);
          const tx = ((i * 73) % 240) - 120;
          const ty = -120 - ((i * 91) % 320);
          const dur = 8 + ((i * 7) % 8);
          const delay = (i * 0.4) % 4;
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
        <div className="relative">
          <span
            className="absolute inset-0 rounded-full blur-2xl animate-pulse-slow"
            style={{
              background:
                "radial-gradient(circle, var(--neon), transparent 70%)",
            }}
          />
          <div className="relative grid h-28 w-28 place-items-center rounded-full bg-white shadow-glow animate-float overflow-hidden ring-2 ring-white/40">
            <img
              src={logoImg}
              alt="EasyPrints logo"
              className="h-24 w-24 object-contain"
              style={{ animation: "scale-in 1.2s ease-out both" }}
            />
          </div>
        </div>

        <div className="flex gap-[2px] text-2xl sm:text-3xl font-bold tracking-[0.35em] text-foreground">
          {"EASYPRINTS".split("").map((ch, i) => (
            <span
              key={i}
              style={{
                animation: `fade-up 0.9s ${i * 0.08}s ease-out both`,
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
          style={{ animation: "fade-up 1s 0.8s ease-out both" }}
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
