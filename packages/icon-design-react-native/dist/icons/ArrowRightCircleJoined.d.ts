import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightCircleJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightCircleJoined: ForwardRefExoticComponent<ArrowRightCircleJoinedProps & RefAttributes<Svg>>;

export default ArrowRightCircleJoined;
export { ArrowRightCircleJoined };
