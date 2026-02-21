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
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'slide-in-down': 'slideInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-fast': 'rotateFast 10s linear infinite',
        'float': 'floatUp 3s ease-in-out infinite',
        'tilt': 'tilt 3s ease-in-out infinite',
        'swirl': 'swirl 4s ease-in-out infinite',
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', 'box-shadow': '0 0 20px rgba(130, 71, 255, 0.4)' },
          '50%': { opacity: '0.7', 'box-shadow': '0 0 40px rgba(130, 71, 255, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateFast: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        swirl: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.05)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
