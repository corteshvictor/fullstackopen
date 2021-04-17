import { useState } from "react";

const startCase = (value) =>
  typeof value === "string"
    ? value
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, (string) => string.toUpperCase())
    : "";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => setNewName(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formatName = startCase(newName);
    const nameExist = persons.some(({ name }) => name === formatName);
    if (nameExist) return alert(`${formatName} is already added to phonebook}`);

    setPersons([...persons, { name: formatName }]);
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" disabled={!newName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
};

export default App;
