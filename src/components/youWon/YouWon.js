import React from 'react';

const YouWon = ({handleReset}) => (
  <div>
    <p>You won, congratulations!</p>
    <button className="btn" onClick={handleReset}>Reset</button>
  </div>
);

export default YouWon;
