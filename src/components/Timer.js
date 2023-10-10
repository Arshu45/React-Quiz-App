import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timerDisplay = `${String(mins).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "Tick" }), 2000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return <div className="timer">{timerDisplay}</div>;
}

export default Timer;
