import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PromoBanner from "./components/PromoBanner";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";

export default function HomeScreen() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <HeroSection />
        <PromoBanner />
        <CategorySection />
        <FeaturedProducts />
        <Newsletter />
      </Box>
      <Footer />
    </Box>
  );
}
