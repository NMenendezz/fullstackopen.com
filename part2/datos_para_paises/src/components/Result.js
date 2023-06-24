import Country from "./Country";

const Result = ({ countries, search }) => {
  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  if (search) {
    if (filtered.length === 1) {
      return <Country country={filtered[0]} />;
    }
    if (filtered.length >= 2 && filtered.length <= 10) {
      return <Country country={filtered} />;
    }
    if (filtered.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    }
  }
};

export default Result;
