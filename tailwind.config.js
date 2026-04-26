/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
      },
      colors: {
        f1: {
          red: '#e53935', dark: '#080809', surface: '#111113',
          card: '#18181b', silver: '#c8c8d4',
        },
      },
    },
  },
  plugins: [],
}
