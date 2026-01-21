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
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

// Define the FooterLink, InfoItem, and SocialIcon components here
const FooterLink = ({ text, url }: { text: string; url: string }) => (
  <Link
    to={url}
    style={{
      color: "#555",
      fontSize: "0.9rem",
      transition: "0.25s",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => {
      const target = e.target as HTMLElement;
      target.style.color = "#000";
      target.style.paddingLeft = "4px";
    }}
    onMouseLeave={(e) => {
      const target = e.target as HTMLElement;
      target.style.color = "#555";
      target.style.paddingLeft = "0px";
    }}
  >
    {text}
  </Link>
);

const InfoItem = ({ icon, text, url }: { icon: React.ReactNode; text: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{ 
      color: "inherit", 
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => {
      const target = e.target as HTMLElement;
      target.style.color = "#000";
    }}
    onMouseLeave={(e) => {
      const target = e.target as HTMLElement;
      target.style.color = "#555";
    }}
  >
    {icon}
    <span>{text}</span>
  </a>
);

const SocialIcon = ({ icon, url }: { icon: React.ReactNode; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      color: "#555",
      border: "1px solid #ddd",
      transition: "0.3s",
      textDecoration: "none",
    }}
    onMouseEnter={(e) => {
      const target = e.target as HTMLElement;
      target.style.backgroundColor = "#000";
      target.style.color = "#fff";
      target.style.borderColor = "#000";
    }}
    onMouseLeave={(e) => {
      const target = e.target as HTMLElement;
      target.style.backgroundColor = "transparent";
      target.style.color = "#555";
      target.style.borderColor = "#ddd";
    }}
  >
    {icon}
  </a>
);

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          mt: 10,
          minHeight: { xs: 400, md: 500 },
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Decorations */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(172,99,255,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-20px)" },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(172,99,255,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "float 8s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        
        <Container maxWidth="lg" sx={{ p: 5, position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 32, md: 48 },
                fontWeight: 800,
                fontFamily: "Comfortaa, sans-serif",
                mb: 2,
                background: "linear-gradient(135deg, #AC74EC 0%, #C99EF5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Thozha
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 16, md: 20 },
                fontFamily: "Comfortaa, sans-serif",
                color: "#e2e8f0",
                mb: 3,
                fontWeight: 400,
              }}
            >
              Your Trusted Mobile Store
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 14, md: 16 },
                fontFamily: "Comfortaa, sans-serif",
                color: "#cbd5f5",
                mb: 2,
                fontWeight: 300,
                maxWidth: '600px',
              }}
            >
              Welcome to Thozha, your premier destination for cutting-edge electronics and home appliances. Since 2020, we've been dedicated to bringing the latest technology to your fingertips with our user-friendly shopping platform and exceptional customer service.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Box sx={{
                px: 2,
                py: 1,
                borderRadius: 20,
                bgcolor: 'rgba(172, 99, 255, 0.2)',
                color: '#C99EF5',
                fontSize: '0.9rem',
              }}>
                <Typography sx={{ fontFamily: 'Comfortaa, sans-serif' }}>📱 500+ Products</Typography>
              </Box>
              <Box sx={{
                px: 2,
                py: 1,
                borderRadius: 20,
                bgcolor: 'rgba(172, 99, 255, 0.2)',
                color: '#C99EF5',
                fontSize: '0.9rem',
              }}>
                <Typography sx={{ fontFamily: 'Comfortaa, sans-serif' }}>⭐ 4.9 Rating</Typography>
              </Box>
              <Box sx={{
                px: 2,
                py: 1,
                borderRadius: 20,
                bgcolor: 'rgba(172, 99, 255, 0.2)',
                color: '#C99EF5',
                fontSize: '0.9rem',
              }}>
                <Typography sx={{ fontFamily: 'Comfortaa, sans-serif' }}>🚚 Fast Delivery</Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box
                  component="button"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontFamily: "Comfortaa, sans-serif",
                    borderRadius: 3,
                    background: "linear-gradient(90deg, #ac63ffff, #8d29ffff)",
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: "0 4px 20px rgba(172, 116, 236, 0.4)",
                    transition: 'transform 0.3s',
                    "&:hover": {
                      boxShadow: "0 6px 25px rgba(172, 116, 236, 0.6)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Shop Now
                </Box>
              </Link>
              
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Box
                  component="button"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontFamily: "Comfortaa, sans-serif",
                    borderRadius: 3,
                    color: "#e2e8f0",
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: 'transparent',
                    cursor: 'pointer',
                    "&:hover": {
                      borderColor: "#ac63ffff",
                      color: "#ac63ffff",
                      background: "rgba(172, 99, 255, 0.1)",
                    },
                  }}
                >
                  Contact Us
                </Box>
              </Link>
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      {/* Mission & Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" align="center" sx={{ fontFamily: 'Comfortaa', color: '#7c13f4', fontWeight: 'bold', mb: 6 }}>
            Our Mission & Values
          </Typography>
          
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
              <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3, p: 3, background: 'linear-gradient(to bottom, #f9f9fb, #f0f0f5)' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Comfortaa', color: '#7c13f4', fontWeight: 'bold', mb: 2 }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Comfortaa', mb: 2, fontSize: '1.1rem', color: '#333' }}>
                    Our mission is to make technology accessible to everyone by offering a wide range of products, from smartphones and laptops to home appliances, all with excellent customer service.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
              <Card sx={{ height: '100%', borderRadius: 3, boxShadow: 3, p: 3, background: 'linear-gradient(to bottom, #f9f9fb, #f0f0f5)' }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Comfortaa', color: '#7c13f4', fontWeight: 'bold', mb: 2 }}>
                    Our Values
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'Comfortaa', mb: 2, fontSize: '1.1rem', color: '#333' }}>
                    At Thozha, we believe in delivering quality products with care and trust. Our team works hard to ensure that every customer has a satisfying shopping experience.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      
      {/* Location & Store Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" align="center" sx={{ fontFamily: 'Comfortaa', color: '#7c13f4', fontWeight: 'bold', mb: 6 }}>
            Our Location
          </Typography>
          
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
              <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Thozha Store Front"
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 350 },
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </motion.div>
            </Grid>
            
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontFamily: 'Comfortaa', color: '#7c13f4', fontWeight: 'bold', mb: 2 }}>
                  Visit Our Store
                </Typography>
                
                <Typography variant="body1" sx={{ fontFamily: 'Comfortaa', mb: 2, fontSize: '1.1rem', color: '#333' }}>
                  Located in the heart of Elumalai, Madurai, our physical store has been serving customers since 2020. Experience our products firsthand with our knowledgeable staff ready to assist you.
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.529158680572!2d77.6952434!3d9.8650631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b073b2175db4535%3A0x1e16bbf19b2c3e42!2sThozha%20Mobiles%20%26%20Home%20Appliances!5e0!3m2!1sen!2sin!4v1671234567890" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Thozha Store Location"
                  />
                </Box>
              </Box>
            </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
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
