# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Environment variables

Create a `.env` file in the project root (do NOT commit it). See `.env.example` for required keys.

- `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID` — Firebase config values.
- `VITE_TMDB_BEARER` — TMDB Bearer token for fetching movie data.

Example: copy `.env.example` to `.env` and fill the values.

## Build & Deploy

Install and build the production bundle locally:
```bash
npm install
npm run build
# Preview the production build
npm run preview
```

Hosting notes:
- Vercel / Netlify: set build command `npm run build` and publish directory `dist`. Add the `VITE_...` env vars in the host's settings.
- Firebase Hosting: set public folder to `dist` and ensure SPA rewrites to `index.html`.

Security:
- Never commit `.env` or rotate keys if they were exposed in a public repo.

