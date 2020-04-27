import React from 'react';

const AnswerBlock = ({answer1, answer2, answer3, answer4, handleClick}) => (
  <ul>
    <li className="answer" onClick={() => handleClick(answer1)}>{answer1}</li>
    <li className="answer" onClick={() => handleClick(answer2)}>{answer2}</li>
    <li className="answer" onClick={() => handleClick(answer3)}>{answer3}</li>
    <li className="answer" onClick={() => handleClick(answer4)}>{answer4}</li>
  </ul>
);

export default AnswerBlock;
