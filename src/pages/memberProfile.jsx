
import Image from 'next/image';
import React, { useContext } from 'react';
import { GlobalButton } from './property';
import { InputImg } from './property';
import SelectInput from '@/components/SelectInput';
import ProfilePicture from '@/components/ProfilePicture';
import FileUploader from '@/components/FileUploader';
import {
  memberCreditColumn,
  memberCreditData,
  memberDebitColumn,
  memberDebitData,
} from '@/data/TableData';
import GlobalDataTable from '@/components/GlobalDataTable';
import CurrencyBtn from '@/components/CurrencyBtn';

const memberProfile = () => {
  return (
    <>
      <div className="flex items-center gap-5 pb-3">
        <Image
          src="/images/members/member.svg"
          width={40}
          height={40}
          alt="property"
        />
        <p className="text-xl font-semibold">blablabla</p>
        <Image
          src="/images/property/exclaim.svg"
          width={24}
          height={24}
          className="-mt-5 "
          alt="property"
        />
      </div>
      <div className="p-4 bg-white rounded-lg box-shadow">
        <div className="xs:flex space-y-3 xs:space-y-0 items-center justify-between">
          <h2 className="text-xl font-bold">Tenant Member Profile</h2>
          <div className="flex items-center gap-5">
            <GlobalButton
              text="Edit"
              cls=" bg-[#edf3fa] w-full py-2 px-4 border-none"
            />
            <GlobalButton
              text="Back"
              cls=" bg-[#017efb] w-full py-2 px-4  text-white"
            />
          </div>
        </div>
        <div className="grid gap-5 mt-5 xl:grid-cols-2">
          <div className="w-full">
            <p className="mb-3">Personal Information</p>
            <div className="grid xs:grid-cols-2 gap-4">
              {memeberForm.map((inputGroup, i) => (
                <InputImg
                  key={i}
                  img={inputGroup.image}
                  name={inputGroup.label}
                  type="name"
                />
              ))}
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <SelectInput data={propertyType} />
              <SelectInput data={propertyType} />
            </div>
            <p className="my-3">Financial Information</p>
            <div className="grid xs:grid-cols-2 gap-4">
              {financialForm.map((inputGroup, i) => (
                <>
                  <InputImg
                    key={i}
                    img={inputGroup.image}
                    name={inputGroup.label}
                    type="name"
                  />
                </>
              ))}
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <div>
                <InputImg
                  img="/images/inputIcon/percent.svg"
                  name="Quota"
                  type="name"
                />
                <p className="text-gray-400">
                  ** percent of common charge payment **
                </p>
              </div>

              <SelectInput data={propertyType} />
            </div>
          </div>
          <div>
            <p className="mb-3">Personal Information</p>
            <ProfilePicture />
            <p className="my-3">More Information</p>
            <div className="w-1/2">
              <InputImg name="Invoice Date" type="date" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative my-3">
                <span className="absolute top-2 pl-4 text-gray-600">
                  Description
                </span>
                <textarea
                  className="w-full h-32 p-4 pt-8 bg-gray-50 rounded"
                  placeholder="Type description here..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5 mt-5 xl:grid-cols-2">
          <div className="w-full">
            <p className="">Documents</p>
            <div className="grid gap-4">
              <FileUploader />
            </div>
          </div>
          <div className="w-full">
            <p className="text-xl font-bold">Invoice</p>
            <p className="my-2">
              Report date generate : 01/01/2022 to 01/01/2023
            </p>
            <div className="grid gap-4">
              <SelectInput data={propertyType} />
              <InputImg name="Generate Invoice Report" type="date" />
            </div>
            <div className="flex gap-3 mt-3">
              <button className="bg-blue-500 px-3 py-1 rounded text-white w-full">
                Generate
              </button>
              <button className="bg-blue-500 px-3 py-1 rounded text-white w-full">
                Download
              </button>
              <button className="bg-blue-500 px-3 py-1 rounded text-white w-full">
                Edit
              </button>
              <button className="bg-blue-500 px-3 py-1 rounded text-white w-full">
                Send Report
              </button>
            </div>
            <div className="justify-betweens mt-4">
              <div>
                <p>Total Pending</p>
                <p className="text-xl font-semibold">0</p>
              </div>
              <CurrencyBtn />
            </div>
            <p className="text-xl font-bold">Send Message</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative my-3">
                <span className="absolute top-2 pl-4 text-gray-600">
                  Description
                </span>
                <textarea
                  className="w-full h-32 p-4 pt-8 bg-gray-50 rounded"
                  placeholder="Type description here..."
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <button className="bg-blue-500 px-3 py-1 rounded text-white w-full">
                Send Invoice Reminder
              </button>
              <button className="bg-blue-500 px-3 py-1 rounded text-white w-full">
                Send Payment Information
              </button>
              <button className="bg-blue-500 px-3 py-1 rounded text-white w-full">
                Send Payment Confirmation Received
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={memberCreditData}
          column={memberCreditColumn}
          tableTitle="Common Bills Invoice (Credit)"
          titleImg="/images/property/credit.svg"
          headerText={true}
        />
      </div>
      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={memberDebitData}
          column={memberDebitColumn}
          tableTitle="Member Payed Bills Invoice (Debit)"
          titleImg="/images/property/credit.svg"
        />
      </div>
    </>
  );
};

export default memberProfile;
const propertyType = [
  {
    value: 'Property Type',
    label: 'Property Type',
    image: '/images/property/property1.svg',
  },
  {
    value: 'Home',
    label: 'Home',
    image: '/images/property/property2.svg',
  },
  {
    value: 'Apartment',
    label: 'Apartment',
    image: '/images/property/property3.svg',
  },
  {
    value: 'Studios',
    label: 'Studios',
    image: '/images/property/property4.svg',
  },
  {
    value: 'Condos',
    label: 'Condos',
    image: '/images/property/property5.svg',
  },
  {
    value: 'Commercial',
    label: 'Commercial',
    image: '/images/property/property6.svg',
  },
  {
    value: 'Other',
    label: 'Other',
    image: '/images/property/property7.svg',
  },
];
const propertyRole = [
  {
    value: 'Property Role',
    label: 'Property Role',
    image: '/images/property/a.svg',
  },
  {
    value: 'Manager',
    label: 'Manager',
    image: '/images/property/a.svg',
  },
  {
    value: 'Owner',
    label: 'Owner',
    image: '/images/property/owner.svg',
  },
  {
    value: 'Company',
    label: 'Company',
    image: '/images/property/company.svg',
  },
];
const memeberForm = [
  {
    image: '/images/inputIcon/manInput.svg',
    label: 'First Name',
  },
  {
    image: '/images/inputIcon/manInput.svg',
    label: 'Last Name',
  },
  {
    image: '/images/inputIcon/address.svg',
    label: 'Full Address',
  },
  {
    image: '/images/inputIcon/postal.svg',
    label: 'Postal Code',
  },
  {
    image: '/images/inputIcon/phone.svg',
    label: 'Phone Number',
  },
  {
    image: '/images/inputIcon/email.svg',
    label: 'Email',
  },
];
const financialForm = [
  {
    image: '/images/inputIcon/tax.svg',
    label: 'ID Tax Profile',
  },
  {
    image: '/images/inputIcon/bank.svg',
    label: 'Bank Name',
  },
  {
    image: '/images/inputIcon/tax.svg',
    label: 'ID Accounting Profile',
  },

  {
    image: '/images/inputIcon/bank.svg',
    label: 'Bank Account',
  },
];
