import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

export const MovieView = ({ movies, user, token, updatingUser }) => {

  const { movieId } = useParams();
  console.log("this.context:", movieId)

  const movie = movies.find((m) => m.id === movieId);

  const addFav = () => {
    fetch(`https://myflixphilipp.herokuapp.com/users/${user.Username}/movies/${movieId}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token} ` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then(user => {
        if (user) {
          alert("Movie added to favorites");
          updatingUser(user);
          window.location.reload();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const deleteFav = () => {
    fetch(`https://myflixphilipp.herokuapp.com/users/${user.Username}/movies/${movieId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Failed");
          return false;
        }
      })
      .then(user => {
        if (user) {
          alert("Deleted movie from favorites");
          updatingUser(user);
          window.location.reload();
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <Row>
      <Col md={12}>
        <div>
          <img className="w-100" src={movie.image} />
          <h1>{movie.title}</h1>
          <h4>Director: {movie.director}</h4>
          <h5>Genre: {movie.genre}</h5>
          <p>{movie.description}</p>
          <Link to={`/`}>
            <Button variant="primary mt-3" className="mt-5" style={{ cursor: "pointer" }}>Back</Button>
          </Link>
        </div>
      </Col>
      <Col md={12}>
        <Button variant="secondary mt-3" onClick={addFav}>Add to favorite movies</Button>
      </Col>
      <Col>
        <Button variant="secondary mt-3" onClick={deleteFav}>Delete from favorite movies</Button>
      </Col>
    </Row>
  );
};