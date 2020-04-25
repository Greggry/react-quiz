import React, { Component } from 'react';

import CurrentQuestion from './CurrentQuestion'
import CorrectAnswers from './CorrectAnswers'
import WrongAnswers from './WrongAnswers'

class StatisticsBlock extends Component {

  render() {
    return (
      <div>
        <CurrentQuestion />
        <CorrectAnswers />
        <WrongAnswers />
      </div>
    );
  }

}

export default StatisticsBlock;
