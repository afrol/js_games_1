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
import StartGame from '../TextHelper/StartGame';
import Title from '../TextHelper/Title';
import LivesBox from '../Heart/LivesBox';

const Canvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

  return (
    <svg
      id={SVG_ELEMENT_ID}
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      onMouseDown={props.shoot}
      viewBox={viewBox}
    >
      <FilterShadow />

      <Sky/>
      <Ground/>

      {props.gameState.cannonBalls.map(cannonBall => (
        <CannonBall
          key={cannonBall.id}
          position={cannonBall.position}
        />
      ))}

      <CannonPipe rotation={props.angle}/>
      <CannonBase/>

      <CurrentScore score={props.gameState.score} />

      <LivesBox lives={props.gameState.lives} />

      {!props.gameState.started &&
        <g>
          <StartGame onClick={() => props.startGame()}/>
          <Title />
        </g>
      }

      {props.gameState.flyingObjects.map(flyingObject => (
        <FlyingObject
          key={flyingObject.id}
          position={flyingObject.position}
        />
      ))}
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  shoot: PropTypes.func.isRequired,
};

export default Canvas;
