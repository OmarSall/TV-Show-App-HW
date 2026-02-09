# TV Show Tracker

**TV Show Tracker** is a front-end React application for browsing TV shows, viewing detailed information, and managing a personal watchlist. The project focuses on clean state management, routing, and predictable data flow using Redux Toolkit.

## Key Features

- Browse TV shows and view detailed show pages
- Add and remove shows from a personal watchlist
- Persistent watchlist stored in localStorage
- Client-side routing with nested layouts
- Global state management with Redux Toolkit

## Tech Stack

- React 19
- Vite
- Redux Toolkit + React Redux
- React Router DOM
- JavaScript (ES Modules)

## Architecture Highlights

- Centralized global state using Redux Toolkit
- Feature-based separation between pages, components, and store
- Dedicated API layer for external data fetching
- Local storage abstraction for persistent user data
- Shared layout with nested routes

## Getting Started (Development)

```bash
npm install
```
```bash
npm run dev
```

The application runs locally using Vite and does not require a backend server.