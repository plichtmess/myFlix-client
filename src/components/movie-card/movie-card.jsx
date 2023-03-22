import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie)
      }}
    >
      {movie.title}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    director: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};