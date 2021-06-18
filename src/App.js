import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {CatList} from './components/CatList';
import {Container, Row, Col} from 'react-bootstrap';
import cats from './data';
import {CatCard} from './components/CatCard';
import {Confirmation} from './components/CatList';
import {SearchBar} from './components/SearchBar'
function App() {

const [open, setOpen] = useState(false);

function displayCard(){
  setOpen(true);
}

  return (
    <>
   <Container>
     <SearchBar/>
     <CatList/>
   </Container>
   </>
  );
}

export default App;
