import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CatList } from "./components/card/CatList";
import { EditForm } from "./components/EditForm";
import { Container } from "react-bootstrap";
import { SearchBar } from "./components/SearchBar";
import cats from "./data.json";
import { CSVLink } from "react-csv";
import { CatCard } from "./components/card/CatCard";

function App() {
  const [localCatData, setLocalCatData] = useState([]);
  const [selectedCatData, setSelectedCatData] = useState(null);


  useEffect(() => {
    setLocalCatData(cats);
    setSelectedCatData(cats[0]);
  }, []);

  const handleSelectCat = (catId) => {
    const foundCat = localCatData.find((cat) => cat.id === catId);
    foundCat.viewscount += 1;
    setSelectedCatData(foundCat);
  };

  //splice might be better as it will take less time and not need to map through entire data structure
  //filter wouldn't be great for a larger set of data where id might be unique
  const handleDeleteCat = (catId) => {
    setLocalCatData(localCatData.filter((cat) => cat.id !== catId));
    setSelectedCatData(null);
  };




  return (
    <>
      <Container>
        <div className="main-div">
          <div className="second-div">
            <SearchBar />
            <CatList handleSelectCat={handleSelectCat} cats={localCatData} />
          </div>

          <CatCard cat={selectedCatData} handleDeleteCat={handleDeleteCat} />
        </div>
        
      </Container>
    </>
  );
}

export default App;
