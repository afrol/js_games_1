import {calculateAngle} from '../utils/formulas';

export default (state, action) => {
  if (!state.gameState.started) {
    return state;
  }

  const {cannonBalls} = state.gameState;

  if (cannonBalls.length === 2) {
    return state;
  }

  const {x, y} = action.mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  const cannonBall = {
    id: (new Date()).getTime(),
    position: {
      x: 0,
      y: 0,
    },
    angle
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      cannonBalls: [...cannonBalls, cannonBall],
    }
  }
};
