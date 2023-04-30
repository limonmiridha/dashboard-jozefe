import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

const CircularProgressBar = (props) => {
  const { pathColor, trailColor, textColor } = props;
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      strokeWidth={12}
      className="font-semibold"
      styles={buildStyles({
        // rotation: 0.25,
        strokeLinecap: 'round',
        textSize: '20px',
        pathTransitionDuration: 0.5,
        // Colors
        pathColor: pathColor,
        textColor: textColor,
        trailColor: trailColor,
        // backgroundColor: '#0DDFA4',
      })}
    />
  );
};

export default CircularProgressBar;
