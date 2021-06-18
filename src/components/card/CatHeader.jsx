import React from "react";
import { Card } from "react-bootstrap";
import "../styling/CatHeader.css";
import { format } from "date-fns";

export function CatHeader({ cat }) {

  // gets the date in right order, but day is off by 1 day
  let date = new Date(cat.birthday)
  var formattedDate = format(date, "dd MMMM yyyy")
  console.log('formatteddate', formattedDate)



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
            <Card.Title className="font-weight-bold">{cat.name} <br/> {cat.birthday}</Card.Title>
            {/* <div className="birthday">{cat.birthday}</div> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
