import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleClickNextAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleClickVotes = () => {
    const copyVote = [...votes];
    copyVote[selected] += 1;
    setVotes(copyVote);
  };

  const max = Math.max(...votes);
  let positionsMostVotes = [];
  for (const [index, vote] of votes.entries())
    vote === max && positionsMostVotes.push(index);

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <p>
        <button onClick={handleClickVotes}>vote</button>
        <button onClick={handleClickNextAnecdotes}>Next anecdotes</button>
      </p>
      <h1>Anecdote(s) whith most votes</h1>
      {max ? (
        positionsMostVotes.map((moreVote) => (
          <div key={moreVote}>
            <p>{anecdotes[moreVote]}</p>
            <p>has {max} votes</p>
          </div>
        ))
      ) : (
        <p>All anecdotes have 0 votes.</p>
      )}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
