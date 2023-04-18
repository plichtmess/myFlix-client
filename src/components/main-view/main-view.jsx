import { useEffect, useState } from "react";
import { MovieView } from "../movie-view/movie-view";
import { MovieCard } from "../movie-card/movie-card";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { UserUpdate } from "../profile-view/user-update";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// create and export the MainView component
export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [listMovies, setListMovies] = useState(movies);

  const updateUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://myflixphilipp.herokuapp.com/movies",
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            id: movie._id,
            image: movie.imagePath,
            title: movie.title,
            genre: movie.genre.Name,
            director: movie.director.Name,
            description: movie.description
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);

  useEffect(() => {
    setListMovies(movies);
  }, [movies]);

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Container>
        <Row className="justify-content-md-center">
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/login" />
                  ) : (
                    <Col md={3}>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={3}>
                      <LoginView onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView
                        movies={movies}
                        user={user}
                        token={token}
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <>
                      {listMovies.map(movie => (
                        <Col className="mb-4" key={movie.id} md={3}>
                          <MovieCard
                            movie={movie}
                          />
                        </Col>
                      ))}
                    </>
                  )}
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <>
                      <Col className="mb-4">
                        <ProfileView
                          user={user}
                          token={token}
                          movies={movies}
                          onLoggedOut={() => {
                            setUser(null);
                            setToken(null);
                            localStorage.clear();
                          }}
                        />
                      </Col>
                    </>
                  )}
                </>
              }
            />
            <Route
              path="/users/update"
              element={
                <>
                  {!user ? (
                    <Navigate to="/profile" replace />
                  ) : (
                    <>
                      <Col className="mb-4">
                        <UserUpdate
                          user={user}
                          token={token}
                          onLoggedOut={() => {
                            setUser(null);
                            setToken(null);
                            localStorage.clear();
                          }}
                        />
                      </Col>
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

