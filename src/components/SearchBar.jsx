import React from "react";

export function SearchBar (props){
  return (
    <div className="search-bar-wrapper">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      
    </div>
  );
};

