import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <>
      <p>
        {text}: {value}
      </p>
    </>
  );
};

const All = ({ text, good, neutral, bad }) => {
  const all = good + neutral + bad;

  return (
    <>
      <p>
        {text}: {all}
      </p>
    </>
  );
};

const Average = ({ text, good, bad }) => {
  return (
    <>
      <p>
        {text}: {(good - bad) / 2}
      </p>
    </>
  );
};

const Positive = ({ text, good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <>
      <p>
        {text}: {(good / all) * 100}
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header name="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header name="statistics" />
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <All text="all" good={good} neutral={neutral} bad={bad} />
      <Average text="average" good={good} neutral={neutral} bad={bad} />
      <Positive text="positive" good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
