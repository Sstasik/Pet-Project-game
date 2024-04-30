import React from 'react';
import './square.css';

const Square = ({ val, chooseSquare }) => {
  return (
    <div className="Square" onClick={chooseSquare}>
      {val}
    </div>
  );
};

export default Square;
