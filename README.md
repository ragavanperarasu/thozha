# Thozha Mobiles - E-commerce Platform

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## Project Overview

Thozha Mobiles is a comprehensive e-commerce platform focused on mobile devices, electronics, and home appliances. The application has been enhanced with additional UI components and pages to provide a complete shopping experience.

## Project Directory Structure

### Root Directory
- `package.json` - Project dependencies and scripts
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `index.html` - Main HTML entry point
- `README.md` - Project documentation

### `public/` Directory
- `robots.txt` - Search engine crawling instructions

### `src/` Directory
Main source code directory containing all application code

#### `src/components/` - Reusable UI Components
- `src/components/home/` - Homepage-specific components
  - `Categories.tsx` - Displays product categories
  - `FeaturedProducts.tsx` - Shows featured products
  - `Hero.tsx` - Main hero banner component
  - `Newsletter.tsx` - Newsletter subscription component
  - `ProductCard.tsx` - Individual product display card
  - `PromoBanner.tsx` - Promotional banner component
- `src/components/layout/` - Layout components
  - `Footer.tsx` - Site footer with contact info and links
  - `Header.tsx` - Site header with navigation
- `src/components/ui/` - Reusable UI components (shadcn/ui)
  - Various component files following shadcn/ui pattern
- `src/components/NavLink.tsx` - Navigation link component

#### `src/data/` - Data and Mock Content
- `src/data/mockProducts.ts` - Mock product data and search functions

#### `src/hooks/` - Custom React Hooks
- `src/hooks/use-mobile.tsx` - Mobile device detection hook
- `src/hooks/use-toast.ts` - Toast notification hook

#### `src/lib/` - Utility Functions
- `src/lib/utils.ts` - Utility functions and helpers

#### `src/pages/` - Main Application Pages
- `src/pages/Index.tsx` - Main index page
- `src/pages/NotFound.tsx` - 404 error page

#### `src/screens/` - Application Screens and Views
- `src/screens/components/` - Screen-specific components
  - `src/screens/components/CategorySection.tsx` - Category display section
  - `src/screens/components/FeaturedProducts.tsx` - Featured products section
  - `src/screens/components/Footer.tsx` - Screen footer component
  - `src/screens/components/HeroSection.tsx` - Hero section component
  - `src/screens/components/Navbar.tsx` - Navigation bar component
  - `src/screens/components/Newsletter.tsx` - Newsletter component
  - `src/screens/components/ProductCard.tsx` - Product display card
  - `src/screens/components/PromoBanner.tsx` - Promotional banner
  - `src/screens/components/SearchBox.tsx` - Search input with suggestions
  - `src/screens/components/SearchOverlay.tsx` - Full-screen search overlay
- `src/screens/HomeScreen.tsx` - Main home screen component

#### `src/screens/ProductList.tsx` - Product listing page with search and filtering
#### `src/screens/ProductDetail.tsx` - Individual product detail page
#### `src/screens/About.tsx` - About page with company information

#### `src/theme/` - Styling and Theme Configuration
- `src/theme/muiTheme.ts` - Material UI theme configuration

#### `src/App.tsx` - Main application component with routing
#### `src/main.tsx` - Main entry point for React application
#### `src/index.css` - Global CSS styles
#### `src/App.css` - Main application styles
#### `src/vite-env.d.ts` - Vite environment type definitions

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## UI Enhancements

The following components and pages have been added to enhance the user interface:

- **Product List Page**: A comprehensive product listing page with search and filtering capabilities
- **Product Detail Page**: Detailed view for individual products with image gallery and specifications
- **About Page**: Information about the company and its values
- **Advanced Search**: Enhanced search functionality with suggestions and overlay search
- **Search Overlay**: Full-screen search experience for mobile users
- **Improved Navigation**: Enhanced navigation with search functionality

## API Integration Notes

Backend API integration points have been prepared with commented code for:

- Product search functionality
- Product listing with pagination
- Product detail retrieval
- Search suggestions

These API endpoints can be uncommented and connected to a backend service when ready.

## Features

- Responsive design for mobile and desktop
- Product search with suggestions
- Category filtering
- Product detail views
- Shopping cart functionality
- Modern UI with Material UI components