import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightCircle: ForwardRefExoticComponent<ArrowUpRightCircleProps & RefAttributes<Svg>>;

export default ArrowUpRightCircle;
export { ArrowUpRightCircle };
