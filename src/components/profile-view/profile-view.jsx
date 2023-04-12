import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Button, Card } from "react-bootstrap";

export const ProfileView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [users, setUsers] = useState(storedUser ? storedUser : null);

  useEffect(() => {

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://myflixphilipp.herokuapp.com/users",
      {
        method: "GET",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
      .then((response) => response.json())
      .then((data) => {
        const usersFromApi = data.map((user) => {
          return {
            id: user._id,
            username: user.Username,
            password: user.Password,
            email: user.Email,
            birthday: user.Birthday
          };
        });
        setUsers(usersFromApi);
      });
  }, [token]);

  const user = users.find((u) => u.Username === username);

  return (
    <Container>
      <Row>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="card-title">{username}</Card.Title>
            <Card.Text>{email}</Card.Text>
            <Card.Text>{birthday}</Card.Text>
            <Link to="/users/update">
              <Button variant="link">Edit User Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}