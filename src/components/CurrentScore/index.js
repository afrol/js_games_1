import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = ({score}) => {
  const style = {
    fontFamily: '"Joti One", cursive',
    fontSize: 80,
    fill: '#d6d33e',
  };

  return(
    <g filter="url(#shadow)">
      <text style={style} x="300" y="80">
        {score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;
