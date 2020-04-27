import React, { Component } from 'react';

import Title from './title/Title'
import QuestionBlock from './questionBlock/QuestionBlock'
import StatisticsBlock from './statisticsBlock/StatisticsBlock'
import YouWon from './youWon/YouWon'

import quiz from '../quiz.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: 0, // count from 0, because we iterate through an array
      correctAnswers: 0,
      wrongAnswers: 0,
      gameEnded: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  //check if correct and advance to next question or end the quiz
  handleClick(answer) {
    const {currentQuestion} = this.state;

    if (quiz[currentQuestion].correct === answer) { // correct answer
      if (this.state.currentQuestion + 1 < quiz.length) { // if it wasn't the last question
        this.setState(prevState => {
          return {
            currentQuestion: prevState.currentQuestion + 1 // go to next question
          };
        });
      } else { // if it was the last question
        this.setState({gameEnded: true});
      }

      // increase correctAnswers
      this.setState(prevState => {
        return {
          correctAnswers: prevState.correctAnswers + 1
        }
      });
    } else {
      // increment wrongAnswers
      this.setState(prevState => {
        return {
          wrongAnswers: prevState.wrongAnswers + 1
        }
      });
    }
  }

  // reset to initial state
  handleReset() {
    this.setState({
      currentQuestion: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      gameEnded: false
    })
  }

  render() {
    const {currentQuestion, gameEnded} = this.state;

    return (
      <div>
        <Title />
        {gameEnded
          ? null
          : <QuestionBlock questionData={quiz[currentQuestion]} handleClick={this.handleClick} />
        }
        <StatisticsBlock statistics={this.state} />
        {gameEnded && <YouWon handleReset={this.handleReset}/>}
      </div>
    );
  }

}

export default App;
