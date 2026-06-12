# 3D Portfolio

## Overview

This is a personal developer portfolio built with React, Vite, Three.js, and React Three Fiber. It combines a 3D landing experience with portfolio sections for about, projects, and contact, plus an EmailJS-powered contact form.

## Features

- Interactive 3D home experience with Three.js models
- Responsive single-page portfolio flow with routed sections
- Projects showcase with live links and source links
- Contact form integration powered by EmailJS
- Reusable UI components and shared data modules
- Tailwind CSS-based styling and animation-friendly layout

## Tech Stack

- React 18
- Vite
- React Router DOM
- Three.js
- @react-three/fiber
- @react-three/drei
- @react-spring/three
- Tailwind CSS
- EmailJS

## Architecture

- `src/main.jsx` bootstraps the app and loads global styles.
- `src/App.jsx` defines the router and page-level layout.
- `src/pages` contains the route sections for Home, About, Projects, and Contact.
- `src/components` holds shared UI pieces such as the navbar, footer, alerts, CTA, and loader.
- `src/models` contains the 3D scene models used on the home experience.
- `src/constants` stores portfolio data such as skills, projects, achievements, and social links.
- `src/hooks` contains custom hooks used for UI state and alerts.
- `src/assets` stores icons, images, and other static media used across the site.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Example Environment Variables

Use a local `.env` file in the project root with placeholder values only. Do not commit real secrets.

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

For sharing setup instructions, keep a separate `.env.example` file with only placeholder values.

## Usage

- Open the app in the browser after starting the dev server.
- Use the navigation bar to move between the Home, About, Projects, and Contact sections.
- Review the 3D home scene, project cards, and achievement timeline.
- Submit the contact form after configuring the EmailJS variables.

## Future Improvements

- Add more polished screenshot captures from the live app.
- Expand the projects section with filter or category controls.
- Add dark/light theme switching.
- Improve accessibility coverage for keyboard and screen reader navigation.
- Add tests for key UI flows and contact form behavior.

## Notes

This project is ready for Vercel deployment and already includes a `vercel.json` configuration file.

