import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: "none", color: "inherit" }} // Ensure no default link styling
    >
      <div
        className="card h-100 shadow-sm border-0"
        style={{ cursor: "pointer" }} // Add a pointer cursor for interactivity
      >
        <img
          src={movie.posterURL}
          className="card-img-top"
          alt={movie.title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description}</p>
          <Rating name="read-only-rating" value={movie.rating || 0} readOnly />
          <Link
            to={`/movie/${movie.id}`}
            style={{
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
            }}
          >
            <button
              style={{
                backgroundColor: "#1e3a3c",
                color: "white",
                border: "none",
              }}
              className="mt-3"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
