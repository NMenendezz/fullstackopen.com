import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.filter((person) => person.name === personObject.name).length > 0
    ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleChange = (event) => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchName} onChange={handleChange} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>
        <Persons
          persons={persons}
          searchName={searchName}
          setPersons={setPersons}
        />
      </ul>
    </div>
  );
};

export default App;
