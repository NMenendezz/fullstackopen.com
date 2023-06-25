import React from "react";

const Person = ({ person, handleDelete }) => {
  return (
    <li>
      {person.name} {person.number} <button id={person.id} onClick={handleDelete}>delete</button>
    </li>
  );
};

export default Person;
