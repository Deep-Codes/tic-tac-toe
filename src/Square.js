import React from 'react';

const Square = ({ value, index, click }) => {
  return (
    <button className='square' onClick={() => click(index)}>
      {value}
    </button>
  );
};

export default Square;
