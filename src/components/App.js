import React, { Component } from 'react';

import Title from './Title'
import QuestionBlock from './QuestionBlock'
import StatisticsBlock from './StatisticsBlock'

import quiz from '../quiz.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: 0, // count from 0, because we iterate through an array
      correctAnswers: 0,
      wrongAnswers: 0
    };

    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion() {
    if (this.state.currentQuestion + 1 < quiz.length) {
      this.setState(prevState => {
        return {currentQuestion: prevState.currentQuestion + 1}
      }, console.log(this.state.currentQuestion, quiz.length))
    } else {
      console.log("you won!");
    }
    console.log(this.state.currentQuestion);
  }

  render() {
    return (
      <div>
        <Title />
        <QuestionBlock
          questionData={quiz[this.state.currentQuestion]}
          nextQuestion={this.nextQuestion} />
        <StatisticsBlock />
      </div>
    );
  }

}

export default App;
