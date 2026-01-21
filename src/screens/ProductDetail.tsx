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


import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";


import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";


import { Divider, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";






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
    price: 2999,              // discounted price
    originalPrice: 3999,      // actual MRP
    codAvailable: false,
    deliveryCharge: 100, // 0 = Free delivery
    deliveryDays: 4, // number of days
    rating: 4.5,
    reviews: 1243,
    brand: "Thozha Audio",
    stock: "In Stock",
    highlights: [
      "Bluetooth 5.3",
      "40 Hours Battery",
      "Noise Cancellation",
      "Fast Charging",
    ],

    specifications: {
      Brand: "Moto",
      Model: "G96 5G",
      Color: "Black",
      Battery: "5000 mAh",
      Charging: "Fast Charging",
      Connectivity: "5G, Bluetooth 5.3",
      Warranty: "1 Year",
    },
    images: [m1, m2, m3, m4, m5],
    offers: [
      {
        type: "bank",
        title: "Bank Offer",
        description: "10% off on HDFC Credit Card EMI transactions",
      },
      {
        type: "emi",
        title: "No Cost EMI",
        description: "₹999/month EMI for 3 months",
      },
      {
        type: "coupon",
        title: "Coupon Offer",
        description: "Get ₹300 off using coupon NEW300",
      },
      {
        type: "cashback",
        title: "Cashback",
        description: "5% unlimited cashback on Flipkart Axis Bank Card",
      },
    ],
  },
];


const reviews = [
  {
    id: 1,
    userName: "Arun Kumar",
    rating: 5,
    content: "Excellent product! Battery life is amazing and sound quality is great.",
    postedDate: "2026-01-15",
  },
  {
    id: 2,
    userName: "Priya S",
    rating: 4,
    content: "Good value for money. Fast delivery and good build quality.",
    postedDate: "2026-01-10",
  },
  {
    id: 3,
    userName: "Rahul",
    rating: 3.5,
    content: "Decent product, but noise cancellation could be better.",
    postedDate: "2026-01-05",
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

  const discountPercentage = Math.round(
  ((product.originalPrice - product.price) / product.originalPrice) * 100
);

const discountAmount = product.originalPrice - product.price;


const deliveryDate = new Date();
deliveryDate.setDate(deliveryDate.getDate() + product.deliveryDays);

const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-IN", {
  weekday: "short",
  day: "numeric",
  month: "short",
});



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

<Box mt={2}>
  <Stack
    direction="row"
    spacing={1.5}
    alignItems="center"
    flexWrap="wrap"
  >
    {/* Discounted Price */}
    <Typography
      variant="h4"
      sx={{
        color: "#AC74EC",
        fontFamily: "Comfortaa",
        fontWeight: "bold",
      }}
    >
      ₹{product.price}
    </Typography>

    {/* Actual Price */}
    <Typography
      variant="body1"
      sx={{
        textDecoration: "line-through",
        color: "#888",
        fontFamily: "Comfortaa",
      }}
    >
      ₹{product.originalPrice}
    </Typography>

<Typography
  variant="body2"
  sx={{
    bgcolor: "#3fc37f",
    color: "white",
    fontWeight: 600,
    px: 1.2,          // horizontal padding
    py: 0.3,          // vertical padding
    borderRadius: 1,  // smooth rounded badge
    fontSize: "0.75rem",
    lineHeight: 1.4,
    display: "inline-flex",
    alignItems: "center",
  }}
>
  {discountPercentage}% OFF
</Typography>


    {/* You Save */}
    <Typography
      variant="body2"
      sx={{
        color: "green",
        fontWeight: 500,
      }}
    >
      (Save ₹{discountAmount})
    </Typography>
  </Stack>
</Box>



          <Typography sx={{ color: "green", mt: 1 }}>
            {product.stock}
          </Typography>



{/* Available Offers */}
<Box mt={4}>
  <Typography fontWeight="bold" mb={1}>
    Available Offers
  </Typography>

  <Stack spacing={1.2}>
    {product.offers.map((offer, i) => (
      <Stack
        key={i}
        direction="row"
        spacing={1.2}
        alignItems="flex-start"
      >
        {/* Icon */}
        {offer.type === "bank" && (
          <AccountBalanceOutlinedIcon sx={{ color: "#50C878" }} />
        )}
        {offer.type === "emi" && (
          <PaymentsOutlinedIcon sx={{ color: "#50C878" }} />
        )}
        {offer.type === "coupon" && (
          <LocalOfferOutlinedIcon sx={{ color: "#50C878" }} />
        )}
        {offer.type === "cashback" && (
          <CreditCardOutlinedIcon sx={{ color: "#50C878" }} />
        )}

        {/* Text */}
        <Typography variant="body2">
          <strong>{offer.title}</strong> {offer.description}
        </Typography>
      </Stack>
    ))}
  </Stack>
</Box>




          <Box
  mt={2}
  sx={{
    p: 1.8,
    borderRadius: 2,
    bgcolor: "#f8f6fc", // mild lavender background
    border: "1px solid #eee",
  }}
>
  <Stack spacing={1.2}>

    {/* Cash on Delivery */}
    <Stack direction="row" spacing={1} alignItems="center">
      <PaymentsOutlinedIcon sx={{ color: "#6a1b9a", fontSize: 20 }} />

      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        COD
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: product.codAvailable ? "green" : "red",
          fontWeight: 600,
        }}
      >
        {product.codAvailable ? "Available" : "Not Available"}
      </Typography>
    </Stack>

<Box>
  <Stack spacing={0.6}>

    {/* Delivery Charge Row */}
    <Stack direction="row" spacing={1} alignItems="center">
      <LocalShippingOutlinedIcon sx={{ color: "#1976d2", fontSize: 20 }} />

      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Delivery Charge
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: product.deliveryCharge === 0 ? "green" : "#333",
          fontWeight: 600,
        }}
      >
        {product.deliveryCharge === 0
          ? "Free Delivery"
          : `₹${product.deliveryCharge}`}
      </Typography>
    </Stack>

    {/* Delivery Date - Next Line */}
    <Typography
      variant="body2"
      sx={{
        ml: 3.2, // align under text (icon offset)
        color: "#555",
      }}
    >
      Delivered by{" "}
      <strong>{formattedDeliveryDate}</strong>
    </Typography>

  </Stack>
</Box>

  </Stack>
</Box>



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

{/* Key Features */}
<Box mt={4}>
  <Typography fontWeight="bold" mb={1}>
    Key Features
  </Typography>

  <Stack spacing={1}>
    {product.highlights.map((item, i) => (
      <Stack
        key={i}
        direction="row"
        spacing={1}
        alignItems="center"
      >
        {/* Play Bullet */}
        <PlayArrowIcon
          sx={{
            color: "#AC74EC",
            fontSize: 18,
          }}
        />

        {/* Feature Text */}
        <Typography variant="body2">
          {item}
        </Typography>
      </Stack>
    ))}
  </Stack>
</Box>



{/* Specifications */}
<Box mt={4}>
  <Typography fontWeight="bold" mb={1}>
    Specifications
  </Typography>

  <Stack spacing={1}>
    {Object.entries(product.specifications).map(([key, value], i) => (
      <Stack
        key={i}
        direction="row"
        spacing={2}
        alignItems="flex-start"
      >
        {/* Key */}
        <Typography
          variant="body2"
          sx={{
            minWidth: 140,
            color: "#666",
            fontWeight: 600,
          }}
        >
          {key}
        </Typography>

        {/* Value */}
        <Typography
          variant="body2"
          sx={{ color: "#333" }}
        >
          {value}
        </Typography>
      </Stack>
    ))}
  </Stack>
</Box>



{/* Ratings & Reviews */}
<Box mt={5}>
  <Typography fontWeight="bold" mb={1}>
    Ratings & Reviews
  </Typography>

  <Stack spacing={2}>
    {reviews.map((review) => (
      <Box key={review.id}>
        
        {/* User & Rating */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Avatar sx={{ bgcolor: "#AC74EC", width: 32, height: 32 }}>
            {review.userName.charAt(0)}
          </Avatar>

          <Box>
            <Typography variant="body2" fontWeight={600}>
              {review.userName}
            </Typography>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <Rating
                value={review.rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="caption" sx={{ color: "#666" }}>
                • {new Date(review.postedDate).toDateString()}
              </Typography>
            </Stack>
          </Box>
        </Stack>

        {/* Review Content */}
        <Typography
          variant="body2"
          sx={{ mt: 1.2, ml: 5 }}
        >
          {review.content}
        </Typography>

       
        {/* <Divider sx={{ mt: 2 }} /> */}
      </Box>
    ))}
  </Stack>
</Box>




        </Box>

      </Stack>
    </Box>
    <Footer />
  </>
);

};

export default ProductDetail;
