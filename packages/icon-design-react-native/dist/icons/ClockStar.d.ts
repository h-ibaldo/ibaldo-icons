import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockStarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockStar: ForwardRefExoticComponent<ClockStarProps & RefAttributes<Svg>>;

export default ClockStar;
export { ClockStar };
