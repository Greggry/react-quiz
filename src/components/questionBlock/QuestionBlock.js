import React from 'react';

import Question from './Question';
import AnswerBlock from './AnswerBlock';

import './questionBlockStyles.css'

const QuestionBlock = ({questionData, handleClick, handleReset}) => (
  <div>
    <Question question={questionData.question} />
    <AnswerBlock
      answer1={questionData.answer1}
      answer2={questionData.answer2}
      answer3={questionData.answer3}
      answer4={questionData.answer4}
      handleClick={handleClick}
    />
  </div>
);

export default QuestionBlock;
