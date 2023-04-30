import SelectInput from '@/components/SelectInput';
import Image from 'next/image';
import React, { useContext } from 'react';
import { InputImg } from '../property';
import FileUploader from '@/components/FileUploader';
import { membersColumn, membersData } from '@/data/TableData';
import GlobalDataTable from '@/components/GlobalDataTable';
const members = [
  {
    value: 'Property Role',
    label: 'Property Role',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'Owner',
    label: 'Owner',
  },
  {
    value: 'Company',
    label: 'Company',
  },
];
const membersInvoice = () => {
  
  return (
    <>
      <div className="flex items-center gap-5 pb-3">
        <Image
          src="/images/accounting/coin-money.svg"
          width={40}
          height={40}
          alt="property"
        />
        <p className="md:text-xl font-semibold">
          Here you can create a private bill for your tenant or members, which
          will not be in the common bills.
        </p>
        <Image
          src="/images/property/exclaim.svg"
          width={24}
          height={24}
          className="-mt-5 "
          alt="property"
        />
      </div>
      <div className="bg-white p-4 rounded-lg">
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
          <SelectInput data={members} />
          <InputImg name="Date" type="date" />
          <InputImg name="Recurring Days" type="text" />
        </div>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="font-bold">Title</p>
            <InputImg name="Invoice Name" type="text" />
          </div>
          <div>
            <p className="font-bold">Category</p>
            <SelectInput data={members} />
          </div>
          <div>
            <p className="font-bold">Amount</p>
            <InputImg name="Amount" type="text" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:w-1/2 gap-4">
          <p className="text-lg font-bold">Attach Invoice</p>
          <FileUploader />
        </div>
      </div>
      <div className="bg-white mt-4">
        <GlobalDataTable
          data={membersData}
          column={membersColumn}
          tableHeader={false}
        />
      </div>
    </>
  );
};

export default membersInvoice;
