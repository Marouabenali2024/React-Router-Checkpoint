import React, { useState } from "react";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles"; // Import styled utility
import "./SearchBar.css"; // Ensure CSS styles are defined

// Custom Styled Rating Component
const CustomRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#3808b2", // Filled star color
  },
  "& .MuiRating-iconHover": {
    color: "#3808b2", // Hovered star color
  },
  "& .MuiRating-iconEmpty": {
    color: "#3808b2", // Empty star color
  },
});

const SearchBar = ({ onSearch, onRatingChange }) => {
  const [query, setQuery] = useState(""); // Holds the search query
  const [rating, setRating] = useState(0); // Holds the selected rating

  // Handle changes in the search query
  const handleQueryChange = (e) => {
    setQuery(e.target.value); // Update query state
    onSearch(e.target.value, rating); // Pass query and rating for filtering
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Update rating state
    onRatingChange(newRating, query); // Pass rating and query for filtering
  };

  // Trigger search on button click
  const handleSearchClick = () => {
    onSearch(query, rating); // Trigger search with both query and rating
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search Movies by Title..."
          value={query}
          onChange={handleQueryChange} // Trigger handleQueryChange on input change
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      <div className="rating-filter-container">
        <CustomRating
          name="movie-rating"
          value={rating}
          onChange={(event, newValue) => handleRatingChange(newValue)} // Handle rating change
          precision={0.5} // Precision for rating (half-star)
        />
      </div>
    </div>
  );
};

export default SearchBar;
