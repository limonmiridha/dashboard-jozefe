import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from './modal/Modal';
const PropertySelection = () => {
  const [selectedProperty, setSelectedProperty] = useState(property[0]);
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  const handleAvatarSelect = (property) => {
    setSelectedProperty(property);
  };
  return (
    <div className="h-full">
      <div
        className={`${selectedProperty.bg} h-full hover:scale-95 hover:shadow transition-all rounded-lg`}
      >
        <Link href="" onClick={() => setShowModal(true)}>
          <div className="py-4 px-2">
            <Image
              src={selectedProperty.image}
              width={50}
              height={50}
              // onClick={() => setShowDropdown(!showDropdown)}

              alt="avatar"
            />
            <h2 className="font-semibold mt-3 break-words">
              {selectedProperty.title}
            </h2>
          </div>
        </Link>
        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          property={property}
          handleAvatarSelect={handleAvatarSelect}
          selectedProperty={selectedProperty}
        />
      </div>
    </div>
  );
};

export default PropertySelection;
const property = [
  {
    id: 1,
    image: '/images/property/house.svg',
    title: 'My House',
    bg: 'bg-[#B1EAFF]',
  },
  {
    id: 2,
    image: '/images/property/appartment.svg',
    title: 'My Apartment',
    bg: 'bg-[#FCEFEF]',
  },
  {
    id: 3,
    image: '/images/property/studio.svg',
    title: 'My Studio',
    bg: 'bg-[#E6FCFE]',
  },
  {
    id: 4,
    image: '/images/property/condo.svg',
    title: 'My Condo',
    bg: 'bg-[#F9EFFC]',
  },
  {
    id: 5,
    image: '/images/property/other.svg',
    title: 'Other',
    bg: 'bg-[#E6FEEB]',
  },
  {
    id: 6,
    image: '/images/property/factory.svg',
    title: 'Commercial',
    bg: 'bg-[#DBE1FF]',
  },
];
