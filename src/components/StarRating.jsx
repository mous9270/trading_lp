import React from 'react';

const StarRating = ({ stars }) => {
  const Star = ({ filled }) => (
    <svg
      viewBox="0 0 24 24"
      width="10"
      height="10"
      className="inline-block"
    >
      <path
        fill={filled ? "#22c55e" : "none"}
        stroke={filled ? "#22c55e" : "#22c55e"}
        strokeWidth="2"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );

  return (
    <div className="flex gap-0.4">
      {stars.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  );
};

export default StarRating;