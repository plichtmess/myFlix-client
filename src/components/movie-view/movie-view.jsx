import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  console.log(movieId);

  const movie = movies.find((m) => m._id === movieId);

  return (
    <>
      <div>
        <img className="w-100" src={movie.image} alt="Film Cover" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <Link to={`/`}>
        <Button variant="primary" className="mt-5" style={{ cursor: "pointer" }}>Back</Button>
      </Link>
    </>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    director: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  }).isRequired
};