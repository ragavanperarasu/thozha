import { Box, Container, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { mockProducts } from "@/data/mockProducts";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "grey.50" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 5,
          }}
        >
          <Box>
            <Typography variant="h2" sx={{ mb: 1 }}>
              Featured Products
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Handpicked products just for you
            </Typography>
          </Box>
          <Button variant="outlined" endIcon={<ArrowForward />}>
            View All
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {mockProducts.slice(0, 8).map((product, index) => (
            <ProductCard key={product.id} product={product} animationDelay={index * 100} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
