import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Rating,
  Grid,
  Chip,
} from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ShoppingCart, FlashOn } from "@mui/icons-material";

import { mockProducts, Product } from "@/data/mockProducts";

// Template function for API-based product fetch
/*
async function fetchProduct(productId) {
  try {
    // Example API call - replace with your actual API endpoint
    const response = await fetch(`/api/products/${productId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    // Return null as fallback
    return null;
  }
}
*/

const ProductDetail = () => {
  const { productId } = useParams();
  
  const productIdNum = Number(productId);
  const product = mockProducts.find((p) => p.id === productIdNum);

  // Safety check
  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  // State AFTER product exists
  const [selectedImage, setSelectedImage] = useState(product.image);

 return (
  <>
    <Navbar />

    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Grid container spacing={6}>
        {/* Image Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box
              component="div"
              sx={{
                width: "100%",
                height: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey.100",
                borderRadius: "16px",
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: "6rem" }}>{product.image}</Typography>
            </Box>
            
            <Stack direction="row" spacing={1} justifyContent="center">
              <Chip
                label={`★ ${product.rating}`}
                size="small"
                sx={{ bgcolor: "primary.light", color: "primary.dark" }}
              />
              <Chip
                label={`${product.reviews} reviews`}
                size="small"
                sx={{ bgcolor: "grey.200" }}
              />
            </Stack>
          </Box>
        </Grid>

        {/* Details Section */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={700}
            sx={{ mb: 2, color: "text.primary" }}
          >
            {product.name}
          </Typography>

          <Typography variant="h5" color="primary.main" sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
            {product.originalPrice && (
              <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 1, textDecoration: "line-through" }}>
                ${product.originalPrice.toFixed(2)}
              </Typography>
            )}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          {/* Stock Status */}
          <Box sx={{ mb: 3 }}>
            <Chip
              label={product.inStock ? "In Stock" : "Out of Stock"}
              color={product.inStock ? "success" : "error"}
              variant="outlined"
            />
          </Box>

          {/* Buttons */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCart />}
              sx={{ flex: 1, py: 1.5 }}
            >
              Add to Cart
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<FlashOn />}
              sx={{ py: 1.5 }}
            >
              Buy Now
            </Button>
          </Stack>

          {/* Features */}
          <Box>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
              Key Features
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary">• Premium quality materials</Typography>
              <Typography variant="body2" color="text.secondary">• 2-year warranty</Typography>
              <Typography variant="body2" color="text.secondary">• Free shipping & returns</Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </>
);

};

export default ProductDetail;