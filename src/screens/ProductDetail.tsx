import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Rating,
} from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";


// Import images correctly
import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.jpeg";

// Product data
const products = [
  {
    id: "1",
    name: "Moto G96 5G Smart Phone",
    price: 2999,
    rating: 4.5,
    reviews: 1243,
    brand: "Thozha Audio",
    stock: "In Stock",
    description:
      "High quality wireless headphones with deep bass and noise cancellation.",
    highlights: [
      "Bluetooth 5.3",
      "40 Hours Battery",
      "Noise Cancellation",
      "Fast Charging",
    ],
    images: [m1, m2, m3, m4, m5],
  },
];

const ProductDetail = () => {
  const { productId } = useParams();

  // Find product FIRST
  const product = products.find((p) => p.id === productId);

  // Safety check
  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  // State AFTER product exists
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

 return (
  <>
    <Navbar />

    <Box sx={{ p: { xs: 2, md: 4 }, mt: 10 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>

        {/* LEFT - Image Section */}
        <Box sx={{ flex: 1 }}>
  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>

    {/* Desktop Thumbnails (LEFT) */}
    <Stack
      spacing={2}
      sx={{
        display: { xs: "none", md: "flex" },
      }}
    >
      {product.images.map((img, i) => (
        <Box
          key={i}
          component="img"
          src={img}
          onClick={() => setSelectedImage(img)}
          sx={{
            width: 70,
            height: 90,
            borderRadius: 1,
            border:
              selectedImage === img
                ? "2px solid #AC74EC"
                : "1px solid #ccc",
            cursor: "pointer",
            objectFit: "cover",
            p: 0.5,
          }}
        />
      ))}
    </Stack>

    {/* Big Image */}
    <Box
      component="img"
      src={selectedImage}
      alt={product.name}
      sx={{
        width: "100%",
        height: { xs: 320, md: 500 },
        borderRadius: 2,
        objectFit: "contain",
        backgroundColor: "#fafafa",
        p: 1,
      }}
    />

    {/* Mobile Thumbnails (BOTTOM) */}
    <Stack
      direction="row"
      spacing={2}
      sx={{
        display: { xs: "flex", md: "none" },
        mt: 2,
        overflowX: "auto",
        px: 1,
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {product.images.map((img, i) => (
        <Box
          key={i}
          component="img"
          src={img}
          onClick={() => setSelectedImage(img)}
          sx={{
            width: 70,
            height: 90,
            borderRadius: 1,
            border:
              selectedImage === img
                ? "2px solid #AC74EC"
                : "1px solid #ccc",
            cursor: "pointer",
            objectFit: "cover",
            p: 0.5,
            flexShrink: 0, // 🔥 IMPORTANT
          }}
        />
      ))}
    </Stack>

  </Stack>
</Box>


        {/* RIGHT - Details */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontFamily: "Comfortaa", fontSize: { xs: "1.25rem", md: "1.5rem" } }}
          >
            {product.name}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} mt={1}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ fontFamily: "Comfortaa" }}>
              ({product.reviews} reviews)
            </Typography>
          </Stack>

          <Typography
            variant="h4"
            sx={{ color: "#AC74EC", mt: 2, fontFamily: "Comfortaa" }}
          >
            ₹{product.price}
          </Typography>

          <Typography sx={{ color: "green", mt: 1 }}>
            {product.stock}
          </Typography>

          {/* Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            mt={3}
          >
            <Button
              fullWidth
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={{
                bgcolor: "#AC74EC",
                py: 1.4,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#9a5fe0",
                },
              }}
            >
              Add to Cart
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FlashOnIcon />}
              sx={{
                borderColor: "#AC74EC",
                color: "#AC74EC",
                py: 1.4,
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": {
                  borderColor: "#9a5fe0",
                  backgroundColor: "rgba(172,116,236,0.08)",
                },
              }}
            >
              Buy Now
            </Button>
          </Stack>

          {/* Highlights */}
          <Box mt={4}>
            <Typography fontWeight="bold">Highlights</Typography>
            <ul>
              {product.highlights.map((item, i) => (
                <li key={i}>
                  <Typography variant="body2">{item}</Typography>
                </li>
              ))}
            </ul>
          </Box>

          {/* Description */}
          <Box mt={2}>
            <Typography fontWeight="bold">Description</Typography>
            <Typography variant="body2">
              {product.description}
            </Typography>
          </Box>
        </Box>

      </Stack>
    </Box>
    <Footer />
  </>
);

};

export default ProductDetail;
