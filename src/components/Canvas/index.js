import React from 'react';
import Sky from '../Sky';
import Ground from '../Ground';
import CannonBase from '../Cannon';
import CannonPipe from '../Cannon/CannonPipe';

const Canvas = () => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >

      <Sky/>
      <Ground/>

      <CannonPipe rotation={15}/>
      <CannonBase/>
    </svg>
  );
};

export default Canvas;
