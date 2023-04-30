import React from 'react';

const Card = ({ children, hover, cls }) => {
  return (
    <div
      className={`${cls} bg-white rounded-lg my-4 transition box-shadow ${
        hover && 'hover:scale-95'
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
