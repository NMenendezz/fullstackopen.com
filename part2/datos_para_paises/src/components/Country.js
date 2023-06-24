import Button from "./Button";

const Country = ({ country }) => {
  if (country.length > 1) {
    return (
      <div>
        {country.map((e) => {
          return (
          <div key={e.name.common}>
            {e.name.common}
            <Button countryShow={e} />
          </div>);
        })}
      </div>
    );
  }
  return (
    <div>
      <h2>{country.name.common}</h2>
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
};

export default Country;
