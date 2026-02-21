import React from 'react';
import { GALLERY_ITEMS } from '../constants/data';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Visual() {
  const sectionRef = useScrollReveal();

  return (
    <>
      <div className="divider" />
      <section ref={sectionRef} id="visual" className="py-16 sm:py-20 md:py-24 lg:py-30 bg-black-abyss scroll-reveal">
        <div className="container">
          <span className="section-label animate-fade-in-up animate-delay-100" data-animate-on-reveal>◈ 004 — Estética</span>
          <h2 className="section-title animate-fade-in-up animate-delay-200" data-animate-on-reveal>Visual</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr] md:grid-rows-[auto_auto] gap-3 sm:gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group animate-fade-in-up ${i === 0 ? 'md:row-span-2' : ''}`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                data-animate-on-reveal
              >
                <div
                  className="w-full transition-all duration-500 group-hover:scale-[1.08] flex items-center justify-center relative"
                  style={{
                    aspectRatio: i === 0 ? '3/4' : '1',
                    background: `linear-gradient(${135 + i * 25}deg, ${item.grad})`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/40 to-blue-freq/15 group-hover:from-purple-deep/20 group-hover:to-blue-freq/5 transition-all duration-500" />

                  {/* Glyph */}
                  <div className="absolute font-zen text-[8rem] opacity-[0.04] text-white group-hover:opacity-[0.08] transition-opacity duration-500">CZ</div>

                  {/* Circle */}
                  <div className="absolute w-[120px] h-[120px] rounded-full border border-violet/15 shadow-[0_0_40px_rgba(130,71,255,0.1)] group-hover:shadow-[0_0_60px_rgba(130,71,255,0.3)] transition-all duration-500 group-hover:scale-110 animate-rotate-slow" />

                  {/* Label */}
                  <span className="absolute bottom-4 left-4 font-zen text-xs tracking-widest text-silver/35 group-hover:text-silver/70 uppercase transition-colors duration-500">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
