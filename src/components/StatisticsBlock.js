import React, { Component } from 'react';

import CurrentQuestion from './CurrentQuestion'
import CorrectAnswers from './CorrectAnswers'
import WrongAnswers from './WrongAnswers'

class StatisticsBlock extends Component {

  render() {
    return (
      <div>
        <CurrentQuestion questionNumber={this.props.statistics.currentQuestion} />
        <CorrectAnswers correctAnswers={this.props.statistics.correctAnswers} />
        <WrongAnswers wrongAnswers={this.props.statistics.wrongAnswers} />
      </div>
    );
  }

}

export default StatisticsBlock;
