# CLAUDE.md

> Keep this short. If a rule isn't earning its place, delete it. Optimize for signal, not coverage.

## What this is

A single-page 3D developer portfolio. React + Vite, styled with Tailwind, 3D rendered with Three.js via React Three Fiber (`@react-three/fiber`) and helpers from `@react-three/drei`. Animation is GSAP (`@gsap/react`) plus `maath` easing inside `useFrame`. Deployed as a static site.

## Run it

```bash
npm install
npm run dev      # local dev server on http://localhost:3000
npm run build    # production build -> dist/
npm run preview  # serve the built dist/
npm run lint     # eslint
npm test         # vitest (run once)
npm run test:watch
```

## Map

- `src/main.jsx` — entry; mounts `App`.
- `src/App.jsx` — page composition: Navbar → Hero → About → Projects → Experience → Contact → Footer.
- `src/sections/` — full-width page sections.
- `src/components/` — reusable pieces, mostly 3D meshes loaded from `public/models/*.glb`.
- `src/constants/index.js` — all content/data + `calculateSizes()` responsive layout helper. Edit copy here, not in JSX.
- `public/` — 3D models, textures, images. Referenced by path (e.g. `/models/react.glb`).

## Conventions

- Components are function components, default-exported, one per file.
- 3D objects live inside a `<Canvas>`; anything using `useFrame`/`useGLTF`/drei hooks must render inside it.
- Continuous 3D motion: prefer `easing.damp3`/`dampE` from `maath` in `useFrame` (frame-rate independent). Use GSAP timelines for scripted/looping sequences.
- Responsive sizing flows through `calculateSizes()` + `react-responsive` breakpoints — don't hardcode positions per device in JSX.
- Tailwind utility classes for layout; shared classes are defined in `src/index.css`.

## Rules

- Don't commit secrets. `VITE_*` env vars are the only thing the client may read, and they ship to the browser — never put a private key in one.
- Keep the Hero `<Canvas>` light: heavy geometry/particle counts must scale down on mobile (gate on `isMobile`).
- `npm run build` and `npm test` must pass before pushing — CI enforces it.
- Touch generated GLTF component files (`HackerRoom`, `Cube`, etc.) sparingly; they mirror the model's node graph.
