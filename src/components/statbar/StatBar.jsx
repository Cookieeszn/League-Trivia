import "./statBar.css";

const StatBar = ({
  currentQuestion,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  points,
}) => {
  return (
    <div className="statBar">
      <p>
        Question: {currentQuestion}/{totalQuestions}
      </p>
      <p>Correct: {correctAnswers}</p>
      <p>Incorrect: {incorrectAnswers}</p>
      <p>Points: {points}</p>
    </div>
  );
};

export default StatBar;
