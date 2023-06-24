import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./components/Result";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  const hook = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  };

  useEffect(hook, []);

  const handleSearch = (event) => setSearch(event.target.value);

  return (
    <div>
      <div>find countries</div>
      <input onChange={handleSearch} />
      <Result countries={countries} search={search} />
    </div>
  );
};

export default App;
