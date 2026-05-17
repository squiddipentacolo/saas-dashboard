# Modern SaaS Dashboard

A work-in-progress SaaS dashboard built with Next.js 16, Tailwind CSS v4, and shadcn/ui. The project uses the App Router and includes an initial dashboard layout with a persistent sidebar structure.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Language:** TypeScript

## Architecture & Features

- **Dashboard Layout:** Uses `app/dashboard/layout.tsx` to render shared dashboard UI such as the sidebar.
- **App Router Structure:** Separates the root page from the dashboard route.
- **Reusable UI Foundation:** Includes shadcn/ui setup and shared UI primitives.
- **Authentication:** Not implemented yet. Supabase, Clerk, or Auth.js can be added next.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/squiddipentacolo/saas-dashboard.git
cd saas-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.
