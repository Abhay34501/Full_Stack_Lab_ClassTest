import { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="card">
      <h2>Stopwatch</h2>

      <div className="stopwatch">
        {seconds} seconds
      </div>

      <div className="buttons">
        <button onClick={start}>Start</button>

        <button onClick={pause}>Pause</button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
