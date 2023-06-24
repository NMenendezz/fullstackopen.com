const Country = ({ countries, searchCountry }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );

  if (searchCountry.length > 0) {
    if (filteredCountries.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      return (
        <div>
          {filteredCountries.map((country) => {
            return <div key={country.name.common}>{country.name.common}</div>;
          })}
        </div>
      );
    } else {
      const country = filteredCountries[0];
      console.log(country);
      if (country) {
        return (
          <div>
            <h2>{country?.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
              {Object.entries(country.languages).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
            <p>
            <img width="160" alt={country.flags.alt} src={country.flags.png} />
            </p>
          </div>
        );
      }
    }
  }
};

export default Country;
