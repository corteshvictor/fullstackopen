const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);

const Persons = ({ persons = [] }) =>
  persons.map((person) => <Person key={person.name} {...person} />);

export default Persons;
