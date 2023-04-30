import Image from 'next/image';
import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import Pie from './Charts/Pie';
import Bar from './Charts/Bar';
import CurrencyBtn from './CurrencyBtn';

const Charts = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-4 mt-4">
      <div className="lg:col-span-1 p-4 mb-4 lg:mb-0 bg-white rounded-lg">
        <div className="flex items-center gap-4">
          <Image src="/images/source-type.svg" width={34} height={34} />
          <h2 className="text-slate-500 font-semibold">Source Type</h2>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
            <h3 className="font-semibold">Summary</h3>
            <p className="flex items-center gap-3 mt-1 text-slate-400 text-xs">
              <AiOutlineCalendar />
              <span>From 1-6 Mar 2023</span>
            </p>
          </div>
          <CurrencyBtn />
        </div>
        <Pie data={data} width="14rem" text="$17K" fontSize={24} />
        <div className="-mt-20 space-y-2">
          <div className="flex justify-between text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#2466ff] rounded-full"></div>
              <p>Pending</p>
            </div>
            <div className="flex items-center gap-3">
              <p>2000</p>
              <span className="bg-cyan-50 w-7 h-7 rounded-full text-[10px] font-semibold text-center text-blue-500 leading-7">
                27%
              </span>
            </div>
          </div>
          <div className="flex justify-between text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#20d6ff] rounded-full"></div>
              <p>Paid</p>
            </div>
            <div className="flex items-center gap-3">
              <p>5000</p>
              <span className="bg-cyan-50 w-7 h-7 rounded-full text-[10px] font-semibold text-center text-blue-500 leading-7">
                40%
              </span>
            </div>
          </div>
          <div className="flex justify-between text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#93f4ff] rounded-full"></div>
              <p>Closed/won</p>
            </div>
            <div className="flex items-center gap-3">
              <p>10000</p>
              <span className="bg-cyan-50 w-7 h-7 rounded-full text-[10px] font-semibold text-center text-blue-500 leading-7">
                16%
              </span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-slate-500">
          <button>Manage All Source Types</button>
        </div>
      </div>
      <div className="lg:col-span-2 p-4 bg-white h-auto rounded-lg">
        <div className="flex items-center gap-4">
          <Image src="/images/source-type.svg" width={34} height={34} />
          <h2 className="text-slate-500 font-semibold">
            Outcome vs Income Inventory
          </h2>
        </div>
        <Bar />
      </div>
    </div>
  );
};

export default Charts;

const data = [
  {
    id: 'pending',
    label: 'Pending',
    value: 561,
    color: '#2466ff',
  },
  {
    id: 'paid',
    label: 'Paid',
    value: 408,
    color: '#20d6ff',
  },
  {
    id: 'Closed/won',
    label: 'Closed/won',
    value: 324,
    color: '#93f4ff',
  },
];
