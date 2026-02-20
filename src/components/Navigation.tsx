import React from 'react';
import { NAV_LINKS } from '../constants/data';

export function Navigation() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 md:px-6 md:py-5 flex justify-between items-center bg-gradient-to-b from-black-abyss/90 to-transparent pointer-events-auto">
      <div onClick={() => handleScroll('hero')} className="font-zen text-2xl text-white tracking-widest shadow-glow-violet cursor-pointer pointer-events-auto">CHOZZEN</div>
      <ul className="hidden lg:flex gap-8 list-none">
        {NAV_LINKS.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => handleScroll(id)}
              className="text-silver/60 text-xs tracking-widest uppercase transition-all duration-300 hover:text-white hover:shadow-glow-blue cursor-pointer bg-transparent border-none p-0 pointer-events-auto"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
