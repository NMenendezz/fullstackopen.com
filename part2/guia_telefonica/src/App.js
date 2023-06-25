import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, [persons]);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.filter((person) => person.name === personObject.name).length > 0
    ) {
      const message = `${newName} is already added to phonebook`;
      if (window.confirm(message)) {
        const updatePerson = persons.filter(
          (person) => person.name === newName
        );
        personService
          .update(updatePerson[0].id, personObject)
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== updatePerson.id ? person : updatedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setMessage(`${updatedPerson.name} was successfully updated`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        setMessage(`${newName} was successfully added`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
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

  const handleDelete = (event) => {
    if (window.confirm(`Delete ${persons[event.target.id - 1].name}?`)) {
      personService.remove(event.target.id).then(() => {
        setPersons(persons.filter((p) => p.id.toString() !== event.target.id));
        setMessage(
          `${persons[event.target.id - 1].name} was successfully deleted`
        );
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={error} />
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
          handleDelete={handleDelete}
        />
      </ul>
    </div>
  );
};

export default App;
