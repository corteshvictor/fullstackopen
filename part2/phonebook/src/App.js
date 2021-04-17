import { useState } from "react";

const startCase = (value) =>
  typeof value === "string"
    ? value
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, (string) => string.toUpperCase())
    : "";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "555-1111" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChangeName = (event) => setNewName(event.target.value);
  const handleChangeNumber = (event) => setNewNumber(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formatName = startCase(newName);
    const nameExist = persons.some(({ name }) => name === formatName);
    if (nameExist) return alert(`${formatName} is already added to phonebook}`);

    setPersons([...persons, { name: formatName, number: newNumber }]);
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit" disabled={!newName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, number }) => (
        <p key={name}>
          {name} {number}
        </p>
      ))}
    </div>
  );
};

export default App;
