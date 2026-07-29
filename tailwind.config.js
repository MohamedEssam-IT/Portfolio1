/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#e6f4ff',
          100: '#b8e0ff',
          200: '#8accff',
          300: '#5cb8ff',
          400: '#38bdf8',
          500: '#0078d4',
          600: '#006abe',
          700: '#0052a8',
          800: '#003e80',
          900: '#002452',
        },
        ink: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'azure-radial':
          'radial-gradient(circle at 20% 20%, rgba(0,120,212,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(56,189,248,0.18), transparent 45%), radial-gradient(circle at 50% 80%, rgba(0,106,190,0.18), transparent 50%)',
        'grid-fade':
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(2,6,23,0.45)',
        glow: '0 0 24px rgba(56,189,248,0.35)',
        'glow-strong': '0 0 40px rgba(0,120,212,0.45)',
        soft: '0 4px 20px rgba(2,6,23,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
        },
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) scale(1.08)' },
          '66%': { transform: 'translate(-30px,20px) scale(0.95)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'blob-drift': 'blob-drift 22s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
