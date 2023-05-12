import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({ selected, onSelect }) {
  return (
    <FaStar
      size={50}
      color={selected ? 'gold' : 'gray'}
      onClick={onSelect}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default Star;
