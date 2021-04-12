import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const handleClickNextAnecdotes = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleClickVote = () => {
    const copyVote = [...vote];
    copyVote[selected] += 1;
    setVote(copyVote);
  };

  const max = Math.max(...vote);
  let positionsMostVotes = [];
  for (let i = 0; i <= vote.length; i++) {
    if (vote[i] === max) positionsMostVotes.push(i);
  }

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <p>
        <button onClick={handleClickVote}>vote</button>
        <button onClick={handleClickNextAnecdotes}>Next anecdotes</button>
      </p>
      <h1>Anecdote(s) whith most votes</h1>
      {max ? (
        positionsMostVotes.map((moreVote) => {
          return (
            <div key={moreVote}>
              <p>{anecdotes[moreVote]}</p>
              <p>has {max} votes</p>
            </div>
          );
        })
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
