import StatBar from "../../components/StatBar";
import Trivia from "../../components/trivia/Trivia";
import "./gamePage.css";
import { questions } from "./../../questions.json";
import { useState } from "react";

const GamePage = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState(0);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIdx];

  const handleAnswerSubmit = (selectedChoiceIdx) => {
    if (selectedChoiceIdx === currentQuestion.correctAnswerIdx) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswer(incorrectAnswer + 1);
    }
  };

  const nextQuestionIdx = currentQuestion + 1;
  if (nextQuestionIdx === questions.length) {
    setCurrentQuestionIdx(nextQuestionIdx);
  } else {
    //Game over logic + navigate to a results page
    // alert("Game over! Your score: " + correctAnswers);
  }

  return (
    <div className="gamePage">
      <h1>League Trivia</h1>
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswer}
        points={correctAnswers * 20}
      />
      <Trivia
        question={questions[currentQuestionIdx]}
        onAnswerSubmit={handleAnswerSubmit}
      />
    </div>
  );
};

export default GamePage;
