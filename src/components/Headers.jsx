import Image from 'next/image';
import React from 'react';

export const TitleHeader = ({ pageIcon, headerText }) => {
  return (
    <div className="flex items-center gap-4 pb-3">
      <Image src={pageIcon} width={30} height={30} alt="property" />
      <p className="md:text-xl font-semibold">{headerText}</p>
      <Image
        src="/images/property/exclaim.svg"
        width={24}
        height={24}
        className="-mt-4"
        alt="property"
      />
    </div>
  );
};
export const InnerHeader = ({ children }) => {
  return <h3 className="text-lg mb-3 font-semibold">{children}</h3>;
};
