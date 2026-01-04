import { motion } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Box, Typography, Grid } from "@mui/material";

const features = [
  {
    label: "Fast Shipping",
    desc: "Quick dispatch for all orders",
    icon: <LocalShippingIcon />,
  },
  {
    label: "Secure Payment",
    desc: "100% safe & encrypted transactions",
    icon: <SecurityIcon />,
  },
  {
    label: "Fast Delivery",
    desc: "On-time delivery guaranteed",
    icon: <FlashOnIcon />,
  },
  {
    label: "24/7 Support",
    desc: "We are here anytime you need",
    icon: <SupportAgentIcon />,
  },
];

const Features = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      justifyContent="space-around"
      sx={{ width: "100%", mt: 5 }}
    >
      {features.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
<Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                p: 2,
                borderRadius: 3,
                bgcolor: "#ffffff",
                transition: "0.3s",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#ac63ff1a",
                  color: "#ac63ff",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </Box>

              {/* Text Content */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Comfortaa, sans-serif",
                    fontSize: { xs: 15, sm: 16 },
                    fontWeight: 700,
                    color: "#4b0082",
                  }}
                >
                  {item.label}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 13, sm: 14 },
                    color: "#6b7280",
                    mt: 0.5,
                    lineHeight: 1.4,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Features;
