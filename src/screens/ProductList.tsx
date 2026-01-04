import { useState, useEffect } from "react";
import { Container, Grid, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { mockProducts, Product } from "@/data/mockProducts";

// Template function for API-based product search
/*
async function fetchSearchResults(query) {
  try {
    // Example API call - replace with your actual API endpoint
    const response = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.products || [];
  } catch (error) {
    console.error('Error fetching search results:', error);
    // Return empty array as fallback
    return [];
  }
}
*/

const categories = [
  "All",
  "Electronics",
  "Smartphones",
  "Home Appliances",
  "Computers",
  "Cameras",
  "Audio",
  "Wearables",
];

export default function ProductList() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  // Extract query from URL parameters
  const urlParams = new URLSearchParams(location.search);
  const searchQuery = urlParams.get('q') || '';
  
  const [query, setQuery] = useState(searchQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [products, setProducts] = useState<Product[]>(mockProducts);

  useEffect(() => {
    // When search query changes in URL, update the local state
    if (searchQuery !== query) {
      setQuery(searchQuery);
    }
  }, [location.search]);

  // Filter products based on search query and selected category
  useEffect(() => {
    let filteredProducts = mockProducts;
    
    // Apply search filter if there's a query
    if (query) {
      filteredProducts = mockProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Apply category filter if not "All"
    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(product => 
        product.category === selectedCategory
      );
    }
    
    setProducts(filteredProducts);
  }, [query, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      {/* Search Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" component="h1" sx={{ 
          fontWeight: 700, 
          background: "linear-gradient(135deg, #AC74EC 0%, #C99EF5 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 2
        }}>
          {query ? `Search Results for "${query}"` : "Our Products"}
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          {products.length} {products.length === 1 ? "product" : "products"} found
        </Typography>
      </Box>

      {/* Category Filter */}
      <Box sx={{ mb: 6, overflowX: "auto", py: 1 }}>
        <Box sx={{ display: "flex", gap: 2, minWidth: "max-content", pb: 1 }}>
          {categories.map((category) => (
            <Box
              key={category}
              onClick={() => handleCategoryChange(category)}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 4,
                cursor: "pointer",
                bgcolor: selectedCategory === category ? "primary.main" : "grey.100",
                color: selectedCategory === category ? "white" : "text.primary",
                fontWeight: 500,
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: selectedCategory === category ? "primary.dark" : "grey.200",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {category}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={4}>
        {products.length > 0 ? (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h5" sx={{ color: "text.secondary", mb: 2 }}>
                No products found
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Try adjusting your search or filter criteria
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}