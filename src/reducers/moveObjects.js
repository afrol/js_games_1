import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
import {MAX_FLYING_OBJECTS, CREATE_INTERVAL} from '../utils/constants';

export default (state, action) => {
  const mousePosition = action.mousePosition || {x: 0, y: 0};

  const newState = createFlyingObjects(state);

  const now = (new Date()).getTime();

  const flyingObjects = newState.gameState.flyingObjects.filter(flyingObject => (
    (now - flyingObject.createdAt) < CREATE_INTERVAL * MAX_FLYING_OBJECTS
  ));

  const {x, y} = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
    },
    angle
  };
};
