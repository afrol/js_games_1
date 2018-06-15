import React from 'react';
import PropTypes from 'prop-types';
import {SVG_ELEMENT_ID} from '../../utils/constants';
import Sky from '../Sky';
import Ground from '../Ground';
import CannonBase from '../Cannon';
import CannonPipe from '../Cannon/CannonPipe';
import CannonBall from '../Cannon/CannonBall';
import CurrentScore from '../CurrentScore';
import {FilterShadow} from '../CurrentScore/Filters';
import FlyingObject from '../FlyingObject';
import Heart from "../Heart";

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

  return (
    <svg
      id={SVG_ELEMENT_ID}
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <FilterShadow />

      <Sky/>
      <Ground/>

      <CannonPipe rotation={props.angle}/>
      <CannonBase/>

      <CannonBall position={{x:0, y:-100}}/>

      <CurrentScore score={25} />

      <FlyingObject position={{x: -150, y: -300}}/>
      <FlyingObject position={{x: 150, y: -300}}/>
      
      <Heart position={{x: -300, y: 35}}/>
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
