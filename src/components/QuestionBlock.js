import React, { Component } from 'react';

import Question from './Question'
import AnswerBlock from './AnswerBlock'

class QuestionBlock extends Component {

  constructor() {
    super();
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(answer) {
    if (this.props.questionData.correct === answer) {
      this.props.nextQuestion();
    }
  }

  render() {
    return (
      <div>
        <Question question={this.props.questionData.question} />
        <AnswerBlock
          answer1={this.props.questionData.answer1}
          answer2={this.props.questionData.answer2}
          answer3={this.props.questionData.answer3}
          answer4={this.props.questionData.answer4}
          checkAnswer={this.checkAnswer}
        />
      </div>
    );
  }

}

export default QuestionBlock;
