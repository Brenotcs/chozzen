import React from 'react';
import { WAVE_BARS } from '../constants/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Music() {
  const sectionRef = useScrollReveal();

  return (
    <>
      <div className="divider" />
      <section ref={sectionRef} id="music" className="py-16 sm:py-20 md:py-24 lg:py-30 bg-black-abyss scroll-reveal">
        <div className="container">
          <span className="section-label animate-fade-in-up animate-delay-100" data-animate-on-reveal>◈ 002 — Prova de Trabalho</span>
          <h2 className="section-title animate-fade-in-up animate-delay-200" data-animate-on-reveal>Music / Sets</h2>
          <div className="relative border border-violet/20 p-4 sm:p-6 md:p-10 lg:p-15 bg-purple-deep/8 overflow-hidden group hover:border-violet/50 transition-all duration-500 animate-fade-in-up animate-delay-300" data-animate-on-reveal>
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet via-blue-freq to-transparent group-hover:shadow-[0_0_20px_rgba(130,71,255,0.5)] transition-all duration-500" />

            {/* Waveform */}
            <div className="flex items-center justify-center gap-1 mb-4 sm:mb-6 md:mb-8 h-12 sm:h-16 md:h-20">
              {WAVE_BARS.map((b) => (
                <div
                  key={b.id}
                  className="w-0.5 sm:w-0.5 md:w-1 bg-gradient-to-t from-blue-freq to-violet rounded animate-wave group-hover:from-blue-freq group-hover:to-violet group-hover:shadow-[0_0_10px_rgba(61,107,240,0.5)] transition-all duration-300"
                  style={{ height: b.height, animationDelay: b.delay }}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="font-zen text-xs sm:text-sm md:text-base lg:text-lg text-silver/50 tracking-widest text-center mb-1.5 sm:mb-2 md:mb-3 group-hover:text-silver/80 transition-colors duration-300">
              "O som ainda não tem nome — tem endereço."
            </p>
            <p className="text-xs text-violet/70 tracking-widest uppercase text-center group-hover:text-violet/100 transition-colors duration-300">
              ◈ Sets em breve · SoundCloud & Mixcloud
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
