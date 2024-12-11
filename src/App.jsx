import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList/MovieList";
import Home from "./components/Homepage/Home";
import Login from "./components/Loginpage/Login";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import movies from "./movies.js";
import Navigation from "./components/Navigation/Navigation.jsx";
import "./App.css"; 
import SearchBar from "./components/SearchBar/SearchBar"


const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route
          path="/movie/:id"
          element={<MovieDetail movies={movies} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Container className="mt-4">
        <Row className="text-center">
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
