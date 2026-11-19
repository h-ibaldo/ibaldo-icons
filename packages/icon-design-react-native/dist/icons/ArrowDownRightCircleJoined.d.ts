import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightCircleJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightCircleJoined: ForwardRefExoticComponent<ArrowDownRightCircleJoinedProps & RefAttributes<Svg>>;

export default ArrowDownRightCircleJoined;
export { ArrowDownRightCircleJoined };
