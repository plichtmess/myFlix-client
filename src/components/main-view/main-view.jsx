import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

// create and export the MainView component
export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      genre: "Drama",
      director: "Francis Ford Coppola",
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
      id: 2,
      title: "The Departed",
      description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      genre: "Thriller",
      director: "Martin Scorsese",
      image: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg"
    },
    {
      id: 3,
      title: "Road to Perdition",
      description: "A mob enforcer's son in 1930s Illinois witnesses a murder, forcing him and his father to take to the road, and his father down a path of redemption and revenge.",
      genre: "Drama",
      director: "Sam Mendes",
      image: "https://m.media-amazon.com/images/M/MV5BNjcxMmQ0MmItYTkzYy00MmUyLTlhOTQtMmJmNjE3MDMwYjdlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>Movie List is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

