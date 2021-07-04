import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    // const message = winner
    // ? `Winner is  ${winner} `
    // : `Next is ${current.isXNext ? 'x' : 'o'}`;

    <h2>
      {winner && `Winner is  ${winner} `}
      {!winner && !noMovesLeft && `Next is ${current.isXNext ? 'x' : 'o'}`}
      {!winner && noMovesLeft && 'Tie X and O'}
    </h2>
  );
};

export default StatusMessage;
