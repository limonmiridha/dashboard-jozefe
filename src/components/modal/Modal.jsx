import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const InfoModal = (props) => {
  const { isOpen, onClose, property, handleAvatarSelect, selectedProperty } =
    props;
  const [isSelected, setIsSelected] = useState(1);

  function handleCardSelect(item, e) {
    e.preventDefault();
    setIsSelected(item.id);
    handleAvatarSelect(item);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className=""
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">Select Property Type</h2>
          <p className="text-slate-500">Choose the type of property you want</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <Image src="/images/closeBtn.svg" width={14} height={14} alt="" />
        </button>
      </div>
      <div>
        <div className=" grid grid-cols-2 xs:grid-cols-3 md:grid-cols-6 gap-3 my-4">
          {property.map((item, i) => (
            <div className="relative" key={i}>
              <Link
                href=""
                className={`${item.bg} ${
                  isSelected === item.id ? 'border-2 ' : ''
                } pcard h-full flex flex-col gap-3 p-4 last:px-2 rounded-lg`}
                onClick={(e) => handleCardSelect(item, e)}
              >
                <Image src={item.image} width={50} height={50} alt="property" />
                <p>{item.title}</p>
                {isSelected === item.id && (
                  <Image
                    src="/images/property/check.svg"
                    width={16}
                    height={16}
                    className="absolute top-2 right-2"
                    alt=""
                  />
                )}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-5/6 mx-auto">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white w-full p-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default InfoModal;
