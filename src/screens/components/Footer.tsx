import React from "react";
import {
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  Divider,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f9f9fb",
        color: "#333",
        mt: 10,
        px: { xs: 3, md: 10 },
        py: 6,
        fontFamily: "Comfortaa, sans-serif",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      {/* Main Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        justifyContent="space-between"
      >
        {/* Brand */}
        <Box>
          <Typography variant="h5" fontWeight="bold">
            Thozha
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1.5, maxWidth: 280, color: "#666" }}
          >
            Thozha is a modern e-commerce platform delivering quality products
            with trust, care, and fast service.
          </Typography>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography fontWeight="bold" mb={1.5}>
            Quick Links
          </Typography>
          <Stack spacing={1}>
            <FooterLink text="Home" />
            <FooterLink text="Shop" />
            <FooterLink text="Categories" />
            <FooterLink text="Contact Us" />
          </Stack>
        </Box>

        {/* Contact & Address */}
        <Box>
          <Typography fontWeight="bold" mb={1.5}>
            Contact
          </Typography>

          <Stack spacing={1.2}>
            <InfoItem icon={<LocationOnIcon />} text="Elumalai, Madurai, Tamil Nadu" />
            <InfoItem icon={<PhoneIcon />} text="+91 7373191951" />
            <InfoItem icon={<EmailIcon />} text="thozhamobiles551@gmail.com" />
          </Stack>
        </Box>

        {/* Social */}
        <Box>
          <Typography fontWeight="bold" mb={1.5}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={1}>
            <SocialIcon icon={<FacebookIcon />} />
            <SocialIcon icon={<InstagramIcon />} />
            <SocialIcon icon={<TwitterIcon />} />
            <SocialIcon icon={<LinkedInIcon />} />
          </Stack>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Bottom */}
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "#777" }}
      >
        © {new Date().getFullYear()} Thozha. All rights reserved.
      </Typography>
    </Box>
  );
};

/* Reusable Footer Link */
const FooterLink = ({ text }) => (
  <Link
    href="#"
    underline="none"
    sx={{
      color: "#555",
      fontSize: "0.9rem",
      transition: "0.25s",
      "&:hover": {
        color: "#000",
        paddingLeft: "4px",
      },
    }}
  >
    {text}
  </Link>
);

/* Info Row */
const InfoItem = ({ icon, text }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Box sx={{ color: "#555" }}>{icon}</Box>
    <Typography variant="body2" sx={{ color: "#555" }}>
      {text}
    </Typography>
  </Stack>
);

/* Social Icon */
const SocialIcon = ({ icon }) => (
  <IconButton
    sx={{
      color: "#555",
      border: "1px solid #ddd",
      "&:hover": {
        bgcolor: "#000",
        color: "#fff",
        borderColor: "#000",
      },
    }}
  >
    {icon}
  </IconButton>
);

export default Footer;
