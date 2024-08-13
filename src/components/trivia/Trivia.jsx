import "./trivia.css";
import { useState } from "react";

const Trivia = ({ question, onAnswerSubmit }) => {
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState(null);

  const handleChoiceSelect = (index) => {
    setSelectedChoiceIdx(index);
  };

  const handleSubmit = () => {
    if (selectedChoiceIdx !== null) {
      onAnswerSubmit(selectedChoiceIdx);
      setSelectedChoiceIdx(null);
    } else {
      alert("Select an answer");
    }
  };
  return (
    <>
      <div className="trivia">
        <div className="left">
          <h2>{question.question}</h2>
        </div>
        <div className="right">
          {question.choices.map((choice, index) => (
            <div
              key={index}
              className={`choice-box ${
                selectedChoiceIdx === index ? "selected" : ""
              }`}
              onClick={() => handleChoiceSelect(index)}
            >
              {choice}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Trivia;
