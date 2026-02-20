/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-deep': '#2B1E4B',
        'blue-freq': '#3D6BF0',
        'black-abyss': '#0A0A0A',
        'silver': '#D9D9E3',
        'violet': '#8247FF',
      },
      fontFamily: {
        'zen': ['Zen Dots', 'cursive'],
        'lexend': ['Lexend', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(61, 107, 240, 0.6), 0 0 40px rgba(61, 107, 240, 0.6)',
        'glow-violet': '0 0 40px rgba(130, 71, 255, 0.6), 0 0 80px rgba(61, 107, 240, 0.3)',
      },
      animation: {
        'float-particle': 'floatParticle 12s linear infinite',
        'scroll-pulse': 'scrollPulse 2s ease infinite',
        'wave': 'waveAnim 1.2s ease infinite',
        'glitch': 'glitch 4s infinite',
      },
      keyframes: {
        floatParticle: {
          '0%': { transform: 'translateY(100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100px)', opacity: '0' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        waveAnim: {
          '0%, 100%': { transform: 'scaleY(0.2)' },
          '50%': { transform: 'scaleY(1)' },
        },
        glitch: {
          '0%, 95%, 100%': { 'clip-path': 'none', transform: 'none' },
          '96%': { 'clip-path': 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)', transform: 'translateX(-3px)' },
          '97%': { 'clip-path': 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)', transform: 'translateX(3px)' },
          '98%': { 'clip-path': 'none', transform: 'none' },
        },
      },
    },
  },
  plugins: [],
}
