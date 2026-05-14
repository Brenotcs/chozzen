import React from 'react';
import { PARTICLES } from '../constants/data';

export function Hero() {
  const handleScroll = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/80 via-blue-freq/15 to-black-abyss animate-fade-in" />

      {/* Grid */}
      <div
        className="absolute inset-0 animate-opacity-in"
        style={{
          backgroundImage:
            'linear-gradient(rgba(61,107,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(61,107,240,0.04) 1px, transparent 1px)',
          backgroundSize: 'clamp(40px, 8vw, 60px) clamp(40px, 8vw, 60px)',
          animation: 'fadeIn 1.5s ease-out forwards 0.2s',
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full opacity-0 animate-float-particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
              boxShadow: `0 0 8px ${p.color}`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <p className="text-xs tracking-widest uppercase text-blue-freq mb-3 sm:mb-5 opacity-0 animate-[fadeUp_0.8s_ease_forwards_0.3s]">
          ◈ Psicodelia · Frequência · Presença
        </p>
        <div className="relative inline-block">
          <h1 className="font-zen text-[clamp(4rem,13vw,11rem)] text-white leading-[0.9] tracking-wide shadow-glow-violet opacity-0 animate-[fadeUp_1s_ease_forwards_0.5s]">
            DJ PRODUCER
          </h1>
          <div
            className="absolute inset-0 text-transparent font-zen text-[clamp(4rem,13vw,11rem)] animate-glitch pointer-events-none"
            style={{
              WebkitTextStroke: '1px rgba(130,71,255,0.3)',
            }}
          >
            DJ PRODUCER
          </div>
        </div>
        <p className="text-[clamp(0.75rem,2vw,1rem)] font-light tracking-widest text-silver/60 mt-3 sm:mt-5 uppercase opacity-0 animate-[fadeUp_1s_ease_forwards_0.8s]">
          Onde o místico encontra o eletrônico
        </p>
        <div className="mt-6 sm:mt-8 md:mt-12 opacity-0 animate-[fadeUp_1s_ease_forwards_1.1s]">
          <a
            href="#contact"
            onClick={handleScroll('contact')}
            className="btn-primary relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet before:to-blue-freq before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:-z-10 hover:before:scale-x-100 group hover:shadow-[0_0_40px_rgba(61,107,240,0.5),0_0_80px_rgba(130,71,255,0.3)] animate-bounce-in"
          >
            <span className="group-hover:scale-110 transition-transform duration-300 inline-block">Book Now</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeUp_1s_ease_forwards_1.5s]">
        <div
          className="w-px h-15 bg-gradient-to-b from-blue-freq to-transparent mx-auto animate-scroll-pulse"
          style={{ animationDuration: '2s' }}
        />
      </div>
    </section>
  );
}
