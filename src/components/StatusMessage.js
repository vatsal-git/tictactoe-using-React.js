import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2 className="status-message">
      {winner && (
        <>
          Winner is {''}
          <span className={winner == 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next is {''}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
            {''}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          Tie <span className="text-Green">X </span>and
          <span className="text-orange">O </span>
        </>
      )}
    </h2>
  );
};

export default StatusMessage;
