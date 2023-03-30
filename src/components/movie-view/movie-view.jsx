// import "./movie-view.scss";
import Button from "react-bootstrap/Button";


export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
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
      <Button variant="primary" className="mt-5" onClick={onBackClick} style={{ cursor: "pointer" }}>Back</Button>
    </div>
  );
};