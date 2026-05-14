import React, { useState } from 'react';
import { NAV_LINKS } from '../constants/data';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-5 lg:px-12 lg:py-6 bg-gradient-to-b from-black-abyss/90 to-transparent pointer-events-auto">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer pointer-events-auto bg-transparent border-none p-0"
          >
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Logo - Centered on mobile */}
          <div
            onClick={() => handleScroll('hero')}
            className="flex-1 text-center lg:flex-none lg:mr-0 font-zen text-lg sm:text-xl lg:text-2xl text-white tracking-widest cursor-pointer pointer-events-auto logo-hover transition-all duration-300 animate-fade-in-down hover:scale-110"
          >
            DJ PRODUCER
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 list-none">
          {NAV_LINKS.map(({ id, label }, i) => (
            <li key={id} className="animate-fade-in-down" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
              <button
                onClick={() => handleScroll(id)}
                className="text-silver/60 text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer bg-transparent border-none p-0 pointer-events-auto logo-hover hover:text-white hover:scale-110"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-gradient-to-b from-black-abyss/95 to-black-abyss/85 backdrop-blur-sm transition-all duration-300 lg:hidden pointer-events-auto ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col list-none py-4">
          {NAV_LINKS.map(({ id, label }, i) => (
            <li key={id} className={`animate-fade-in-right ${isOpen ? '' : 'pointer-events-none'}`} style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
              <button
                onClick={() => handleScroll(id)}
                className="w-full text-left px-6 py-3 text-silver/60 text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer bg-transparent border-none hover:text-white hover:bg-violet/5 hover:translate-x-2 logo-hover"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
