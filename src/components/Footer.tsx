import React from 'react';

export function Footer() {
  return (
    <footer className="text-center py-6 sm:py-8 md:py-10 px-4 border-t border-violet/10 text-xs tracking-widest text-silver/20 font-zen">
      <p>◈ CHOZZEN · {new Date().getFullYear()} · Frequência. Presença. Psicodelia.</p>
    </footer>
  );
}
