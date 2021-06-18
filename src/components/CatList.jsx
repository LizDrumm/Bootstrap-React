import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import cats from '../data.json';
import {CatCard} from './CatCard';
import {CatHeader} from './CatHeader'

export function CatList () {

    return (
   <>
    <Container>
     <Col>
       {cats.map(data =>(
         <Col xs={3} className="mb-5" key = {`${data.id}`}>
           <CatHeader data = {data}/>
         </Col>
       )
       )}
     </Col>
     </Container>
     </>
    )
}