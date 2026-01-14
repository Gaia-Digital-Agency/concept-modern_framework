# Modern Brand Starter Template

A production-ready React + Vite + TypeScript + SCSS boilerplate optimized for branding and marketing sites.

## Tech Stack

- **React 18** - UI library with hooks
- **TypeScript 5** - Type-safe development
- **Vite 5** - Fast build tool and dev server
- **SCSS** - Modern Sass with `@use` modules (no deprecation warnings)
- **React Router DOM 6** - Client-side routing
- **Vitest** - Unit testing framework

## Features

- **Responsive SCSS Mixins** - Custom mixins for mobile, tablet, desktop, portrait, and landscape views
- **Centralized Asset Management** - Edit `src/assets/image.ts` to update all site imagery in one place
- **TDD Ready** - Built-in Vitest configuration with React Testing Library
- **Modern UI Components** - Dropdown menus, sticky navigation, mobile hamburger menu
- **Analytics-Ready Footer** - Geolocation detection and visitor tracking placeholders
- **No Deprecation Warnings** - Uses modern Sass API and `@use` instead of `@import`

## Project Structure

```
├── index.html               # Vite entry HTML
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite config with SCSS setup
├── src/
│   ├── app.tsx              # Main App component with routing
│   ├── main.tsx             # Application entry point
│   ├── assets/
│   │   └── image.ts         # Centralized image URLs
│   ├── components/
│   │   ├── navbar.tsx       # Responsive navigation with dropdowns
│   │   └── footer.tsx       # Footer with analytics
│   ├── pages/
│   │   ├── home.tsx         # Home page with hero
│   │   ├── about.tsx        # About page with cards
│   │   └── contact.tsx      # Contact form page
│   └── styles/
│       ├── main.scss        # Global styles
│       ├── _variables.scss  # SCSS variables (colors, spacing)
│       └── _mixins.scss     # Responsive breakpoint mixins
└── tests/
    └── app.test.tsx         # Unit tests
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Preview production build
npm run preview
```

## SCSS Variables

Defined in `src/styles/_variables.scss` and auto-imported:

```scss
// Colors
$primary: #2563eb;    // Blue
$secondary: #1e293b;  // Dark gray
$text: #334155;       // Text color
$bg: #ffffff;         // Background

// Spacing & Typography
$border-radius: 5px;
$border-radius-lg: 8px;
```

## SCSS Responsive Mixins

Use these mixins in your SCSS files (automatically imported via Vite):

```scss
// Breakpoint-based
@include respond-to('mobile')  { /* < 768px */ }
@include respond-to('tablet')  { /* 768px - 1023px */ }
@include respond-to('desktop') { /* >= 1024px */ }

// Orientation-based
@include portrait  { /* Portrait orientation */ }
@include landscape { /* Landscape orientation */ }
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Hero section with CTA |
| `/about` | About | Company info with philosophy cards |
| `/contact` | Contact | Contact form with validation |

## Customization

### Images
Edit `src/assets/image.ts` to replace placeholder images:

```typescript
export const IMAGES = {
  hero: "your-hero-image-url",
  about: "your-about-image-url",
  contact: "your-contact-image-url",
  logo: "your-logo-url",
  placeholder: "your-placeholder-url"
};
```

### Colors
Edit `src/styles/_variables.scss` to change brand colors:

```scss
$primary: #your-primary-color;
$secondary: #your-secondary-color;
```

## Browser Support

- Chrome (latest)
- Safari (latest, including mobile iOS)
- Firefox (latest)

Configured via `@vitejs/plugin-legacy` for 99% browser coverage.
