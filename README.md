# CodeBloom

An interactive, responsive web development learning playground and workshop platform for HTML, CSS, JavaScript, and React.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Quickstart

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## Deployment to Vercel

CodeBloom is pre-configured and production-ready for immediate deployment on Vercel:

### Option 1: Deploy via GitHub / Vercel Dashboard
1. Push this project to a GitHub repository.
2. In the [Vercel Dashboard](https://vercel.com/new), click **"Add New..."** → **"Project"** and import your repository.
3. Vercel automatically detects the framework presets configured in [`vercel.json`](./vercel.json):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.

### Option 2: Deploy via Vercel CLI
From the project root directory, run:

```bash
npx vercel
```

To deploy directly to production:

```bash
npx vercel --prod
```

## Available Scripts

- `npm run dev`: Starts the local Vite development server.
- `npm run build`: Generates an optimized production build in `dist/` with code splitting.
- `npm test`: Runs the automated Vitest test suite.
- `npm run lint`: Runs ESLint on all codebase files.
- `npm run preview`: Previews the production bundle locally.

## What's Included

- **Vercel Production Optimized**: Includes [`vercel.json`](./vercel.json) with SPA fallback routing, asset caching headers, security headers, and chunk code-splitting via [`vite.config.js`](./vite.config.js).
- **Modular Architecture**: Cleanly separated into dedicated views (`src/views/`), components (`src/components/`), data files (`src/data/`), and utilities (`src/utils/`).
- **Live In-Browser React Compilation**: React JSX is transformed live via Sucrase and mounted into the sandboxed preview with state support, runtime error boundaries, and offline fallback.
- **Dark Mode & Light Mode**: Default light mode with seamless theme toggle using CSS custom properties and preference persistence.
- **Code Editor Usability**: Tab-key indentation support (2-space insertion), line numbering, and live error banners.
- **Four Learning Tracks**: Guided tracks for HTML, CSS, JavaScript, and React with 8 in-depth lessons each (32 total lessons).
- **Challenge Arena**: 4 tiered levels (Beginner to Fully Advanced) with XP scoring, badges, and detailed rationale feedback.
- **Local Progress Persistence**: Progress and XP persist via `localStorage` with error handling for private browsing modes.
- **Comprehensive Unit Tests & Linting**: Vitest testing for storage, JSX compiler, and data integrity.
