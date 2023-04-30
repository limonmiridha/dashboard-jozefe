import React, { useState } from 'react';

const SelectElement = ({
  avatars,
  handleAvatarSelect,
  selectedAvatar,
  classNames,
  identifier,
}) => {
  // const [selectedAvatar, setAvatar] = useState('');
  return (
    <div className="relative">
      <div
        className={`${classNames} flex flex-wrap gap-3 w-[18.5rem] max-w-lg drop-shadow-lg shadow rounded-lg p-3 absolute top-2 right-0 bg-white z-20`}
      >
        {avatars.map((avatar, i) => (
          <div key={i} onClick={() => handleAvatarSelect(avatar)}>
            {selectedAvatar == i ? (
              <img
                key={avatar}
                src={`/images/avatar/profile-${selectedAvatar}-active.svg`}
                className="w-12"
              />
            ) : (
              <img
                key={avatar}
                src={`/images/avatar/avatar-${avatar}.svg`}
                className="w-11"
              />
            )}
          </div>
        ))}
      </div>
      <div
        className={`${identifier} w-4 h-4 bg-white drop-shadow-lg shadow border absolute top-0 right-2 rotate-45`}
      ></div>
    </div>
  );
};

export default SelectElement;
