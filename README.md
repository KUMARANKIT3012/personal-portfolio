# 3D Portfolio

An interactive developer portfolio built with React, Vite, Three.js, and React Three Fiber. It includes a 3D scene, animated sections, a project showcase, and an EmailJS-powered contact form.

## Features

- Responsive landing page with 3D visuals
- Dedicated About, Projects, and Contact sections
- Animated navigation and UI components
- EmailJS contact form integration
- Tailwind CSS styling with reusable components

## Tech Stack

- React 18
- Vite
- Three.js
- @react-three/fiber
- @react-three/drei
- Tailwind CSS
- EmailJS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

Create a local `.env` file in the project root with your EmailJS credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Keep `.env` out of git. Use `.env.example` if you want to share a non-secret template for other contributors.

## Project Structure

- `src/components` reusable UI pieces
- `src/pages` route-level sections
- `src/models` Three.js scene models
- `src/constants` shared data and links
- `src/hooks` custom hooks

## Notes

This project is ready for Vercel deployment and already includes a `vercel.json` configuration file.

