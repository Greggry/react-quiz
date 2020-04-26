import React, { Component } from 'react';

import Title from './Title'
import QuestionBlock from './QuestionBlock'
import StatisticsBlock from './StatisticsBlock'
import YouWon from './YouWon'

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
    if (quiz[this.state.currentQuestion].correct === answer) { // correct answer
      if (this.state.currentQuestion + 1 < quiz.length) { // if it wasn't the last question
        this.setState(prevState => {
          return {
            currentQuestion: prevState.currentQuestion + 1
          };
        });
      } else { // if it was the last question
        console.log("you won!");
        this.setState({gameEnded: true});
      }

      // increase correct stat
      this.setState(prevState => {
        return {
          correctAnswers: prevState.correctAnswers + 1
        }
      });
    } else {
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
    return (
      <div>
        <Title />
        {this.state.gameEnded
          ? null
          : <QuestionBlock questionData={quiz[this.state.currentQuestion]} handleClick={this.handleClick} />
        }
        <StatisticsBlock statistics={this.state} />
        {this.state.gameEnded && <YouWon handleReset={this.handleReset}/>}
      </div>
    );
  }

}

export default App;
