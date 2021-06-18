import React from 'react';

import {Card, Button} from 'react-bootstrap';


export function CatCard ({data}) {

    return (
        <Card className="h-100 shadow-sm bg-white rounded flex-column"  tag="a"  style={{ cursor: "pointer" }} >
          <Card.Img   className ="h-30 w-20" src={data.thumbnailUrl} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
              <Card.Title className="mb-0 font-weight-bold">{data.name}</Card.Title>
            </div>
            <Card.Text className="text-secondary"> 
            {data.birthday}</Card.Text>
            
            <Card.Text>  Owner: {data.ownerName} <br/> Click Count: <br/> <Button> Edit </Button> <Button> Delete </Button>
            </Card.Text>
          </Card.Body>
        </Card>
    
      );
}