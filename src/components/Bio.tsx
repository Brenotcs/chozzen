import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Bio() {
  const sectionRef = useScrollReveal();

  return (
    <>
      <div className="divider" />
      <section
        ref={sectionRef}
        id="bio"
        className="py-16 sm:py-20 md:py-24 lg:py-30 relative bg-gradient-to-b from-black-abyss via-purple-deep/10 to-black-abyss scroll-reveal"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-16 lg:gap-20 xl:gap-32 items-center">
            {/* Image */}
            <div className="relative animate-fade-in-left animate-delay-200" data-animate-on-reveal>
              <div className="relative aspect-[3/4] overflow-hidden border border-violet/20 group">
                <div className="w-full h-full bg-gradient-to-br from-purple-deep to-blue-freq/15 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    style={{ opacity: 0.15 }}
                    className="animate-slow-spin"
                  >
                    <circle cx="50" cy="35" r="22" stroke="#8247FF" strokeWidth="1.5" />
                    <path d="M12 88 Q50 62 88 88" stroke="#8247FF" strokeWidth="1.5" fill="none" />
                    <circle cx="50" cy="50" r="45" stroke="#3D6BF0" strokeWidth="0.5" strokeDasharray="4 4" />
                    <line x1="50" y1="5" x2="50" y2="95" stroke="#3D6BF0" strokeWidth="0.3" strokeDasharray="3 6" />
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#3D6BF0" strokeWidth="0.3" strokeDasharray="3 6" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/50 to-transparent" />
              </div>
              <div className="absolute -inset-2 border border-violet/15 pointer-events-none group-hover:border-violet/50 transition-colors duration-300" />
              <div className="absolute -inset-4 border border-blue-freq/8 pointer-events-none group-hover:border-blue-freq/30 transition-colors duration-300" />
            </div>

            {/* Text */}
            <div className="animate-fade-in-right animate-delay-300" data-animate-on-reveal>
              <span className="section-label animate-fade-in-up animate-delay-300">◈ 001 — Identidade</span>
              <h2 className="section-title animate-fade-in-up animate-delay-400">Bio</h2>
              <p className="text-sm md:text-base font-light leading-relaxed text-silver/75 mb-4 md:mb-5 animate-fade-in-up animate-delay-500 transition-colors duration-300 hover:text-silver/90">
                CHOZZEN é um projeto de DJ e produção eletrônica nascido da confluência entre psicodelia
                moderna e tecnologia sonora. Com uma identidade visual e sonora única — construída para gerar
                experiências, não apenas sets.
              </p>
              <p className="text-sm md:text-base font-light leading-relaxed text-silver/75 animate-fade-in-up animate-delay-600 transition-colors duration-300 hover:text-silver/90">
                Cada performance é uma jornada cuidadosamente construída: seleção técnica, leitura de pista e
                curadoria que equilibra energia e profundidade. Do grave ao espaço — CHOZZEN não toca música.
                Canaliza frequência.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
