import type { DefineComponent } from 'vue';

export interface BowlingBallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BowlingBall: DefineComponent<BowlingBallProps>;

export default BowlingBall;
export { BowlingBall };
