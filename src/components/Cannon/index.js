import React from 'react';
import {pathFromBezierCurve} from '../../utils/formulas';

const CannonBase = () => {
  const style = {
    fill: '#a16012',
    stroke: '#75450e',
    strokeWidth: '2px',
  };

  const baseWith = 80;
  const halfBase = 40;
  const height = 60;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfBase,
      y: height,
    },
    initialControlPoint: {
      x: 20,
      y: -height,
    },
    endingControlPoint: {
      x: 60,
      y: -height,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <g>
      <path
        style={style}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfBase}
        y1={height}
        x2={halfBase}
        y2={height}
        style={style}
      />
    </g>
  );
};

export default CannonBase;
