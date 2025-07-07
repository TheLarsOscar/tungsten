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

        // --- LEGACY TOKENS BELOW ---
        'nav': '48px',
        'hero-logo-space': '220px',
        'hero-logo-height': '270px',
        'hero-title-space': '48px',
        'hero-statementblock': '550px',
        'hero-to-breaker': '220px',
        'breaker-small': '370px',
        'breaker-large': '666px',
        'studio-to-title': '220px',
        'studio-title-height': '144px',
        'studio-title-to-text': '110px',
        'studio-height': '870px',
        'studio-to-breaker': '220px',
        'operators-to-title': '220px',
        'operators-title-height': '144px',
        'operators-title-to-images': '180px',
        'operators-image-height': '414px',
        'operators-textblock-height': '860px',
        'operators-to-breaker': '220px',
        'work-to-title': '220px',
        'work-title-height': '144px',
        'work-title-to-content': '110px',
        'work-contentblock-height': '3150px',
        'work-to-breaker': '220px',
        'heavy-to-title': '220px',
        'heavy-title-height': '144px',
        'heavy-title-to-content': '110px',
        'heavy-contentblock-height': '1240px',
        'heavy-to-breaker': '220px',
        'footer': '666px',
        'block-gap': '48px',
        'headline-gap': '48px',
        'grid-gap': '32px',
        'grid-gap-mobile': '16px',
        'content-offset': '128px', // Nytt: lagt till content-offset i spacing
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

        // --- LEGACY TOKENS (with -legacy suffix) ---
        'breaker-small-legacy': '370px',
        'breaker-large-legacy': '666px',
        'hero-logo-legacy': '270px',
        'hero-statementblock-legacy': '550px',
        'studio-title-legacy': '144px',
        'studio-legacy': '870px',
        'operators-title-legacy': '144px',
        'operators-image-legacy': '414px',
        'operators-textblock-legacy': '860px',
        'work-title-legacy': '144px',
        'work-contentblock-legacy': '3150px',
        'heavy-title-legacy': '144px',
        'heavy-contentblock-legacy': '1240px',
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