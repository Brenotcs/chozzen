import { useEffect, useRef } from 'react';

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let trailTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 6 + 'px';
        cursorRef.current.style.top = e.clientY - 6 + 'px';
      }

      clearTimeout(trailTimeout);
      trailTimeout = setTimeout(() => {
        if (trailRef.current) {
          trailRef.current.style.left = e.clientX - 15 + 'px';
          trailRef.current.style.top = e.clientY - 15 + 'px';
        }
      }, 80);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { cursorRef, trailRef };
}
