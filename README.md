# Thozha - E-commerce Application

**Thozha** is a modern e-commerce web application built with React, TypeScript, and Vite. It's a responsive online shopping platform that showcases electronic products, smartphones, and home appliances with an attractive UI.

## 🛒 Features

- Responsive design using Material-UI Grid system
- Product catalog with images, names, and prices
- Category navigation (Smartphones, Home Appliances, Electronics)
- Search functionality with auto-suggestions
- Shopping cart and user account icons
- Attractive purple-themed color scheme
- Visual product organization with cards

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 7.2.4
- **UI Library**: Material-UI (MUI) with icons and styled components
- **Styling**: CSS with Material-UI's styling system
- **Routing**: React Router DOM
- **HTTP Client**: Axios (though not yet implemented in current code)
- **State Management**: React Hooks (useState)

## 📁 Project Structure

```
thozha/
├── public/                   # Public assets and HTML template
│   └── index.html            # Main HTML file
├── src/                      # Source code directory
│   ├── App.tsx               # Main application component with routing
│   ├── main.tsx              # Application entry point
│   ├── index.css             # Global CSS styles
│   ├── assets/               # Image and static assets
│   │   ├── m1.jpeg           # Product image 1
│   │   ├── m2.jpeg           # Product image 2
│   │   ├── m3.jpeg           # Product image 3
│   │   ├── m4.png            # Product image 4
│   │   ├── m5.jpeg           # Product image 5
│   │   ├── d1.jpg            # Discount banner 1
│   │   ├── d2.png            # Discount banner 2
│   │   ├── d3.png            # Discount banner 3
│   │   ├── d4.png            # Discount banner 4
│   │   ├── electronic.webp   # Electronic category image
│   │   ├── homeapplicance.png # Home appliance category image
│   │   └── mobile.webp       # Mobile category image
│   └── screens/              # All page components
│       ├── components/       # Reusable UI components
│       │   ├── Category.tsx  # Category navigation with icons
│       │   ├── Features.tsx  # Feature highlights section
│       │   ├── Footer.tsx    # Footer with contact and social links
│       │   ├── HeroSection.tsx # Hero banner with animations
│       │   ├── Navbar.tsx    # Navigation bar with search functionality
│       │   ├── PromoBanner.tsx # Promotional banner component
│       │   ├── SearchBox.tsx # Search with auto-suggestions
│       │   └── SearchOverlay.tsx # Mobile search overlay
│       ├── About.tsx         # About page with company information
│       ├── Home.tsx          # Main homepage with products and features
│       ├── ProductDetail.tsx # Individual product detail page
│       └── ProductList.tsx   # Product listing page with filters
└── vite.config.ts          # Vite build configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18 or higher) and npm installed on your system.

### Installation

1. Clone the repository
2. Navigate to the project directory: `cd thozha`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Available Scripts

- `npm run dev`: Starts the development server with hot reload
- `npm run build`: Builds the application for production
- `npm run lint`: Lints the code using ESLint
- `npm run preview`: Locally preview the production build

## 📋 Components Overview

### Core Files
- **App.tsx**: Main routing component that handles navigation between different pages using React Router
- **main.tsx**: Application entry point that sets up React StrictMode and BrowserRouter
- **index.css**: Global CSS reset with padding, margin, and box-sizing configurations
- **vite.config.ts**: Vite build configuration file with React plugin setup

### Screen Components (in src/screens/components/)
- **Category.tsx**: Category navigation component with animated icons for different product categories (Mobiles, Appliances, Watches, etc.)
- **Features.tsx**: Feature highlights section with icons for Fast Shipping, Secure Payment, Fast Delivery, and 24/7 Support
- **Footer.tsx**: Comprehensive footer with brand information, quick links, contact details, address with Google Maps link, phone/WhatsApp link, email, and social media links
- **HeroSection.tsx**: Animated hero banner with gradient background, sale badge, CTA buttons, and animated product icons
- **Navbar.tsx**: Fixed navigation header with Thozha Mobiles logo, responsive search box, and action icons (search, cart, account)
- **PromoBanner.tsx**: Promotional banner component (not fully implemented in current code)
- **SearchBox.tsx**: Advanced search component with auto-suggestions, keyboard navigation (arrow keys, enter, escape), and category-specific icons
- **SearchOverlay.tsx**: Mobile search overlay component (not fully implemented in current code)

### Page Components (in src/screens/)
- **About.tsx**: About page with company information, mission statement, and values
- **Home.tsx**: Main homepage with product listings, category navigation, discounts, and featured products
- **ProductDetail.tsx**: Individual product detail page with image gallery, product information, ratings, and purchase options
- **ProductList.tsx**: Product listing page with category filters, search functionality, pagination, and infinite scroll

## 🎨 UI Features

- Responsive design adapting to mobile, tablet, and desktop screens
- Product cards with images, names, and pricing in Indian Rupees (₹)
- Category navigation with visual icons
- Sticky navigation header
- Purple-themed color scheme (#AC74EC)
- Auto-suggesting search functionality
- Interactive elements with hover effects

## 🔄 Future Enhancements

- Backend integration for dynamic product data
- Complete shopping cart functionality with state management
- User authentication and account management
- Checkout and payment processing
- Order history and tracking
- Product reviews and ratings system
- Wishlist functionality
- Advanced search and filtering options
- API integration for search suggestions
- Server-side product filtering

## 🚧 Current Status

The application is in active development with a comprehensive e-commerce layout established. It includes a responsive UI with product listings, category navigation, search functionality, and detailed product views. The application features a complete routing system, mock product data, and advanced search with auto-suggestions. The next steps involve implementing backend integration, full shopping cart functionality, and user authentication.

## 📄 License

This project is open source and available under the MIT License.
