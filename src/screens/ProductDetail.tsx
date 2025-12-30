import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Stack,
  Rating,
} from "@mui/material";

import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.jpeg";

import Navbar from "./components/Navbar";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
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
    images: [
      "../assets/m1.jpeg",
      "../assets/m1.jpeg",
      "../assets/m1.jpeg",
    ],
  },
];


const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <>
    <Navbar/>
    <Box sx={{ p: { xs: 2, md: 4 }, mt:10 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        
        {/* LEFT - Images */}
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={m2}
            alt={product.name}
            sx={{
              width: "60%",
              height:500,
              borderRadius: 2,
              border: "1px solid #eee",
            }}
          />

          <Stack direction="row" spacing={2} mt={2}>
            {product.images.map((img, i) => (
              <Box
                key={i}
                component="img"
                src={m1}
                sx={{
                  width: 90,
                  height: 110,
                  borderRadius: 1,
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  padding:2
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* RIGHT - Details */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            {product.name}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1} mt={1}>
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2">
              ({product.reviews} reviews)
            </Typography>
          </Stack>

          <Typography
            variant="h4"
            sx={{ color: "#AC74EC", mt: 2 }}
          >
            ₹{product.price}
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Brand: <b>{product.brand}</b>
          </Typography>

          <Typography sx={{ color: "green", mt: 1 }}>
            {product.stock}
          </Typography>

          {/* Buttons */}
          <Stack direction="row" spacing={2} mt={3}>
            <Button variant="contained" sx={{ bgcolor: "#AC74EC" }}>
              Add to Cart
            </Button>
            <Button variant="outlined" sx={{ borderColor: "#AC74EC", color: "#AC74EC" }}>
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
    </Box></>
  );
};

export default ProductDetail;
