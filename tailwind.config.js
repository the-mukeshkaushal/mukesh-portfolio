/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0D0C',
        surface: {
          DEFAULT: '#121514',
          subtle: '#0F1211',
          card: '#141816',
          'card-hover': '#1A1F1D',
          elevated: '#1D2220',
          border: '#232926',
        },
        border: {
          subtle: '#1F2422',
          DEFAULT: '#272E2B',
          hover: '#363E3A',
        },
        accent: {
          DEFAULT: '#C6FF4D',
          hover: '#D4FF6E',
          muted: 'rgba(198, 255, 77, 0.12)',
          border: 'rgba(198, 255, 77, 0.28)',
          glow: 'rgba(198, 255, 77, 0.18)',
        },
        text: {
          primary: '#F4F4EF',
          secondary: '#9E9E96',
          muted: '#6F736E',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.14em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 28s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2.5s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
