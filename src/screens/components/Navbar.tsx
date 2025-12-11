import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{bgcolor:'#AC74EC'}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between",mt:1, mb:1 }}>

        {/* Left: Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Comfortaa, sans-serif" }}>
            Thozha
          </Typography>
        </Box>

        {/* Center: Search Box */}
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: 500,
            display: "flex",
            alignItems: "center",
            mx: 2,
            bgcolor: "rgba(255, 255, 255)",
            borderRadius: 2,
            border: "1px solid #7c13f4",
            padding: "4px 10px",
          }}
        >
          <SearchIcon sx={{ mr: 1, color: "#7c13f4" }} />
          <InputBase placeholder="Search In Thozha" fullWidth sx={{fontFamily: "Comfortaa, sans-serif", fontSize:17}}/>
        </Box>

        {/* Right: Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
