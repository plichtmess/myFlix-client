import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ movie }) => {

  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card className="h-100" variant="link">
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired
};