import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/calender.module.css';

const Index = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="box-shadow rounded-lg">
      <Calendar onChange={onChange} value={value} selectRange={true} />
    </div>
  );
};

export default Index;
