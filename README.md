# MIA Events & Experiences

Production website for MIA Events & Experiences.

## Development

```bash
npm install
npm run dev
```

The site automatically uses Greek when the browser's preferred languages include Greek. All other visitors see English. A manual language switch stores the visitor's preference locally.

## Build

```bash
npm run build
```

The optimized production files are generated in `dist/`.

## Structure

- `index.html` — semantic one-page structure
- `src/styles/style.css` — design tokens, components and responsive styling
- `src/scripts/main.js` — translations, language detection and interactions
- `public/` — favicons and installable-site icons
