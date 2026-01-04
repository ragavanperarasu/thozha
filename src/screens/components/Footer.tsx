import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

// Footer Link component
const FooterLink = ({ text, url }) => (
  <Link
    href={url}
    underline="none"
    sx={{
      color: "grey.400",
      fontSize: "0.9rem",
      transition: "0.25s",
      "&:hover": {
        color: "primary.light",
      },
    }}
  >
    {text}
  </Link>
);

// Info Item (Clickable Row) component
const InfoItem = ({ icon, text, url }) => (
  <Link
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
        color: "grey.400",
        transition: "0.3s",
        "&:hover": {
          color: "primary.light",
        },
      }}
    >
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Stack>
  </Link>
);

// Social Icon component
const SocialIcon = ({ icon, url }) => (
  <IconButton
    component="a"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      bgcolor: "rgba(255,255,255,0.1)",
      color: "white",
      border: "1px solid rgba(255,255,255,0.2)",
      "&:hover": {
        bgcolor: "primary.main",
        color: "white",
        borderColor: "primary.main",
        transform: "translateY(-2px)",
      },
      transition: "all 0.3s ease",
    }}
  >
    {icon}
  </IconButton>
);

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "text.primary",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 6,
          }}
        >
          {/* Brand Section */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Thozha
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "grey.400", mb: 3, maxWidth: 300 }}
            >
              Thozha is a modern e-commerce platform delivering quality products
              with trust, care, and fast service.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <SocialIcon
                icon={<FacebookIcon />}
                url="https://www.facebook.com"
              />
              <SocialIcon
                icon={<InstagramIcon />}
                url="https://www.instagram.com/thozha_._mobile?igsh=MWM2bmoxdmwyMjF3cQ=="
              />
              <SocialIcon
                icon={<TwitterIcon />}
                url="https://www.twitter.com"
              />
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <FooterLink text="Home" url="/" />
              <FooterLink text="Shop" url="/products" />
              <FooterLink text="Categories" url="/categories" />
              <FooterLink text="About Us" url="/about" />
            </Stack>
          </Box>

          {/* Support Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Support
            </Typography>
            <Stack spacing={1.5}>
              <FooterLink text="Contact Us" url="/contact" />
              <FooterLink text="FAQs" url="/faq" />
              <FooterLink text="Shipping Info" url="/shipping" />
              <FooterLink text="Returns" url="/returns" />
            </Stack>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Stack spacing={2}>
              <InfoItem
                icon={<LocationOnIcon sx={{ color: "primary.light", fontSize: 20 }} />}
                text="Elumalai, Madurai, Tamil Nadu"
                url="https://www.google.com/maps/place/Thozha+Mobiles+%26+Home+Appliances/@9.8650631,77.6952434,17z/data=!3m1!4b1!4m6!3m5!1s0x3b073b2175db4535:0x1e16bbf19b2c3e42!8m2!3d9.8650631!4d77.7001143!16s%2Fg%2F11v9h62f__?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
              />
              <InfoItem
                icon={<PhoneIcon sx={{ color: "primary.light", fontSize: 20 }} />}
                text="+91 7373191951"
                url="https://wa.me/917373191951"
              />
              <InfoItem
                icon={<EmailIcon sx={{ color: "primary.light", fontSize: 20 }} />}
                text="thozhamobiles551@gmail.com"
                url="mailto:thozhamobiles551@gmail.com"
              />
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "grey.500" }}>
            © {new Date().getFullYear()} Thozha. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="/privacy"
              underline="none"
              sx={{ color: "grey.500", "&:hover": { color: "primary.light" } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              underline="none"
              sx={{ color: "grey.500", "&:hover": { color: "primary.light" } }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}