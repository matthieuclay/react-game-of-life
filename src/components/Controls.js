function Controls({ shuffle, playing, clear, next, stop, play }) {
  return (
    <div className="controls">
      <button onClick={shuffle} disabled={playing}>
        Shuffle
      </button>
      <button onClick={clear}>Clear</button>
      <button onClick={next}>Next</button>
      {playing ? (
        <button onClick={stop}>Stop</button>
      ) : (
        <button onClick={play}>Play</button>
      )}
    </div>
  );
}

export default Controls;
