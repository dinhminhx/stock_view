import React, { useState } from "react";
import Stock from "./components/Stock";
import Navbar from "./components/Navbar";
import SearchContext from "./components/SearchContext";
import "./App.css";

const App = () => {
  const [searchSymbol, setSearchSymbol] = useState("");

  return (
    <SearchContext.Provider value={{ searchSymbol, setSearchSymbol }}>
      <Navbar />
      <div className='main-container'>
        <Stock />
      </div>
    </SearchContext.Provider>
  );
};

export default App;
