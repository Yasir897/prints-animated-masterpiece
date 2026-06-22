import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // expo-out easing — strong initial momentum, soft settle. Buttery.
    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const lenis = new Lenis({
      // longer duration on desktop = more cinematic glide
      duration: isTouch ? 1.0 : 1.4,
      easing: easeOutExpo,
      smoothWheel: true,
      wheelMultiplier: isTouch ? 1 : 1.05,
      touchMultiplier: 1.6,
      lerp: isTouch ? 0.12 : 0.085,
      syncTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}
