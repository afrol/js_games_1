import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import {LIFE_TIME} from '../utils/constants';
import moveBalls from './moveCannonBalls';
import checkCollisions from './checkCollisions';

export default (state, action) => {
  if (!state.gameState.started) {
    return state;
  }

  let cannonBalls = moveBalls(state.gameState.cannonBalls);

  const mousePosition = action.mousePosition || {x: 0, y: 0};

  const newState = createFlyingObjects(state);

  const now = (new Date()).getTime();

  let flyingObjects = newState.gameState.flyingObjects.filter(flyingObject => (
    (now - flyingObject.createdAt) < LIFE_TIME
  ));

  const {x, y} = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  const objectsDestroyed = checkCollisions(cannonBalls, flyingObjects);
  const cannonBallsDestroyed = objectsDestroyed.map(object => (object.cannonBallId));
  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.flyingDiscId));

  cannonBalls = cannonBalls.filter(object => (cannonBallsDestroyed.indexOf(object.id)));
  flyingObjects = flyingObjects.filter(object => (flyingDiscsDestroyed.indexOf(object.id)));

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
      cannonBalls,
    },
    angle,
  };
};
