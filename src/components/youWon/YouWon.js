import React from 'react'

const YouWon = ({handleReset}) => (
  <div>
    <p>You won, congratulations!</p>
    <button onClick={handleReset}>Reset</button>
  </div>
);

export default YouWon;
