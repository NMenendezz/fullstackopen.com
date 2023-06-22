import Person from "./Person";

const Persons = ({ persons, searchName, setPersons }) => {
  return (
    <>
      {persons.map((person) => {
        if (searchName.length === 0 || person.name.toLowerCase().search(searchName.toLowerCase()) !== -1) {
          return (
            <Person key={person.name} person={person} setPersons={setPersons} />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Persons;
