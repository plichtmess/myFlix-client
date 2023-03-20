export const MovieCard = ({ movieData, onMovieClick }) => {
  return (
    <div
      OnClick={() => {
        onMovieClick(movieData);
      }}
    >
      {movieData.title}
    </div>
  );
};