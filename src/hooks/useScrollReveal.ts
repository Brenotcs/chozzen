import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Trigger animations on child elements
          const animatedChildren = entry.target.querySelectorAll(
            "[data-animate-on-reveal]",
          );
          animatedChildren.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-on-scroll");
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
}
