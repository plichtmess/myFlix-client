import React from "react";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //prevents the default behavior to not reload the entire page
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    fetch("https://myflixphilipp.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("Login failed");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  }

  return (
    <Card className="mt-2 mb-3">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
              className="bg-light"
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-light"
            />
          </Form.Group>
          <Button variant="primary mt-3" type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};