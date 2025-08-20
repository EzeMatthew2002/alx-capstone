
import React from "react";
 function QuestionCard({
  question, answers, currentIndex, totalQuestions, onAnswerSelect
}) {
  return (
    <div>
      <h2>Question {currentIndex + 1} of {totalQuestions}</h2>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>

      {answers.map((ans, idx) => (
        <button
          key={idx}
          onClick={() => onAnswerSelect(ans)}
          dangerouslySetInnerHTML={{ __html: ans }}
        />
      ))}
    </div>
  );
}
export default QuestionCard
