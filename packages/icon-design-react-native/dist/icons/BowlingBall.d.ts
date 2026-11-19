import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BowlingBallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BowlingBall: ForwardRefExoticComponent<BowlingBallProps & RefAttributes<Svg>>;

export default BowlingBall;
export { BowlingBall };
