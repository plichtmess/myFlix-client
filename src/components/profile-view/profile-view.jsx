import { useState } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");




  return (
    <Container>
      <Row>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="card-title">{storedUser.username}</Card.Title>
            <Card.Text>{storedUser.email}</Card.Text>
            <Card.Text>{storedUser.birthday}</Card.Text>
            <Link to="/users/update">
              <Button variant="link">Edit User Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}