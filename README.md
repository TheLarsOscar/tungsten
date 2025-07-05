---

## Workflow

1. **Development**  
   Work in `/app/components`.  
   Use *only* Tailwind classes mapped to tokens for all layout and spacing.

2. **Design tokens**  
   Any change to tokens (spacing, grid, breakpoints, color, typography) must be approved by the design owner before editing `tailwind.config.js`.

3. **Styling**  
   Use global CSS (`globals.css`) only for resets, base color, and font import.  
   All section/component styling comes from Tailwind tokens.

4. **Responsivity**  
   Breakpoints are set in tokens and used *everywhere* — never ad hoc in components.

5. **Version control**  
   Push all changes to GitHub.  
   Deployment pipeline runs via Vercel integration.

---

## Content structure

- **Navigation** — Smooth anchor links for all main sections.
- **Hero** — Animated intro, video, tagline, brief description.
- **Contact Breaker** (White/Orange) — Contact info in visually distinct sections.
- **The Studio** — Studio presentation, founders.
- **Statement Breaker Large** — Large text animation breaker section.
- **Operators** — Team presentation.
- **Our Work** — Portfolio, references, and clients.
- **W74 Heavy Stone** — The “origin story” section.
- **Footer** — Minimal base/footer info.

All content, text, spacing, and images are managed as per the design documents and tokens.  
**Do not improvise. Do not alter copy. Do not break grid.**

---

## Core principles & rules

- **All spacing, sizing, typography, and grid is managed only by tokens in `tailwind.config.js`.**
- **Never add pixel values, ad hoc classes, or custom styles in a component.**
- **Never change or rename tokens without explicit design/owner approval.**
- **Always check your implementation against the visual spec/mockup before marking as done.**

---

## Scripts

```bash
npm install    # Install dependencies
npm run dev    # Start dev server
npm run build  # Production build