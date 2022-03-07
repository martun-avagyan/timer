import React, { useState } from "react";
import Buttons from "./Buttons/Buttons";
import "./Timer.css";

const Timer = () => {
  const [state, setState] = useState({
    time: 0,
    isPlay: false,
  });

  const handlePlay = function () {
    setState({ ...state, isPlay: true });
  };

  const handleStop = () => {
    setState({ ...state, isPlay: false });
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
        <input type="number" id="timeInput" />
        <Buttons
          handlePlay={handlePlay}
          handleStop={handleStop}
          isPlay={state.isPlay}
        />
      </form>
      <h1>Hours:Minutes:Seconds</h1>
    </div>
  );
};

export default Timer;
