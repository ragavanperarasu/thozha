import { useState, useEffect, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Typography,
  Autocomplete,
  TextField,
  InputAdornment,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import {
  Search,
  ShoppingCart,
  FavoriteBorder,
  Menu as MenuIcon,
  Close,
  AccountCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { mockProducts, Product, searchProducts } from "@/data/mockProducts";
import SearchBox from "./SearchBox";
import SearchOverlay from "./SearchOverlay";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Electronics", path: "/category/electronics" },
  { name: "Smartphones", path: "/category/smartphones" },
  { name: "Appliances", path: "/category/appliances" },
  { name: "Deals", path: "/deals" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOptions, setSearchOptions] = useState<Product[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

  // Search with debounce effect
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const results = searchProducts(searchQuery);
      setSearchOptions(results);
    } else {
      setSearchOptions([]);
    }
  }, [searchQuery]);

  // Handle keyboard navigation sync
  const handleHighlightChange = useCallback(
    (_event: React.SyntheticEvent, option: Product | null, reason: string) => {
      if (reason === "keyboard" && option) {
        const index = searchOptions.findIndex((o) => o.id === option.id);
        setHighlightedIndex(index);
      }
    },
    [searchOptions]
  );

  const handleSearchSelect = (
    _event: React.SyntheticEvent,
    value: Product | null
  ) => {
    if (value) {
      navigate(`/product/${value.id}`);
      setSearchQuery("");
      setSearchOptions([]);
    }
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
                "&:hover": { opacity: 0.8 },
              }}
              onClick={() => navigate("/")}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #AC74EC 0%, #C99EF5 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(172, 116, 236, 0.3)",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  T
                </Typography>
              </Box>
              {!isMobile && (
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: "text.primary" }}
                >
                  Thozha
                </Typography>
              )}
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1 }}>
                {navLinks.map((link) => (
                  <Box
                    key={link.name}
                    onClick={() => navigate(link.path)}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      cursor: "pointer",
                      color: "text.secondary",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: "secondary.main",
                        color: "primary.main",
                      },
                    }}
                  >
                    {link.name}
                  </Box>
                ))}
              </Box>
            )}

            {/* Search - Desktop */}
            {!isMobile && <SearchBox />}

            {/* Right Actions */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {isMobile && (
                <IconButton onClick={() => setIsSearchOverlayOpen(true)}>
                  <Search />
                </IconButton>
              )}

              <IconButton sx={{ display: { xs: "none", sm: "flex" } }}>
                <Badge
                  badgeContent={2}
                  sx={{
                    "& .MuiBadge-badge": {
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  <FavoriteBorder />
                </Badge>
              </IconButton>

              <IconButton>
                <Badge
                  badgeContent={3}
                  sx={{
                    "& .MuiBadge-badge": {
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {isMobile && (
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <SearchOverlay isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 280 },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(link.path);
                  setDrawerOpen(false);
                }}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
