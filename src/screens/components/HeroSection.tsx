import { motion, AnimatePresence } from "framer-motion";
import { Box, Grid, Typography, Button, Chip } from "@mui/material";
import { AutoAwesome, PhoneIphone, Headphones, Watch } from "@mui/icons-material";
import { useState, useEffect } from "react";

// Card data
const CARD_DATA = [
  {
    icon: <PhoneIphone sx={{ fontSize: 70, color: "#C99EF5" }} />,
    title: "Premium Mobiles",
    color: "#C99EF5"
  },
  {
    icon: <Headphones sx={{ fontSize: 70, color: "#AC74EC" }} />,
    title: "Premium Accessories",
    color: "#AC74EC"
  },
  {
    icon: <Watch sx={{ fontSize: 70, color: "#8D29FF" }} />,
    title: "Smart Watches",
    color: "#8D29FF"
  }
];

const HeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % CARD_DATA.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
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
          width: 200,
          height: 200,
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
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(172,99,255,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ p: 3, width: "100%", position: "relative", zIndex: 1 }}>
        
        {/* LEFT - Content */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Sale Badge */}
            <Chip
              icon={<AutoAwesome sx={{ color: "#AC74EC !important" }} />}
              label="New Year Sale"
              sx={{
                mb: 1, // Reduced from 2
                bgcolor: "rgba(172,116,236,0.15)",
                color: "#C99EF5",
                fontWeight: 500,
                px: 1,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            />
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 26.46, md: 46.31 }, // Increased by 10% from 5%: 25.2->26.46, 44.1->46.31
                fontWeight: 800,
                fontFamily: "Comfortaa, sans-serif",
                mb: 1,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.1s",
              }}
            >
              <Box component="span" sx={{
                background: "linear-gradient(135deg, #AC74EC 0%, #C99EF5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Thozha{" "}
              </Box>
              <Box component="span" sx={{ color: "#ffffff" }}>
                  Mobiles
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: 17.64, md: 19.85 }, // Increased by 10% from 5%: 16.8->17.64, 18.9->19.85
                fontFamily: "Comfortaa, sans-serif",
                color: "#e2e8f0",
                mb: 1,
                fontWeight: 400,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.2s",
              }}
            >
              Your Trusted Mobile Store
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 13.23, md: 15.44 }, // Increased by 10% from 5%: 12.6->13.23, 14.7->15.44
                fontFamily: "Comfortaa, sans-serif",
                color: "#cbd5f5",
                mb: 2,
                fontWeight: 300,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.25s",
              }}
            >
              Premium Smart Phones and gadgets
            </Typography>

            {/* CTA Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.3s",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  fontFamily: "Comfortaa, sans-serif",
                  borderRadius: 2,
                  background: "linear-gradient(90deg, #ac63ffff, #8d29ffff)",
                  textTransform: "none",
                  boxShadow: "0 4px 15px rgba(172, 116, 236, 0.4)",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(172, 116, 236, 0.6)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Shop Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  fontFamily: "Comfortaa, sans-serif",
                  borderRadius: 2,
                  color: "#e2e8f0",
                  borderColor: "rgba(255,255,255,0.3)",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#ac63ffff",
                    color: "#ac63ffff",
                    background: "rgba(172, 99, 255, 0.1)",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
            
            {/* Stats */}
            <Box
              sx={{
                display: "flex",
                gap: 4,
                mt: 2, // Reduced from 3
                pt: 2,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.4s",
              }}
            >
              {[
                { value: "500+", label: "Products" },
                { value: "50K+", label: "Happy Customers" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h5"
                    sx={{ 
                      color: "white", 
                      fontWeight: 700,
                      fontSize: { xs: 22.05, md: 30.87 }, // Increased by 10% from 5%: 21->22.05, 29.4->30.87
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", fontSize: { xs: 11.03, md: 13.23 } }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Grid>
        
        {/* RIGHT - Animated Card Carousel (Hidden on Mobile) */}
        <Grid size={{ xs: false, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    p: 4,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    width: { md: 320, lg: 350 },
                    height: { md: 320, lg: 350 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(172, 116, 236, 0.2)",
                      borderRadius: "50%",
                      p: 3,
                      mb: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {CARD_DATA[currentCard].icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { md: 22.05, lg: 24.26 }, // Increased by 10% from 5%: 21->22.05, 23.1->24.26
                      fontWeight: 600,
                      fontFamily: "Comfortaa, sans-serif",
                      color: "#ffffff",
                      textAlign: "center",
                    }}
                  >
                    {CARD_DATA[currentCard].title}
                  </Typography>
                </Box>
              </motion.div>
            </AnimatePresence>
            
            {/* Animated Text Under Card - Smooth Flow Animation */}
            <motion.div
              key={`text-${currentCard}`} // Add key to trigger animation on card change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ marginTop: '20px' }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { md: 15.44, lg: 16.54 }, // Increased by 10% from 5%: 14.7->15.44 (rounded), then 10% of that is ~16.54
                  fontFamily: "Comfortaa, sans-serif",
                  color: "#cbd5f5",
                  textAlign: "center",
                }}
              >
                {CARD_DATA[currentCard].title} - Premium Quality Guaranteed
              </Typography>
            </motion.div>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default HeroSection;