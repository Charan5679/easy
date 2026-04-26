# Formula 1 — Art, Science & Speed
### A premium interactive F1 guide · React + Vite + Framer Motion

## Stack
- React 19 + Vite 8 (component architecture, instant HMR)
- Framer Motion (AnimatePresence, scroll reveals, stagger)
- Tailwind CSS v3 (utility classes + CSS custom properties)
- react-intersection-observer (scroll-triggered animations)
- GSAP (available for extended effects)

## Quick Start
```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the built output
```

## Project Structure
```
src/
├── components/
│   ├── Cursor.jsx           Custom cursor (dot + ring)
│   ├── LoadingScreen.jsx    Race start lights sequence
│   ├── LapProgressBar.jsx   Scroll progress bar
│   ├── Navbar.jsx           Sticky nav with blur
│   ├── HeroSection.jsx      Animated SVG car + hero
│   ├── VideoSection.jsx     YouTube embed section
│   ├── CarSection.jsx       Interactive car diagram
│   ├── Sections.jsx         Rules, Strategy, Cockpit, etc.
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

Designed with precision. Built for speed.
