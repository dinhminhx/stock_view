import React, { useContext, useState } from "react";
import axios from 'axios';
import SearchContext from "./SearchContext";
import "./Navbar.css";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState(''); 
  const { searchSymbol, setSearchSymbol } = useContext(SearchContext);
  const handleSearch = () => {
    setSearchSymbol(searchValue);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <nav>
      <div style={{display: 'flex', }}>
        <input
          type="text"
          placeholder="Search"
          className="navSearch"
          size="100"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        <li>
          <a href='#cash'>Cash</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#dashboard'>Dashboard</a>
        </li>
        <li>
          <i class='fa-solid fa-expand'></i>
        </li>
        <li>
          <i class='fa-solid fa-bell'></i>
        </li>
        <li>
          <i class='fa-solid fa-user'></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
