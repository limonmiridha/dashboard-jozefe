import React, { useContext } from 'react';
import InfoCard from '../components/InfoCard';
import Charts from '../components/Charts';
import Accounting from '../interfaces/dashboard/Accounting';
import GlobalDataTable from '@/components/GlobalDataTable';
import { dashboardCards } from '../data/CardsData';
import { memberPendingColumn, memberPendingData } from '@/data/TableData';
import PropertySelection from '@/components/PropertySelection';

const Dashboard = () => {
  return (
    <>
      <InfoCard cards={dashboardCards} propertySelection={true} />
      <Charts />
      <Accounting />
      {/* <DashboardDataTable /> */}
      <div className="bg-white rounded-lg my-4">
        <GlobalDataTable
          data={memberPendingData}
          column={memberPendingColumn}
          tableHeader={false}
        />
      </div>
    </>
  );
};

export default Dashboard;
