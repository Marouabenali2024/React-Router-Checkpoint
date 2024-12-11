import React, { useState } from 'react';
import './AddMovieForm.css';

function AddMovieForm() {
  const [newMovie, setNewMovie] = useState({
    title: '',
    genre: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.genre) {
      alert('Movie added successfully!');
    }
  };

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
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
      < onClick={handleAddMovie}>Add Movie</>
    </div>
  );
}

export default AddMovieForm;
