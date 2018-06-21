import {checkCollision} from '../utils/formulas';
import {CANNONBALL_DIAMETER, FLYING_OBJECT_SIZE, GAME_HEIGHT, LIFE_TIME} from '../utils/constants';

export default (cannonBalls, flyingDiscs) => {
  const objectsDestroyed = [];

  flyingDiscs.forEach((flyingDisc) => {
    const currentLifeTime = (new Date()).getTime() - flyingDisc.createdAt;

    const calculatedPosition = {
      x: flyingDisc.position.x,
      y: flyingDisc.position.y + ((currentLifeTime / LIFE_TIME) * GAME_HEIGHT),
    };

    const rectA = {
      x1: calculatedPosition.x - FLYING_OBJECT_SIZE.x,
      y1: calculatedPosition.y - FLYING_OBJECT_SIZE.y,
      x2: calculatedPosition.x + FLYING_OBJECT_SIZE.x,
      y2: calculatedPosition.y + FLYING_OBJECT_SIZE.y,
    };

    cannonBalls.forEach((cannonBall) => {
      const radius = CANNONBALL_DIAMETER / 2;

      const rectB = {
        x1: cannonBall.position.x - radius,
        y1: cannonBall.position.y - radius,
        x2: cannonBall.position.x + radius,
        y2: cannonBall.position.y + radius,
      };

      if (checkCollision(rectA, rectB)) {
        objectsDestroyed.push({
          cannonBallId: cannonBall.id,
          flyingDiscId: flyingDisc.id,
        });
      }
    });
  });

  return objectsDestroyed;
};
