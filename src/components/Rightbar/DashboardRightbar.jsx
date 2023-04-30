import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import CurrencyBtn from '../CurrencyBtn';
import Calendar from './Calendar';
import CircularProgressBar from '../CircularProgressBar';
import Image from 'next/image';
import { BsThreeDots } from 'react-icons/bs';
import A from '../../../public/images/a.svg';
import B from '../../../public/images/sidebar/property.png';
import C from '../../../public/images/c.svg';
import D from '../../../public/images/d.svg';
import Card from '../GlobalCard';

const DashboardRightbar = ({ mobile }) => {
  const title = (text) => (
    <h1 className="my-3 text-lg font-semibold">{text}</h1>
  );
  return (
    <div>
      {/* overview */}
      {title('Overview')}

      <Card cls="px-6 py-6">
        <h2 className="text-lg font-bold ">27 May 2023</h2>
        <p className=" text-[#82858E] text-sm">Next payment date</p>
        <RightbarText text1="Tasks Waiting" text2="3" />
        <div className="flex items-center gap-2 text-blue-400">
          <a href="/">View all Tasks </a>
          <AiOutlineArrowRight />
        </div>
        <h2 className=" text-[#7D7D7D] mt-4">Payments Waiting</h2>
        <RightbarText text1="Member Units" text2="3 Units" />
        <RightbarText
          text1="Total Amount Pending"
          text2="233,254"
          currencyBtn
        />
      </Card>
      {title('My Calendar')}

      {/* calendar */}

      <Calendar />

      <div className="p-3 mt-4 bg-white rounded-xl box-shadow">
        <div className="">
          <CurrencyBtn />
        </div>
        <div className="flex items-center gap-3 -mt-3">
          <Image src="/images/network.svg" width={50} height={50} alt="" />

          <div>
            <p className=" text-[14px] text-[#82858E]">Total Rent Income</p>
            <div className="flex items-center gap-2">
              <h2 className=" text-2xl font-bold text-[#000]">200,000</h2>
              <Image
                src="/images/growChart.svg"
                width={14}
                height={14}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {title('Total Cash Flow')}
      <div className="p-3 bg-white rounded-lg box-shadow">
        <CurrencyBtn />

        <div className="justify-centers gap-4 p-3 relative">
          <div className="w-24">
            {/* progress bar circle */}
            <CircularProgressBar
              pathColor="#0DDFA4"
              trailColor="#E5FEF4"
              textColor="#0DDFA4"
            />

            <div className="mt-3 text-center text-sm md:text-base">
              <h3>Cash In</h3>
              <h3>20,000</h3>
            </div>
          </div>

          <h2 className="-translate-y-1/2">VS</h2>

          <div className="w-24">
            {/* progress bar circle */}
            <CircularProgressBar
              pathColor="#FD717A"
              trailColor="#FEE5E5"
              textColor="#FD717A"
            />

            <div className="mt-3 text-center text-sm md:text-base">
              <h3>Cash Out</h3>
              <h3>20,000</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Current Balance */}
      <div className="p-5 bg-white rounded-xl box-shadow mt-4">
        <div className="bg-balance rounded-xl drop-shadow-lg p-3 my-3 bg-gradient-to-r from-[#4764FF] to-[#747db3] py-[10px] px-[15px] ">
          <div class="absolute inset-0 rounded-xl bg-blue-600 opacity-80 z-10"></div>
          <div className="flex items-center justify-between relative z-20">
            <p className="text-sm text-white">Current Balance</p>
            <div className="flex items-center justify-between gap-2">
              <CurrencyBtn activeBg="bg-white" />
              <BsThreeDots className="text-white cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-between relative z-20">
            <h3 className="text-lg font-bold text-white">200,000</h3>
            <Image
              src="/images/wave.png"
              width={70}
              height={70}
              className="pb-2 mt-3"
              alt="wave"
            />
          </div>
        </div>
        <p className=" text-[#82858E] mt-4 text-[16px] font-semibold">
          Latest Transactions
        </p>
        <Transactions
          icon={A}
          title1="Members Payment"
          title2="Today, 19:21 John Doe"
          title3="+154.50"
          title4="in"
          color="text-[#0DDFA4]"
        />
        <Transactions
          icon={B}
          title1="Property Payment"
          title2="23, Jun, 13:06"
          title3="+454.50"
          title4="out"
          color="text-[#FF5762]"
        />
        <Transactions
          icon={C}
          title1="Suppliers Payment"
          title2="03, July, 3:06"
          title3="+154.50"
          title4="out"
          color="text-[#FF5762]"
        />
        <Transactions
          icon={D}
          title1="Other Payment"
          title2="03, July, 3:06"
          title3="+154.50"
          title4="out"
          color="text-[#FF5762]"
        />

        <div className="flex items-center justify-center gap-2 text-[16px] text-blue-400">
          <a href="/">See all Trasactions</a>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
};

export default DashboardRightbar;

export const RightbarText = ({ text1, text2, currencyBtn }) => {
  return (
    <div className="flex items-center py-2 gap-x-2">
      {/* <div className=" w-1 h-10 bg-[#4318FF] rounded-lg"></div> */}
      <div className="border-l-4 border-blue-600">
        <div className="flex items-center justify-between gap-2">
          <h3 className="ml-3 text-sm font-semibold">{text1}</h3>
          {currencyBtn && <CurrencyBtn />}
        </div>
        <p className="text-[#82858E] text-sm ml-3">{text2}</p>
      </div>
    </div>
  );
};

const Transactions = ({ icon, title1, title2, title3, title4, color }) => {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex items-center gap-3">
        <Image src={icon} width={28} height={28} alt="img" />
        <div>
          <p className=" text-[16px] text-[#000] font-semibold">{title1}</p>
          <p className=" text-[13px] text-[#A3AED0]">{title2}</p>
        </div>
      </div>
      <div className={`${color}`}>
        <p className=" text-[16px]">{title3}</p>
        <p className=" text-[13px] flex justify-end">{title4}</p>
      </div>
    </div>
  );
};
