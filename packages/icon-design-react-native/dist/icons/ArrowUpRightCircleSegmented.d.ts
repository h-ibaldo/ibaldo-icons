import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightCircleSegmented: ForwardRefExoticComponent<ArrowUpRightCircleSegmentedProps & RefAttributes<Svg>>;

export default ArrowUpRightCircleSegmented;
export { ArrowUpRightCircleSegmented };
