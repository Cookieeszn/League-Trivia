import "./gameOver.css";

const GameOver = ({ correctAnswers, incorrectAnswers, points }) => {
  return (
    <div className="gameOver">
      <span className="title">Your stats</span>
      <div className="stats">
        <span>
          Correct: {correctAnswers}
          <img src="/checkmark.png" alt="" />
        </span>
        <span>
          Incorrect: {incorrectAnswers}
          <img src="/wrong.png" alt="" />
        </span>
        <span>
          Points: {points}
          <img src="/points.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default GameOver;
