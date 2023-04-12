import { useState, useEffect } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ movies }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);

  let favoriteMovies = () => {
    if (movies) {
      movies.filter(m => user.FavoriteMovies.includes(m._id));
    }
  };

  return (
    <Container>
      <Row>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="card-title">{user.Username}</Card.Title>
            <Card.Text>Email: {user.Email}</Card.Text>
            <Card.Text type="date">Birthday: {user.Birthday}</Card.Text>
            <Link to="/users/update">
              <Button variant="link">Edit User Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <h1>Favorite Movies</h1>
      </Row>
    </Container>
  )
}