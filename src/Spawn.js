import React from 'react';

const Spawn = ({ matrix, onClick }) => {
  return (
    <div className='spawn-container'>
      <ol>
        {matrix.map((el, i) => (
          <li>
            <button onClick={() => onClick(i)}>
              {i === 0 ? `Begining` : `Move to #${i}`}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Spawn;
