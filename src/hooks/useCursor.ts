import { useEffect, useRef } from 'react';

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let trailTimeout: ReturnType<typeof setTimeout>;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = e.clientX + 'px';
          cursorRef.current.style.top = e.clientY + 'px';
        }
      });

      clearTimeout(trailTimeout);
      trailTimeout = setTimeout(() => {
        if (trailRef.current) {
          trailRef.current.style.left = e.clientX + 'px';
          trailRef.current.style.top = e.clientY + 'px';
        }
      }, 80);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(trailTimeout);
    };
  }, []);

  return { cursorRef, trailRef };
}
