import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => (
  <p>
    {text} {value} {text === "positive" && "%"}
  </p>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1);
  const handleClickNeutral = () => setNeutral(neutral + 1);
  const handleClickBad = () => setBad(bad + 1);

  let total = good + neutral + bad;
  let average = total ? (good - bad) / total : 0;
  let positive = total ? (good / total) * 100 : 0;

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text={"good"} />
      <Button handleClick={handleClickNeutral} text={"neutral"} />
      <Button handleClick={handleClickBad} text={"bad"} />

      <h1>statistics</h1>
      {total ? (
        <>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
