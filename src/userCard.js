import "./card.css";
import React from "react";
import { ListGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UserCard = ({ user, key }) => {
  return (
    <div className="cardc">
      <Card style={{ width: "18rem" }}>
        <Card.Header>{user.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{user.username}</ListGroup.Item>
          <ListGroup.Item>{user.email}</ListGroup.Item>
          <ListGroup.Item>{user.phone}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default UserCard;
