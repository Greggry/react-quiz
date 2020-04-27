import React from 'react';

import CurrentQuestion from './CurrentQuestion'
import CorrectAnswers from './CorrectAnswers'
import WrongAnswers from './WrongAnswers'

const StatisticsBlock = ({statistics}) => (
  <div>
    <CurrentQuestion questionNumber={statistics.currentQuestion} />
    <CorrectAnswers correctAnswers={statistics.correctAnswers} />
    <WrongAnswers wrongAnswers={statistics.wrongAnswers} />
  </div>
);

export default StatisticsBlock;
