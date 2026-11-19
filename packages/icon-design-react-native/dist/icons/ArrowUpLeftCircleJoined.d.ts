import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftCircleJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftCircleJoined: ForwardRefExoticComponent<ArrowUpLeftCircleJoinedProps & RefAttributes<Svg>>;

export default ArrowUpLeftCircleJoined;
export { ArrowUpLeftCircleJoined };
