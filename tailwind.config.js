/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tungstenOrange: "#FF7600",
        black: "#121212",
        metallic: "#3B3B3B",
        metallicLight: "#E0E0E0",
        white: "#FFFFFF",
      },
      fontFamily: {
        jetbrains: ['JetBrains Mono', 'monospace', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // --- SYSTEM TOKENS – THE ONE LIST (2024-07-07) ---
        'gap-xs': '16px',         // former grid-gap-mobile
        'gap-sm': '32px',         // former grid-gap
        'gap-md': '48px',         // block-gap, headline-gap, nav, hero-title-space
        'gap-lg': '110px',        // studio-title-to-text, work-title-to-content, heavy-title-to-content
        'gap-xl': '180px',        // operators-title-to-images
        'gap-2xl': '220px',       // All "to-title", hero-logo-space, hero-to-breaker, etc.
        'gap-3xl': '370px',       // breaker-small
        'gap-4xl': '666px',       // breaker-large, footer
        'content-offset': '128px',
        'logo-height': '270px',         // hero-logo-height
        'section-title-height': '144px',// studio-title-height, etc
        'section-height': '870px',      // studio, etc
        'contentblock-height': '3150px',// work-contentblock
        'large-contentblock-height': '1240px', // heavy-contentblock
      },
      height: {
        // --- GENERIC TOKENS (SYSTEM TOKENS) ---
        'nav': '48px',
        'logo': '270px',
        'section-title': '144px',
        'section': '870px',
        'image': '414px',
        'textblock': '860px',
        'contentblock': '3150px',
        'large-contentblock': '1240px',
        'footer': '666px',
        // --- ICON BUTTONS ---
        'icon-btn': '160px',
        'icon-btn-lg': '220px',
      },
      width: {
        'icon-btn': '160px',
        'icon-btn-lg': '220px',
      },
      minHeight: {
        'footer': '600px',
        'footer-lg': '740px',
      },
      maxWidth: {
        'container': '1200px',
        '7xl': '80rem',
        'content-max': '35vw', // Nytt: lagt till content-max i maxWidth
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      borderRadius: {
        DEFAULT: '4px',
        md: '8px',
        lg: '16px',
      },
      screens: {
        'mobile': '0px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
    },
  },
  plugins: [],
};