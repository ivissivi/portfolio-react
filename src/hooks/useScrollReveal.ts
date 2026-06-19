import { useEffect } from 'react';

// Elements that fade/slide in as they enter the viewport.
// Hero is intentionally excluded — it animates on load instead.
const SELECTORS = [
  '.section-head',
  '.about-content',
  '.experience-card',
  '.education-card',
  '.project-card',
  '.contact-content',
].join(',');

/**
 * Adds a subtle scroll-reveal animation as a progressive enhancement.
 * The `reveal` class (initial hidden state) is applied via JS, so users
 * without JS or with reduced-motion preferences see content normally.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));
    elements.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
