import React, {useState} from 'react';

import {Card} from 'react-bootstrap';
import {CatCard} from './CatCard'


export function CatHeader ({data}) {

    const [openCard, setOpenCard] =useState(false)

    const [count, setCount] = useState(0)

  const clickToOpen=()=>{
     setOpenCard(true)
     
   }
   

    return(
        <Card className="flex-row"  tag="a"  style={{ cursor: "pointer" }} onClick={clickToOpen} >
          <Card.Img  src={data.thumbnailUrl}  alt ="cat-thumbnail" class="img-thumbnail h-50 w-50"/>
          <Card.Body className="">
            <div className="">
              <Card.Title className="font-weight-bold">{data.name} </Card.Title>
            </div>
            {data.birthday}
            </Card.Body>
        </Card>
    
    )
};