import { useState, useEffect } from "react";
import Button from "./Button";
import axios from "axios";

const Country = ({ country }) => {
  const [temperature, setTemperature] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [windDirection, setWindDirection] = useState("");

  const api_key = process.env.REACT_APP_API_KEY;
  const weather_api = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country.capital}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (country.capital) {
          const response = await axios.get(weather_api);
          const { temp_c, condition, wind_kph, wind_dir } =
            response.data.current;
          setTemperature(temp_c);
          setWeatherIcon(condition.icon);
          setWindSpeed(wind_kph);
          setWindDirection(wind_dir);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [country.capital, weather_api]);

  if (country.length > 1) {
    return (
      <div>
        {country.map((e) => {
          return (
            <div key={e.name.common}>
              {e.name.common}
              <Button countryShow={e} />
            </div>
          );
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
      <h3>Weather in {country.capital}</h3>
      <p>temperature: {temperature} ºC</p>
      <p>
        <img width="80" alt="" src={weatherIcon} />
      </p>
      <p>
        wind: {windSpeed} kph direction {windDirection}
      </p>
    </div>
  );
};

export default Country;
