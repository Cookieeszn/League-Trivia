import StatBar from "../../components/statbar/StatBar";
import Trivia from "../../components/trivia/Trivia";
import GameOver from "../gameover/GameOver";
import "./gamePage.css";
import { questions } from "./../../questions.json";
import { useState } from "react";

const GamePage = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIdx];

  const handleAnswerSubmit = (selectedChoiceIdx) => {
    if (currentQuestionIdx > totalQuestions) {
      setIsGameOver(true);
    }

    if (selectedChoiceIdx === currentQuestion.correctAnswerIdx) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setIncorrectAnswers((prev) => prev + 1);
    }

    const nextQuestionIdx = currentQuestionIdx + 1;
    if (nextQuestionIdx < totalQuestions) {
      setCurrentQuestionIdx(nextQuestionIdx);
    } else {
      setIsGameOver(true);
    }
  };

  if (isGameOver) {
    return (
      <>
        <GameOver
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          points={correctAnswers * 20}
        />
      </>
    );
  }

  return (
    <div className="gamePage">
      <h1>League Trivia</h1>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={totalQuestions + 1}
        correctAnswers={correctAnswers + 1}
        incorrectAnswers={incorrectAnswers + 1}
        points={correctAnswers * 20}
      />
      {currentQuestionIdx < totalQuestions && (
        <Trivia
          question={questions[currentQuestionIdx]}
          onAnswerSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
};

export default GamePage;
