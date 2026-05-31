import { useEffect } from "react";

/**
 * Scroll-reveal: any element with `.reveal` (or variants `reveal-up`,
 * `reveal-left`, `reveal-right`, `reveal-scale`) gets `.in-view` when it
 * enters the viewport. Respects prefers-reduced-motion.
 *
 * Optional: data-reveal-delay="120" for per-element delay (ms).
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale",
    );

    if (reduced) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
