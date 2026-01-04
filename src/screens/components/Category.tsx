import { motion } from "framer-motion";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import KitchenIcon from "@mui/icons-material/Kitchen";
import WatchIcon from "@mui/icons-material/Watch";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import TvIcon from "@mui/icons-material/Tv";
import HeadphonesIcon from "@mui/icons-material/Headphones";

import { Box, Typography, Grid } from "@mui/material";

const categories = [
  { label: "Mobiles", icon: <SmartphoneIcon /> },
  { label: "Appliances", icon: <KitchenIcon /> },
  { label: "Watches", icon: <WatchIcon /> },
  { label: "Laptops", icon: <LaptopMacIcon /> },
  { label: "TV", icon: <TvIcon /> },
  { label: "Earphones", icon: <HeadphonesIcon /> },
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
    fontSize: { xs: 24, sm: 28, md: 32 },
    fontWeight: 800,
    fontFamily: "Comfortaa, sans-serif",
    mb: 1,
    color: "#2f5c70ff", // black
    textAlign: "center",
  }}
>
  Shop by Category
</Typography>

<Typography
  sx={{
    fontSize: { xs: 14, sm: 16, md: 18 },
    fontFamily: "Comfortaa, sans-serif",
    mb: 3,
    color: "#848482", // black
    textAlign: "center",
  }}
>
  Browse through our extensive collection of electronics and find exactly<br/> what you need!
</Typography>

      </motion.div>
    <Grid
      container
      spacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent="space-around"
      sx={{ px: { xs: 1, sm: 2 } }}
    >
      {categories.map((cat, index) => (
        <Grid
          size={{ xs: 6, md: 4, lg: 2 }}
          key={index}
          sx={{ textAlign: "center", mb: 2 }}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }} // 👈 mobile tap
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Box
              sx={{
                mx: "auto",
                width: { xs: 56, sm: 64, md: 86 },
                height: { xs: 56, sm: 64, md: 86 },
                bgcolor: "#f7f1ffff",
                //border: "2px solid #2f5c70ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2f5c70ff",
                transition: "0.3s",
                //boxShadow: "0 4px 12px rgba(172, 99, 255, 0.2)",
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
              fontSize: { xs: 12, sm: 14, md: 16 },
              mt: 1,
              color: "#2f5c70ff",
              fontWeight: 600,
              textAlign: "center",
              px: 1,
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
