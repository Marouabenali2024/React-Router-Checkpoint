import React, { useState } from 'react';
import './AddMovieButton.css';

const AddMovieButton = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    genre: '',
    description: '',
  });

  // Handle input change for each field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  // Handle the form submission
  const handleAddMovie = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (newMovie.title && newMovie.genre) {
      onAddMovie(newMovie); // Call the parent function to add the movie
      setNewMovie({ title: '', genre: '', description: '' }); // Reset the form fields
    }
  };

  return (
    <div>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newMovie.genre}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <button className="btn-movie" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieButton;
