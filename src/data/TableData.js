import TableActionIcon from '@/components/TableActionIcon';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const CustomButton = ({ label, className, onClick }) => {
  return <Button label={label} className={className} onClick={onClick} />;
};

const ImageBodyTemplate = (data) => {
  return (
    <Image
      src={data.image}
      alt={data.image}
      width={32}
      height={32}
      style={{ minWidth: '32px' }}
    />
  );
};

const renderViewButton = () => {
  return (
    <>
      <Link href="/memberProfile">
        <Button
          label="View Profile"
          className="text-xs viewBtn"
          style={{ background: '#0DDFA4' }}
        />
      </Link>
    </>
  );
};

const actionTemplate = () => (
  <div className="flexs gap-2">
    <CustomButton label="Edit" className="edit" />
    <CustomButton label="Delete" className="delete" />
  </div>
);

const renderInputButton = () => {
  return (
    <div className="flex gap-2">
      <InputText placeholder="Enter amount" className="md:w-40 bg-blue-100" />
      <Button label="Pay" className="edit" />
    </div>
  );
};

function renderIcon(item) {
  return <Image src={item} width={20} height={20} alt="" />;
}

function renderStatus(status) {
  return (
    <div>
      {status === 'active' ? (
        <div className="bg-[#0DDFA4] px-4 py-1 rounded-md max-w-min">
          Active
        </div>
      ) : (
        <div className="bg-[#DEE4EC] px-4 py-1 rounded-md max-w-min">
          Inactive
        </div>
      )}
    </div>
  );
}

export const memberCreditColumn = [
  {
    field: 'id',
    header: '#',
    sort: true,
  },
  {
    field: 'invoice_id',
    header: 'Invoice ID',
  },
  {
    field: 'accounting_id',
    header: 'Accounting ID',
    sort: true,
  },
  {
    field: 'category',
    header: 'Category',
    sort: true,
  },
  {
    field: 'sub_category',
    header: 'Sub Category',
    sort: true,
  },
  {
    field: 'date',
    header: 'Date',
  },
  {
    field: 'invoice_type',
    header: 'Invoice Type',
  },
  {
    field: 'invoice_amount',
    header: 'Invoice Amount',
  },
];

export const memberCreditData = [
  {
    id: 1,
    invoice_id: 231216,
    accounting_id: 26165789,
    category: 'Work',
    sub_category: 'Drainage',
    date: '11/05/2022',
    invoice_type: 'Common',
    invoice_amount: '20',
  },
  {
    id: 2,
    invoice_id: 231216,
    accounting_id: 26165789,
    category: 'Troubleshooting',
    sub_category: 'Drainage',
    date: '11/05/2022',
    invoice_type: 'Common',
    invoice_amount: '50',
  },
  {
    id: 3,
    invoice_id: 231216,
    accounting_id: 26165789,
    category: 'Claims',
    sub_category: 'Drainage',
    date: '11/05/2022',
    invoice_type: 'Common',
    invoice_amount: '35',
  },
  {
    id: 4,
    invoice_id: 231216,
    accounting_id: 26165789,
    category: 'Other',
    sub_category: 'Drainage',
    date: '11/05/2022',
    invoice_type: 'Common',
    invoice_amount: '20',
  },
  {
    id: 5,
    invoice_id: 231216,
    accounting_id: 26165789,
    category: 'Maintenance Contract',
    sub_category: 'Drainage',
    date: '11/05/2022',
    invoice_type: 'Common',
    invoice_amount: '30',
  },
];

export const memberDebitColumn = [
  {
    field: 'id',
    header: '#',
    sort: true,
  },
  {
    // header: 'image',
    body: ImageBodyTemplate,
  },
  {
    field: 'name',
    header: 'Name',
    sort: true,
  },
  {
    field: 'invoice_id',
    header: 'Invoice ID',
  },
  {
    field: 'accounting_id',
    header: 'Accounting ID',
    sort: true,
  },
  {
    field: 'category',
    header: 'Category',
    sort: true,
  },
  {
    field: 'sub_category',
    header: 'Sub Category',
    sort: true,
  },
  {
    field: 'creation_date',
    header: 'Creation Date',
  },
  {
    field: 'payment_date',
    header: 'Payment Date',
  },
  {
    field: 'invoice_type',
    header: 'Invoice Type',
  },
];

export const memberDebitData = [
  {
    id: 1,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    invoice_id: 231216,
    accounting_id: 26165789,
    category: 'Work',
    sub_category: 'Drainage',
    creation_date: '11/05/2022',
    payment_date: '11/05/2022',
    invoice_type: 'Common',
  },
  {
    id: 2,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    invoice_id: 231216,
    accounting_id: 26165789,
    category: 'Troubleshooting',
    sub_category: 'Drainage',
    creation_date: '11/05/2022',
    payment_date: '11/05/2022',
    invoice_type: 'Common',
  },
];
export const memberPendingColumn = [
  {
    selectionMode: 'multiple',
  },

  {
    // header: 'image',
    body: ImageBodyTemplate,
  },
  {
    field: 'name',
    header: 'Members Name',
    sort: true,
  },
  {
    field: 'room',
    header: 'Units',
  },
  {
    field: 'pending',
    header: 'Total Pending Payment',
    sort: true,
  },

  {
    field: 'memberID',
    header: 'Member id',
  },
  {
    body: renderViewButton,
  },
];

export const memberPendingData = [
  {
    id: 1,
    image: '/images/proImg1.png',
    name: 'Harper Stevens',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
  },
  {
    id: 2,
    image: '/images/proImg1.png',
    name: 'Ethan Smith',
    room: 'Room 09',
    pending: '225.00',
    memberID: '0012',
  },
  {
    id: 3,
    image: '/images/proImg1.png',
    name: 'Ava Martinez',
    room: 'Studio 11',
    pending: '316.00',
    memberID: '0012',
  },
  {
    id: 4,
    image: '/images/proImg1.png',
    name: 'Jackson Chen',
    room: 'Room 22',
    pending: '2,500.00',
    memberID: '0012',
  },
  {
    id: 5,
    image: '/images/proImg1.png',
    name: 'Jackson Chen',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
  },
  {
    id: 6,
    image: '/images/proImg1.png',
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '105.00',
    memberID: '0012',
  },
  {
    id: 7,
    image: '/images/proImg1.png',
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
  },
  {
    id: 8,
    image: '/images/proImg1.png',
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
  },
];

export const membersColumn = [
  {
    field: 'id',
    header: '#',
    sort: true,
  },
  {
    // header: 'image',
    body: ImageBodyTemplate,
  },
  {
    field: 'name',
    header: 'Name',
    sort: true,
  },
  {
    field: 'id',
    header: 'ID',
    sort: true,
  },
  {
    field: 'taxNumber',
    header: 'Tax Number',
    sort: true,
  },
  {
    field: 'email',
    header: 'Email',
    sort: true,
  },
  {
    field: 'phoneNumber',
    header: 'Phone Number',
    sort: true,
  },
  {
    field: 'address',
    header: 'Address',
    sort: true,
  },
  {
    field: 'quota',
    header: 'Quota (%)',
    sort: true,
  },

  {
    header: 'Actions',
    body: actionTemplate,
  },
];

export const membersData = [
  {
    id: 1,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    taxNumber: 142473305,
    email: 'harpers@gmail.com',
    phoneNumber: '555 - 789 - 1234',
    address: '123 Main St, Anytown',
    quota: '27%',
  },
  {
    id: 2,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    taxNumber: 142473305,
    email: 'ethansm@gmail.com',
    phoneNumber: '555 - 789 - 1234',
    address: '123 Main St, Anytown',
    quota: '32%',
  },
  {
    id: 3,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    taxNumber: 142473305,
    email: 'ethansm@gmail.com',
    phoneNumber: '555 - 789 - 1234',
    address: '123 Main St, Anytown',
    quota: '32%',
  },
  {
    id: 4,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    taxNumber: 142473305,
    email: 'ethansm@gmail.com',
    phoneNumber: '555 - 789 - 1234',
    address: '123 Main St, Anytown',
    quota: '32%',
  },
];

export const membersPaymentColumn = [
  {
    field: 'id',
    header: '#',
    sort: true,
  },
  {
    // header: 'image',
    body: ImageBodyTemplate,
  },
  {
    field: 'name',
    header: 'Member',
    sort: true,
  },
  {
    field: 'total',
    header: 'Total',
    sort: true,
  },
  {
    field: 'paid',
    header: 'Paid',
    sort: true,
  },
  {
    field: 'pending',
    header: 'Pending',
    sort: true,
  },
  {
    field: 'payNow',
    header: 'Pay Now',
    body: renderInputButton,
    sort: true,
  },

  {
    body: <Button label="Send Remainder" className="reminder" />,
  },
  {
    body: <Button label="View Member Profile" className="edit" />,
  },
];

export const membersPaymentData = [
  {
    id: 1,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    total: 0,
    paid: 0,
    pending: 0,
  },
  {
    id: 2,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    total: 0,
    paid: 0,
    pending: 0,
  },
];
export const rentalColumn = [
  {
    field: 'id',
    header: '#',
  },
  {
    // header: 'image',
    body: ImageBodyTemplate,
  },
  {
    field: 'name',
    header: 'Units',
    sort: true,
  },
  {
    field: 'total',
    header: 'Rent',
    sort: true,
  },
  {
    field: 'paid',
    header: 'Paid',
    sort: true,
  },
  {
    field: 'pending',
    header: 'Pending',
    sort: true,
  },
  {
    field: 'j',
    header: 'J',
  },
  {
    field: 'f',
    header: 'F',
  },
  {
    field: 'm',
    header: 'M',
  },
  {
    field: 'a',
    header: 'A',
  },
  {
    field: 'm',
    header: 'M',
  },
  {
    field: 'j',
    header: 'J',
  },
  {
    field: 'j',
    header: 'J',
  },
  {
    field: 'a',
    header: 'A',
  },
  {
    field: 'a',
    header: 'S',
  },
  {
    field: 'a',
    header: 'O',
  },
  {
    field: 'a',
    header: 'N',
  },
  {
    field: 'a',
    header: 'D',
  },
  {
    field: 'payNow',
    header: 'Pay Now',
    body: renderInputButton,
  },
];

export const rentalData = [
  {
    id: 1,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    total: 0,
    paid: 0,
    pending: 0,
    j: renderIcon('/images/rental/greenCheck.svg'),
    f: renderIcon('/images/rental/greenCheck.svg'),
    m: renderIcon('/images/rental/greenCheck.svg'),
    a: renderIcon('/images/rental/greenCheck.svg'),
    m: renderIcon('/images/rental/greenCheck.svg'),
  },
  {
    id: 2,
    image: '/images/table/proImg1.svg',
    name: 'Harper Stevens',
    total: 0,
    paid: 0,
    pending: 0,
    j: renderIcon('/images/rental/redCheck.svg'),
    f: renderIcon('/images/rental/redCheck.svg'),
    m: renderIcon('/images/rental/redCheck.svg'),
    a: renderIcon('/images/rental/redCheck.svg'),
    m: renderIcon('/images/rental/redCheck.svg'),
  },
];
export const newsColumn = [
  {
    field: 'id',
    header: '#',
    sort: true,
  },
  {
    field: 'subject',
    header: 'Subject',
  },
  {
    field: 'description',
    header: 'Description',
    sort: true,
  },
  {
    field: 'date',
    header: 'Date',
  },
  {
    field: 'status',
    header: 'Status',
  },

  {
    field: 'actionIcon',
  },
];

export const newsData = [
  {
    id: 1,
    subject: 'Subject of the News',
    description: 'Lorem ipsum is a ...',
    date: '11 Apr 2023 - 13 Apr 2023',
    status: renderStatus('active'),
    actionIcon: <TableActionIcon />,
  },
  {
    id: 2,
    subject: 'Subject of the News',
    description: 'Lorem ipsum is a ...',
    date: '11 Apr 2023 - 13 Apr 2023',
    status: renderStatus('inactive'),
    invoice_amount: '50',
    // actionIcon: <TableActionIcon />,
  },
  {
    id: 3,
    subject: 'Subject of the News',
    description: 'Lorem ipsum is a ...',
    date: '11 Apr 2023 - 13 Apr 2023',
    status: renderStatus('inactive'),
    invoice_amount: '35',
    // actionIcon: <TableActionIcon />,
  },
  {
    id: 4,
    subject: 'Subject of the News',
    description: 'Lorem ipsum is a ...',
    date: '11 Apr 2023 - 13 Apr 2023',
    status: renderStatus('active'),
    invoice_amount: '20',
    // actionIcon: <TableActionIcon />,
  },
  {
    id: 5,
    subject: 'Subject of the News',
    description: 'Lorem ipsum is a ...',
    date: '11 Apr 2023 - 13 Apr 2023',
    status: renderStatus('active'),
    invoice_amount: '30',
    // actionIcon: <TableActionIcon />,
  },
];
