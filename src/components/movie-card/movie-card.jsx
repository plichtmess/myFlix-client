import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card className="h-100" /*onClick={() => onMovieClick(movie)}*/ variant="link">
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title className="card-title">{movie.title}</Card.Title>
          <Card.Text className="card-text">{movie.director}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};