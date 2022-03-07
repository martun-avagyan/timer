const Buttons = ({ handlePlay, isPlay, handleStop }) => {
  //props.handleplay
  return (
    <>
      {}
      {isPlay ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handlePlay}>Play</button>
      )}

      <button>Reset</button>
    </>
  );
};

export default Buttons;
