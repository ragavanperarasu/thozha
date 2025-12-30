import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#AC74EC",
        color: "white",
        mt: 6,
        px: { xs: 2, md: 6 },
        py: 4,
        fontFamily: "Comfortaa, sans-serif",
      }}
    >
      {/* Top Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
      >
        {/* Brand */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Thozha
        </Typography>

        {/* Links */}
        <Stack direction="row" spacing={3}>
          <Link href="#" underline="none" color="white">
            About
          </Link>
          <Link href="#" underline="none" color="white">
            Privacy
          </Link>
          <Link href="#" underline="none" color="white">
            Contact
          </Link>
        </Stack>
      </Stack>

      {/* Divider */}
      <Box
        sx={{
          height: "1px",
          bgcolor: "rgba(255,255,255,0.3)",
          my: 3,
        }}
      />

      {/* Bottom Section */}
      <Typography
        variant="body2"
        align="center"
        sx={{ opacity: 0.9 }}
      >
        © {new Date().getFullYear()} Thozha. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
