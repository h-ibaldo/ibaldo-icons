import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightDownLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightDownLeftCircle: ForwardRefExoticComponent<ArrowUpRightDownLeftCircleProps & RefAttributes<Svg>>;

export default ArrowUpRightDownLeftCircle;
export { ArrowUpRightDownLeftCircle };
