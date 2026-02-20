import React from 'react';
import { GALLERY_ITEMS } from '../constants/data';

export function Visual() {
  return (
    <>
      <div className="divider" />
      <section id="visual" className="py-30 md:py-20 bg-black-abyss">
        <div className="container">
          <span className="section-label">◈ 004 — Estética</span>
          <h2 className="section-title">Visual</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] md:grid-rows-[auto_auto] gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${i === 0 ? 'md:row-span-2' : ''}`}
              >
                <div
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03] flex items-center justify-center relative"
                  style={{
                    aspectRatio: i === 0 ? '3/4' : '1',
                    background: `linear-gradient(${135 + i * 25}deg, ${item.grad})`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-deep/40 to-blue-freq/15" />

                  {/* Glyph */}
                  <div className="absolute font-zen text-[8rem] opacity-[0.04] text-white">CZ</div>

                  {/* Circle */}
                  <div className="absolute w-[120px] h-[120px] rounded-full border border-violet/15 shadow-[0_0_40px_rgba(130,71,255,0.1)]" />

                  {/* Label */}
                  <span className="absolute bottom-4 left-4 font-zen text-xs tracking-widest text-silver/35 uppercase">
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
