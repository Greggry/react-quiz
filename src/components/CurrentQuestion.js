import React from 'react'

const CurrentQuestion = (props) => (
  <div>
    Question: {props.questionNumber + 1 /* add one, because we count this prop from 0*/}
  </div>
);

export default CurrentQuestion;
