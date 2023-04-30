import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Bar = () => {
  const data = [
    {
      month: 'Jan',
      income: 3000,
      expense: 2000,
    },
    {
      month: 'Feb',
      income: 4000,
      expense: 2500,
    },
    {
      month: 'Mar',
      income: 2000,
      expense: 1100,
    },
    {
      month: 'April',
      income: 5000,
      expense: 2400,
    },
    {
      month: 'May',
      income: 3000,
      expense: 2100,
    },
    // add more months as needed
  ];

  const getBorderRadius = (index) => {
    if (index === 0) {
      return '10px 10px 0 0';
    } else if (index === data.length - 1) {
      return '0 0 10px 10px';
    } else {
      return 0;
    }
  };
  return (
    <div className="h-[24rem] bar">
      <ResponsiveBar
        borderRadius={4}
        // borderRadius={getBorderRadius}
        data={data}
        keys={['income', 'expense']}
        indexBy="month"
        margin={{ top: 80, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode="grouped"
        colors={['#2466ff', '#20d6ff']}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Amount',
          legendPosition: 'middle',
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        enableLabel={false}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'row',
            justify: false,
            translateX: -400,
            translateY: -300,
            itemsSpacing: 15,
            itemWidth: 58,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 15,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Bar;
