const PersonForm = ({
  name,
  number,
  handleSubmit,
  handleSetName,
  handleSetNumber,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input value={name} onChange={handleSetName} />
    </div>
    <div>
      number: <input value={number} onChange={handleSetNumber} />
    </div>
    <div>
      <button type="submit" disabled={!name || !number}>
        add
      </button>
    </div>
  </form>
);

export default PersonForm;
