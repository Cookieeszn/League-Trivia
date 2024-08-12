import "./statBar.css";

const StatBar = ({
  currentQuestion,
  totalQuestions,
  correctQuestions,
  incorrectQuestions,
  points,
}) => {
  return (
    <div className="statBar">
      <p>
        Question: {currentQuestion}/{totalQuestions}
      </p>
      <p>Correct: {correctQuestions}</p>
      <p>Incorrect: {incorrectQuestions}</p>
      <p>Points: {points}</p>
    </div>
  );
};

export default StatBar;
