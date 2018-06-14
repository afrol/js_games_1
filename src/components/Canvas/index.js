import React from 'react';
import PropTypes from 'prop-types';
import {SVG_ELEMENT_ID} from "../../utils/constants";
import Sky from '../Sky';
import Ground from '../Ground';
import CannonBase from '../Cannon';
import CannonPipe from '../Cannon/CannonPipe';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg
      id={SVG_ELEMENT_ID}
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >

      <Sky/>
      <Ground/>

      <CannonPipe rotation={props.angle}/>
      <CannonBase/>
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
