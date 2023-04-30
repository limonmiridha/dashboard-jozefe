import React from 'react';

const Rightbar = ({ mobile, children }) => {
  return (
    <div className={`${mobile ? 'block' : 'hidden'} xl:block`}>
      <div className="p-4 bg-white">{children}</div>
    </div>
  );
};

export default Rightbar;
