import React from 'react';

export function Footer() {
  return (
    <footer className="text-center py-6 sm:py-8 md:py-10 px-4 border-t border-violet/10 text-xs tracking-widest text-silver/20 font-zen hover:text-silver/40 transition-colors duration-300 animate-fade-in">
      <p className="group">
        <span className="inline-block hover:scale-110 transition-transform duration-300">◈</span> DJ PRODUCER · {new Date().getFullYear()} ·{' '}
        <span className="bg-gradient-to-r from-violet to-blue-freq bg-clip-text text-transparent group-hover:from-blue-freq group-hover:to-violet transition-all duration-300">
          Frequência. Presença. Psicodelia.
        </span>
      </p>
    </footer>
  );
}
