import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftCircleJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftCircleJoined: ForwardRefExoticComponent<ArrowLeftCircleJoinedProps & RefAttributes<Svg>>;

export default ArrowLeftCircleJoined;
export { ArrowLeftCircleJoined };
