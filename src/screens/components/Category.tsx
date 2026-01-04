import { motion } from "framer-motion";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import KitchenIcon from "@mui/icons-material/Kitchen";
import WatchIcon from "@mui/icons-material/Watch";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TvIcon from "@mui/icons-material/Tv";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SpeakerIcon from "@mui/icons-material/Speaker";
import { Box, Typography, Grid } from "@mui/material";

const categories = [
  { label: "Mobiles", icon: <SmartphoneIcon /> },
  { label: "Appliances", icon: <KitchenIcon /> },
  { label: "Watches", icon: <WatchIcon /> },
  { label: "Laptops", icon: <LaptopMacIcon /> },
  { label: "TV", icon: <TvIcon /> },
  { label: "Earphones", icon: <HeadphonesIcon /> },
  { label: "Audio", icon: <SpeakerIcon /> },
];

const Category = () => {
  return (
    <>
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 32, md: 38 },
            fontWeight: 800,
            fontFamily: "Comfortaa, sans-serif",
            mb: 5,
            background: "linear-gradient(90deg, #d5b0ffff, #7700ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          Shop by Category
        </Typography>
      </motion.div>
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      justifyContent="space-around"
    >
      {categories.map((cat, index) => (
        <Grid
          size={{ xs: 3, md: 2, lg: 1 }}
          key={index}
          sx={{ textAlign: "center" }}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }} // 👈 mobile tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Box
              sx={{
                mx: "auto",
                width: { xs: 44, sm: 86 },
                height: { xs: 44, sm: 86 },
                bgcolor: "#ffffff",
                border: "2px solid #ac63ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ac63ff",
                transition: "0.3s",
                boxShadow: "0 4px 12px rgba(172, 99, 255, 0.2)",
                "&:hover": {
                  bgcolor: "#ac63ff",
                  color: "#ffffff",
                  boxShadow: "0 8px 20px rgba(172, 99, 255, 0.4)",
                },
              }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {cat.icon}
              </motion.div>
            </Box>
          </motion.div>

          <Typography
            sx={{
              fontFamily: "Comfortaa, sans-serif",
              fontSize: { xs: 10, sm: 16 },
              mt: 1.5,
              color: "#6b21a8",
              fontWeight: 600,
            }}
          >
            {cat.label}
          </Typography>
        </Grid>
      ))}
    </Grid></>
  );
};

export default Category;
