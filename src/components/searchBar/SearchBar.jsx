import React from "react"


const SearchBar = () => {
  return (
    <div className="flexCenter search-bar">
      <input
        placeholder="Search by title/city/country..."
        type="text"
      />
      <button className="button">Search</button>
    </div>
  );
};

export default SearchBar;