# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple vending machine service website for D&M Ventures, built as a single-page application using Vite, Alpine.js, and Leaflet for mapping. The site provides information about vending machine services in the Grand Rapids, Kalamazoo, and Battle Creek areas of Michigan.

## Common Commands

```bash
# Development server (hot reload enabled)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Architecture

### Technology Stack
- **Build Tool**: Vite (ES modules, no additional config files present)
- **Frontend Framework**: Alpine.js for reactive components
- **Plugins**: @alpinejs/resize for responsive behavior
- **Mapping**: Leaflet for displaying service area
- **Analytics**: Vercel Analytics

### Project Structure
- `index.html` - Main HTML file with inline styles and structured data (JSON-LD)
- `src/main.js` - Application entry point with Alpine.js setup, custom directives, and data
- `src/style.css` - Base styles (mostly unused, styles are inline in index.html)
- `public/` - Static assets (images, SVG favicon)

### Key Implementation Details

**Alpine.js Architecture:**
- Custom directive `x-leaflet` creates interactive map showing 50km service radius around coordinates [42.616408, -85.4105223]
- Main app data component provides contact info for David and Mollie
- Responsive contact display using `x-resize` plugin at 420px breakpoint

**Styling:**
- All functional styles are inline in `index.html` (below line 144)
- `src/style.css` contains default Vite template styles (not actively used)
- CSS uses modern features: nesting, clamp(), CSS variables

**SEO:**
- JSON-LD structured data for LocalBusiness schema in index.html:111-140
- Meta tags for description and OpenGraph
- Semantic HTML with skip link for accessibility

**Contact Information:**
- Phone numbers stored in `src/main.js:23-41` as objects with formatted and raw values
- Phone formatter utility at `src/main.js:13-21`

## Development Notes

- No TypeScript or linting configuration present
- No build configuration files (uses Vite defaults)
- Images in public/ use numeric IDs as filenames
- The project uses ES modules (type: "module" in package.json)
