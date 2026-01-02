<<<<<<< HEAD
import React from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: 6,
        fontFamily: "Comfortaa, sans-serif",
        bgcolor: "#fff",
        color: "#333",
      }}
    >
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" mb={2}>
        About Thozha
      </Typography>
=======
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 3, mt: 10 }}>
        <Typography variant="h4" align="center" sx={{ fontFamily: 'Comfortaa', color: '#7c13f4', fontWeight: 'bold', mb: 3 }}>
          About Thozha
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Comfortaa', mb: 2, fontSize: '1.1rem' }}>
          Welcome to Thozha, your trusted destination for quality electronics and home appliances. We are committed to providing our customers with the latest technology products at competitive prices.
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Comfortaa', mb: 2, fontSize: '1.1rem' }}>
          Our mission is to make technology accessible to everyone by offering a wide range of products, from smartphones and laptops to home appliances, all with excellent customer service.
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Comfortaa', mb: 2, fontSize: '1.1rem' }}>
          At Thozha, we believe in delivering quality products with care and trust. Our team works hard to ensure that every customer has a satisfying shopping experience.
        </Typography>
      </Box>
      <Footer />
    </>
  )
}
>>>>>>> 3a06f2f7d83fb05a955bbe96dcf1ef3664834714

      <Typography variant="body1" sx={{ color: "#555", maxWidth: 900 }}>
        Thozha is a customer-focused e-commerce platform dedicated to delivering
        quality products with trust, affordability, and reliable service.
        Our goal is to simplify online shopping while maintaining transparency
        and customer satisfaction.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Mission & Vision */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
        <Box flex={1}>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Our Mission
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.8 }}>
            To provide high-quality products at fair prices with fast delivery
            and dependable customer support, ensuring a smooth and secure
            shopping experience.
          </Typography>
        </Box>

        <Box flex={1}>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Our Vision
          </Typography>
          <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.8 }}>
            To become a trusted digital marketplace that connects customers with
            reliable products and services across India.
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 4 }} />

      {/* Why Choose Us */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Why Choose Thozha?
      </Typography>

      <Stack spacing={1.2}>
        <Typography variant="body2" sx={{ color: "#666" }}>
          • Wide range of quality products
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          • Secure and transparent payments
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          • Fast and reliable delivery
        </Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>
          • Dedicated customer support via WhatsApp & Email
        </Typography>
      </Stack>
    </Box>
  );
};

export default About;
