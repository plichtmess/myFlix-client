import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  const [favorite, setFavorite] = useState(user.FavoriteMovies.includes(movie.id));

  useEffect(() => {
    setFavorite(user.FavoriteMovies.includes(movie.id));
  }, [movieId]);

  const addFav = () => {
    fetch(`https://philippmyflix.onrender.com/users/${user.username}/movies/${movieId}`, {
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
          setFavorite(true);
          updateUser(user);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const deleteFav = () => {
    fetch(`https://philippmyflix.onrender.com/users/${user.username}/movies/${movieId}`, {
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
          setFavorite(false);
          updateUser(user);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }


  return (
    <>
      <Col md={12}>
        <div>
          <img className="w-100" src={movie.image} alt="Film Cover" />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <h4>{movie.genre}</h4>
          <h4>{movie.director.Name}</h4>
          <Link to={`/`}>
            <Button variant="primary" className="mt-5" style={{ cursor: "pointer" }}>Back</Button>
          </Link>
          {isFavorite ?
            <Button variant="primary" onClick={deleteFav}>Delete from favorite movies</Button>
            : <Button variant="primary" onClick={addFav}>Add to favorite movies</Button>
          }
        </div>
      </Col>


    </>
  );
};

// MovieView.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     genre: PropTypes.string.isRequired,
//     director: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired
//   }).isRequired)
// };