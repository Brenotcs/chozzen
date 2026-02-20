import React from 'react';

export function Contact() {
  return (
    <>
      <div className="divider" />
      <section id="contact" className="py-30 md:py-40 relative text-center bg-gradient-to-b from-black-abyss to-purple-deep/20">
        {/* Glow effect */}
        <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-radial from-purple-deep/50 to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container relative z-10">
          <span className="section-label">◈ 005 — Bookings</span>
          <h2 className="section-title">Contact</h2>
          <p className="text-xs md:text-sm text-silver/45 font-light tracking-widest mb-10 md:mb-14 max-w-md mx-auto leading-relaxed">
            Transforme seu evento em uma experiência de frequência. Entre em contato para bookings e parcerias.
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-14">
            <a
              href="mailto:booking@chozzen.com"
              className="flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 border border-violet/25 text-silver/65 text-xs tracking-widest uppercase transition-all duration-300 hover:border-blue-freq hover:text-white hover:shadow-[0_0_20px_rgba(61,107,240,0.2)] hover:-translate-y-0.5 min-h-[40px] md:min-h-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 border border-violet/25 text-silver/65 text-xs tracking-widest uppercase transition-all duration-300 hover:border-blue-freq hover:text-white hover:shadow-[0_0_20px_rgba(61,107,240,0.2)] hover:-translate-y-0.5 min-h-[40px] md:min-h-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/chozzenmusic/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 border border-violet/25 text-silver/65 text-xs tracking-widest uppercase transition-all duration-300 hover:border-blue-freq hover:text-white hover:shadow-[0_0_20px_rgba(61,107,240,0.2)] hover:-translate-y-0.5 min-h-[40px] md:min-h-auto"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>

          {/* Call to action button */}
          <a
            href="mailto:booking@chozzen.com"
            className="inline-block px-8 md:px-16 py-3 md:py-4.5 bg-gradient-to-r from-violet to-blue-freq text-white font-zen text-xs md:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(130,71,255,0.5),0_0_80px_rgba(61,107,240,0.3)] hover:-translate-y-0.5 min-h-[44px] flex items-center justify-center"
          >
            Solicitar Booking
          </a>
        </div>
      </section>
    </>
  );
}
