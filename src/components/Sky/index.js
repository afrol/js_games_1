import React from 'react';
import {SKY_GROUND_WIDTH} from '../../utils/constants'

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };

  const gameHeight = 1200;

  return (
    <rect
      style={skyStyle}
      x={SKY_GROUND_WIDTH / -2}
      y={100 - gameHeight}
      width={SKY_GROUND_WIDTH}
      height={gameHeight}
    />
  );
};

export default Sky;
