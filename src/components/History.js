import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              type="button"
              onClick={() => {
                moveTo(move);
              }}
              style={{ fontWeight: move == currentMove ? 'bold' : 'normal' }}
            >
              {move == 0 ? 'Start Game' : `move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
