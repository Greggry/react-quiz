import React from 'react';

import Question from './Question'
import AnswerBlock from './AnswerBlock'

const QuestionBlock = (props) => (
  <div>
    <Question question={props.questionData.question} />
    <AnswerBlock
      answer1={props.questionData.answer1}
      answer2={props.questionData.answer2}
      answer3={props.questionData.answer3}
      answer4={props.questionData.answer4}
      handleClick={props.handleClick}
      handleReset={props.handleReset}
    />
  </div>
);

export default QuestionBlock;
