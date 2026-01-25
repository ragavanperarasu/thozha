import React from "react";
import Navbar from "./components/Navbar";

import homepro from "../assets/homeapplicance.png";
import electronic from "../assets/electronic.webp";
import mobilepic from "../assets/mobile.webp";
import Footer from "./components/Footer";
import Category from "./components/Category";
import { Link } from "react-router-dom";
import Features from "./components/Features";


import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.jpeg";


import { motion } from "framer-motion";

import HeroSection from "./components/HeroSection";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const products = [
  {
    id: 1,
    name: "Vivo V27 5G Smart Phone first indian mobile",
    price: 89999,
    originalPrice: 99999,
    img: m1,
    rating: 4.5,
    reviews: 1243,
    highlights: ["6.78 inch AMOLED", "128GB Storage", "50MP Camera", "44W Fast Charging"],
    specifications: {
      Brand: "Vivo",
      Model: "V27 5G",
      Color: "Aurora Blue",
      Battery: "4500 mAh",
      Charging: "44W Fast Charging",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.3",
      Warranty: "1 Year",
    },
  },
  {
    id: 2,
    name: "Moto G96 5G Smart Phone",
    price: 12499,
    originalPrice: 14999,
    img: m2,
    rating: 4,
    reviews: 987,
    highlights: ["6.6 inch AMOLED", "64GB Storage", "50MP Camera", "33W Fast Charging"],
    specifications: {
      Brand: "Moto",
      Model: "G96 5G",
      Color: "Black",
      Battery: "5000 mAh",
      Charging: "33W Fast Charging",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.2",
      Warranty: "1 Year",
    },
  },
  {
    id: 3,
    name: "OnePlus Nord CE 3 Lite",
    price: 24999,
    originalPrice: 27999,
    img: m3,
    rating: 4.2,
    reviews: 765,
    highlights: ["6.72 inch AMOLED", "128GB Storage", "108MP Camera", "33W Fast Charging"],
    specifications: {
      Brand: "OnePlus",
      Model: "Nord CE 3 Lite",
      Color: "Black",
      Battery: "5000 mAh",
      Charging: "33W Fast Charging",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.3",
      Warranty: "1 Year",
    },
  },
  {
    id: 4,
    name: "Samsung Galaxy M33 5G 128 gb ram 125 storage",
    price: 45999,
    originalPrice: 49999,
    img: m4,
    rating: 4.3,
    reviews: 842,
    highlights: ["6.6 inch TFT LCD", "128GB Storage", "50MP Camera", "25W Fast Charging"],
    specifications: {
      Brand: "Samsung",
      Model: "Galaxy M33 5G",
      Color: "Blue",
      Battery: "6000 mAh",
      Charging: "25W Fast Charging",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.1",
      Warranty: "1 Year",
    },
  },
  {
    id: 5,
    name: "Redmi Note 12 Pro",
    price: 13999,
    originalPrice: 16999,
    img: m1,
    rating: 4.1,
    reviews: 654,
    highlights: ["6.67 inch AMOLED", "128GB Storage", "108MP Camera", "67W Fast Charging"],
    specifications: {
      Brand: "Redmi",
      Model: "Note 12 Pro",
      Color: "Gray",
      Battery: "5000 mAh",
      Charging: "67W Fast Charging",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.2",
      Warranty: "1 Year",
    },
  },
  {
    id: 6,
    name: "Realme 11X Pro 5G blue color variante",
    price: 18999,
    originalPrice: 21999,
    img: m5,
    rating: 4.2,
    reviews: 712,
    highlights: ["6.72 inch AMOLED", "128GB Storage", "200MP Camera", "67W Fast Charging"],
    specifications: {
      Brand: "Realme",
      Model: "11X Pro 5G",
      Color: "Black",
      Battery: "5000 mAh",
      Charging: "67W Fast Charging",
      Connectivity: "5G, Wi-Fi, Bluetooth 5.3",
      Warranty: "1 Year",
    },
  },
];


const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Category /> */}
      <HeroSection />

      <Features />


<Box sx={{ px: 2, mt: 8, mb: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}      // start lower and invisible
        whileInView={{ opacity: 1, y: 0 }}   // animate into view
        viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Category />
      </motion.div>
    </Box>

 <Box sx={{ px: 2, mt: 3 }}>
        <Typography
          sx={{
            fontFamily: "Comfortaa, sans-serif",
            fontSize: 20,
            fontWeight: "bold",
            mb: 2,
            color: "#7c13f4",
          }}
        >
          Top Products
        </Typography>

       

<Grid container spacing={3} justifyContent="center">
  {products.map((item) => (
    <Grid
      key={item.id}
      item
      xs={6}
      sm={4}
      md={3}
      lg={2.4}
      sx={{ display: "flex", justifyContent: "center", width:350}}
    >
      <Card
        component={Link}
        to={`/product/1`}
        sx={{
          borderRadius: 3,
          border:"1px solid #979797",
          transition: "0.3s",
          width: "100%",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          },
          textDecoration: "none",
          boxShadow:'none',
          color: "inherit",
          px: 2,
        }}
      >
        {/* Product Image */}
        <CardMedia
          component="img"
          height="230"
          image={item.img}
          alt={item.name}
          sx={{ objectFit: "contain", mb: 2, mt:2 }}
        />



        {/* Product Info */}
        <CardContent sx={{  p: 0 }}>

                            {/* Rating */}
          {item.rating && (
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={0.5} mt={1} >
              <Rating value={item.rating} precision={0.5} size="small" readOnly />
              <Typography variant="caption" sx={{ color: "#666" }}>
                ({item.reviews})
              </Typography>
            </Stack>
          )}

<Typography
  sx={{
    fontFamily: "Comfortaa",
    fontSize: 14,
    fontWeight: 500,
    my: 1,
    height: 40,
    overflow: "hidden",
  }}
>
  {item.name.length > 50
    ? item.name.slice(0, 50) + "..."
    : item.name}
</Typography>


          {/* Price + Discount */}
          <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1} >
            <Typography
              sx={{
                fontFamily: "Comfortaa",
                fontSize: 16,
                fontWeight: "bold",
                color: "#7c13f4",
              }}
            >
              ₹{item.price}
            </Typography>

            {item.originalPrice && item.originalPrice > item.price && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Comfortaa",
                    fontSize: 14,
                    textDecoration: "line-through",
                    color: "#888",
                  }}
                >
                  ₹{item.originalPrice}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Comfortaa",
                    fontSize: 12,
                    color: "green",
                    fontWeight: 600,
                    bgcolor: "#e0f2f1",
                    px: 0.8,
                    py: 0.2,
                    borderRadius: 1,
                  }}
                >
                  {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                </Typography>
              </>
            )}
          </Stack>


        </CardContent>

      </Card>
    </Grid>
  ))}
</Grid>



      </Box>


    
      <Footer/>
    </>
  );
};

export default Home;