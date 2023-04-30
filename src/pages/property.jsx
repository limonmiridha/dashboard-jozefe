import Image from 'next/image';
import property from '../../public/images/property/property.svg';
import SelectInput from '../components/SelectInput';

import GlobalDataTable from '@/components/GlobalDataTable';
import {
  memberCreditData,
  memberCreditColumn,
  memberDebitColumn,
  memberDebitData,
  memberPendingColumn,
  memberPendingData,
} from '@/data/TableData';

import FileUploader from '@/components/FileUploader';
import ProfilePicture from '@/components/ProfilePicture';
import Dashboard from './dashboard';
import DashboardRightbar from '@/components/Rightbar/DashboardRightbar';

const Property = () => {
  return (
    <>
      <div className="flex items-center gap-5 pb-3">
        <Image src={property} width={40} height={40} alt="property" />
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
          <h2 className="text-xl font-bold">Property Profile</h2>
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
            <p className="">Property Information</p>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <InputImg
                img="/images/inputIcon/manInput.svg"
                name="Property Name"
                type="name"
              />
              <InputImg
                img="/images/inputIcon/address.svg"
                name="Property Address"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <InputImg
                img="/images/inputIcon/country.svg"
                name="Country"
                type="name"
              />
              <InputImg
                img="/images/inputIcon/postal.svg"
                name="Postal Code Of Property"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <SelectInput data={propertyType} />
            </div>
            <p className="mt-3">Building Information</p>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <InputImg name="Number of Units" type="name" />
              <InputImg name="Number of Garages" type="name" />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <InputImg name="Number of Floors" type="name" />
              <InputImg name="Number of Cellars" type="name" />
            </div>
          </div>
          <div>
            <p className="">Property Manager Information</p>

            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <SelectInput data={propertyRole} />
              <InputImg
                img="/images/inputIcon/email.svg"
                name="Email"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <InputImg
                img="/images/inputIcon/manInput.svg"
                name="First Name"
                type="name"
              />
              <InputImg
                img="/images/inputIcon/manInput.svg"
                name="Last Name"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <InputImg
                img="/images/inputIcon/phone.svg"
                name="Phone Number"
                type="name"
              />
              <InputImg
                img="/images/inputIcon/address.svg"
                name="Full Address"
                type="name"
              />
            </div>
            <div className="grid xs:grid-cols-2 gap-4 mt-4">
              <InputImg
                img="/images/inputIcon/tax.svg"
                name="Tax ID Number"
                type="name"
              />
            </div>
            <div className="my-3">
              <p>Property Manager Profile Picture</p>
            </div>
            <ProfilePicture />
          </div>
        </div>
      </div>
      {/* Document upload section */}
      <div className="mt-3 bg-white rounded-lg box-shadow">
        <div className="grid lg:grid-cols-2 gap-12 p-6">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Documents</h2>
            <FileUploader text="Drag or drop documents here to upload" />
            {/* <p className="py-8 ">Property Documents</p>
            <Documents />
            <Documents />
            <Documents />
            <GlobalButton
              text="Show all documents"
              cls=" bg-[#017efb] py-2 px-4 mt-3 text-sm border-none text-white"
            /> */}
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold">Property Images</h2>
            <FileUploader
              text="Drag or drop images here to upload"
              image="image"
            />
            <div className="grid grid-cols-2 xs:grid-cols-4 gap-4 mt-16 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
                <Image
                  src={`/images/property/img${x}.svg`}
                  width={200}
                  height={200}
                  className="w-full"
                  key={x}
                  alt=""
                />
              ))}
            </div>
            <GlobalButton
              text="Show all photos"
              cls=" bg-[#017efb] py-2 px-4 text-sm border-none text-white"
            />
          </div>
        </div>
      </div>
      {/* Limon */}
      <h3 className="my-4 text-xl font-bold">Property Financial Transaction</h3>
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
      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={memberPendingData}
          column={memberPendingColumn}
          tableTitle="Member Pending Payment"
          titleImg="/images/property/credit.svg"
        />
      </div>
      {/* Limon */}
    </>
  );
};

export default Property;

export const GlobalButton = ({ text, cls, img }) => {
  return (
    <button
      className={`flex justify-center items-center gap-3 rounded-lg ${cls}`}
    >
      {img && <Image src={img} width={24} height={24} alt="" />}
      {text}
    </button>
  );
};

export const InputImg = ({ img, type, name, cls }) => {
  return (
    <form>
      <div className="relative text-gray-600 focus-within:text-gray-400">
        {img && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Image src={img} width={19} height={22} alt="a" />
          </span>
        )}

        <input
          type={type}
          name="q"
          className={`p-3 w-full bg-[#fafafa] rounded-md ${
            img ? 'pl-12' : 'pl-4'
          } focus:outline-none focus:text-gray-900 ${cls}`}
          placeholder={name}
          autocomplete="off"
        />
      </div>
    </form>
  );
};

export const Documents = () => {
  return (
    <div className="flex items-center justify-between bg-[#f1f7fe] rounded-lg p-3 my-2">
      <div className="flex items-center gap-4 ">
        <Image src={Doc} width={22} height={22} alt="documents" />
        <div>
          <p className="text-sm ">Rental Contract.pdf</p>
          <p className="text-sm ">4.2 MB</p>
        </div>
      </div>

      <div className="flex items-center gap-3 ">
        <Image src={Eye} width={18} height={18} alt="documents" />
        <Image src={Edit} width={18} height={18} alt="documents" />
        <Image src={Trash} width={18} height={18} alt="documents" />
      </div>
    </div>
  );
};
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
    // image: '/images/property/a.svg',
  },
  {
    value: 'Manager',
    label: 'Manager',
    image: '/images/inputIcon/manInput.svg',
  },
  {
    value: 'Owner',
    label: 'Owner',
    image: '/images/property/owner.svg',
  },
  {
    value: 'Company',
    label: 'Company',
    image: '/images/inputIcon/company.svg',
  },
];
