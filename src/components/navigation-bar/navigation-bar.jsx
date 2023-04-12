import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="navTitle" as={Link} to="/">
          MyFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link className="navItem" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="navItem" as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link className="navItem" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="navItem" as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link className="navItem" onClick={onLoggedOut}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};