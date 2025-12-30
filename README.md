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
src/
├── screens/
│   ├── components/
│   │   ├── Footer.tsx        # Footer component with links
│   │   ├── Navbar.tsx        # Navigation bar with search functionality
│   │   └── SearchBox.tsx     # Search with auto-suggestions
│   ├── About.tsx             # About page (currently basic)
│   └── Home.tsx              # Main homepage with product listings
├── App.tsx                   # Main routing component
├── main.tsx                  # Entry point with BrowserRouter
├── index.css                 # Basic CSS reset
└── assets/                   # Images for products and UI elements
```

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

## 📋 Components Overview

- **App Component**: Main routing component that handles navigation between different pages
- **Home Component**: Main landing page with product listings, category navigation, and discounts
- **Navbar Component**: Fixed header with logo, search functionality, and action icons
- **SearchBox Component**: Provides search with real-time filtering and auto-suggestions
- **Footer Component**: Consistent footer with brand information and navigation links

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
- Product detail pages
- Shopping cart functionality with state management
- User authentication and account management
- Checkout and payment processing
- Order history and tracking
- Product reviews and ratings system
- Wishlist functionality
- Advanced search and filtering options

## 🚧 Current Status

The application is in early development stage with a solid foundation. It has a clean, modern UI with the basic e-commerce layout established. The next steps would involve implementing backend integration, cart functionality, and user authentication.

## 📄 License

This project is open source and available under the MIT License.
