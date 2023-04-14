import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./movie-card.scss";

export const MovieCard = ({ user, movie, token }) => {

  const addFav = () => {
    fetch(`https://myflixphilipp.herokuapp.com/users/${user.Username}/movies/${movie.id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed adding movie to Favorites");
        }
      })
      .then(user => {
        if (user) {
          alert("Movie was added to favorites");
        }
      })
      .catch((e) => console.error(e));
  };

  const deleteFav = () => {
    fetch(`https://myflixphilipp.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed deleting favorite movie");
        }
      })
      .then(user => {
        if (user) {
          alert("Movie was deleted from favorites");
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
      <Card className="h-100" variant="link">
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title className="card-title">{movie.title}</Card.Title>
          <Card.Text className="card-text">{movie.director}</Card.Text>
          <Button onClick={addFav}>Add to Favorites</Button>
          <Button onClick={deleteFav}>Delete from Favorites</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  movies: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string
  }).isRequired
};