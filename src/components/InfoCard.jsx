import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropertySelection from './PropertySelection';

const InfoCard = ({ cards, propertySelection }) => {
  return (
    <div className="">
      <div
        className={`grid grid-cols-6 ${
          propertySelection ? 'lg:grid-cols-9' : 'lg:grid-cols-12'
        }  gap-3`}
      >
        {propertySelection && (
          <div className=" col-span-full sm:col-span-2 lg:col-span-1">
            <PropertySelection />
          </div>
        )}

        {/* Card */}
        {cards.map((card, i) => (
          <Link
            href={card.link}
            className={`${
              card ? '' : ''
            } bg-white hover:scale-95 hover:shadow transition-all rounded-lg p-4 pb-2 col-span-full sm:col-span-2 lg:col-span-2`}
            key={i}
          >
            <div className="">
              <Image
                src={card.titleImg}
                height={50}
                width={50}
                className={`${card.center && 'm-auto mt-4'}`}
                alt={card.title1}
              />
              <div
                className={`${
                  card.center && 'w-[7.5rem] m-auto '
                } justify-betweens mt-2`}
              >
                <div>
                  <span className="text-slate-400 text-xs">{card.title1}</span>
                  <h2 className="font-semibold">{card.value1}</h2>
                </div>
                <div>
                  <span className="text-slate-400 text-xs">{card.title2}</span>
                  <h2 className="font-semibold">{card.value2}</h2>
                </div>
              </div>
              {card.triangle && (
                <Image
                  src={card.triangle}
                  width={20}
                  height={20}
                  className="ml-auto"
                  alt={card.title2}
                />
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
