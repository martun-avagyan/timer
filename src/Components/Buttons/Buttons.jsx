const Buttons = ({ handlePlay, isPlay, handleStop, handleReset }) => {
  //props.handleplay

  return (
    <>
      {isPlay ? (
        <button onClick={handleStop}>Pause</button>
      ) : (
        <button onClick={handlePlay}>Start</button>
      )}

      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Buttons;
