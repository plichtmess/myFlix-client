import React from "react";
import { useState, useEffect } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, movies }) => {

  console.log(movies);
  console.log(user);
  console.log(user.Username);

  let favoriteMovies = movies.filter(movie => user.FavoriteMovies.includes(movie.id));

  console.log(favoriteMovies);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Account Info</h1>
        </Col>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="card-title">{user.Username}</Card.Title>
            <Card.Text>Email: {user.Email}</Card.Text>
            <Card.Text type="date">Birthday: {user.Birthday}</Card.Text>
            <Link to="/users/update">
              <Button variant="primary">Edit User Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col>
          <h3>Favorite Movies</h3>
        </Col>
      </Row>
      <Row>
        {favoriteMovies.map((movie) => (
          <Col className="mb-4" key={movie.id} md={3}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container >
  )
}