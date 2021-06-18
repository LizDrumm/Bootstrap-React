import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "../styling/Card.css";
import { EditForm } from "../EditForm";
import { format } from "date-fns";

export function CatCard({ cat, handleDeleteCat }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Card className="h-100 shadow-sm bg-white rounded flex-column mt-3" tag="a">
      {cat ? (
        <>
          <Card.Img className="h-30 w-20" src={cat.thumbnailUrl} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
              <Card.Title className="mb-0 font-weight-bold">
                {cat.name}
              </Card.Title>
            </div>
            <Card.Text className="text-secondary">{cat.birthday}</Card.Text>

            <Card.Text>
              Owner: {cat.ownerName} <br /> Number of views: {cat.likes} time(s) <br />
              <div className="button-section">
                <>
                  <Button className="edit" onClick={handleShow}>
                    Edit
                  </Button>
                  
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Edit Cat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <EditForm />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        className="save"
                        variant="secondary"
                        //ideally this would have a different function which would update the json data and also close the modal
                        onClick={handleClose}
                      >
                        Save
                      </Button>
                      |
                      <Button
                        className="cancel"
                        variant="primary"
                        onClick={handleClose}
                      >
                           Cancel
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>

                
                <Button
                  className="delete"
                  onClick={() => handleDeleteCat(cat.id)}
                >Delete
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </>
      ) : null}
    </Card>
  );
}
