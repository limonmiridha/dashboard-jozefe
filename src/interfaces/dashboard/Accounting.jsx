import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CurrencyBtn from '../../components/CurrencyBtn';

const data = [
  {
    title: 'Total Members Units',
    bg: '#DAD7FE',
    isPlus: '/images/plus.svg',
  },
  {
    title: 'Total Tresory',
    bg: '#FED7ED',
    isPlus: '/images/plus.svg',
  },
  {
    title: 'Total Cashflow',
    bg: '#B1EAFF',
  },
  {
    title: 'Total Fundraising',
    bg: '#D7FEE7',
  },
  {
    title: 'Rent',
    bg: '#FFF29C',
  },
];

const Accounting = () => {
  return (
    <div className="bg-white shadow-md  my-4 rounded-lg">
      <div className="flex items-center p-4 gap-4 border-b">
        <Image src="/images/accounting.svg" width={34} height={34} />
        <h2 className="text-slate-500 font-semibold">Accounting</h2>
      </div>
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, i) => (
          <div className="bg-slate-50 rounded-lg p-3" key={i}>
            <div className="flex justify-between items-center  ">
              <span
                style={{ background: item.bg }}
                className="rounded-md p-1 text-sm text-gray-600"
              >
                {item.title}
              </span>
              <div className="flex items-center gap-2">
                <CurrencyBtn />
                {item.isPlus && (
                  <Image src={item.isPlus} width={32} height={32} />
                )}
              </div>
            </div>
            <div className="py-3 border-b">
              <div className="flex justify-between">
                <p className="font-semibold text-slate-500">Pending</p>
                <span className=" text-red-500">120.00</span>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-slate-500">Payed</p>
                <span className=" text-green-400">120.00</span>
              </div>
            </div>
            <button className="flex items-center gap-2 font-semibold text-slate-500 my-2 mx-auto">
              See More <MdKeyboardArrowRight className="text-xl" />
            </button>
          </div>
        ))}
        <div className="bg-slate-50 rounded-lg p-3">
          <div className="flex justify-between items-center  ">
            <span className="rounded-md p-1 text-sm bg-[#FFAFAF] text-gray-600">
              Sub Total
            </span>
            <div className="flex items-center gap-2">
              <CurrencyBtn />
            </div>
          </div>
          <div className="my-3">
            <div className="flex justify-between">
              <p className="font-semibold text-slate-500">Cashflow</p>
              <span className=" text-green-400">120.00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-slate-500">Treasory</p>
              <span className=" text-green-400">120.00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-slate-500">Fundraising</p>
              <span className=" text-green-400">120.00</span>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-slate-500">Rent</p>
              <span className=" text-green-400">120.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounting;
