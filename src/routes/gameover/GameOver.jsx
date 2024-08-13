import "./gameOver.css";

const GameOver = ({ correctAnswers, incorrectAnswers, points }) => {
  return (
    <div className="gameOver">
      <div className="title">
        {points > 60 ? (
          <span className="win">You Won!</span>
        ) : (
          <span className="lose">You Lost!</span>
        )}
        <hr />
        <span>Your Stats</span>
      </div>
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
        <button
          onClick={() => window.location.reload()}
          className={points > 60 ? "button-win" : "button-lose"}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
