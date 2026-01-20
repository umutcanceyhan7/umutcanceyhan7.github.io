# Portfolio Project - Agent Guidelines

## Commands
- `npm run build` - Typecheck and build
- `npm run dev` - Start development server
- `npm run lint` - Run ESLint

## Patterns
- Three.js components must be client components (`"use client"`) and dynamically imported with `ssr: false`
- All colors use CSS variables defined in `globals.css` (e.g., `var(--soft-purple)`)
- Headings: Bungee font via `font-heading` class
- Body text: Source Code Pro via `font-body` class
- Buttons follow chunky 3D style with box-shadow for depth effect
- Use meshLambertMaterial with `flatShading: true` for PS1-style 3D rendering
