import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => (
  <tr>
    <td> {text}</td>
    <td>
      {value} {text === "positive" && "%"}
    </td>
  </tr>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  /* Una sola funcion utilizando el evento para tomar el texto y actualizar el estado
  const handleClick = (event) => {
    const text = event.target.innerText;

    switch (text) {
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;

      default:
        setGood(good + 1);
        break;
    }
  };
  */

  let total = good + neutral + bad;
  let average = total ? (good - bad) / total : 0;
  let positive = total ? (good / total) * 100 : 0;

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      {total ? (
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
