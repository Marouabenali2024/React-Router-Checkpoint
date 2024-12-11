import React, { useState } from "react";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./Filter.css"; // Optional CSS file for styling

// Styled Rating Component
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#3808b2", // Updated filled star color
  },
  "& .MuiRating-iconHover": {
    color: "#5a2eae", // Updated hover color
  },
});

const Filter = ({ onSearch, onRatingFilter, filteredMovies }) => {
  const [rating, setRating] = useState(0);

  const handleSearchChange = (e) => {
    onSearch(e.target.value); // Pass search input to parent component
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onRatingFilter(newRating); // Pass selected star rating to parent component
  };

  return (
    <>
      {/* Filtered Movies Section */}
      <div className="filtered-movies-container">
        <h2>Filtered Movies:</h2>
        {filteredMovies.length > 0 ? (
          <ul className="filtered-movies-list">
            {filteredMovies.map((movie, index) => (
              <li key={index} className="filtered-movie-item">
                {movie.title} - {movie.rating} 
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies match the search criteria.</p>
        )}
      </div>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by title"
          onChange={handleSearchChange}
          className="filter-input"
        />
        <div className="rating-filter">
          <StyledRating
            name="filter-rating"
            value={rating}
            onChange={(event, newValue) => handleRatingChange(newValue)}
            precision={1}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
