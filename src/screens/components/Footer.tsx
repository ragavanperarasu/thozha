import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
            <FooterLink text="Home" to="/" />
            <FooterLink text="About Us" to="/about" />
            <FooterLink text="Shop" to="/products" />
          </Stack>
        </Box>

        {/* Contact & Address */}
        <Box>
          <Typography fontWeight="bold" mb={1.5}>
            Contact
          </Typography>

          <Stack spacing={1.2}>
            {/* Google Maps */}
            <ExternalLink
              icon={<LocationOnIcon />}
              text="Elumalai, Madurai, Tamil Nadu"
              url="https://www.google.com/maps/place/Thozha+Mobiles+%26+Home+Appliances/@9.8650631,77.6952434,17z"
            />

            {/* WhatsApp */}
            <ExternalLink
              icon={<PhoneIcon />}
              text="+91 7373191951"
              url="https://wa.me/917373191951"
            />

            {/* Email */}
            <ExternalLink
              icon={<EmailIcon />}
              text="thozhamobiles551@gmail.com"
              url="mailto:thozhamobiles551@gmail.com"
            />
          </Stack>
        </Box>

        {/* Social */}
        <Box>
          <Typography fontWeight="bold" mb={1}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={1}>
            <SocialIcon
              icon={<FacebookIcon />}
              url="https://www.facebook.com"
            />
            <SocialIcon
              icon={<InstagramIcon />}
              url="https://www.instagram.com/thozha_._mobile"
            />
            <SocialIcon
              icon={<TwitterIcon />}
              url="https://www.twitter.com"
            />
          </Stack>
        </Box>
      </Stack>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Bottom */}
      <Typography variant="body2" align="center" sx={{ color: "#777" }}>
        © {new Date().getFullYear()} Thozha. All rights reserved.
      </Typography>
    </Box>
  );
};

/* ===================== */
/* Internal Router Links */
/* ===================== */
const FooterLink = ({ text, to }) => (
  <Link
    component={RouterLink}
    to={to}
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

/* ===================== */
/* External Clickable Row */
/* ===================== */
const ExternalLink = ({ icon, text, url }) => (
  <Link
    component="a"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    underline="none"
    sx={{ color: "inherit" }}
  >
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{
        color: "#555",
        transition: "0.3s",
        "&:hover": { color: "#000" },
      }}
    >
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Stack>
  </Link>
);

/* ===================== */
/* Social Icon */
/* ===================== */
const SocialIcon = ({ icon, url }) => (
  <IconButton
    component="a"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      color: "#555",
      border: "1px solid #ddd",
      transition: "0.3s",
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
