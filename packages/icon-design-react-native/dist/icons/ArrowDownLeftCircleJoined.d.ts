import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftCircleJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftCircleJoined: ForwardRefExoticComponent<ArrowDownLeftCircleJoinedProps & RefAttributes<Svg>>;

export default ArrowDownLeftCircleJoined;
export { ArrowDownLeftCircleJoined };
