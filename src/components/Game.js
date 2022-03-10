import { useState } from "react";
import Grid from "./Grid";
import Controls from "./Controls";
import {
  GENERATION_TIME,
  createWorld,
  nextGeneration,
  shuffle,
} from "./Settings";

function Game() {
  const [world, setWorld] = useState(createWorld);
  const [generation, setGeneration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [intervalTime, setIntervalTime] = useState();

  const changeState = (world, generation) => {
    setWorld(world);
    setGeneration(generation);
  };

  const onChange = (world) => changeState(world, generation + 1);

  const onClear = () => changeState(createWorld(), 0);

  const onShuffle = () => changeState(shuffle(world), 0);

  const onNext = () => onChange(nextGeneration(world));

  const onPlay = () => {
    setPlaying(true);
    setIntervalTime(setInterval(() => onNext(), GENERATION_TIME));
  };

  const onStop = () => {
    setPlaying(true);
    clearInterval(intervalTime);
  };

  return (
    <div>
      <Grid world={world} onChange={onChange} />
      <p>Generation: {generation}</p>
      <Controls
        clear={onClear}
        next={onNext}
        play={onPlay}
        stop={onStop}
        shuffle={onShuffle}
        playing={playing}
      />
    </div>
  );
}

export default Game;
