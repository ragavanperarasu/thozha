import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const About = () => {
  return (
    <>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8, py: 6, px: 3, bgcolor: "grey.50", borderRadius: 4 }}>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700, color: "text.primary" }}>
            About Thozha
          </Typography>
          <Typography variant="h5" color="text.secondary" maxWidth={700} mx="auto">
            Your trusted online marketplace for all your shopping needs. We provide quality products at competitive prices with excellent customer service.
          </Typography>
        </Box>

        {/* Mission, Vision, Values */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ p: 4, height: "100%", textAlign: "center", bgcolor: "primary.light", color: "primary.dark" }}>
              <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary">
                To provide customers with high-quality products at affordable prices while ensuring a seamless shopping experience.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ p: 4, height: "100%", textAlign: "center", bgcolor: "secondary.light", color: "secondary.dark" }}>
              <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" color="text.secondary">
                To become the leading e-commerce platform, connecting millions of customers with trusted sellers worldwide.
              </Typography>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ p: 4, height: "100%", textAlign: "center", bgcolor: "grey.100" }}>
              <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                Our Values
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Integrity, customer satisfaction, innovation, and commitment to quality are the core values that drive our business.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Why Choose Us */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 6, fontWeight: 700 }}>
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: "primary.main" }}>
                  Quality Products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We ensure all products meet high quality standards.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: "primary.main" }}>
                  Secure Payments
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Safe and secure payment options for your peace of mind.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: "primary.main" }}>
                  Fast Delivery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quick and reliable delivery to your doorstep.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: "primary.main" }}>
                  24/7 Support
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Customer support available round the clock.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ textAlign: "center", py: 6, px: 3, bgcolor: "grey.50", borderRadius: 4 }}>
          <Typography variant="h3" component="h2" sx={{ mb: 3, fontWeight: 700 }}>
            Our Team
          </Typography>
          <Typography variant="h5" color="text.secondary" maxWidth={700} mx="auto" sx={{ mb: 4 }}>
            Meet the dedicated team behind Thozha, committed to providing the best shopping experience for our customers.
          </Typography>
          
          <Typography variant="body1" color="text.secondary">
            We are a passionate group of professionals dedicated to making your shopping experience exceptional. Our team combines expertise in technology, customer service, and product curation to bring you the best selection of products.
          </Typography>
        </Box>
      </Container>
      
      <Footer />
    </>
  );
};

export default About;