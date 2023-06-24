import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";

const App = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const hook = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  };

  useEffect(hook, []);

  const handleCountrySearch = (event) => setSearchCountry(event.target.value);

  /* const handleCountrySelect = (name) => setSearchCountry(name); */

  return (
    <div>
      <div>find countries</div>
      <input onChange={handleCountrySearch} />
      <Country
        countries={countries}
        searchCountry={searchCountry}
        /* handleCountrySelect={handleCountrySelect} */
      />
    </div>
  );
};

export default App;
