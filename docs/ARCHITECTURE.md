# Architecture

## Overview

Next.js 14 App Router application with client-side theming, static content, and minimal API surface.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Inline styles (no CSS framework)
- **Fonts:** Google Fonts (Syne, Syne Mono, Epilogue)

## Structure

```
app/
├── layout.tsx       # Root layout, metadata
├── page.tsx         # Homepage (client component)
├── globals.css      # Minimal global styles
├── api/             # API routes
│   ├── health/      # Health check
│   └── openapi/     # OpenAPI 3.0 spec
└── docs/            # Swagger UI (client-only)

components/
└── ProjectCard.tsx  # Reusable project card

lib/
├── types.ts         # TypeScript interfaces
├── data.ts          # Resume content (projects, experience, skills)
└── themes.ts        # Light/dark theme tokens
```

## Data Flow

- **Content:** Static data in `lib/data.ts` — edit to update resume content
- **Themes:** `lib/themes.ts` defines light/dark color tokens
- **Persistence:** Theme and accent preferences stored in `localStorage` (keys: `gp-theme`, `gp-accent`)

## API

| Route | Purpose |
|-------|---------|
| `GET /api/health` | Health check for monitoring |
| `GET /api/openapi` | OpenAPI 3.0 JSON spec |

Extend `app/api/openapi/route.ts` when adding new API routes.

## Build & Deploy

- **Static:** Homepage and docs page are statically generated
- **API:** Health and OpenAPI routes are serverless functions
- **Deploy:** Vercel (configured via `vercel.json`)
