import React from 'react';

function SearchBar({ enterKeyPressed, handleUnitsClick }) {
  return (
    <div className="section section__inputs">
      <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City ..." />
      <button onClick={handleUnitsClick}>°F</button>
    </div>
  );
}

export default SearchBar;