import React from "react";

const Persons = ({ persons, searchName, handleDelete }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button id={person.id} onClick={handleDelete}>
            delete
          </button>
        </li>
      ))}
    </>
  );
};

export default Persons;
