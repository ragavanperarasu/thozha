import { useState, useEffect, useRef } from "react";
import { 
  Box, 
  InputBase, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton,
  Backdrop
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import TvIcon from '@mui/icons-material/Tv';
import ComputerIcon from '@mui/icons-material/Computer';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WatchIcon from '@mui/icons-material/Watch';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SpeakerIcon from '@mui/icons-material/Speaker';
import GamepadIcon from '@mui/icons-material/Gamepad';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HelpIcon from '@mui/icons-material/Help';
import { useNavigate } from 'react-router-dom';

const sampleData = [
  "Smartphone",
  "Mobile Phone",
  "iPhone",
  "Samsung",
  "Vivo",
  "Oppo",
  "OnePlus",
  "Realme",
  "Redmi",
  "Moto",
  "Home Appliances",
  "Refrigerator",
  "Washing Machine",
  "TV",
  "Microwave",
  "Air Conditioner",
  "Laptop",
  "Tablet",
  "Headphones",
  "Smart Watch",
  "Camera",
  "Speaker",
  "Gaming Console",
  "Thozha Deals",
  "Electronics",
  "Best Offers",
];

// Mapping of keywords to appropriate icons
const getIconForSuggestion = (suggestion: string) => {
  const lowerSuggestion = suggestion.toLowerCase();
  
  if (lowerSuggestion.includes('phone') || lowerSuggestion.includes('smartphone') || 
      ['iphone', 'samsung', 'vivo', 'oppo', 'oneplus', 'realme', 'redmi', 'moto'].includes(lowerSuggestion)) {
    return <PhoneAndroidIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('home') || lowerSuggestion.includes('refrigerator') || 
             lowerSuggestion.includes('washing') || lowerSuggestion.includes('microwave') || 
             lowerSuggestion.includes('conditioner')) {
    return <HomeIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('tv') || lowerSuggestion.includes('laptop') || 
             lowerSuggestion.includes('tablet')) {
    return <TvIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('headphones') || lowerSuggestion.includes('speaker')) {
    return <SpeakerIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('watch')) {
    return <WatchIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('camera')) {
    return <CameraAltIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('gaming') || lowerSuggestion.includes('console')) {
    return <GamepadIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('deal') || lowerSuggestion.includes('offer')) {
    return <LocalOfferIcon sx={{ color: '#7c13f4' }} />;
  } else if (lowerSuggestion.includes('electronic')) {
    return <ElectricBoltIcon sx={{ color: '#7c13f4' }} />;
  } else {
    return <HelpIcon sx={{ color: '#7c13f4' }} />;
  }
};

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [originalQuery, setOriginalQuery] = useState(""); // Store original query separately
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // State for keyboard navigation
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  // State to track if we're in autocomplete mode
  const [isAutocompleteMode, setIsAutocompleteMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to get suggestions (currently using sample data, will use API in future)
  const getSuggestions = (inputQuery: string) => {
    if (inputQuery.trim() === "") {
      return [];
    }
    
    // Filter sample data (this will be replaced with API call)
    const filtered = sampleData.filter(item =>
      item.toLowerCase().includes(inputQuery.toLowerCase())
    );
    
    // Limit to 7-8 suggestions
    return filtered.slice(0, 8);
  };

  // Update suggestions when query changes
  useEffect(() => {
    if (originalQuery.trim() !== "") {
      // For now, using sample data
      setSuggestions(getSuggestions(originalQuery));
    } else {
      setSuggestions([]);
    }
    
    // Reset active suggestion index when suggestions change
    setActiveSuggestionIndex(-1);
  }, [originalQuery]);

  // Focus input when overlay opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSearch = () => {
    if (query.trim()) {
      if (activeSuggestionIndex >= 0 && suggestions[activeSuggestionIndex] && isAutocompleteMode) {
        // Navigate with the selected suggestion
        navigate(`/products?q=${encodeURIComponent(suggestions[activeSuggestionIndex])}`);
      } else {
        // Navigate with current query
        navigate(`/products?q=${encodeURIComponent(query)}`);
      }
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'ArrowDown' && suggestions.length > 0) {
      e.preventDefault(); // Prevent page scrolling
      const newIndex = activeSuggestionIndex < suggestions.length - 1 ? activeSuggestionIndex + 1 : 0;
      setActiveSuggestionIndex(newIndex);
      setIsAutocompleteMode(true); // Enable autocomplete mode
    } else if (e.key === 'ArrowUp' && suggestions.length > 0) {
      e.preventDefault(); // Prevent page scrolling
      const newIndex = activeSuggestionIndex > 0 ? activeSuggestionIndex - 1 : suggestions.length - 1;
      setActiveSuggestionIndex(newIndex);
      setIsAutocompleteMode(true); // Enable autocomplete mode
    } else if (e.key === 'Escape') {
      // Close the overlay when Escape is pressed
      onClose();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    navigate(`/products?q=${encodeURIComponent(suggestion)}`);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Backdrop
      open={isOpen}
      onClick={onClose}
      sx={{ 
        zIndex: 1300,
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <Box
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the overlay
          sx={{
            width: '100vw',
            maxWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            bgcolor: 'white',
            borderRadius: '0 0 0 0',
            boxShadow: 24,
            p: 1,
            mx: 0,
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden',
          }}
        >
          {/* Search Input */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              bgcolor: 'white',
              borderRadius: 2,
              border: '1px solid #7c13f4',
              padding: '4px 10px',
              mb: 2
            }}
          >
            <SearchIcon sx={{ mr: 1, color: "#7c13f4" }} />
            <InputBase
              inputRef={inputRef}
              placeholder="Search In Thozha"
              fullWidth
              value={
                activeSuggestionIndex >= 0 && isAutocompleteMode && suggestions[activeSuggestionIndex]
                  ? suggestions[activeSuggestionIndex] // Show suggestion when navigating
                  : query // Show original query otherwise
              }
              onChange={(e) => {
                const newValue = e.target.value;
                setQuery(newValue);
                setOriginalQuery(newValue); // Keep track of original query
                setIsAutocompleteMode(false); // Reset autocomplete mode when user types
                setActiveSuggestionIndex(-1); // Reset active suggestion when user types
              }}
              onKeyDown={handleKeyDown}
              sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: 17 }}
            />
            <IconButton onClick={handleClose} sx={{ color: '#7c13f4' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Suggestions */}
          {query && suggestions.length > 0 && (
            <Box
              sx={{
                width: '100%',
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 3,
                zIndex: 10,
                mt: 1, // Add margin top for space between search bar and suggestions
                // Remove scroll and show all items
                maxHeight: 'none',
                overflowY: 'visible',
                overflowX: 'hidden',
              }}
            >
              <List>
                {suggestions.map((item: string, index: number) => (
                  <ListItem
                    key={index}
                    onClick={() => handleSuggestionClick(item)}
                    sx={{ 
                      cursor: 'pointer', 
                      '&:hover': { backgroundColor: '#f0f0f0' }, 
                      display: 'flex', 
                      alignItems: 'center',
                      backgroundColor: index === activeSuggestionIndex ? '#e0d0f5' : 'transparent', // Highlight active suggestion
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth transition for all properties
                      transform: index === activeSuggestionIndex ? 'translateX(5px) scale(1.02)' : 'translateX(0) scale(1)', // Slide and scale effect for active suggestion
                      boxShadow: index === activeSuggestionIndex ? 2 : 0, // Add shadow to active suggestion
                      mb: index === activeSuggestionIndex ? 0.5 : 0 // Add margin to active suggestion
                    }}
                  >
                    {getIconForSuggestion(item)}
                    <ListItemText 
                      primary={item} 
                      sx={{ color: 'black', ml: 1 }} 
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {query && suggestions.length === 0 && (
            <Box
              sx={{
                width: '100%',
                bgcolor: 'white',
                borderRadius: 2,
                boxShadow: 3,
                zIndex: 10,
                mt: 1, // Add margin top for space between search bar and suggestions
                p: 2
              }}
            >
              <ListItemText primary="No results found" sx={{ color: 'black' }} />
            </Box>
          )}
        </Box>
    </Backdrop>
  );
}