import { motion } from "framer-motion";
import { Box, Grid, Typography, Button, Chip } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        mt: 10,
        minHeight: { xs: 500, md: 600 },
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
      
      <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ p: 5, width: "100%", position: "relative", zIndex: 1 }}>
        
        {/* LEFT - Content */}
        <Grid size={{ xs: 12 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Sale Badge */}
            <Chip
              icon={<AutoAwesome sx={{ color: "#AC74EC !important" }} />}
              label="New Year Sale - Up to 40% Off"
              sx={{
                mb: 3,
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
                fontSize: { xs: 32, md: 58 },
                fontWeight: 800,
                fontFamily: "Comfortaa, sans-serif",
                mb: 2,
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
                fontSize: { xs: 18, md: 22 },
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
                fontSize: { xs: 14, md: 16 },
                fontFamily: "Comfortaa, sans-serif",
                color: "#cbd5f5",
                mb: 3,
                fontWeight: 300,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.25s",
              }}
            >
              Premium Smart Phone and gadgets and smart Watches
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
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontFamily: "Comfortaa, sans-serif",
                  borderRadius: 3,
                  background: "linear-gradient(90deg, #ac63ffff, #8d29ffff)",
                  textTransform: "none",
                  boxShadow: "0 4px 20px rgba(172, 116, 236, 0.4)",
                  "&:hover": {
                    boxShadow: "0 6px 25px rgba(172, 116, 236, 0.6)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Shop Now
              </Button>
              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontFamily: "Comfortaa, sans-serif",
                  borderRadius: 3,
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
                Explore Categories
              </Button>
            </Box>
            
            {/* Stats */}
            <Box
              sx={{
                display: "flex",
                gap: 6,
                mt: 6,
                pt: 4,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.4s",
              }}
            >
              {
                [
                  { value: "500+", label: "Products" },
                  { value: "50K+", label: "Happy Customers" },
                  { value: "4.9", label: "Rating" },
                ].map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      variant="h4"
                      sx={{ 
                        color: "white", 
                        fontWeight: 700,
                        fontSize: { xs: 32, md: 42 },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))
              }
            </Box>
          </motion.div>
        </Grid>



      </Grid>
    </Box>
  );
};

export default HeroSection;