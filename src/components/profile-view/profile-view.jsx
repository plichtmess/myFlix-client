import { useState } from "react";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProfileView = (user, token) => {




  return (
    <Container>
      <Row>
        <Card className="h-100">
          <Card.Body>
            <Card.Title className="card-title">{user.Username}</Card.Title>
            <Card.Text>Email: {user.Email}</Card.Text>
            <Card.Text>Birthday: {user.Birthday}</Card.Text>
            <Link to="/users/update">
              <Button variant="link">Edit User Profile</Button>
            </Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}