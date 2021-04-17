import { useState } from "react";

const PHONEBOOK = [
  { name: "Arto Hellas", number: "040-123456" },
  { name: "Ada Lovelace", number: "39-44-5323523" },
  { name: "Dan Abramov", number: "12-43-234345" },
  { name: "Mary Poppendieck", number: "39-23-6423122" },
];

const startCase = (value) =>
  typeof value === "string"
    ? value
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, (string) => string.toUpperCase())
    : "";

const App = () => {
  const [persons, setPersons] = useState(PHONEBOOK);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleSetName = (event) => setNewName(event.target.value);
  const handleSetNumber = (event) => setNewNumber(event.target.value);
  const handleSetSearch = (event) => setSearch(event.target.value);

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
      <p>
        filter shown with <input onChange={handleSetSearch} />
      </p>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleSetName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleSetNumber} />
        </div>
        <div>
          <button type="submit" disabled={!newName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons(search).map(({ name, number }) => (
        <p key={name}>
          {name} {number}
        </p>
      ))}
    </div>
  );
};

export default App;
