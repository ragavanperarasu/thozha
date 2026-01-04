import { Box, Container, Typography, Paper } from "@mui/material";
import {
  LocalShipping,
  Security,
  FlashOn,
  SupportAgent,
} from "@mui/icons-material";

const features = [
  {
    icon: LocalShipping,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: Security,
    title: "Secure Payment",
    description: "100% protected checkout",
  },
  {
    icon: FlashOn,
    title: "Fast Delivery",
    description: "2-3 business days",
  },
  {
    icon: SupportAgent,
    title: "24/7 Support",
    description: "Dedicated assistance",
  },
];

export default function PromoBanner() {
  return (
    <Paper
      elevation={0}
      sx={{
        py: 4,
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "grey.200",
        borderRadius: 0,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={feature.title}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                opacity: 0,
                animation: "fadeInUp 0.6s ease forwards",
                animationDelay: `${index * 100}ms`,
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  bgcolor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <feature.icon sx={{ color: "primary.main", fontSize: 24 }} />
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600}>
                  {feature.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Paper>
  );
}
