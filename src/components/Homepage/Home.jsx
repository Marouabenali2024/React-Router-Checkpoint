import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar"; // Correct path
import MovieList from "../MovieList/MovieList"; // Correct path
import movies from "../../movies.js"; // Correct path if movies.js is in src/

function Home() {
  const [searchValue, setSearchValue] = useState("");

  // Handle changes in the search input field
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Filter movies based on the search value
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;
