import React from 'react';

const Star = ({ filled, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer', fontSize: '2em', color: filled ? 'gold' : 'gray' }} className='mx-2'>
      {filled ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i>}
    </span>
  );
};

export default Star;