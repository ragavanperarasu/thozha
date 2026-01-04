import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Button,
  Rating,
  Chip,
} from "@mui/material";
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { Product } from "@/data/mockProducts";

interface ProductCardProps {
  product: Product;
  animationDelay?: number;
}

export default function ProductCard({ product, animationDelay = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card
      sx={{
        position: "relative",
        overflow: "visible",
        opacity: 0,
        animation: "fadeInUp 0.6s ease forwards",
        animationDelay: `${animationDelay}ms`,
        "@keyframes fadeInUp": {
          from: {
            opacity: 0,
            transform: "translateY(20px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "& .hover-actions": {
          opacity: 0,
          transform: "translateY(10px)",
          transition: "all 0.3s ease",
        },
        "&:hover .hover-actions": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
    >
      {/* Badge */}
      {product.badge && (
        <Chip
          label={product.badge}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            zIndex: 1,
            bgcolor: "primary.main",
            color: "white",
            fontWeight: 600,
          }}
        />
      )}

      {/* Wishlist Button */}
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 1,
          bgcolor: "background.paper",
          boxShadow: 1,
          "&:hover": {
            bgcolor: "primary.light",
            color: "white",
          },
        }}
      >
        <FavoriteBorder fontSize="small" />
      </IconButton>

      {/* Product Image */}
      <Box
        sx={{
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.100",
          borderRadius: "16px 16px 0 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            fontSize: "4rem",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
        >
          {product.image}
        </Box>

        {/* Quick Add Button */}
        <Box
          className="hover-actions"
          sx={{
            position: "absolute",
            bottom: 12,
            left: 12,
            right: 12,
          }}
        >
          <Button
            variant="contained"
            fullWidth
            startIcon={<ShoppingCart />}
            sx={{
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>

      <CardContent sx={{ p: 2 }}>
        {/* Rating */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Rating
            value={product.rating}
            precision={0.1}
            size="small"
            readOnly
            sx={{
              "& .MuiRating-iconFilled": { color: "#FFB400" },
            }}
          />
          <Typography variant="caption" color="text.secondary">
            ({product.reviews})
          </Typography>
        </Box>

        {/* Name */}
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            mb: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: 48,
            "&:hover": { color: "primary.main" },
            transition: "color 0.2s ease",
            cursor: "pointer",
          }}
        >
          {product.name}
        </Typography>

        {/* Price */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" fontWeight={700} color="text.primary">
            ${product.price.toFixed(2)}
          </Typography>
          {product.originalPrice && (
            <>
              <Typography
                variant="body2"
                sx={{ textDecoration: "line-through", color: "text.secondary" }}
              >
                ${product.originalPrice.toFixed(2)}
              </Typography>
              <Chip
                label={`-${discount}%`}
                size="small"
                sx={{
                  height: 20,
                  bgcolor: "primary.light",
                  color: "primary.dark",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                }}
              />
            </>
          )}
        </Box>

        {/* Stock Status */}
        {!product.inStock && (
          <Typography
            variant="caption"
            sx={{ color: "error.main", fontWeight: 500, mt: 1, display: "block" }}
          >
            Out of Stock
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
