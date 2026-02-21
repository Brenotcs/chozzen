import React from 'react';
import { CARDS } from '../constants/data';

export function Experience() {
  return (
    <>
      <div className="divider" />
      <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-30 bg-gradient-to-b from-black-abyss to-purple-deep/10">
        <div className="container">
          <span className="section-label">◈ 003 — Mercado</span>
          <h2 className="section-title">Atuação</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 md:p-8 border border-violet/15 bg-purple-deep/6 relative transition-all duration-300 overflow-hidden group hover:border-violet/40 hover:bg-purple-deep/18 hover:-translate-y-1"
              >
                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet to-blue-freq scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                {/* Content */}
                <span
                  className="text-2xl block mb-5"
                  style={{ color: card.accent }}
                >
                  {card.icon}
                </span>
                <p className="font-zen text-sm text-white tracking-widest mb-3">
                  {card.title}
                </p>
                <p className="text-sm leading-relaxed text-silver/50 font-light">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
