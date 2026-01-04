import { motion } from "framer-motion";
import { Box, Grid, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        mt: 10,
        minHeight: 500,
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={6} alignItems="center" sx={{p:5, width:'100%'}}>
        
        {/* LEFT */}
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
<Typography
  sx={{
    fontSize: { xs: 32, md: 58 },
    fontWeight: 800,
    fontFamily: "Comfortaa, sans-serif",
    mb: 2,
  }}
>
  <span style={{ color: "#ac63ffff" }}>Thozha </span>
<span style={{ color: "#ffffff" }}>Mobiles</span>
</Typography>


            <Typography
              sx={{
                fontSize: { xs: 18, md: 22 },
                fontFamily: "Comfortaa, sans-serif",
                color: "#e2e8f0",
                mb: 3,
              }}
            >
              Your Trusted Mobile Store
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                color: "#94a3b8",
                fontFamily: "Comfortaa, sans-serif",
                mb: 4,
                maxWidth: 420,
              }}
            >
              Premium smartphones, smart gadgets and best deals — all in one place.
            </Typography>

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
              }}
            >
              Shop Now
            </Button>
          </motion.div>
        </Grid>

        {/* RIGHT */}
        <Grid item xs={12} md={6} textAlign={'right'}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              {[
  { value: "700+", label: "Products" },
  { value: "2K+", label: "Customers" },
  { value: "12/7", label: "Support" },
  { value: "5+", label: "Years" },
].map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: i * 0.1 }}
    whileHover={{ y: -6, scale: 1.03 }}
  >
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.05)",
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "0.3s",
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Typography
          sx={{
            fontSize: 38,
            fontWeight: 700,
            color: "#ac63ffff",
            fontFamily: "Comfortaa, sans-serif",
          }}
        >
          {item.value}
        </Typography>
      </motion.div>

      <Typography sx={{ fontSize: 14, color: "#cbd5f5", fontFamily: "Comfortaa, sans-serif",}}>
        {item.label}
      </Typography>
    </Box>
  </motion.div>
))}

            </Box>
          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
};

export default HeroSection;
