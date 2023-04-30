import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';

//icons
import 'primeicons/primeicons.css';
import Image from 'next/image';
import CurrencyBtn from './CurrencyBtn';

const data = [
  {
    id: 1,
    image: '/images/proImg1.png',
    name: 'Harper Stevens',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 2,
    image: '/images/proImg1.png',
    name: 'Ethan Smith',
    room: 'Room 09',
    pending: '225.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 3,
    image: '/images/proImg1.png',
    name: 'Ava Martinez',
    room: 'Studio 11',
    pending: '316.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 4,
    image: '/images/proImg1.png',
    name: 'Jackson Chen',
    room: 'Room 22',
    pending: '2,500.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 5,
    image: '/images/proImg1.png',
    name: 'Jackson Chen',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 6,
    image: '/images/proImg1.png',
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '105.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 7,
    image: '/images/proImg1.png',
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
  {
    id: 8,
    image: '/images/proImg1.png',
    name: 'Ghostbusters',
    room: 'Room 22',
    pending: '1,172.00',
    memberID: '0012',
    details: <BsThreeDotsVertical />,
  },
];
const renderButton = () => {
  return <Button label="View Profile" className="text-xs bg-green-500" />;
};
const imageBodyTemplate = (data) => {
  return <Image src={data.image} alt={data.image} width={32} height={32} />;
};

export default function DashboardDataTable() {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [rowClick, setRowClick] = useState(true);
  const [filters, setFilters] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      units: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue('');
  };

  useEffect(() => {
    initFilters();
  }, []);

  const clearFilter = () => {
    initFilters();
  };
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 relative">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Search Entities"
              className="md:w-72"
            />
          </span>
          <button
            type="button"
            onClick={clearFilter}
            className="absolute right-1"
          >
            <Image
              src="/images/filter.svg"
              width={42}
              height={42}
              className="bg-blue-500 p-3 rounded-md"
              alt="filter"
            />
          </button>
        </div>
        <div className="absolute md:relative right-2 -top-3">
          <CurrencyBtn />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="bg-white pb-24 md:p-4 rounded-lg">
      <DataTable
        value={data}
        stripedRows
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        selectionMode={rowClick ? null : 'checkbox'}
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"
        filters={filters}
        // globalFilterFields={[
        //   'name',
        //   'units',
        //   'representative.name',
        //   'balance',
        //   'status',
        // ]}
        header={header}
        emptyMessage="No customers found."
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: '3rem' }}
        ></Column>
        <Column header="Image" body={imageBodyTemplate}></Column>
        <Column field="name" header="Members Name" sortable></Column>
        <Column field="room" header="Units" sortable></Column>
        <Column
          field="pending"
          header="Total Pending Payment"
          sortable
        ></Column>
        <Column field="memberID" header="Member id" sortable></Column>
        {/* <Column field="details" header=""></Column> */}
        <Column header="" body={renderButton}></Column>
      </DataTable>
    </div>
  );
}
