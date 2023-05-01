import React from 'react';
import { TitleHeader } from '@/components/Headers';
import { incidentsCards } from '@/data/CardsData';
import InfoCard from '@/components/InfoCard';
import { memberPendingColumn, memberPendingData } from '@/data/TableData';
import GlobalDataTable from '@/components/GlobalDataTable';

const incidents = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/incidents/incidents.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <div className="mb-6">
        <InfoCard cards={incidentsCards} />
      </div>
      <div className="bg-white rounded-lg my-4">
        <GlobalDataTable
          data={memberPendingData}
          column={memberPendingColumn}
          tableTitle="Incidents"
          titleImg="/images/incidents/incidentsBg.svg"
          capsuleBtn
          tableHeader={true}
        />
      </div>
    </div>
  );
};

export default incidents;
