import InfoCard from '@/components/InfoCard';
import React from 'react';
import { rentalDashboardCards } from '@/data/CardsData';
import GlobalDataTable from '@/components/GlobalDataTable';
import { rentalColumn, rentalData } from '@/data/TableData';
import CurrencyBtn from '@/components/CurrencyBtn';
import Image from 'next/image';
import Charts from '@/components/Charts';

const rentalDashboard = () => {
  return (
    <div className="pb-12">
      <div className="mb-6">
        <InfoCard cards={rentalDashboardCards} />
      </div>
      <GlobalDataTable
        data={rentalData}
        column={rentalColumn}
        tableHeader={false}
      />
      <div className="bg-white rounded-2xl p-4">
        <div className="justify-betweens border-b-2 pb-3">
          <div>
            <p>Total Rent Income (Total Money Earned)</p>
          </div>
          <CurrencyBtn />
        </div>
        <div className="justify-centers gap-3 my-4">
          <p className="text-5xl font-bold">€0</p>
          <span>
            <Image
              src="/images/rental/upArrow.png"
              width={15}
              height={15}
              alt=""
            />
          </span>
        </div>
        <div className="grid grid-cols-4  gap-4 p-4">
          <div className="flexs gap-3 rounded-lg p-4 bg-slate-100">
            <Image
              src="/images/rental/addCircle.png"
              width={40}
              height={40}
              className="bg-slate-500 p-2 rounded-full"
              alt=""
            />
            <p>Create Rental Invoice</p>
          </div>
          <div className="flexs gap-3 rounded-lg p-4 bg-slate-100">
            <Image
              src="/images/rental/addCircle.png"
              width={40}
              height={40}
              className="bg-slate-500 p-2 rounded-full"
              alt=""
            />
            <p>Create Rental Contract</p>
          </div>
          <div className="flexs gap-3 rounded-lg p-4 bg-slate-100">
            <Image
              src="/images/rental/sendRental.png"
              width={40}
              height={40}
              className="bg-slate-500 p-2 rounded-full"
              alt=""
            />
            <p>Send Rental Invoice</p>
          </div>
          <div className="flexs gap-3 rounded-lg p-4 bg-slate-100">
            <Image
              src="/images/rental/sendRental.png"
              width={40}
              height={40}
              className="bg-slate-500 p-2 rounded-full"
              alt=""
            />
            <p>Send Reminder Contract</p>
          </div>
          <div className="flexs gap-3 rounded-lg p-4 bg-slate-100">
            <Image
              src="/images/rental/clock.png"
              width={40}
              height={40}
              className="bg-slate-500 p-2 rounded-full"
              alt=""
            />
            <p>Send Reminder Rental Invoice</p>
          </div>
          <div className="flexs gap-3 rounded-lg p-4 bg-slate-100">
            <Image
              src="/images/rental/taskList.png"
              width={40}
              height={40}
              className="bg-slate-500 p-2 rounded-full"
              alt=""
            />
            <p>Show Contract List</p>
          </div>
          <div className="flexs gap-3 rounded-lg p-4 bg-slate-100">
            <Image
              src="/images/rental/cross.png"
              width={40}
              height={40}
              className="bg-slate-500 p-2 rounded-full"
              alt=""
            />
            <p>Close the Tenant</p>
          </div>
        </div>
      </div>
      <div>
        <Charts />
      </div>
    </div>
  );
};

export default rentalDashboard;
