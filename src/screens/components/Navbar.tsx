import { useState } from "react";
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
import SearchBox from "./SearchBox";
import SearchOverlay from "./SearchOverlay";



export default function Navbar() {
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

  const toggleSearchOverlay = () => {
    setIsSearchOverlayOpen(!isSearchOverlayOpen);
  };

  return (
    <>
    <AppBar position="fixed" sx={{ bgcolor: "#AC74EC", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", mt: 1, mb: 1 }}>

        {/* Left Logo */}
<Box sx={{ display: "flex", alignItems: "center" }}>
  <Box
    component="img"
    src="logo.png"
    alt="Thozha Logo"
    sx={{
      height:42,
      width: "auto",
      cursor: "pointer",
    }}
  />
</Box>


        {/* Search Box - Hidden now, replaced by search icon */}
        {/* <Box
          sx={{
            flexGrow: 1,
            maxWidth: 500,
            display: {xs:"none", md:"flex"},
            alignItems: "center",
            mx: 2,
            bgcolor: "white",
            borderRadius: 2,
            border: "1px solid #7c13f4",
            padding: "4px 10px",
            
          }}
        >
          <SearchIcon sx={{ mr: 1, color: "#7c13f4" }} />
          <InputBase
            placeholder="Search In Thozha"
            fullWidth
            sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: 17 }}
          />
        </Box> */}

        {/* <SearchBox /> */}

        {/* Right Icons */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton color="inherit" onClick={toggleSearchOverlay}>
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Delivery Address */}

      
    </AppBar>
    <SearchOverlay isOpen={isSearchOverlayOpen} onClose={toggleSearchOverlay} />
    </>
  );
}
