import GlobalDataTable from '@/components/GlobalDataTable';
import { membersPaymentData, membersPaymentColumn } from '@/data/TableData';
import Image from 'next/image';
import React, { useContext } from 'react';

const membersPayment = () => {
 
  return (
    <>
      <div className="flex items-center gap-5 pb-3">
        <Image
          src="/images/accounting/coin-money.svg"
          width={40}
          height={40}
          alt="property"
        />
        <p className="text-xl font-semibold">
          In this page you can confirm the payment of your members or tenants.
        </p>
        <Image
          src="/images/property/exclaim.svg"
          width={24}
          height={24}
          className="-mt-5 "
          alt="property"
        />
      </div>

      <div className="bg-white rounded-lg my-4">
        <GlobalDataTable
          data={membersPaymentData}
          column={membersPaymentColumn}
          tableHeader={false}
        />
      </div>
    </>
  );
};

export default membersPayment;
