import React from 'react';
import CurrencyBtn from '../CurrencyBtn';
import Image from 'next/image';
import { BsArrowRight, BsThreeDots } from 'react-icons/bs';
import Card from '../GlobalCard';
import { rentalRightbarCards } from '@/data/CardsData';
import { AiOutlineRight } from 'react-icons/ai';

const RentalRightbar = () => {
  // const Rentalcard = rentalRightbarCards.map((cards) => cards);
  // const Rentalcards = Rentalcard.map((cardss) => cardss);
  // console.log(Rentalcards, 'rentss');
  return (
    <div>
      <div className="justify-betweens">
        <h1 className="font-semibold">Estimations</h1>
        <CurrencyBtn />
      </div>
      <div className="bg-balance rounded-xl drop-shadow-lg p-3 my-3 bg-gradient-to-r from-[#4764FF] to-[#747db3] py-[10px] px-[15px] ">
        <div class="absolute inset-0 rounded-xl bg-blue-600 opacity-80 z-10"></div>
        <div className="flex items-center justify-between relative z-20">
          <p className="text-sm text-white">Current Balance</p>
          <div className="flex items-center justify-between gap-2">
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

      <>
        {rentalRightbarCards.map((cards, i) =>
          cards.estimations?.map((card) => (
            <Card cls="py-4" key={i}>
              <div className="flexs gap-3">
                <Image
                  src="/images/network.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div>
                  <p className=" text-[14px] text-[#82858E]">{card.title}</p>
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
            </Card>
          ))
        )}
        <div className="justify-betweens font-semibold">
          <h2>Contracts</h2>
          <button className="flexs">
            See All Contracts <AiOutlineRight />
          </button>
        </div>
        {rentalRightbarCards.map((cards, i) =>
          cards.contracts?.map((card) => (
            <Card cls="py-4">
              <div className="flexs gap-3">
                <Image
                  src="/images/network.svg"
                  width={50}
                  height={50}
                  alt=""
                />
                <div>
                  <p className=" text-lg font-semibold">{card.title}</p>
                </div>
              </div>
            </Card>
          ))
        )}
      </>
    </div>
  );
};

export default RentalRightbar;
