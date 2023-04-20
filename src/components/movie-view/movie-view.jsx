import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  // const addFav = () => {
  //   fetch(`https://myflixphilipp.herokuapp.com/users/${user.username}/movies/${movieId}`, {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${token} ` }
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         alert("Failed");
  //         return false;
  //       }
  //     })
  //     .then(user => {
  //       if (user) {
  //         alert("Movie added to favorites");
  //         setFavorite(true);
  //         updateUser(user);
  //       }
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // }

  // const deleteFav = () => {
  //   fetch(`https://myflixphilipp.herokuapp.com/users/${user.username}/movies/${movieId}`, {
  //     method: "DELETE",
  //     headers: { Authorization: `Bearer ${token}` }
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         alert("Failed");
  //         return false;
  //       }
  //     })
  //     .then(user => {
  //       if (user) {
  //         alert("Deleted movie from favorites");
  //         setFavorite(false);
  //         updateUser(user);
  //       }
  //     })
  //     .catch((e) => {
  //       console.error(e);
  //     });
  // }


  return (
    <>
      <Col md={12}>
        <div>
          <img className="w-100" src={movie.image} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <h4>{movie.genre}</h4>
          <h4>{movie.director.Name}</h4>
          <Link to={`/`}>
            <Button variant="primary" className="mt-5" style={{ cursor: "pointer" }}>Back</Button>
          </Link>
          {/* {isFavorite ?
            <Button variant="primary" onClick={deleteFav}>Delete from favorite movies</Button>
            : <Button variant="primary" onClick={addFav}>Add to favorite movies</Button>
          } */}
        </div>
      </Col>
    </>
  );
};