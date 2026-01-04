import { Box, Container, Typography, Paper } from "@mui/material";
import {
  Smartphone,
  Laptop,
  Tv,
  Headphones,
  CameraAlt,
  Kitchen,
  Watch,
  TabletMac,
} from "@mui/icons-material";
import { mockCategories } from "@/data/mockProducts";
import { useNavigate } from "react-router-dom";

const iconMap: Record<string, React.ElementType> = {
  smartphones: Smartphone,
  laptops: Laptop,
  televisions: Tv,
  audio: Headphones,
  cameras: CameraAlt,
  appliances: Kitchen,
  wearables: Watch,
  tablets: TabletMac,
};

export default function CategorySection() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              opacity: 0,
              animation: "fadeInUp 0.6s ease forwards",
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Shop by Category
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              opacity: 0,
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: "0.1s",
            }}
          >
            Browse through our extensive collection of electronics and find
            exactly what you need
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(8, 1fr)",
            },
            gap: 3,
          }}
        >
          {mockCategories.map((category, index) => {
            const IconComponent = iconMap[category.id] || Smartphone;
            return (
              <Paper
                key={category.id}
                elevation={0}
                onClick={() => navigate(`/category/${category.id}`)}
                sx={{
                  p: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: "grey.200",
                  transition: "all 0.3s ease",
                  opacity: 0,
                  animation: "fadeInUp 0.6s ease forwards",
                  animationDelay: `${index * 50}ms`,
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 30px rgba(172,116,236,0.15)",
                    "& .category-icon": {
                      bgcolor: "primary.main",
                      color: "white",
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Box
                  className="category-icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: 3,
                    bgcolor: "secondary.main",
                    color: "text.primary",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                    transition: "all 0.3s ease",
                  }}
                >
                  <IconComponent sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 0.5 }}>
                  {category.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {category.productCount} Products
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
