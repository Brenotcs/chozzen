import React from 'react';
import { WAVE_BARS } from '../constants/data';

export function Music() {
  return (
    <>
      <div className="divider" />
      <section id="music" className="py-30 md:py-20 bg-black-abyss">
        <div className="container">
          <span className="section-label">◈ 002 — Prova de Trabalho</span>
          <h2 className="section-title">Music / Sets</h2>
          <div className="relative border border-violet/20 p-15 md:p-10 bg-purple-deep/8 overflow-hidden">
            {/* Top border gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet via-blue-freq to-transparent" />

            {/* Waveform */}
            <div className="flex items-center justify-center gap-1 mb-8 h-20">
              {WAVE_BARS.map((b) => (
                <div
                  key={b.id}
                  className="w-1 bg-gradient-to-t from-blue-freq to-violet rounded animate-wave"
                  style={{ height: b.height, animationDelay: b.delay }}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="font-zen text-lg text-silver/50 tracking-widest text-center mb-3">
              "O som ainda não tem nome — tem endereço."
            </p>
            <p className="text-xs text-violet/70 tracking-widest uppercase text-center">
              ◈ Sets em breve · SoundCloud & Mixcloud
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
