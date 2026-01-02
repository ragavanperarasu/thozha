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

export default About