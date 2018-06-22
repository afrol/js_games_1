import React from 'react';
import PropTypes from 'prop-types';
import Heart from "./index";

const LivesBox = ({lives}) => {
  const items = [];

  for (let i = 0; i < lives; i++) {
    const heartPosition = {
      x: -180 - (i * 70),
      y: 35
    };

    items.push(<Heart key={i} position={heartPosition} />);
  }

  return (items);
};

LivesBox.propTypes = {
  lives: PropTypes.number.isRequired,
};

export default LivesBox;
