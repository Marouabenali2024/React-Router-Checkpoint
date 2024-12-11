import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }


  return (
    <div className="movie-detail">
      <Card>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Text>Rating: {movie.rating}</Card.Text>
          <div>
            <h5>Trailer:</h5>
            <iframe
              width="300"
              height="300"
              src={`https://www.youtube.com/embed/${movie.trailerURL.split("v=")[1]}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Link to="/">
            <Button
              style={{
                backgroundColor: "#a467f2",
                color: "white",
                border: "none",
              }}
              className="mt-3"
            >
              Back to Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieDetail;
