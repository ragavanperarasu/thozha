import { useState } from "react";
import { Box, InputBase, List, ListItem, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const sampleData = [
  "React",
  "React Native",
  "Node.js",
  "MongoDB",
  "Express",
  "JavaScript",
  "TypeScript",
  "My GCT",
  "Thozha App",
];

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const filteredData = sampleData.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

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
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShow(true);
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
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <ListItem
                key={index}
                button
                onClick={() => {
                  setQuery(item);
                  setShow(false);
                }}
              >
                <ListItemText primary={item} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No results found" />
            </ListItem>
          )}
        </List>
      )}
    </Box>
  );
}
