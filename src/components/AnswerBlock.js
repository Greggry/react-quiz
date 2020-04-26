import React from 'react';

const AnswerBlock = (props) => (
  <ul>
    <li>
      <button onClick={() => props.handleClick(props.answer1)}>{props.answer1}</button>
    </li>
    <li>
      <button onClick={() => props.handleClick(props.answer2)}>{props.answer2}</button>
    </li>
    <li>
      <button onClick={() => props.handleClick(props.answer3)}>{props.answer3}</button>
    </li>
    <li>
      <button onClick={() => props.handleClick(props.answer4)}>{props.answer4}</button>
    </li>
  </ul>
);

export default AnswerBlock;
