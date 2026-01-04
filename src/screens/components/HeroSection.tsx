import { Box, Container, Typography, Button, Chip } from "@mui/material";
import { ArrowForward, AutoAwesome } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)",
        minHeight: { xs: 500, md: 600 },
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
          background: "radial-gradient(circle, rgba(172,116,236,0.15) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, rgba(172,116,236,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          <Box>
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

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                color: "white",
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                lineHeight: 1.1,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.1s",
              }}
            >
              Discover the{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #AC74EC 0%, #C99EF5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Future
              </Box>
              <br />
              of Technology
            </Typography>

            {/* Description */}
            <Typography
              variant="h6"
              sx={{
                color: "rgba(255,255,255,0.7)",
                mb: 4,
                fontWeight: 400,
                maxWidth: 500,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: "0.2s",
              }}
            >
              Explore our curated collection of premium electronics, smartphones,
              and home appliances designed to elevate your everyday life.
            </Typography>

            {/* CTAs */}
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
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                }}
              >
                Shop Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "white",
                  "&:hover": {
                    borderColor: "primary.light",
                    bgcolor: "rgba(172,116,236,0.1)",
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
              {[
                { value: "500+", label: "Products" },
                { value: "50K+", label: "Happy Customers" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    variant="h4"
                    sx={{ color: "white", fontWeight: 700 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Hero Visual */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                position: "relative",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              {/* Main Card */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  mx: "auto",
                  aspectRatio: "1",
                  borderRadius: 4,
                  background: "linear-gradient(135deg, rgba(172,116,236,0.2) 0%, rgba(172,116,236,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Box sx={{ textAlign: "center", p: 4 }}>
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mb: 2,
                      borderRadius: 3,
                      background: "linear-gradient(135deg, #AC74EC 0%, #C99EF5 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 30px rgba(172,116,236,0.4)",
                    }}
                  >
                    <Typography sx={{ fontSize: "3rem" }}>📱</Typography>
                  </Box>
                  <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                    Premium Tech Awaits
                  </Typography>
                </Box>
              </Box>

              {/* Floating Card 1 */}
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  left: -20,
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  p: 2,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  animation: "float 5s ease-in-out infinite",
                  animationDelay: "0.5s",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  🎧
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    AirPods Pro
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={600}>
                    $199
                  </Typography>
                </Box>
              </Box>

              {/* Floating Card 2 */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 60,
                  right: -10,
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  p: 2,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  animation: "float 6s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ⌚
                </Box>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    Smart Watch
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight={600}>
                    $299
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
