import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  InputAdornment,
  IconButton,
  Pagination,
  Chip,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

// Mock product data - in a real app this would come from an API
/*
// Uncomment this function when implementing API fetch
async function fetchProducts(searchQuery = '') {
  try {
    let url = '/api/products';
    if (searchQuery) {
      url = `/api/products/search?q=${encodeURIComponent(searchQuery)}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return mock data as fallback
    return mockProducts;
  }
}
*/

const mockProducts = [
  { id: 1, name: "Vivo Smart Phone", price: "₹89,999", originalPrice: "₹99,999", rating: 4.5, reviews: 120, img: "./../assets/m1.jpeg", category: "Smartphones", description: "Latest Vivo smartphone with advanced camera technology and long battery life." },
  { id: 2, name: "Moto Smart Phone", price: "₹12,499", originalPrice: "₹15,999", rating: 4.2, reviews: 85, img: "./../assets/m2.jpeg", category: "Smartphones", description: "Reliable Moto smartphone with clean Android experience and great performance." },
  { id: 3, name: "OnePlus Smart Phone", price: "₹24,999", originalPrice: "₹29,999", rating: 4.7, reviews: 210, img: "./../assets/m3.jpeg", category: "Smartphones", description: "Flagship OnePlus device with fast charging and smooth user experience." },
  { id: 4, name: "Samsung Smart Phone", price: "₹45,999", originalPrice: "₹50,000", rating: 4.6, reviews: 320, img: "./../assets/m4.png", category: "Smartphones", description: "Premium Samsung smartphone with excellent display and camera quality." },
  { id: 5, name: "Redmi Smart Phone", price: "₹13,999", originalPrice: "₹16,999", rating: 4.3, reviews: 150, img: "./../assets/m5.jpeg", category: "Smartphones", description: "Budget-friendly Redmi phone with great value for money and solid performance." },
  { id: 6, name: "Realme Smart Phone", price: "₹18,999", originalPrice: "₹22,999", rating: 4.4, reviews: 95, img: "./../assets/d1.jpg", category: "Smartphones", description: "Realme smartphone with fast processor and good camera capabilities." },
  { id: 7, name: "LG Washing Machine", price: "₹28,499", originalPrice: "₹32,999", rating: 4.1, reviews: 75, img: "./../assets/d2.png", category: "Home Appliances", description: "Energy-efficient LG washing machine with multiple wash programs and large capacity." },
  { id: 8, name: "Samsung Refrigerator", price: "₹35,999", originalPrice: "₹42,000", rating: 4.8, reviews: 180, img: "./../assets/d3.png", category: "Home Appliances", description: "Spacious Samsung refrigerator with digital inverter technology and fresh cooling." },
  { id: 9, name: "Bose Wireless Headphones", price: "₹12,999", originalPrice: "₹15,999", rating: 4.9, reviews: 320, img: "./../assets/d4.png", category: "Electronics", description: "Premium Bose headphones with noise cancellation and exceptional sound quality." },
  { id: 10, name: "Apple iPad", price: "₹32,999", originalPrice: "₹39,900", rating: 4.6, reviews: 210, img: "./../assets/electronic.webp", category: "Electronics", description: "Powerful Apple iPad with high-resolution display and A-series chip performance." },
  { id: 11, name: "Dell Laptop", price: "₹55,999", originalPrice: "₹65,000", rating: 4.5, reviews: 145, img: "./../assets/homeapplicance.png", category: "Electronics", description: "Reliable Dell laptop with powerful processor and long battery life for productivity." },
  { id: 12, name: "Sony Camera", price: "₹42,999", originalPrice: "₹48,000", rating: 4.7, reviews: 95, img: "./../assets/mobile.webp", category: "Electronics", description: "High-quality Sony camera with advanced features for professional photography." },
];

// Function to import images dynamically
interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  img: string;
  category: string;
  description: string;
}

const importImage = (path: string): string => {
  try {
    return new URL(path, import.meta.url).href;
  } catch {
    return './../assets/m1.jpeg'; // default fallback image
  }
};

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  // State to manage search term independently
  const [searchTerm, setSearchTerm] = useState(query || "");
  
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Show 8 products per page
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  
  const observer = useRef<IntersectionObserver | null>(null);

  // Get unique categories for filter chips
  const categories = Array.from(new Set(mockProducts.map(product => product.category)));

  // Filter products based on search query and category
  useEffect(() => {
    let result = mockProducts;
    
    // Filter by search query
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => 
        product.category === selectedCategory
      );
    }
    
    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
    setVisibleProducts(result.slice(0, itemsPerPage)); // Initialize with first page
    setHasMore(result.length > itemsPerPage);
  }, [searchTerm, selectedCategory]);

  // Load more products for infinite scrolling
  const loadMoreProducts = useCallback(() => {
    if (!hasMore) return;
    
    const startIndex = currentPage * itemsPerPage;
    const newProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    
    if (newProducts.length === 0) {
      setHasMore(false);
      return;
    }
    
    setVisibleProducts(prev => [...prev, ...newProducts]);
    setCurrentPage(prev => prev + 1);
    
    // Check if we've loaded all products
    if (startIndex + itemsPerPage >= filteredProducts.length) {
      setHasMore(false);
    }
  }, [currentPage, filteredProducts, hasMore, itemsPerPage]);
  
  // Set up intersection observer for infinite scrolling
  useEffect(() => {
    if (!hasMore) return;
    
    const loadMoreRef = (node: HTMLElement | null) => {
      if (observer.current) observer.current.disconnect();
      
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      });
      
      if (node) observer.current.observe(node);
    };
    
    // Load initial products
    const initialProducts = filteredProducts.slice(0, itemsPerPage);
    setVisibleProducts(initialProducts);
    setHasMore(initialProducts.length === itemsPerPage && filteredProducts.length > itemsPerPage);
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [filteredProducts, hasMore, itemsPerPage, loadMoreProducts]);
  
  const loadMoreRef = (node: HTMLElement | null) => {
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreProducts();
      }
    });
    
    if (node) observer.current.observe(node);
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      
      <Box sx={{ 
        px: 2, 
        mt: 11, 
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>


        {/* Category Tabs - Horizontal */}
        <Box sx={{ width: '100%', mb: 3, borderBottom: 2, borderColor: '#7c13f4', py: 1, zIndex: 1, display: { xs: 'none', sm: 'block' } }}>
          <Stack direction="row" spacing={1} overflow="auto" sx={{ pb: 0.5, pl: 1 }}>
            <Chip
              label="All"
              variant={selectedCategory === null ? "filled" : "outlined"}
              onClick={() => handleCategoryChange(null)}
              sx={{
                bgcolor: selectedCategory === null ? "#7c13f4" : "transparent",
                color: selectedCategory === null ? "white" : "#7c13f4",
                border: "2px solid #7c13f4",
                borderRadius: 3,
                minWidth: 60,
                maxWidth: 120,
                flexShrink: 0,
                fontWeight: 'bold',
                fontSize: { xs: 12, sm: 14 },
                height: 40,
                '&:hover': {
                  bgcolor: selectedCategory === null ? '#6a0dad' : '#f0e6ff',
                }
              }}
            />
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant={selectedCategory === category ? "filled" : "outlined"}
                onClick={() => handleCategoryChange(category)}
                sx={{
                  bgcolor: selectedCategory === category ? "#7c13f4" : "transparent",
                  color: selectedCategory === category ? "white" : "#7c13f4",
                  //border: "2px solid #7c13f4",
                  borderRadius: 3,
                  minWidth: 70,
                  maxWidth: 140,
                  flexShrink: 0,
                  fontWeight: 'bold',
                  fontSize: { xs: 12, sm: 14 },
                  height: 40,
                  '&:hover': {
                    bgcolor: selectedCategory === category ? '#6a0dad' : '#f0e6ff',
                  }
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems="stretch" sx={{ width: '100%' }}>
          {visibleProducts.map((product: Product) => {
            const productImage = importImage(product.img);
            return (
            <Grid key={product.id} size={{ xs: 12, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card 
                sx={{ 
                  borderRadius: 3, 
                //   border: "1px solid #7c13f4", 
                  pt: 2,
                  //transition: "transform 0.2s, box-shadow 0.2s",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow:'none',
                  "&:hover .cart-icon": {
                    opacity: 1
                  },
                  "&:hover": {
                    transform: "translateY(-5px)",
                   
                  }
                }}
              >
                <Box sx={{ position: "relative", flex: 1 }}>
                  <CardMedia
                    component="img"
                    height="280"
                    image={productImage}
                    alt={product.name}
                    sx={{ objectFit: "contain", padding: 1 }}
                  />

                </Box>

                <CardContent sx={{ textAlign: "left", pt: 1 }}>
                  <Typography 
                    sx={{ 
                      fontFamily: "Comfortaa", 
                      fontSize: 14,
                      minHeight: 40,
                      maxHeight: 40,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      cursor: "pointer",
                      transition: "color 0.2s",
                      "&:hover": {
                        color: "#7c13f4"
                      }
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontFamily: "Comfortaa", 
                      fontSize: 12,
                      color: "#666",
                      mt: 0.5,
                      minHeight: 30,
                      maxHeight: 30,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical"
                    }}
                  >
                    {product.description}
                  </Typography>
                  
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          sx={{ 
                            fontSize: 14, 
                            color: i < Math.floor(product.rating) ? "#FFD700" : "#E0E0E0" 
                          }} 
                        />
                      ))}
                      <Typography sx={{ fontSize: 12, ml: 0.5 }}>
                        {product.rating} ({product.reviews})
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Comfortaa",
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "#7c13f4",
                        }}
                      >
                        {product.price}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Comfortaa",
                          fontSize: 12,
                          color: "#999",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.originalPrice}
                      </Typography>
                    </Box>
                    

                  </Box>
                </CardContent>
                
                <Box sx={{ position: "absolute", bottom: 10, right: 10, zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <IconButton 
                    size="large"
                    className="cart-icon"
                    sx={{ 
                      bgcolor: "#7c13f4",
                      color: "white",
                      borderRadius: "50%",
                      width: 40,
                      height: 40,
                      minWidth: 40,
                      minHeight: 40,
                      opacity: { xs: 1, md: 0 },
                      transition: 'opacity 0.3s',
                      "&:hover": {
                        bgcolor: "#6a0dad",
                        opacity: 1
                      },
                      [`@media (hover: none)`]: {
                        opacity: 1
                      }
                    }}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          );})}
        </Grid>
        
        {/* Infinite Scroll Trigger */}
        {hasMore && (
          <Box ref={loadMoreRef as React.RefCallback<HTMLElement>} sx={{ height: 20, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
            <Typography>Loading more products...</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProductList;