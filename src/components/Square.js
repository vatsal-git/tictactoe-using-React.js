import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'o' ? 'text-orange' : 'text-green'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
