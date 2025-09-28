# Whitepace - SaaS Landing Page

## Overview

Whitepace is a modern SaaS landing page for a productivity platform built with React, TypeScript, and Vite. The application showcases a professional business website with features including hero section, product features, customer testimonials, pricing plans, and contact information. The project uses shadcn/ui for components and Tailwind CSS for styling, creating a polished and responsive user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for client-side navigation with catch-all 404 handling
- **Component Library**: shadcn/ui providing accessible, customizable UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system tokens for consistent branding

### State Management
- **Client State**: React hooks (useState, useEffect) for local component state
- **Server State**: TanStack Query (React Query) for API data fetching, caching, and synchronization
- **Theme Management**: next-themes for dark/light mode support

### UI/UX Design System
- **Component Architecture**: Modular component structure with clear separation of concerns
- **Design Tokens**: Custom CSS variables for colors, gradients, and spacing defined in Tailwind config
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance

### Development Tooling
- **Type Safety**: Strict TypeScript configuration with path aliases for clean imports
- **Code Quality**: ESLint with React-specific rules and TypeScript integration
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer for cross-browser compatibility

### Performance Optimizations
- **Code Splitting**: Component-based lazy loading through React Router
- **Asset Optimization**: Vite's built-in optimization for production builds
- **Font Loading**: Google Fonts with preconnect for faster loading

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18.3.1, React DOM, React Router DOM for application foundation
- **Build Tools**: Vite with React SWC plugin for fast compilation and HMR
- **TypeScript**: Full TypeScript support with strict configuration

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible component primitives (@radix-ui/react-*)
- **Lucide React**: Modern icon library for consistent iconography
- **shadcn/ui**: Pre-built component system with customizable styling

### Styling and Theming
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Class Variance Authority**: Type-safe component variants
- **clsx/cn**: Conditional className utilities for dynamic styling
- **next-themes**: Theme switching capabilities

### Form and Data Management
- **React Hook Form**: Performant form handling with minimal re-renders
- **Hookform Resolvers**: Validation integration for form schemas
- **TanStack Query**: Server state management and data fetching

### Development and Monetization
- **Google AdSense**: Integrated advertising platform (ca-pub-9806599334870054)
- **Lovable Integration**: Development platform integration for code generation
- **Component Tagger**: Development tool for component identification

### Additional Utilities
- **Date-fns**: Date manipulation and formatting library
- **Embla Carousel**: Touch-friendly carousel component
- **Input OTP**: One-time password input component
- **Sonner**: Toast notification system