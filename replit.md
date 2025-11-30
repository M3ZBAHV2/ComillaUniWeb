# Comilla University Website

## Overview

This is a modern, full-stack university website for Comilla University, Bangladesh. Built with React, TypeScript, and Express, it features a responsive single-page application showcasing the university's academic programs, news, announcements, and campus life. The application provides an elegant user interface following modern university web design aesthetics with a focus on accessibility and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework and Build System**
- React with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Single-page application (SPA) architecture with section-based navigation

**UI Component Strategy**
- shadcn/ui component library (New York style variant) providing pre-built, accessible React components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Component-based architecture with reusable UI elements in `client/src/components/ui/`

**Styling System**
- Tailwind CSS configured with custom color system using CSS variables for theming
- Design follows neutral color scheme with primary blue accent
- Responsive design using mobile-first approach
- Custom spacing, typography, and border radius tokens defined in `tailwind.config.ts`
- CSS variables in `client/src/index.css` support light/dark mode capability

**State Management**
- TanStack Query (React Query) for server state management and caching
- React hooks for local component state
- No global state management library (Redux, Zustand) - architecture favors component composition

**Page Structure**
- Single home page (`client/src/pages/home.tsx`) composed of multiple sections
- Section-based navigation using anchor links and smooth scrolling
- Modular components: Navbar, HeroSection, ViceChancellorQuote, AnnouncementsSection, MissionSection, NavigationCards, NewsSection, StatisticsSection, ResidentialSection, Footer

### Backend Architecture

**Server Framework**
- Express.js for HTTP server
- TypeScript for type safety across the stack
- Separate development and production entry points (`server/index-dev.ts` and `server/index-prod.ts`)

**Development vs Production**
- Development mode integrates Vite dev server with HMR (Hot Module Replacement)
- Production mode serves pre-built static assets from `dist/public`
- Replit-specific plugins for development environment integration

**API Design**
- Currently frontend-only with no active API routes
- Storage layer prepared with in-memory implementation (`server/storage.ts`)
- Route registration scaffold exists in `server/routes.ts` for future API endpoints

**Data Layer**
- In-memory storage implementation with seeded data for development
- Storage interface defines methods for News, Announcements, and Departments
- Static data currently served from `client/src/data/staticData.ts`

### Database Schema (Prepared for PostgreSQL)

**Schema Definition**
- Drizzle ORM with PostgreSQL dialect for type-safe database access
- Schema defined in `shared/schema.ts` and shared between client and server
- Three main tables: `news`, `announcements`, and `departments`

**News Table**
- Stores university news articles with title, excerpt, content, image reference, date, and category
- UUID primary keys generated via PostgreSQL

**Announcements Table**
- Tracks university announcements and academic dates
- Type field distinguishes between general announcements and academic calendar entries

**Departments Table**
- Catalog of university departments with descriptions
- Foundation for academic program organization

**Migration Strategy**
- Drizzle Kit configured for schema migrations in `drizzle.config.ts`
- Migrations output to `./migrations` directory
- Schema validation through Drizzle-Zod for runtime type checking

### External Dependencies

**Database**
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Connection configured through `DATABASE_URL` environment variable
- Not currently active - application uses in-memory storage

**UI Component Libraries**
- Radix UI for 20+ accessible component primitives (dialogs, dropdowns, menus, etc.)
- shadcn/ui component system built on Radix UI primitives
- Lucide React for icon system

**Form Handling**
- React Hook Form with Zod resolvers for type-safe form validation
- Integration prepared but not actively used in current implementation

**Utilities**
- class-variance-authority (CVA) for component variant management
- clsx and tailwind-merge for dynamic className composition
- date-fns for date formatting and manipulation
- nanoid for generating unique identifiers

**Development Tools**
- Replit-specific Vite plugins for development banner, cartographer, and error overlay
- TypeScript for type checking across the entire codebase
- ESBuild for production bundling

**Asset Management**
- Generated images stored in `attached_assets/generated_images/`
- Vite alias configuration maps `@assets` to asset directory
- Images imported statically and bundled during build process