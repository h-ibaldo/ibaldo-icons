import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleJoined: ForwardRefExoticComponent<ArrowDownCircleJoinedProps & RefAttributes<Svg>>;

export default ArrowDownCircleJoined;
export { ArrowDownCircleJoined };
