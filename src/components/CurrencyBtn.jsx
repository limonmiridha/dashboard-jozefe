import { useState } from 'react';
import { BsCurrencyDollar, BsCurrencyEuro } from 'react-icons/bs';

const CurrencyBtn = ({ activeBg }) => {
  const [active, setActive] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActive(buttonNumber);
  };
  return (
    <div className="flex justify-end">
      <button
        onClick={() => handleButtonClick(1)}
        className={`${
          active == 1 && `${activeBg ? activeBg : 'bg-blue-500 text-white'}`
        } text-gray-500 px-3 py-1 rounded-tl-full rounded-bl-full bg-blue-100`}
      >
        <BsCurrencyDollar />
      </button>
      <button
        onClick={() => handleButtonClick(2)}
        className={`${
          active == 2 && `${activeBg ? activeBg : 'bg-blue-500 text-white'}`
        } text-gray-500 px-3 py-1 rounded-tr-full rounded-br-full bg-blue-100`}
      >
        <BsCurrencyEuro />
      </button>
    </div>
  );
};

export default CurrencyBtn;
