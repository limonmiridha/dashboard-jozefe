import React from 'react';

const Button = ({ children, cls, onClick }) => {
  return (
    <button className={`flexs gap-2 ${cls}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
