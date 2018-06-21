import {
  CREATE_INTERVAL,
  MAX_FLYING_OBJECTS,
  FLYING_OBJECTS_STARTER_Y_AXIS,
  FLYING_OBJECTS_STARTER_POSITION
} from '../utils/constants';

export default (state) => {
  if (!state.gameState.started) {
    return state;
  }

  const now = (new Date()).getTime();
  const {lastObjectCreatedAt, flyingObjects} = state.gameState;
  const isCreateNewObject = (
    now - lastObjectCreatedAt > CREATE_INTERVAL
    && flyingObjects.length < MAX_FLYING_OBJECTS
  );

  if (!isCreateNewObject) {
    return state;
  }

  const predefinedPosition = Math.floor(Math.random() * FLYING_OBJECTS_STARTER_POSITION.length);
  const flyingObjectPosition = FLYING_OBJECTS_STARTER_POSITION[predefinedPosition];

  const newFlyingObject = {
    id: now,
    createdAt: now,
    position: {
      x: flyingObjectPosition,
      y: FLYING_OBJECTS_STARTER_Y_AXIS
    },
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [
        ...state.gameState.flyingObjects,
        newFlyingObject
      ],
      lastObjectCreatedAt: now
    },
  };
};
