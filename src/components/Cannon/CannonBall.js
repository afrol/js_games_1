import React from 'react';
import PropTypes from 'prop-types';
import {CANNONBALL_DIAMETER} from '../../utils/constants';

const CannonBall = (props) => {
  const style = {
    fill: '#777',
    stroke: '#444',
    strokeWidth: '2px',
  };

  const {x, y} = props.position;

  return (
    <ellipse
      style={style}
      cx={x}
      cy={y}
      rx={CANNONBALL_DIAMETER}
      ry={CANNONBALL_DIAMETER}
    />
  );
};

CannonBall.protoTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default CannonBall;
