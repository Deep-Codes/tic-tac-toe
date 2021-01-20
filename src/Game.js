import React from 'react';
import Square from './Square';

const Game = ({ square, clickSquare }) => {
  return (
    <div className='square-container'>
      {square.map((el, i) => (
        <Square index={i} click={clickSquare} value={el} />
      ))}
    </div>
  );
};

export default Game;
