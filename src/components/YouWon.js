import React from 'react'

const YouWon = props => (
  <div>
    <p>You won, congratulations!</p>
    <button onClick={props.handleReset}>Reset</button>
  </div>
);

export default YouWon;
