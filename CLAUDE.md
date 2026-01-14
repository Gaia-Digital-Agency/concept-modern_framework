# CLAUDE.md - Project Context for AI Assistants

## Project Overview

React + Vite + TypeScript + SCSS starter template for branding/marketing websites. Production-ready with modern Sass (no deprecation warnings).

## Tech Stack

- React 18 with TypeScript
- Vite 5 (build tool)
- SCSS with modern `@use` modules
- React Router DOM 6 (routing)
- Vitest + React Testing Library (testing)

## Key Files

| File | Purpose |
|------|---------|
| `src/app.tsx` | Main App component with Router setup |
| `src/main.tsx` | Entry point, imports global SCSS |
| `src/assets/image.ts` | Centralized image URLs |
| `src/styles/main.scss` | Global styles for all components |
| `src/styles/_variables.scss` | SCSS variables ($primary, $secondary, etc.) |
| `src/styles/_mixins.scss` | Responsive breakpoint mixins |
| `vite.config.ts` | Vite config with SCSS auto-imports |

## Architecture

### Routing
- Uses React Router DOM with `BrowserRouter`
- Routes: `/` (Home), `/about` (About), `/contact` (Contact)

### SCSS Setup
- Vite auto-injects `_variables.scss` and `_mixins.scss` via `additionalData`
- Uses `api: 'modern-compiler'` to avoid legacy API warnings
- Uses `@use` instead of deprecated `@import`
- `loadPaths` configured to resolve from `src/styles/`

### Components
- `Navbar` - `.navbar` class, responsive with mobile hamburger
- `Footer` - `.footer` class, dark background with analytics
- Pages use `.page`, `.hero`, `.about-page`, `.contact-page` classes

## SCSS Variables

```scss
$primary: #2563eb;      // Blue
$secondary: #1e293b;    // Dark gray
$text: #334155;
$bg: #ffffff;
$border-radius: 5px;
$border-radius-lg: 8px;
```

## SCSS Mixins

```scss
@include respond-to('mobile')   // < 768px
@include respond-to('tablet')   // 768px - 1023px
@include respond-to('desktop')  // >= 1024px
@include portrait               // Portrait orientation
@include landscape              // Landscape orientation
```

## Common Tasks

### Adding a new page
1. Create component in `src/pages/`
2. Add route in `src/app.tsx` inside `<Routes>`
3. Add navigation link in `src/components/navbar.tsx`
4. Add styles in `src/styles/main.scss`

### Changing images
Edit `src/assets/image.ts`

### Changing colors
Edit `src/styles/_variables.scss`

### Adding styles
Add to `src/styles/main.scss` - variables and mixins are auto-imported

## Development Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (http://localhost:5173)
npm run test   # Run tests
npm run build  # Production build
npm run preview # Preview production build
```

## Notes

- No external state management (uses React hooks)
- Class names in components must match selectors in main.scss
- Avoid deprecated Sass functions like `darken()` - use hardcoded hex values
