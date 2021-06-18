import React from "react";
import { Container, Col, Button } from "react-bootstrap";
import { CatHeader } from "./CatHeader";
import "../styling/CatList.css"

export function CatList({ cats, handleSelectCat }) {
  return (
    <Container>
      <Col>
        <div className="entire-list">
          {cats.map((cat) => (
            <div className="list-section">
              <button
                className="bg-white text-secondary p-0"
                onClick={() => handleSelectCat(cat.id)}
                key={`${cat.id}`}
              >
                <div className="cat-header">
                <Col xs={3} className="mb-5" style={{ cursor: "pointer" }}>
                    <CatHeader cat={cat} />
                 
                </Col>
                </div>
              </button>
            </div>
          ))}
        </div>
      </Col>
    </Container>
  );
}
