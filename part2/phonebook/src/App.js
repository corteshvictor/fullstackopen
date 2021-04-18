import { useState } from "react";

import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { startCase } from "./utils";
import { PHONEBOOK } from "./constants";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState(PHONEBOOK);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  // const handleSetName = (event) => setNewName(event.target.value);
  // const handleSetNumber = (event) => setNewNumber(event.target.value);
  // const handleSetSearch = (event) => setSearch(event.target.value);

  // Utilizando composición de funciones
  // función para crear diferentes funciones de "setter" para actualizar el estado
  // Set state using function composition
  const setInput = (setter) => (event) => setter(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formatName = startCase(newName);
    const nameExist = persons.some(({ name }) => name === formatName);
    if (nameExist) return alert(`${formatName} is already added to phonebook}`);

    setPersons([...persons, { name: formatName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };

  const filterPersons = (value = "") =>
    persons.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={setInput(setSearch)} />
      <h3>add a new</h3>
      <PersonForm
        handleSetName={setInput(setNewName)}
        handleSetNumber={setInput(setNewNumber)}
        name={newName}
        number={newNumber}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons persons={filterPersons(search)} />
    </div>
  );
};

export default App;
