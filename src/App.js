import React, { useState } from 'react';
import Board from './components/Board.js';
import { calculateWinner } from './helper.js';
import './style/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is  ${winner} `
    : `Next is ${isXNext ? '0' : 'X'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos == position) {
          return isXNext ? '0' : 'X';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2> {message} </h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
