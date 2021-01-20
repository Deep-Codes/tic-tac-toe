import './App.css';
import React, { useState } from 'react';
import Game from './Game';
import Spawn from './Spawn';

const App = () => {
  const base = Array(9).fill(null);
  const [matrix, setMatrix] = useState([base]);
  const [count, setCount] = useState(0);
  const [isX, setIsX] = useState(true);
  const [win, setWin] = useState(false);

  const clickSquare = (i) => {
    if (!win) {
      const test = matrix[count];
      const currSquare = [...test];
      if (currSquare[i] === null) {
        currSquare[i] = isX ? 'X' : 'O';
        setMatrix([...matrix, currSquare]);
        setCount(matrix.length);
        setIsX(!isX);
        if (isWinning(currSquare)) {
          setWin(true);
        } else {
          setWin(false);
        }
      }
    }
  };
  const goToOldMatrix = (i) => {
    setCount(i);
    setIsX(count % 2 === 0);
  };
  const resetGame = () => {
    setMatrix([Array(9).fill(null)]);
    setCount(0);
    setIsX(true);
    setWin(false);
  };
  return (
    <div className='App'>
      <h1>Tic Tac Toe </h1>
      {win ? <h2>Player {isX ? 'O' : 'X'} has Won !! </h2> : ''}
      <h3>It's {isX ? 'X' : 'O'} Chance</h3>
      <Game square={matrix[count]} clickSquare={clickSquare} />
      <Spawn matrix={matrix} onClick={goToOldMatrix} />
      <button onClick={() => resetGame()}>Reset Game</button>
    </div>
  );
};

export const winArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const isWinning = (matrix) => {
  for (let i = 0; i < winArr.length; i++) {
    const j = winArr[i];
    if (matrix[j[0]] && matrix[j[1]] && matrix[j[2]]) {
      if (
        matrix[j[0]] === matrix[j[1]] &&
        matrix[j[1]] === matrix[j[2]] &&
        matrix[j[0]] === matrix[j[2]]
      ) {
        return true;
      }
    }
  }
};

export default App;
