import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export const UserUpdate = ({ user, token, onLoggedOut }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Email: email,
      Password: password,
      Birthday: birthday
    };

    fetch(`https://myflixphilipp.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.ok)
          return response.json();
      }).then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          alert("Your info is updated!");
          window.location.reload();
        }
        else {
          alert("Failed updating User Information");
        }
      })
      .catch((e) => console.error(e));
  };

  const deleteUser = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch(`https://myflixphilipp.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.ok) {
        alert("User was deleted");
      }
    }).then((data) => {
      if (data) {
        localStorage.clear("user", JSON.stringify(data));
        alert("User was deleted");
        // } else {
        //   alert("Failed deleting user");
      }
    })
      .catch((e) => console.error(e));

    onLoggedOut();
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
            type="password"
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
