import React from 'react';
import PropTypes from 'prop-types';
import {FLYING_OBJECT_SIZE} from '../../utils/constants';

const FlyingObjectBase = (props) => {
  const style = {
    fill: '#979797',
    stroke: '#5c5c5c',
  };

  return (
    <ellipse
      cx={props.position.x}
      cy={props.position.y}
      rx={FLYING_OBJECT_SIZE.x}
      ry={FLYING_OBJECT_SIZE.y}
      style={style}
    />
  );
};

FlyingObjectBase.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

export default FlyingObjectBase;
