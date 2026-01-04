import { Box, Container, Typography, TextField, Button, Chip } from "@mui/material";
import { Send } from "@mui/icons-material";

export default function Newsletter() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Chip
            icon={<Send sx={{ color: "primary.main !important", fontSize: 16 }} />}
            label="Stay Updated"
            sx={{
              mb: 3,
              bgcolor: "primary.light",
              color: "white",
              fontWeight: 500,
              opacity: 0,
              animation: "fadeInUp 0.6s ease forwards",
              "@keyframes fadeInUp": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          />

          <Typography
            variant="h2"
            sx={{
              mb: 2,
              opacity: 0,
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: "0.1s",
            }}
          >
            Subscribe to Our Newsletter
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              opacity: 0,
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: "0.2s",
            }}
          >
            Get exclusive deals, new product launches, and tech news delivered
            straight to your inbox.
          </Typography>

          <Box
            component="form"
            sx={{
              display: "flex",
              gap: 2,
              maxWidth: 500,
              mx: "auto",
              flexDirection: { xs: "column", sm: "row" },
              opacity: 0,
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: "0.3s",
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "grey.100",
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              endIcon={<Send />}
              sx={{ px: 4, flexShrink: 0 }}
            >
              Subscribe
            </Button>
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mt: 2,
              display: "block",
              opacity: 0,
              animation: "fadeInUp 0.6s ease forwards",
              animationDelay: "0.4s",
            }}
          >
            No spam, unsubscribe anytime. By subscribing you agree to our Privacy
            Policy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
