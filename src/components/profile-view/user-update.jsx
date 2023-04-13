import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export const UserUpdate = (token) => {
export const UserUpdate = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [token, setToken] = useState(storedToken ? storedToken : null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Email: email,
      Password: password,
      Birthday: birthday
    };

    fetch(`https://myflixphilipp.herokuapp.com/users/${storedUser.username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.ok) {
        alert("Successfully updated User Information");
        window.location.reload();
      }
    }).then((data) => {
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.reload();
      }
      else {
        alert("Failed updating User Information");
      }
    });
  };

  const deleteUser = (event) => {
    event.preventDefault();

    const data = {
      Username: username
    };

    fetch(`https://myflixphilipp.herokuapp.com/users/${storedUser.username}`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.ok) {
        alert("User was succesfully deleted");
        window.location.reload();
      } else {
        alert("Failed deleting user");
      }
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="updateUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="5"
          />
        </Form.Group>

        <Form.Group controlId="updatePassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="5"
          />
        </Form.Group>

        <Form.Group controlId="updateEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="updateBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
        <Button variant="secondary" onClick={deleteUser}>Delete Account</Button>
      </Form>
      <Link to={"/profile"}>
        <Button variant="primary" className="mt-5" style={{ cursor: "pointer" }}>Cancel</Button>
      </Link>
    </>
  );
};
