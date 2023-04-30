import GlobalDataTable from '@/components/GlobalDataTable';
import { membersColumn, membersData } from '@/data/TableData';
import Image from 'next/image';
import React, { useContext } from 'react';

const members = () => {
  return (
    <>
      <div className="flex items-center gap-5 pb-3">
        <Image
          src="/images/members/members.svg"
          width={40}
          height={40}
          alt="property"
        />
        <p className="text-xl font-semibold">blablabla</p>
        <Image
          src="/images/property/exclaim.svg"
          width={24}
          height={24}
          className="-mt-5 "
          alt="property"
        />
      </div>
      <div className="bg-white">
        <GlobalDataTable
          data={membersData}
          column={membersColumn}
          tableHeader={false}
        />
      </div>
    </>
  );
};

export default members;
