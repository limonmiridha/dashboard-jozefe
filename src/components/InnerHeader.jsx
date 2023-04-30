import Image from 'next/image';
import React from 'react';

const InnerHeader = ({ pageIcon, headerText }) => {
  return (
    <div className="flex items-center gap-5 pb-3">
      <Image src={pageIcon} width={40} height={40} alt="property" />
      <p className="md:text-xl font-semibold">{headerText}</p>
      <Image
        src="/images/property/exclaim.svg"
        width={24}
        height={24}
        className="-mt-5 "
        alt="property"
      />
    </div>
  );
};

export default InnerHeader;
