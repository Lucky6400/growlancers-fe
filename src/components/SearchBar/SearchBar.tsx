import React from "react";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
