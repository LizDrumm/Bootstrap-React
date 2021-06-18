import React from "react";
import { Card } from "react-bootstrap";
import "../styling/CatHeader.css";

export function CatHeader({ cat }) {
  return (
    <div className="whole-card">
      <Card className="flex-row" tag="a">
        <Card.Img
          src={cat.thumbnailUrl}
          alt="cat-thumbnail"
          className="img-thumbnail"
        />
        <Card.Body className="card-body">
          <div className="section">
            <Card.Title className="font-weight-bold">{cat.name} </Card.Title>
            <div className="birthday">{cat.birthday}</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
