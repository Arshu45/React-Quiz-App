function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji = "";
  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "😔";
  if (percentage === 0) {
    emoji = "💀";
  } else {
    emoji = "";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        Your Scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)} %)
      </p>
      <p className="highscore">( Highscore : {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
