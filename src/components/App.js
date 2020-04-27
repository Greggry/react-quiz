import React, { Component } from 'react';

import Title from './title/Title'
import QuestionBlock from './questionBlock/QuestionBlock'
import StatisticsBlock from './statisticsBlock/StatisticsBlock'
import YouWon from './youWon/YouWon'
import Separator from './separator/Separator.js'

import quiz from '../quiz.js'

import './appStyles.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: 0, // count from 0, because we iterate through an array
      correctAnswers: 0,
      wrongAnswers: 0,
      gameEnded: false,
      blinkClass: '' // will be set to blink-${color}
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  // check if correct and advance to next question or end the quiz
  handleClick(answer) {
    const {currentQuestion} = this.state;

    if (quiz[currentQuestion].correct === answer) { // correct answer

      this.blink('green');

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
        return {correctAnswers: prevState.correctAnswers + 1}
      });
    } else {
      this.blink('red');
      // increment wrongAnswers
      this.setState(prevState => {
        return {
          wrongAnswers: prevState.wrongAnswers + 1
        }
      });
    }
  }

  blink(color) {
    const colorClass = 'blink-' + color;

    this.setState({blinkClass: colorClass});

    setTimeout(() => {
      this.setState({blinkClass: ''});
    }, 150); // removes the class after 0.15 seconds
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
      <div className={`app ${this.state.blinkClass}`}>
        <Title className="title" />

        {gameEnded
          ? null
          : <div>
              <Separator />
              <QuestionBlock questionData={quiz[currentQuestion]} handleClick={this.handleClick} />
              <Separator />
            </div>
        }

        <StatisticsBlock statistics={this.state} />

        {gameEnded && <YouWon handleReset={this.handleReset}/>}
      </div>
    );
  }

}

export default App;
