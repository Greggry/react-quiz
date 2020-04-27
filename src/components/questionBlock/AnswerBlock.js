import React from 'react';

const AnswerBlock = ({answer1, answer2, answer3, answer4, handleClick}) => (
  <ul>
    <li>
      <button onClick={() => handleClick(answer1)}>{answer1}</button>
    </li>
    <li>
      <button onClick={() => handleClick(answer2)}>{answer2}</button>
    </li>
    <li>
      <button onClick={() => handleClick(answer3)}>{answer3}</button>
    </li>
    <li>
      <button onClick={() => handleClick(answer4)}>{answer4}</button>
    </li>
  </ul>
);

export default AnswerBlock;
