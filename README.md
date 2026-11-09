# Easy Peasy English 🟢

A bright, playful single-page app for a kids' English course, built with React, Vite, Tailwind CSS, react-router-dom and i18next.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## Features

- **Pages:** Home (hero, about, course preview, CTA), About (mission, stats, lesson steps, team), Courses, Contacts, and a 404 page.
- **3 languages:** KG / RU / EN. All texts are in `src/locales/*.json`. The selected language is saved in `localStorage`.
- **Mock API** (`src/services/api.js`): async functions with `setTimeout`, loading skeletons, and friendly error cards with a "Try again" button.
- **Contact form validation:** errors appear under each field. The submit button is disabled while there are errors.
- **WhatsApp:** links to `https://wa.me/996504889991` (opens in a new tab) in the contacts block, the footer, the CTA banner and the floating button.
- **Responsive** from 320px to desktop, with a burger menu below 1024px. Animations respect `prefers-reduced-motion`.

## Testing error states

| How | Result |
| --- | --- |
| `/services?demoError=courses` | courses fail to load → error card |
| `/about?demoError=team` | team fails to load → error card |
| `?demoError=all` | every request fails |
| Submit the form with an email like `error@test.com` | server error in the form |
| Go offline in DevTools | network error message |

## Project structure

```
src/
├── assets/        # logo.svg, mascot.svg (the "Peasy" pea mascot)
├── components/    # Header, Footer, Hero, CourseCard, ContactForm, ErrorCard, …
├── hooks/         # useFetch, useForm, usePageTitle
├── locales/       # kg.json, ru.json, en.json
├── pages/         # Home, About, Services, Contacts, NotFound
├── services/      # api.js (mock API), mockData.js, contacts.js (phone / WhatsApp / socials)
├── utils/         # validators.js
├── i18n.js
├── App.jsx
├── main.jsx
└── index.css      # Tailwind v4 theme: colors, sticker shadows, animations
```

## Before going live

- Replace the placeholder social links, email and address in `src/services/contacts.js` and `src/locales/*.json`.
- Connect `sendContactMessage` in `src/services/api.js` to a real backend.
- Your host must serve `index.html` for every route (SPA fallback). A Netlify `_redirects` file is included in `public/`.
