import React, { useState } from "react";

import "./AddPerson.css";

const addPerson = (props) => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const changeNameHandler = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const changeAgeHandler = (e) => {
    setPerson({ ...person, age: e.target.value });
  };

  return (
    <div className="AddPerson">
      <input onChange={changeNameHandler} type="text"></input>
      <input onChange={changeAgeHandler} type="number"></input>
      <button onClick={() => props.personAdded(person)}>Add Person</button>
    </div>
  );
};

export default addPerson;
