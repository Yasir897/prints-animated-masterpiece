import { useEffect, useRef } from "react";

/**
 * Buttery parallax driven by rAF + scrollY. Honors prefers-reduced-motion
 * and only animates while the element is near the viewport.
 *
 * `speed` — translateY = -scrollProgress * speed (in px). Negative = move
 * opposite direction. Subtle values look best: 30–120.
 */
export function useParallax<T extends HTMLElement = HTMLElement>(speed = 60) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let inView = true;
    let target = 0;
    let current = 0;

    const io = new IntersectionObserver(
      ([entry]) => { inView = entry.isIntersecting; },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress from -1 (below) → 0 (centered) → 1 (above)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      target = -progress * speed;
    };

    const tick = () => {
      // smooth toward target
      current += (target - current) * 0.12;
      if (inView) {
        el.style.transform = `translate3d(0, ${current.toFixed(2)}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, [speed]);

  return ref;
}
