import React from "react";
import "../SearchBar/SearchBar.css";
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function SearchBar({ enterKeyPressed, handleUnitsClick }) {
  return (
    <div className="section section__inputs">
      <input
        onKeyDown={enterKeyPressed}
        type="text"
        name="city"
        className="myInputStyles"
        placeholder="Search for city ...."
      />
      <UilSearch className="uil-search" size={25} />
      <UilLocationPoint className="uil-search" size={25} />

      <button
        name="metric"
        style={{
          fontSize: "1.25rem",
          color: '#555',
          fontWeight: 300,
          transition: "all 0.3s ease-out",
        }}
      >
        °C
      </button>
      <p>|</p>
      <button
        name="imperial"
        style={{
          fontSize: "1.25rem",
          color: '#555',
          fontWeight: 300,
          transition: "all 0.3s ease-out",
        }}
      >
        °F
      </button>
    </div>
  );
}

export default SearchBar;
