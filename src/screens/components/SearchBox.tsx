import { useState, useEffect } from "react";
import { Box, InputBase, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// Material Icons for Suggestion List in the Search bar .
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

// Template function for API-based search suggestions
/*
async function fetchSearchSuggestions(query) {
  try {
    // Example API call - replace with your actual API endpoint
    const response = await fetch(`/api/search/suggestions?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Return up to 7-8 suggestions
    return data.suggestions ? data.suggestions.slice(0, 8) : [];
  } catch (error) {
    console.error('Error fetching search suggestions:', error);
    // Return sample data as fallback
    return sampleData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  }
}
*/

// Template function for searching products from API
/*
async function searchProducts(query) {
  try {
    // Example API call to search products - replace with your actual API endpoint
    const response = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Navigate to ProductList with search results
    // This would be called instead of direct navigation to allow server-side filtering
    return data.products || [];
  } catch (error) {
    console.error('Error searching products:', error);
    // Fallback to client-side navigation
    return [];
  }
}
*/

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [originalQuery, setOriginalQuery] = useState(""); // Store original query separately
  const [show, setShow] = useState(false);
  // State for API-based suggestions
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // State for keyboard navigation
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  // State to track if we're in autocomplete mode
  const [isAutocompleteMode, setIsAutocompleteMode] = useState(false);

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
      // In the future, this will call the API function
      // const apiSuggestions = await fetchSearchSuggestions(query);
      // setSuggestions(apiSuggestions);
      
      // For now, using sample data
      setSuggestions(getSuggestions(originalQuery));
    } else {
      setSuggestions([]);
    }
    
    // Reset active suggestion index when suggestions change
    setActiveSuggestionIndex(-1);
  }, [originalQuery]);



  return (
    <Box
      sx={{
        position: "relative",
        flexGrow: 1,
        maxWidth: 500,
        display: { xs: "none", md: "flex" },
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
        value={
          activeSuggestionIndex >= 0 && isAutocompleteMode && suggestions[activeSuggestionIndex]
            ? suggestions[activeSuggestionIndex] // Show suggestion when navigating
            : query // Show original query otherwise
        }
        onChange={(e) => {
          const newValue = e.target.value;
          setQuery(newValue);
          setOriginalQuery(newValue); // Keep track of original query
          setShow(true);
          setIsAutocompleteMode(false); // Reset autocomplete mode when user types
          setActiveSuggestionIndex(-1); // Reset active suggestion when user types
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && query.trim()) {
            if (activeSuggestionIndex >= 0 && suggestions[activeSuggestionIndex] && isAutocompleteMode) {
              // Navigate with the selected suggestion
              setQuery(suggestions[activeSuggestionIndex]); // Update query to the selected suggestion
              navigate('/products');
              setShow(false);
              setActiveSuggestionIndex(-1);
              setIsAutocompleteMode(false);
            } else {
              // Navigate with current query
              navigate('/products');
              setShow(false);
              setActiveSuggestionIndex(-1);
              setIsAutocompleteMode(false);
            }
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
            // Hide suggestions and reset state when Escape is pressed
            setShow(false);
            setActiveSuggestionIndex(-1);
            setIsAutocompleteMode(false);
            setQuery(query); // Restore original query
          } else if ((e.key === 'Tab' || e.key === 'ArrowRight') && activeSuggestionIndex >= 0 && suggestions[activeSuggestionIndex]) {
            // Accept the current suggestion and allow user to continue typing
            e.preventDefault(); // Prevent default Tab behavior
            setQuery(suggestions[activeSuggestionIndex]); // Set the full suggestion as query
            setShow(false); // Hide suggestions
            setIsAutocompleteMode(false); // Exit autocomplete mode
          }
        }}
        sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: 17 }}
      />

      {/* Suggestions */}
      {show && query && (
        <List
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 3,
            zIndex: 10,
            mt: 1, // Add margin top for space between search bar and suggestions
            // Remove scroll and show all items
            maxHeight: 'none',
            overflowY: 'visible',
          }}
        >
          {suggestions.length > 0 ? (
            suggestions.map((item: string, index: number) => (
              <ListItem
                key={index}
                onClick={() => {
                  navigate('/products');
                  setShow(false);
                  setActiveSuggestionIndex(-1);
                }}
                sx={{ 
                  cursor: 'pointer', 
                  '&:hover': { backgroundColor: '#f0f0f0' }, 
                  display: 'flex', 
                  alignItems: 'center',
                  backgroundColor: index === activeSuggestionIndex ? '#e0d0f5' : 'transparent' // Highlight active suggestion
                }}
              >
                {getIconForSuggestion(item)}
                <ListItemText 
                  primary={item} 
                  sx={{ color: 'black', ml: 1 }} 
                />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No results found" sx={{ color: 'black' }} />
            </ListItem>
          )}
        </List>
      )}
    </Box>
  );
}
