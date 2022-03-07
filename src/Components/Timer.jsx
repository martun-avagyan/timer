import React, { useState } from "react";
import Buttons from "./Buttons/Buttons";
import "./Timer.css";

const Timer = () => {
  const [state, setState] = useState({
    time: 0,
    isPlay: false,
  });

  const [timerID, setTimerID] = useState(null);

  const handleInput = (value) => {
    setState({ ...state, time: value });
  };

  const handlePlay = function () {
    setState({ ...state, isPlay: true });

    const id = setInterval(() => {
      setState(({ time, ...prev }) => ({ ...prev, time: time - 1 }));
    }, 1000);

    setTimerID(id);
  };

  const handleStop = () => {
    setState({ ...state, isPlay: false });

    clearInterval(timerID);
  };
  const handleReset = () => {
    setState({ isPlay: false, time: 0 });
    clearInterval(timerID);

    console.log(state);
  };
  return (
    <div className="timerWrapper">
      <h1>Timer</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="timeInput">Enter Time</label>
        <input
          type="number"
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          id="timeInput"
        />
        <Buttons
          handleReset={handleReset}
          handlePlay={handlePlay}
          handleStop={handleStop}
          isPlay={state.isPlay}
        />
      </form>
      <h1>{state.time}</h1>
    </div>
  );
};

export default Timer;
