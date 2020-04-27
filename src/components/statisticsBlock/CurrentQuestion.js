import React from 'react';

const CurrentQuestion = ({questionNumber}) => (
  <div>
    Question: {questionNumber + 1 /* add one, because we count this prop from 0*/}
  </div>
);

export default CurrentQuestion;
