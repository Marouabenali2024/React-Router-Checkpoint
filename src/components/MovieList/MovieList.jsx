import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import moviesData from "../../data";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const [open, setOpen] = useState(false); // State to manage dialog open/close

  const addMovie = (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.rating)
      return alert("Title and rating are required!");

    setMovies([
      ...movies,
      {
        ...newMovie,
        id: movies.length + 1,
        rating: parseFloat(newMovie.rating),
      },
    ]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
    setOpen(false); // Close the dialog after adding the movie
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (filterTitle
        ? movie.title.toLowerCase().includes(filterTitle.toLowerCase())
        : true) && movie.rating >= filterRating
  );

  const handleSearchClick = () => {
    // You can add additional logic for the search button if needed
    console.log("Search clicked:", filterTitle, filterRating);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Watch What You Love</h1>

      {/* Filter Section */}
      <div className="filter-container mb-4">
        <TextField
          fullWidth
          className="filter-input"
          placeholder="Filter by title"
          variant="outlined"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <div className="rating-filter">
          <span className="me-2">Filter by Rating:</span>
          <Rating
            name="filter-rating"
            value={filterRating}
            onChange={(e, newValue) => setFilterRating(newValue || 0)}
            precision={0.5}
            sx={{
              "& .MuiRating-iconEmpty": {
                color: "gold",
              },
            }}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSearchClick}
          className="search-button"
        >
          Search
        </Button>
      </div>

      {/* Add Movie Button */}
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Movie
      </Button>

      {/* Add Movie Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add a New Movie</DialogTitle>
        <DialogContent>
          <form onSubmit={addMovie}>
            <TextField
              fullWidth
              margin="normal"
              label="Title"
              variant="outlined"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
            />
            <TextField
              fullWidth
              margin="normal"
              label="Poster URL"
              variant="outlined"
              value={newMovie.posterURL}
              onChange={(e) =>
                setNewMovie({ ...newMovie, posterURL: e.target.value })
              }
            />
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={newMovie.description}
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
            />
            <div className="d-flex align-items-center mt-3">
              <span className="me-2">Rating:</span>
              <Rating
                name="add-rating"
                value={parseFloat(newMovie.rating) || 0}
                onChange={(e, newValue) =>
                  setNewMovie({ ...newMovie, rating: newValue || 0 })
                }
                precision={0.5}
                sx={{
                  "& .MuiRating-iconEmpty": {
                    color: "gold",
                  },
                }}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={addMovie} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Movie Cards */}
      <div className="row g-3 mt-4">
        {filteredMovies.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
