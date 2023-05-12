import React, { useState } from 'react';
import Star from './Star';

function RatingSystem() {
  const [rating, setRating] = useState(0);

  const handleStarSelect = (selectedRating) => {
    setRating(selectedRating);
  };

  const stars = Array(5)
    .fill()
    .map((_, index) => (
      <Star
        key={index}
        selected={index < rating}
        onSelect={() => handleStarSelect(index + 1)}
      />
    ));

  const word = rating === 1 ? 'Worse' : rating === 2 ? 'Not good' : rating === 3 ? 'Average' : rating === 4 ? 'Very good' : rating === 5 ? 'Excellent' : '';

  return (
    <div>
      <div  className='flex'>{stars}</div>
      <h2>{word}</h2>
    </div>
  );
}

export default RatingSystem;
