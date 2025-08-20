import React from "react";
function ScoreSummary({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div>
      <h1>Quiz Finished 🎉</h1>
      <p>
        You scored {score} out of {total} ({percentage}%)
      </p>
      <button onClick={onRestart}>Try Again</button>
    </div>
  );
}
export default ScoreSummary;
